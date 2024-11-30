"use client";
import { Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { TopNav } from "../../../_components/TopNav";

interface RequestComponentProps {
  companyName: string;
  companyImage: string;
  loanDuration: string;
  availableCredit: string;
  discount: string;
}

const RequestComponent: React.FC<RequestComponentProps> = ({
  companyName,
  companyImage,
  loanDuration,
  availableCredit,
  discount,
}) => {
  return (
    <div className="flex flex-col gap-8 bg-gray-100 p-4 rounded-lg">
      <div className="flex items-center gap-4">
        <img src={companyImage} alt={companyName} className="w-8 h-8 object-cover rounded-full" />
        <h2 className="text-sm">{companyName}</h2>
        <h2 className="text-sm h-fit p-1 px-2 bg-primary text-white rounded-xl">{loanDuration}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-xs">Asking For</h3>
          <h2 className="font-bold">{availableCredit}</h2>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xs">Score</h3>
          <h2 className="font-bold">{discount}</h2>
        </div>
        <div className="bg-black text-background py-2 px-6 rounded-xl text-sm cursor-pointer">Accept</div>
      </div>
    </div>
  );
};

const Page = () => {
  const [activeTab, setActiveTab] = useState(1); // 1 for Tab 1, 2 for Tab 2
  const [loanData1, setLoanData1] = useState([]);
  useEffect(() => {
    // Fetch Microvendors data
    fetch(`http://127.0.0.1:5000/api/get-requests`)
      .then((res) => res.json())
      .then((data) => {
        setLoanData1(data);
      })
      .catch((err) => console.error("Failed to fetch Microvendors:", err));
  }, []);

  return (
    <div className="flex flex-col pb-12 bg-accent">
      <div className="flex flex-col gap-4 ">
        <div className=" p-6">
          <TopNav mode="dark" isBackBtn={true} />
        </div>
        <div className="bg-background p-6 pt-12 rounded-t-3xl space-y-6 h-screen">
          <div className="space-y-6">
            <h2 className="font-bold text-xl">Requests</h2>
            <div className="flex gap-4">
              <div className="flex justify-center items-center py-2 bg-background rounded-full border-2 border-black/10  w-full">
                <Filter className="h-full" />
              </div>
              <div className="flex justify-center items-center py-2 px-4 bg-background rounded-full border-2 border-black/10 ">
                <Search className="h-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            {loanData1
              .slice()
              .reverse()
              .map((loan, index) => (
                <RequestComponent
                  key={index}
                  companyName={loan.companyName}
                  companyImage={loan.companyImage}
                  loanDuration={loan.loanDuration}
                  availableCredit={loan.availableCredit}
                  discount={loan.discount}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
