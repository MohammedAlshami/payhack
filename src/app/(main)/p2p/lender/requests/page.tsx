"use client";
import { Filter, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TopNav } from "../../../_components/TopNav";

// Simple Modal Component
const AcceptModal = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleOkClick = () => {
    onClose();
    router.push("/home");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center w-72">
        <h2 className="text-xl font-bold mb-4">Loan Accepted</h2>
        <p className="mb-6">You have accepted the loan, we'll be reaching out to you shortly</p>
        <button onClick={handleOkClick} className="bg-black text-white px-4 py-2 rounded-lg w-full">
          OK
        </button>
      </div>
    </div>
  );
};

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAccept = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-8 bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center gap-4">
          <img src={companyImage} alt={companyName} className="w-8 h-8 object-cover rounded-full" />
          <h2 className="text-sm">{companyName}</h2>
          <h2 className="text-sm h-fit p-1 px-2 bg-primary text-white rounded-xl">
            {loanDuration}
          </h2>
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
          <div
            onClick={handleAccept}
            className="bg-black text-background py-2 px-6 rounded-xl text-sm cursor-pointer"
          >
            Accept
          </div>
        </div>
      </div>

      <AcceptModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

const Page = () => {
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
              <div className="flex justify-center items-center py-2 bg-background rounded-full border-2 border-black/10 w-full">
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
