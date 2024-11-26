"use client";
import { Button } from "@/lib/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { IProduct, products } from "../_components/productData";
import AddProductModal from "./AddProductModal";
import CountButton from "./CountButton";
import payment2 from "/public/images/cod.png";
import payment from "/public/images/payment.png";

function Page() {
  const [userProductStore, setUserProductStore] = useState<IProduct[]>(products);
  const router = useRouter();
  const subtotal = userProductStore.reduce(
    (acc, product) => acc + product.count * product.price,
    0,
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  return (
    <main className="pb-20">
      <div className="w-[90vw] mx-auto mt-12 ">
        <h2 className="text-2xl font-bold text-primary">Invoice Creation</h2>
        <p>Fill the details below for invoice creation</p>
      </div>
      {userProductStore.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          {item.count > 0 && (
            <div className="flex gap-3 px-2 py-4 rounded-lg shadow-lg items-center">
              <Image src={item.img} alt={item.title} className=" w-[50px] h-[50px] rounded-full" />
              <section className="flex justify-center gap-[110px] items-center w-[full]">
                <div className="flex flex-col gap-2 w-[60px]">
                  <span className="font-bold">RM {item.price}</span>
                  <h5 className="font-semibold text-gray-400">{item.title}</h5>
                </div>
                <CountButton
                  userProductStore={userProductStore}
                  setUserProductStore={setUserProductStore}
                  index={index}
                />
              </section>
            </div>
          )}
        </div>
      ))}
      <AddProductModal
        userProductStore={userProductStore}
        setUserProductStore={setUserProductStore}
      />
      <div className="w-[90vw] mx-auto shadow-lg rounded-lg mt-12 py-4">
        <div className="flex justify-between px-2">
          <h5>Subtotal</h5>
          <span>RM {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between px-2">
          <h5>Tax 10%</h5>
          <span>RM {tax.toFixed(2)}</span>
        </div>
        <hr className="bprder-2 border-red-900 border-dotted my-8" />
        <div className="flex justify-between px-2">
          <h5 className="font-bold">Total</h5>
          <span className="font-bold">RM {total.toFixed(2)}</span>
        </div>
        <div className="w-3/4 mx-auto flex gap-3 items-center justify-center">
          <Image
            src={payment}
            alt="payment"
            className="hover:ring-1 hover:ring-purple-600 rounded-lg"
          />
          <Image
            src={payment2}
            alt="payment"
            className="hover:ring-1 hover:ring-purple-600 rounded-lg"
          />
        </div>
      </div>
      <div className="w-fit mx-auto mt-8">
        <Button
          onClick={() => {
            toast.success("Payment Successfull!");
            router.push("/");
          }}
        >
          Proceed to payment
        </Button>
      </div>
    </main>
  );
}

export default Page;
