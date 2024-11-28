import { ArrowDown, ArrowRight, ArrowUp, MenuIcon, PlusIcon, Search } from "lucide-react";

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


interface BalanceCardProps {
  balance: number;
  addedCards: Record<string, { name: string; img: string }>;
}

const BalanceCard = ({ balance, addedCards }: BalanceCardProps) => {
  return (
    <div className="h-64 bg-neutral-900 text-white font-bold rounded-xl p-8  flex justify-between items-center ">
      <div className="h-full flex flex-col justify-between">
        <h2>Balance</h2>
        <h2 className="text-3xl">RM {numberWithCommas(balance)}</h2>
        <div className="flex gap-4">
          {Object.values(addedCards).map((addedCard, index) => (
            <img
              key={index}
              src={addedCard.img}
              alt={addedCard.name}
              className="h-8 w-12 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
      <a
        href="/cards"
        className="h-full border-2  border-white border-dotted rounded-3xl flex items-center justify-center p-1 hover:bg-purple-600"
      >
        <PlusIcon className="size-8" />
      </a>
    </div>
  );
};

interface MoneyFlowProps {
  balanceIn: number;
  balanceOut: number;
}
const MoneyFlow = ({ balanceIn, balanceOut }: MoneyFlowProps) => {
  const moneyFlowData = [
    { label: "Money In", amount: balanceIn, color: "text-green-300" },
    { label: "Money Out", amount: balanceOut, color: "text-red-300" },
  ];

  return (
    <div className=" w-full flex gap-4 text-white justify-center">
      {moneyFlowData.map((flow, index) => (
        <div
          key={index}
          className="w-full bg-accent px-4 py-3 flex justify-center items-center gap-4 rounded-lg"
        >
          {"Money In" === flow.label ? (
            <ArrowDown className={`size-8 ${flow.color}`} />
          ) : (
            <ArrowUp className={`size-8 ${flow.color}`} />
          )}
          <div>
            <h2 className="text-sm">{flow.label}</h2>
            <h2 className="text-xl font-bold">RM {numberWithCommas(flow.amount)}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

interface TransactionCardProps {
  img: string;
  title: string;
  details: string;
  type: string;
  amount: number;
}

const TransactionCard = ({ img, title, details, type, amount }: TransactionCardProps) => {
  return (
    <div className="flex justify-between items-center shadow-lg rounded-2xl h-24 px-6 py-4  border-2 border-black/8">
      <div className="flex gap-4 items-center">
        <img
          src={img}
          alt=""
          className="size-16 rounded-full object-cover  border-2 border-black/20"
        />
        <div className="flex flex-col ">
          <h2 className="font-medium text-lg">{title}</h2>
          <h2 className="text-sm text-gray-500">{details}</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center  items-center font-bold">
        <h2 className={`font-bold text-lg ${type == "IN" ? "text-green-600" : "text-red-600"}`}>
          {type}
        </h2>
        <h2 className="text-sm">{amount}</h2>
      </div>
    </div>
  );
};

interface ServiceCardProbs {
  title: string;
  icon: JSX.Element;
}

const ServiceCard = ({ title, icon }: ServiceCardProbs) => {
  return (
    <div className="bg-background rounded-2xl  border-2 border-black/8 flex flex-col items-center justify-center py-2 px-8 gap-4 h-36">
      <div className="text-white bg-primary flex justify-between items-center  stroke-4 w-14 h-14 p-2 rounded-lg">
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
        <ServiceCard title={service.title} icon={service.icon} key={index} />
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
    { title: "P2P Loans", icon: <PlusIcon className="w-full h-full" /> },
    { title: "Virtual Cards", icon: <Search className="w-full h-full" /> },
    { title: "POS", icon: <ArrowUp className="w-full h-full" /> },
  ];
  return (
    <div className="flex flex-col pb-12">

      {/* Page Content */}
      <div className="flex flex-col gap-8 p-6">
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
