import { numberWithCommas } from "@/hooks/numberWithCommas";
import { PlusIcon } from "lucide-react";

interface BalanceCardProps {
  balance: number;
  addedCards: Record<string, { name: string; img: string }>;
}

export const BalanceCard = ({ balance, addedCards }: BalanceCardProps) => {
  return (
    <div className="h-64 bg-gradient-to-r from-accent to-pink-400   text-white font-bold rounded-xl p-8  flex justify-between items-center ">
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
        href="/card"
        className="h-full border-2  border-white border-dotted rounded-3xl flex items-center justify-center p-1 hover:bg-purple-600"
      >
        <PlusIcon className="size-8" />
      </a>
    </div>
  );
};
