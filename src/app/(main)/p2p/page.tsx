"use client";
import { useRouter } from "next/navigation"; // Usage: App router
import { useEffect, useState } from "react";
import { TopNav } from "../_components/TopNav";

interface LoanComponentProps {
  companyName: string;
  companyImage: string;
  loanDuration: string;
  availableCredit: string;
  discount: string;
  page: string;
  type: string;
}

const LoanComponent: React.FC<LoanComponentProps> = ({
  companyName,
  companyImage,
  loanDuration,
  availableCredit,
  discount,
  page,
  type
}) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-8 bg-gray-100 p-4 rounded-lg cursor-pointer"
      onClick={() => router.push(page)}
    >
      <div className="flex items-center gap-4">
        <img src={companyImage} alt={companyName} className="w-8 h-8 object-cover rounded-full" />
        <h2 className="text-sm">{companyName}</h2>
        <h2 className="text-sm h-fit p-1 px-2 bg-primary text-white rounded-xl">{loanDuration}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-xs">{type == "bank"? "Available Credit": "Asking For" }</h3>
          <h2 className="font-bold">{availableCredit}</h2>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xs">{type == "bank"? "Interest": "Benefits" }</h3>
          <h2 className="font-bold">{discount}</h2>
        </div>
        <div className="bg-black text-background py-2 px-6 rounded-xl text-sm x">
          Apply
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [activeTab, setActiveTab] = useState(1); // 1 for Tab 1, 2 for Tab 2
  const [loanData1, setLoanData1] = useState([]);
  const [loanData2, setLoanData2] = useState([]);

  useEffect(() => {
    // Fetch Microvendors data
    fetch("http://127.0.0.1:5000/api/get-all-p2p")
      .then((res) => res.json())
      .then((data) => {
        setLoanData1(data);
        console.log(loanData1);
      })
      .catch((err) => console.error("Failed to fetch Microvendors:", err));

    // Fetch Microloans data
    fetch("http://127.0.0.1:5000/api/get-all-banks")
      .then((res) => res.json())
      .then((data) => {
        setLoanData2(data);
        console.log(loanData2);
      })
      .catch((err) => console.error("Failed to fetch Microloans:", err));
  }, []);

  return (
    <div className="flex flex-col pb-12">
      <div className="flex flex-col gap-4 p-6">
        <TopNav mode="light" isBackBtn={true} />
        <div className="flex justify-between">
          <h2 className="font-bold">Deals</h2>
          <a href="/p2p/create" className="bg-black text-white p-2 rounded-lg px-6">Create Deal +</a>
        </div>
        <div className="flex gap-4">
          <div
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 cursor-pointer rounded ${activeTab === 1 ? "text-accent border-b-4 border-accent" : "text-black/20"}`}
          >
            Microvendors
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className={`px-4 py-2 cursor-pointer rounded ${activeTab === 2 ? " text-accent border-b-4 border-accent" : " text-black/20 border-b-4 border-black/20"}`}
          >
            Microloans
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 1 && (
          <div className="flex flex-col gap-4">
            {loanData1.map((loan, index) => (
              <LoanComponent
                key={index}
                companyName={loan.companyName}
                companyImage={loan.companyLogo}
                loanDuration={loan.loanDuration}
                availableCredit={loan.availableCredit}
                discount={loan.discount}
                page={loan.page}
                type="vendor"
              />
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div className="flex flex-col gap-4">
            {loanData2.map((loan, index) => (
              <LoanComponent
                key={index}
                companyName={loan.companyName}
                companyImage={loan.companyImage}
                loanDuration={loan.loanDuration}
                availableCredit={loan.availableCredit}
                discount={loan.discount}
                page={loan.page}
                type="bank"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
