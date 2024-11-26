import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import getStartedBg from "/public/images/Pay-Jaja.png";

export default async function page() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (user?.email) {
    redirect("/");
  }
  return (
    <main className="bg-black text-white h-screen flex flex-col ">
      <div className="">
        <Image src={getStartedBg} alt="bg" />
        <div className="p-6">
          <h3 className="text-2xl">
            Supporting <span className="text-[#00BFFF]">Local Vendors</span>
          </h3>
          <h3 className="text-2xl">
            Easing <span className="text-[#FFA500]">Payments & Growth</span>
          </h3>
          <h3 className="text-2xl">
            Staying <span className="text-[#32CD32]">Regulated</span>
          </h3>
          <div className="text-center my-10">
            <Link
              href="/signup"
              className="bg-[#FF8C00] border-none text-white py-3 px-8 rounded-full cursor-pointer "
            >
              Sign up →
            </Link>
          </div>
          <p className="text-center my-6">
            Already signed up?{" "}
            <Link href="/login" className="text-white">
              Login instead
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
