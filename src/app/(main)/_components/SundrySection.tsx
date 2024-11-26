import { PlusIcon } from "lucide-react";

function SundrySection() {
  return (
    <main>
      <section className="bg-[url('/images/banner.png')] bg-opacity-10 w-screen h-[152px] bg-contain bg-no-repeat flex justify-center items-center mt-12">
        <h2 className="text-white text-xl font-bold">A platform for Sundry shops</h2>
      </section>
      <section className="pl-3 mx-auto">
        <h2 className="text-xl font-semibold">Business Savings</h2>
        <div className="flex justify-center items-center gap-2 w-[65vw] mx-auto">
          <h4>Create A virtual Savings Account</h4>
          <PlusIcon className="w-[50px]" />
        </div>
      </section>
    </main>
  );
}

export default SundrySection;
