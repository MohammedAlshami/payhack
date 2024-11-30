"use client";
import { BalanceCard } from "@/lib/components/ui/BalanceCardProps";
import { MoneyFlow } from "@/lib/components/ui/MoneyFlow";
import { TransactionCard } from "@/lib/components/ui/TransactionCard";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // Usage: App router
import { TopNav } from "../_components/TopNav";

interface ServiceCardProbs {
  title: string;
  icon: JSX.Element;
  page: string;
}

const ServiceCard = ({ title, icon, page }: ServiceCardProbs) => {
  const router = useRouter();
  return (
    <div
      className="bg-background rounded-2xl border-2 border-black/8 flex flex-col items-center justify-center py-2 px-8 gap-4 h-36 w-34 cursor-pointer"
      onClick={() => router.push(page)}
    >
      <div className="text-white bg-primary  flex justify-between items-center stroke-4 w-14 h-14 p-2 rounded-lg">
        {icon}
      </div>
      <h2 className="font-medium text-lg text-center whitespace-nowrap">{title}</h2>
    </div>
  );
};

interface ServicesComponentProps {
  services: ServiceCardProbs[];
}

const ServicesComponent = ({ services }: ServicesComponentProps) => {
  return (
    <div className="flex gap-4 justify-between items-center overflow-x-scroll scrollbar-hide ">
      {services.map((service, index) => (
        <ServiceCard page={service.page} title={service.title} icon={service.icon} key={index} />
      ))}
    </div>
  );
};
const page = () => {
  const addedCards = {
    card1: {
      name: "Maybank",
      img: "https://www.epicicons.com/imager/worklarge/3264/1952.-May-Bank.-SQ-1700-pix_618e8ba65d35e2ffa1973ad23ed45aba.jpg",
    },
    card2: {
      name: "RHB",
      img: "https://www.mywakaf.com.my/wp-content/uploads/2019/04/RHB-Islamic-Logo-400x162.jpg",
    },
    card3: {
      name: "Public Bank",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7D2G59wFdQ0fWan1rBSrL9i_9jTsY6XV8g&s",
    },
  };
  const servicesList = [
    {
      title: "P2P Loans",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M7 3a4 4 0 0 0-4 4v2h2V7a2 2 0 0 1 2-2h3V3zm10 18a4 4 0 0 0 4-4v-2h-2v2a2 2 0 0 1-2 2h-3v2zM7 16a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10-7a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4M3 21a4 4 0 0 1 8 0z"
          ></path>
        </svg>
      ),
      page: "/p2p",
    },
    {
      title: "Debt Management",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m21.47 4.35l-1.34-.56v9.03l2.43-5.86c.41-1.02-.06-2.19-1.09-2.61m-19.5 3.7L6.93 20a2.01 2.01 0 0 0 1.81 1.26c.26 0 .53-.05.79-.16l7.37-3.05c.75-.31 1.21-1.05 1.23-1.79c.01-.26-.04-.55-.13-.81L13 3.5a1.95 1.95 0 0 0-1.81-1.25c-.26 0-.52.06-.77.15L3.06 5.45a1.994 1.994 0 0 0-1.09 2.6m16.15-3.8a2 2 0 0 0-2-2h-1.45l3.45 8.34"
          ></path>
        </svg>
      ),
      page: "/debt/loans",
    },
    {
      title: "Cards",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 12 12">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.095 2.903a.53.53 0 0 1 .472-.278l1.05.016a.53.53 0 0 1 .462.292l.42.844l.742-.063a.53.53 0 0 1 .486.239l.53.822a.525.525 0 0 1-.015.59l-.39.546l.415.548c.129.17.142.402.032.586l-.5.838a.53.53 0 0 1-.482.255l-.785-.048l-.483.989a.53.53 0 0 1-.472.294H5.495a.53.53 0 0 1-.471-.294L4.57 8.15l-.84.076a.53.53 0 0 1-.493-.246l-.531-.855a.525.525 0 0 1 .03-.597l.48-.625l-.386-.539a.525.525 0 0 1-.014-.59l.53-.822a.53.53 0 0 1 .485-.239l.797.068zm.598.474l-.472.888a.53.53 0 0 1-.508.277l-.81-.069l-.374.58l.394.55a.525.525 0 0 1-.01.625l-.488.634l.376.606l.856-.078a.525.525 0 0 1 .52.292l.459.941h.8l.488-.997a.53.53 0 0 1 .503-.293l.798.048l.352-.59l-.424-.56a.525.525 0 0 1-.008-.622l.399-.556l-.374-.58l-.76.064a.525.525 0 0 1-.515-.29l-.427-.858z"
            clipRule="evenodd"
          ></path>
          <path
            fill="currentColor"
            d="M10.282 7.4a4.5 4.5 0 0 1-8.666-.376l.851-.168L.847 5.18l-.848 2.167l.897-.176a5.25 5.25 0 0 0 10.125.461zm.836-2.54A5.25 5.25 0 0 0 .993 4.4l.713.232a4.5 4.5 0 0 1 8.666.375l-.851.169l1.62 1.672l.858-2.164z"
          ></path>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6 5.625a.375.375 0 1 0 0 .75a.375.375 0 0 0 0-.75M4.875 6a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      page: "/card",
    },
  ];
  return (
    <div className="flex flex-col pb-12">
      {/* Page Content */}
      <div className="flex flex-col gap-8 p-6">
        <TopNav mode="light" isBackBtn={false} />
        <BalanceCard balance={10200} addedCards={addedCards} />
        <MoneyFlow balanceIn={5000} balanceOut={2000} />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl">Transactions</h2>
            <ArrowRight className="size-8 text-purple-600" />
          </div>
          <TransactionCard
            img="https://www.mywakaf.com.my/wp-content/uploads/2019/04/RHB-Islamic-Logo-400x162.jpg"
            title="TNB"
            details="2 April 2023 - utilities"
            type="OUT"
            amount={17}
          />
          <TransactionCard
            img="https://www.mywakaf.com.my/wp-content/uploads/2019/04/RHB-Islamic-Logo-400x162.jpg"
            title="TNB"
            details="2 April 2023 - utilities"
            type="OUT"
            amount={17}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl">Services</h2>

          <ServicesComponent services={servicesList} />
        </div>
      </div>
    </div>
  );
};

export default page;
