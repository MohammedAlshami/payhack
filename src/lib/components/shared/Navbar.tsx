import { createClient } from "@/lib/supabase/server";
import { BookMinus, HomeIcon, Menu } from "lucide-react";
import Link from "next/link";
import UserProfile from "./UserProfile";

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <div className="fixed bottom-0 w-full  bg-white text-white flex justify-around  items-center py-6">
      {/* Icon 1 */}
      <Link href="/home" className="flex flex-col items-center text-purple-600">
        <HomeIcon />
      </Link>
      {/* Icon 2 */}
      <div className="flex flex-col items-center">
        <Link href="/" className="flex flex-col items-center text-purple-600">
          <Menu />
        </Link>
      </div>
      {/* Icon 3 */}
      <div className="flex flex-col items-center">
        <Link href="/" className="flex flex-col items-center text-purple-600">
          <BookMinus />
        </Link>
      </div>

      {/* Icon 5 */}

      <div className="flex flex-col items-center">
        <UserProfile user={user} />
      </div>
    </div>
  );
}
