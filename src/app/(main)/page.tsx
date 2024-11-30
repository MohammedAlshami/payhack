import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Banner from "./_components/Banner";
import PaymentOption from "./_components/PaymentOption";
import SundrySection from "./_components/SundrySection";
import TransactionDashboard from "./_components/TransactionDashboard";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (!user?.email) {
    redirect("/home");
  }

  return (
    <main className="flex min-h-screen flex-col pb-20 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#289ED6]">
      <Banner />
      <PaymentOption />
      <TransactionDashboard />
      <SundrySection />
    </main>
  );
}
