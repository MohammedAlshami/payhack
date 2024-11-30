"use client";
import { BalanceCard } from "@/lib/components/ui/BalanceCardProps";
import { MoneyFlow } from "@/lib/components/ui/MoneyFlow";
import { TransactionCard } from "@/lib/components/ui/TransactionCard";
import { ArrowRight, ArrowUp, PlusIcon, Search } from "lucide-react";
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
      className="bg-background rounded-2xl border-2 border-black/8 flex flex-col items-center justify-center py-2 px-8 gap-4 h-36"
      onClick={() => router.push(page)}
    >
      <div className="text-white bg-primary flex justify-between items-center stroke-4 w-14 h-14 p-2 rounded-lg">
        {icon}
      </div>
      <h2 className="font-medium text-md text-center whitespace-nowrap">{title}</h2>
    </div>
  );
};

interface ServicesComponentProps {
  services: ServiceCardProbs[];
}

const ServicesComponent = ({ services }: ServicesComponentProps) => {
  return (
    <div className="flex gap-4 justify-between items-center overflow-x-scroll scrollbar-hide">
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
    { title: "P2P Loans", icon: <PlusIcon className="w-full h-full" />, page: "/p2p" },
    { title: "Virtual Cards", icon: <Search className="w-full h-full" />, page: "/card" },
    { title: "POS", icon: <ArrowUp className="w-full h-full" />, page: "/pos" },
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
