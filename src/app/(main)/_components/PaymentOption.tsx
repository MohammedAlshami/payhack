import Image from "next/image";
import payment1 from "/public/images/payment-1.png";

function PaymentOption() {
  return (
    <section className="w-[95vw] mx-auto">
      <h2 className="text-xl text-primary font-bold">Payment Option</h2>
      <div className="grid grid-cols-3 place-content-center place-items-center">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="shadow-xl rounded-xl">
            <Image src={payment1} alt="payment system logo" className="p-6 w-[100px]" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PaymentOption;
