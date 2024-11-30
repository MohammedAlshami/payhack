import { ArrowLeft, MenuIcon, Search } from "lucide-react";
import { useRouter } from "next/navigation"; // Usage: App router

interface TopNavProps {
  mode: string;
  isBackBtn?: boolean;
}

export const TopNav = ({ mode, isBackBtn }: TopNavProps) => {
  const router = useRouter();

  return (
    <div
      className={`flex justify-between p-6 ${mode == "dark" ? "text-white" : "text-purple-600"} `}
    >
      {isBackBtn && (
        <div
          className={`p-2 rounded-xl cursor-pointer ${mode == "dark" ? "hover:bg-background  hover:text-accent" : "hover:bg-accent  hover:text-background"}`}
        >
          <ArrowLeft onClick={() => router.back()} className="hover:bg-background" />
        </div>
      )}
      {!isBackBtn && (
        <div
          className={`p-2 rounded-xl cursor-pointer ${mode == "dark" ? "hover:bg-background  hover:text-accent" : "hover:bg-accent  hover:text-background"}`}
        >
          <MenuIcon />
        </div>
      )}
      <h2 className={`font-bold p-2 ${mode == "dark" ? "text-white" : "text-neutral-800"}`}>
        SME FM
      </h2>
      <div
        className={`p-2 rounded-xl cursor-pointer ${mode == "dark" ? "hover:bg-background  hover:text-accent" : "hover:bg-accent  hover:text-background"}`}
      >
        {" "}
        <Search />
      </div>
    </div>
  );
};
