"use client";
import { useRouter } from "next/navigation"; // Usage: App router
import { useState } from "react";
import { TopNav } from "../_components/TopNav";

interface LoanComponentProps {
  companyName: string;
  companyImage: string;
  loanDuration: string;
  availableCredit: string;
  discount: string;
  page: string;
}

const LoanComponent: React.FC<LoanComponentProps> = ({
  companyName,
  companyImage,
  loanDuration,
  availableCredit,
  discount,
  page,
}) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-8 bg-gray-100 p-4 rounded-lg"
      onClick={() => router.push(page)}
    >
      <div className="flex items-center gap-4">
        <img src={companyImage} alt={companyName} className="w-8 h-8 object-cover rounded-full" />
        <h2 className="text-sm">{companyName}</h2>
        <h2 className="text-sm h-fit p-1 px-2 bg-primary text-white rounded-xl">{loanDuration}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-xs">Available Credit</h3>
          <h2 className="font-bold">{availableCredit}</h2>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xs">Looking For</h3>
          <h2 className="font-bold">{discount}</h2>
        </div>
        <div className="bg-black text-background py-2 px-6 rounded-xl text-sm">Apply</div>
      </div>
    </div>
  );
};

const Page = () => {
  const [activeTab, setActiveTab] = useState(1); // 1 for Tab 1, 2 for Tab 2

  const loanData1 = [
    {
      companyName: "Kampung Food LTD",
      companyImage:
        "https://img.freepik.com/free-photo/front-view-man-with-beard-posing_23-2149438512.jpg",
      loanDuration: "3 - 5 months",
      availableCredit: "RM 10,000",
      discount: "4% discount",
      page: "/p2p/lender",
    },
    {
      companyName: "Tech Innovators Inc.",
      companyImage:
        "https://img.freepik.com/free-photo/portrait-smiling-young-man_23-2148724568.jpg",
      loanDuration: "6 - 12 months",
      availableCredit: "RM 50,000",
      discount: "5% discount",
      page: "/p2p/lender",
    },
    {
      companyName: "Green Energy Solutions",
      companyImage: "https://img.freepik.com/free-photo/happy-man_23-2148723456.jpg",
      loanDuration: "1 - 2 years",
      availableCredit: "RM 100,000",
      discount: "3% discount",
      page: "/p2p/lender",
    },
    {
      companyName: "Green Energy Solutions",
      companyImage: "https://img.freepik.com/free-photo/happy-man_23-2148723456.jpg",
      loanDuration: "1 - 2 years",
      availableCredit: "RM 100,000",
      discount: "3% discount",
      page: "/p2p/lender",
    },
  ];

  const loanData2 = [
    {
      companyName: "Bank of America",
      companyImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHjZQZYAXSe8WwbRyZj2IIXE3xg0PucntmQ&s",
      loanDuration: "3 - 5 months",
      availableCredit: "USD 10,000",
      discount: "4% discount",
      page: "/p2p/lender",
    },
    {
      companyName: "Chase Bank",
      companyImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHjZQZYAXSe8WwbRyZj2IIXE3xg0PucntmQ&s",
      loanDuration: "6 - 12 months",
      availableCredit: "USD 50,000",
      discount: "5% discount",
      page: "/p2p/lender",
    },
    {
      companyName: "Wells Fargo",
      companyImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHjZQZYAXSe8WwbRyZj2IIXE3xg0PucntmQ&s",
      loanDuration: "1 - 2 years",
      availableCredit: "USD 100,000",
      discount: "3% discount",
      page: "/p2p/lender",
    },
    {
      companyName: "Citibank",
      companyImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHjZQZYAXSe8WwbRyZj2IIXE3xg0PucntmQ&s",
      loanDuration: "1 - 2 years",
      availableCredit: "USD 100,000",
      discount: "3% discount",
      page: "/p2p/lender",
    },
  ];

  return (
    <div className="flex flex-col pb-12">
      <div className="flex flex-col gap-4 p-6">
        <TopNav mode="light" isBackBtn={true} />
        <h2 className="font-bold">Deals</h2>
        <div className="flex gap-4">
          <div
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 rounded ${activeTab === 1 ? "text-accent border-b-4 border-accent" : "text-black/20"}`}
          >
            Microvendors
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className={`px-4 py-2 rounded ${activeTab === 2 ? " text-accent border-b-4 border-accent" : " text-black/20 border-b-4 border-black/20"}`}
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
                companyImage={loan.companyImage}
                loanDuration={loan.loanDuration}
                availableCredit={loan.availableCredit}
                discount={loan.discount}
                page={loan.page}
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
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
