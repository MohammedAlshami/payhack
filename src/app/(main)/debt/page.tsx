import { TopNav } from "../_components/TopNav";
import { AreaChartHero } from "./graph";
interface ProfileProbs {
  companyName: string;
  loanTyp: string;
  date: string;
  companyLogo: string;
}
const Profile = ({ companyLogo, companyName, loanTyp, date }: ProfileProbs) => {
  return (
    <div className="w-full flex  justify-between items-center text-white h-20 px-12 sm:justify-center sm:gap-24 sm:px-0">
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
      <div className="flex flex-col gap-2">
        <h2 className="text-xs text-gray-600">Liability</h2>
        <h2 className="font-bold text-2xl">RM 200</h2>
        <h2 className="text-xs text-gray-600">Last 30 Days {" "} <span className="text-red-600">-6%</span></h2>
        <AreaChartHero />
      </div>
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
