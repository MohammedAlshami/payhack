"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/lib/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@components/ui/button";
import { User } from "@supabase/supabase-js";
import { UserCircle2, UserIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserProfile({ user }: { user: User | null }) {
  const supabase = createClient();
  const router = useRouter();

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.error("log_out_error: ", error?.message);
    router.refresh();
  };
  return (
    <div>
      {user?.email ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-none">
              <div className="flex flex-col">
                <UserCircle2 />
                <span className="text-xs">User</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ring ring-muted">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{user?.email}</DropdownMenuItem>

              <DropdownMenuItem>
                <Button onClick={handleLogOut} size="lg" className="rounded-3xl">
                  Log Out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Link href="/login">
          <UserIcon className="rounded-3xl text-purple-600 bg-white" />
        </Link>
      )}
    </div>
  );
}
