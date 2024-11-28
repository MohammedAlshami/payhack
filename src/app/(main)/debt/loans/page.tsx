"use client";
import { LoanCard } from "@/lib/components/ui/LoanCard";
import { ArrowRight } from "lucide-react";
import { AreaChartHero } from "../../../../lib/components/charts/graph";
import { TopNav } from "../../_components/TopNav";

interface ProfileProbs {
  companyName: string;
  loanTyp: string;
  date: string;
  companyLogo: string;
}
const Profile = ({ companyLogo, companyName, loanTyp, date }: ProfileProbs) => {
  return (
    <div className="w-full flex  justify-between items-center text-white h-20 px-6 sm:justify-center sm:gap-24 sm:px-0">
      <img src={companyLogo} alt="" className="rounded-full h-28 w-28 border-4 border-white/80" />
      <div className="h-full flex flex-col justify-between">
        <h2 className="font-bold text-xl">{companyName}</h2>
        <div className="flex items-center w-fit gap-4">
          <h2>
            Type: <span className="font-bold"> {loanTyp}</span>
          </h2>
          <h2>
            Taken UP: <span className="font-bold">{date}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

const DebtGraph = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h2 className="text-xs text-gray-600">Liability</h2>
      <h2 className="font-bold text-2xl">RM 200</h2>
      <h2 className="text-xs text-gray-600">
        Last 30 Days <span className="text-red-600">-6%</span>
      </h2>
      <AreaChartHero />
    </div>
  );
};

interface GreetingsProps {
  userName: string;
}

const Greetings = ({ userName }: GreetingsProps) => {
  return (
    <div className="px-6 space-y-3">
      <h2 className="text-lg text-gray-600">
        Hello, <br />
        <span className="text-secondary font-bold text-2xl">{userName}! 👋</span>
      </h2>
      <p className="text-sm text-gray-600 w-8/12">
        Your current financial obligations are shown below{" "}
      </p>
    </div>
  );
};

const DebtInfo = () => {
  return (
    <div className="w-full h-full flex flex-col px-4 sm:px-12 py-8 bg-accent rounded-t-3xl">
      <div className="flex flex-col gap-8 ">
        <a href="/debt/list" className="flex justify-between items-center">
          <h3 className="text-white font-medium text-xl">Loans</h3>
          <ArrowRight className="text-white" />
        </a>
        <div className="flex flex-col gap-3">
          <LoanCard
            img="https://www.mywakaf.com.my/wp-content/uploads/2019/04/RHB-Islamic-Logo-400x162.jpg"
            title="TNB"
            details="02/12/2024"
            amount={17}
          />
          <LoanCard
            img="https://www.mywakaf.com.my/wp-content/uploads/2019/04/RHB-Islamic-Logo-400x162.jpg"
            title="TNB"
            details="02/12/2024"
            amount={17}
          />
          <LoanCard
            img="https://www.mywakaf.com.my/wp-content/uploads/2019/04/RHB-Islamic-Logo-400x162.jpg"
            title="TNB"
            details="02/12/2024"
            amount={17}
          />
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="py-8 flex flex-col gap-2 w-full bg-background h-screen ">
      <TopNav mode="light" isBackBtn={true} />
      <Greetings userName="Shami" />
      <DebtGraph />

      <DebtInfo />
    </div>
  );
};

export default page;
