import { Toaster } from "@/lib/components/ui/sonner";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Pay Jaja",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scrollbar-hide ">
      <body className={`${poppins.className} w-full flex  justify-center bg-black `}>
        <main className="w-full md:w-1/2 lg:w-3/12">
          {children} <Toaster richColors />
        </main>
      </body>
    </html>
  );
}
