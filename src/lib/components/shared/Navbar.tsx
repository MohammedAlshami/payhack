import { createClient } from "@/lib/supabase/server";
import { Banknote, BookMinus, CreditCard, HomeIcon } from "lucide-react";
import Link from "next/link";
import UserProfile from "./UserProfile";

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <div className="fixed bottom-0 w-full md:w-1/2 lg:w-3/12 bg-white text-white flex justify-around  items-center py-6">
      {/* Icon 1 */}
      <Link href="/home" className="flex flex-col items-center text-purple-600">
        <HomeIcon />
      </Link>
      {/* Icon 2 */}
      <div className="flex flex-col items-center">
        <Link href="/debt/loans" className="flex flex-col items-center text-purple-600">
          <Banknote />
        </Link>
      </div>
      {/* Icon 3 */}
      <div className="flex flex-col items-center">
        <Link href="/p2p" className="flex flex-col items-center text-purple-600">
          <BookMinus />
        </Link>
      </div>
      <div className="f lex flex-col items-center">
        <Link href="/card" className="flex flex-col items-center text-purple-600">
          <CreditCard />
        </Link>
      </div>

      {/* Icon 5 */}

      <div className="flex flex-col items-center">
        <UserProfile user={user} />
      </div>
    </div>
  );
}
