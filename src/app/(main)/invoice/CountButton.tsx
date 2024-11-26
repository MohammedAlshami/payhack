"use client";
import { MinusIcon, PlusIcon } from "lucide-react";
import { IProduct } from "../_components/productData";

function CountButton({
  userProductStore,
  index,
  setUserProductStore,
}: {
  userProductStore: IProduct[];
  index: number;
  setUserProductStore: React.Dispatch<React.SetStateAction<IProduct[]>>;
}) {
  const handleMinus = (index: number) => {
    setUserProductStore((prevStore: IProduct[]) => {
      // Create a new array with updated count
      const newStore = [...prevStore];
      newStore[index] = {
        ...newStore[index],
        count: newStore[index].count - 1,
      };
      return newStore;
    });
  };
  const handlePlus = (index: number) => {
    setUserProductStore((prevStore) => {
      // Create a new array with updated count
      const newStore = [...prevStore];
      newStore[index] = {
        ...newStore[index],
        count: newStore[index].count + 1,
      };
      return newStore;
    });
  };
  return (
    <div className="flex items-center bg-gray-300 gap-2 px-2 py-1 w-fit rounded-sm">
      <button onClick={() => handleMinus(index)} disabled={userProductStore[index].count === 0}>
        <MinusIcon width={15} />
      </button>

      <span className="text-xs">{userProductStore[index].count}</span>
      <PlusIcon width={15} onClick={() => handlePlus(index)} />
    </div>
  );
}

export default CountButton;
