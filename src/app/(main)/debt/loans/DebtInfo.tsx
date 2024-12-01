"use client";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { useState } from "react";

// Define the loan item interface
interface LoanItem {
  id: string;
  img: string;
  title: string;
  details: string;
  amount: number;
  priority: "high" | "medium" | "low";
}

const DebtInfo = () => {
  // Mock loan data - in real application, this would come from an API or state management
  const [loans, setLoans] = useState<LoanItem[]>([
    {
      id: "1",
      img: "https://www.mywakaf.com.my/wp-content/uploads/2019/04/RHB-Islamic-Logo-400x162.jpg",
      title: "TNB",
      details: "02/12/2024",
      amount: 17,
      priority: "high",
    },
    {
      id: "2",
      img: "https://www.mywakaf.com.my/wp-content/uploads/2019/04/RHB-Islamic-Logo-400x162.jpg",
      title: "RHB Bank",
      details: "15/01/2025",
      amount: 25,
      priority: "medium",
    },
    {
      id: "3",
      img: "https://www.mywakaf.com.my/wp-content/uploads/2019/04/RHB-Islamic-Logo-400x162.jpg",
      title: "CIMB",
      details: "30/03/2025",
      amount: 10,
      priority: "low",
    },
  ]);

  // Filter and sorting states
  const [filter, setFilter] = useState<"all" | "high" | "medium" | "low">("all");
  const [sortBy, setSortBy] = useState<"amount" | "date">("amount");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Filtering and sorting logic
  const filteredAndSortedLoans = loans
    .filter((loan) => filter === "all" || loan.priority === filter)
    .sort((a, b) => {
      const multiplier = sortOrder === "asc" ? 1 : -1;
      if (sortBy === "amount") {
        return multiplier * (a.amount - b.amount);
      }
      // For date sorting, convert string to Date
      return multiplier * (new Date(a.details).getTime() - new Date(b.details).getTime());
    });

  // Calculate total debt
  const totalDebt = loans.reduce((sum, loan) => sum + loan.amount, 0);
  const highPriorityLoans = loans.filter((loan) => loan.priority === "high");

  // Render loan card
  const renderLoanCard = (loan: LoanItem) => (
    <div
      key={loan.id}
      className={`
        flex items-center justify-between p-4 rounded-xl mb-3
        ${
          loan.priority === "high"
            ? "bg-red-50 border-l-4 border-red-500"
            : loan.priority === "medium"
              ? "bg-yellow-50 border-l-4 border-yellow-500"
              : "bg-gray-50"
        }
      `}
    >
      <div className="flex items-center gap-4">
        <img src={loan.img} alt={loan.title} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <h3 className="font-semibold">{loan.title}</h3>
          <p className="text-sm text-gray-600">{loan.details}</p>
        </div>
      </div>
      <div className="text-right">
        <h4
          className={`font-bold ${
            loan.priority === "high"
              ? "text-red-600"
              : loan.priority === "medium"
                ? "text-yellow-600"
                : "text-gray-600"
          }`}
        >
          RM {loan.amount}
        </h4>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col px-4 sm:px-12 py-8 pb-24 bg-accent rounded-t-3xl">
      {/* Total Debt Overview */}
      <div className="mb-6 bg-white/10 p-4 rounded-xl">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-white font-medium text-xl">Total Debt</h3>
          <h3 className="text-white font-bold">RM {totalDebt}</h3>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-white/70">High Priority Debt</h4>
          <h4 className="text-red-300">
            RM {highPriorityLoans.reduce((sum, loan) => sum + loan.amount, 0)}
          </h4>
        </div>
      </div>

      {/* Filtering Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          {(["all", "high", "medium", "low"] as const).map((priorityFilter) => (
            <button
              key={priorityFilter}
              onClick={() => setFilter(priorityFilter)}
              className={`px-3 py-1 rounded-full text-xs 
                ${filter === priorityFilter ? "bg-white text-accent" : "bg-white/10 text-white"}`}
            >
              {priorityFilter.charAt(0).toUpperCase() + priorityFilter.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSortBy("amount");
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            }}
            className="flex items-center gap-1 text-xs text-white/70"
          >
            Amount{" "}
            {sortBy === "amount" &&
              (sortOrder === "asc" ? <ArrowUp size={12} /> : <ArrowDown size={12} />)}
          </button>
          <button
            onClick={() => {
              setSortBy("date");
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            }}
            className="flex items-center gap-1 text-xs text-white/70"
          >
            Date{" "}
            {sortBy === "date" &&
              (sortOrder === "asc" ? <ArrowUp size={12} /> : <ArrowDown size={12} />)}
          </button>
        </div>
      </div>

      {/* High Priority Loans */}
      {highPriorityLoans.length > 0 && (
        <div className="mb-6">
          <h3 className="text-white font-medium text-xl mb-4">High Priority Loans</h3>
          {highPriorityLoans.map(renderLoanCard)}
        </div>
      )}

      {/* Other Loans */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-medium text-xl">Other Loans</h3>
          <a href="/debt/list" className="flex items-center text-white/70">
            View All <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
        {filteredAndSortedLoans.filter((loan) => loan.priority !== "high").map(renderLoanCard)}
      </div>
    </div>
  );
};

export default DebtInfo;
