"use client";
import { TransactionCard } from "@/lib/components/ui/TransactionCard";
import { ArrowRight } from "lucide-react";
import { TopNav } from "../_components/TopNav";

import CardsCarousel from "@/lib/components/ui/CardsCarousel";
import { useState } from "react";
import Drawer from "@/lib/components/ui/Drawer";
const CardComponents = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col px-4 sm:px-12 py-8 bg-background rounded-t-3xl">
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <div className="flex flex-col gap-8">
        <div
          onClick={() => setIsDrawerOpen(true)}
          className="hover:cursor-pointer bg-gradient-to-r from-accent to-pink-400  w-full h-16 rounded-lg text-white flex justify-between px-4 items-center font-bold gap-4 "
        >
          <h2>Add Cards</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-6">
            <path
              fill="white"
              d="M4 12h16V8H4zm15 10v-3h-3v-2h3v-3h2v3h3v2h-3v3zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v6h-3q-2.075 0-3.537 1.463T14 17v3z"
            ></path>
          </svg>
        </div>
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
          />{" "}
          <TransactionCard
            img="https://www.mywakaf.com.my/wp-content/uploads/2019/04/RHB-Islamic-Logo-400x162.jpg"
            title="TNB"
            details="2 April 2023 - utilities"
            type="OUT"
            amount={17}
          />
        </div>
      </div>
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
  return (
    <div className="flex flex-col gap-8 w-full bg-accent h-screen">
      {/* Page Content */}
      <div className="flex flex-col gap-8 p-6">
        <TopNav mode="dark" isBackBtn={false} />

        <CardsCarousel />
      </div>
      <CardComponents />
    </div>
  );
};

export default page;
