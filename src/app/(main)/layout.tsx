import Navbar from "@/lib/components/shared/Navbar";
import { MenuIcon, Search } from "lucide-react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-white scrollbar-hide ">{children}</main>
      <Navbar />
    </>
  );
}
