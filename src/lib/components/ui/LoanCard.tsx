import { CalendarIcon } from "lucide-react";

interface LoanCardProps {
  img: string;
  title: string;
  details: string;
  amount: number;
}

export const LoanCard = ({ img, title, details, amount }: LoanCardProps) => {
  return (
    <div className="bg-background flex justify-between items-center shadow-lg rounded-2xl h-24 px-6 py-4  border-2 border-black/8">
      <div className="flex gap-4 items-center">
        <img
          src={img}
          alt=""
          className="size-16 rounded-full object-cover  border-2 border-black/20"
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-lg">{title}</h2>
          <div className="flex gap-2 items-center">
            <CalendarIcon className="text-gray-500" />
            <h2 className="text-sm text-gray-500">{details}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center  items-center ">
        <h2 className={`text-sm text-gray-600 `}>Balance</h2>
        <h2 className="text-xl font-bold">{amount}</h2>
      </div>
    </div>
  );
};
