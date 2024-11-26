import Navbar from "@/lib/components/shared/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-white">{children}</main>
      <Navbar />
    </>
  );
}
