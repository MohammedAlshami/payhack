"use client";
import { ArrowRight, Percent } from "lucide-react";
import { useRouter } from "next/navigation"; // Usage: App router
import { ReactElement } from "react";
import { TopNav } from "../../../_components/TopNav";

interface ProfileProbs {
  companyName: string;
  loanTyp: string;
  date: string;
  companyLogo: string;
}
const Profile = ({ companyLogo, companyName, loanTyp, date }: ProfileProbs) => {
  return (
    <div className=" space-y-8">
      {" "}
      <div className="w-full flex  justify-between items-center text-white h-fit px-6 sm:justify-center sm:gap-24 sm:px-0">
        <img src={companyLogo} alt="" className="rounded-full h-28 w-28 border-4 border-white/80" />
        <div className="h-full flex flex-col justify-between gap-4">
          <h2 className="font-bold text-xl">{companyName}</h2>
          <div className="grid grid-cols-2 w-fit gap-4">
            <h2 className="text-sm h-fit p-1 px-2 bg-background text-primary rounded-xl">
              3 - 6 months
            </h2>
            <h2 className="text-sm h-fit p-1 px-2 bg-background text-primary rounded-xl">
              3 - 6 months
            </h2>

            <h2 className="text-sm h-fit p-1 px-2 bg-background text-primary rounded-xl">
              3 - 6 months
            </h2>
          </div>
        </div>
      </div>
      <p className="w-full px-6 text-background">
        We manage software solutions with agility and precision, ensuring seamless operations and
        innovative outcomes.
      </p>
    </div>
  );
};

interface LoanDetailComponentProbs {
  icon: ReactElement;
  title: string;
  content: string;
}
const LoanDetailComponent = ({ icon, title, content }: LoanDetailComponentProbs) => {
  return (
    <div className="flex items-center">
      <div className="w-full flex gap-4">
        {icon}
        <div>
          <h2>{title}</h2>
          <h2 className="font-bold">{content}</h2>
        </div>
      </div>
      <ArrowRight />
    </div>
  );
};
const DebtInfo = () => {
  const router = useRouter();

  const loanDetails = [
    {
      icon: <Percent className="w-12 h-12 bg-accent text-white p-2 rounded-lg" />,
      title: "Interest Rate: ",
      content: "% 10",
    },
    {
      icon: <Percent className="w-12 h-12 bg-accent text-white p-2 rounded-lg" />,
      title: "Interest Rate: ",
      content: "% 10",
    },
    {
      icon: <Percent className="w-12 h-12 bg-accent text-white p-2 rounded-lg" />,
      title: "Interest Rate: ",
      content: "% 10",
    },
  ];
  const requirementsDetails = [
    {
      icon: <Percent className="w-12 h-12 bg-accent text-white p-2 rounded-lg" />,
      title: "Interest Rate: ",
      content: "% 10",
    },
    {
      icon: <Percent className="w-12 h-12 bg-accent text-white p-2 rounded-lg" />,
      title: "Interest Rate: ",
      content: "% 10",
    },
    {
      icon: <Percent className="w-12 h-12 bg-accent text-white p-2 rounded-lg" />,
      title: "Interest Rate: ",
      content: "% 10",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-6 px-4 sm:px-18 py-8 bg-background rounded-t-3xl pb-24">
      <div className="flex flex-col gap-8 ">
        <h2 className="text-xl font-bold">Loan Details</h2>
        <div className="space-y-4">
          {loanDetails.map((loan, index) => (
            <LoanDetailComponent icon={loan.icon} title={loan.title} content={loan.content} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <h2 className="text-xl font-bold">Requirements</h2>
        <div className="space-y-4">
          {requirementsDetails.map((requirement, index) => (
            <LoanDetailComponent
              icon={requirement.icon}
              title={requirement.title}
              content={requirement.content}
            />
          ))}
        </div>
      </div>
      <div>
        <button
          className="w-full bg-black p-3 rounded-md text-white"
          onClick={() => router.push('https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/loans/personal/personal_loan.page?')}
        >
          Check Out Loan
        </button>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="flex flex-col gap-12 w-full bg-accent h-screen ">
      <TopNav mode="dark" isBackBtn={true} />
      <Profile
        companyLogo="https://yt3.googleusercontent.com/ytc/AIdro_lEIiSVnHtVy5xmLZcZ05qeZP9jzEi4Ov-TI9AoiCWG18A=s900-c-k-c0x00ffffff-no-rj"
        companyName="BSN Microplus"
        loanTyp="Loan"
        date="12/12/2021"
      />
      <DebtInfo />
    </div>
  );
};

export default page;
