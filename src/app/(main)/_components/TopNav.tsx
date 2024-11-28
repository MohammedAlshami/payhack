import { ArrowLeft, MenuIcon, Search } from "lucide-react";

interface TopNavProps {
  mode: string;
  isBackBtn?: boolean;
}

export const TopNav = ({ mode, isBackBtn }: TopNavProps) => {
  return (
    <div
      className={`flex justify-between p-6 ${mode == "dark" ? "text-white" : "text-purple-600"} `}
    >
      {isBackBtn && <ArrowLeft />}
      {!isBackBtn && <MenuIcon />}
      <h2 className={`font-bold ${mode == "dark" ? "text-white" : "text-neutral-800"}`}>SME FM</h2>
      <Search />
    </div>
  );
};
