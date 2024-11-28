interface TransactionCardProps {
  img: string;
  title: string;
  details: string;
  type: string;
  amount: number;
}

export const TransactionCard = ({ img, title, details, type, amount }: TransactionCardProps) => {
  return (
    <div className="bg-background flex justify-between items-center shadow-lg rounded-2xl h-24 px-6 py-4  border-2 border-black/8">
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
