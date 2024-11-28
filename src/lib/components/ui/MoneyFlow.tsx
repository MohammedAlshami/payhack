import { numberWithCommas } from "@/hooks/numberWithCommas";
import { ArrowDown, ArrowUp } from "lucide-react";

interface MoneyFlowProps {
  balanceIn: number;
  balanceOut: number;
}
export const MoneyFlow = ({ balanceIn, balanceOut }: MoneyFlowProps) => {
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
