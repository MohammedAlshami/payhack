"use client";
import CurrentSettings from "@/lib/components/ui/CurrentSettings";
import { AreaChartHero } from "../../../lib/components/charts/graph";
import { TopNav } from "../_components/TopNav";
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

const DebtInfo = () => {
  return (
    <div className="w-full h-full flex flex-col px-4 sm:px-12 py-8 bg-background rounded-t-3xl">
      <div className="flex flex-col gap-8 divide-y-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-xs text-gray-600">Liability</h2>
          <h2 className="font-bold text-2xl">RM 200</h2>
          <h2 className="text-xs text-gray-600">
            Last 30 Days <span className="text-red-600">-6%</span>
          </h2>
          <AreaChartHero />
        </div>
        <PayoffProgress progress={10} total={10} remaining={10} />
        <CurrentSettings />
      </div>
    </div>
  );
};

const PayoffProgress = ({
  progress,
  total,
  remaining,
}: {
  progress: number;
  total: number;
  remaining: number;
}) => {
  return (
    <div className="w-full flex flex-col pt-4">
      <h2 className="text-md mb-4">Payoff Progress</h2>
      <div className="w-full flex justify-between items-center mb-2">
        <h2 className="text-lg md-medium">{progress}%</h2>
        <h2 className="text-md font-medium">RM {total}</h2>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-accent h-2 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <h2 className="text-sm text-gray-600 ">RM {remaining} Remaining</h2>
    </div>
  );
};

const page = () => {
  return (
    <div className="flex flex-col gap-12 w-full bg-accent h-screen">
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
