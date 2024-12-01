"use client";
import { useRouter } from "next/navigation"; // Usage: App router
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TopNav } from "../../_components/TopNav";

const ProjectTitle = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="w-full flex flex-col gap-2">
        <h2 className="font-bold text-md">Project Title</h2>
        <input
          type="text"
          placeholder="Username"
          className="bg-blue-600/10 w-full p-3 rounded-md"
        />
      </div>
    </div>
  );
};

const ProjectDescription = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="w-full flex flex-col gap-2">
        <h2 className="font-bold text-md">Description</h2>
        <textarea
          placeholder="Project description"
          className="bg-blue-600/10 w-full p-3 rounded-md h-32"
        ></textarea>
      </div>
    </div>
  );
};

const Deadline = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="w-full flex flex-col gap-2">
        <div className="relative mt-4 flex flex-col gap-4">
          <label className="font-bold">Select Deadline</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="bg-blue-600/10 w-full p-3 rounded-md"
            dateFormat="dd/MM/yyyy"
            placeholderText="Click to select a date"
            isClearable
            showPopperArrow={false}
          />
        </div>
      </div>
    </div>
  );
};

const LoanAmount = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="w-full flex flex-col gap-2">
        <h2 className="font-bold text-md">Loan Amount</h2>
        <input
          type="number"
          placeholder="Project description"
          className="bg-blue-600/10 w-full p-3 rounded-md"
        />
      </div>
    </div>
  );
};

const SpendingDetails = () => {
  const [spendingList, setSpendingList] = useState<{ title: string; amount: number }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState<number | "">("");

  const handleAddSpending = () => {
    if (newTitle.trim() && newAmount) {
      setSpendingList([...spendingList, { title: newTitle, amount: Number(newAmount) }]);
      setNewTitle("");
      setNewAmount("");
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="font-bold text-md">Spending Details</h2>

      <button className="bg-black text-white p-3 rounded-md" onClick={() => setIsModalOpen(true)}>
        + Add Spending
      </button>

      {/* Modal for adding spending */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-6 rounded-md w-11/12 max-w-xl border-2 border-black">
            <h2 className="font-bold text-lg mb-4">Add Spending</h2>
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full p-3 border rounded-md mb-4"
            />
            <input
              type="number"
              placeholder="Amount"
              value={newAmount}
              onChange={(e) => setNewAmount(Number(e.target.value))}
              className="w-full p-3 border rounded-md mb-4"
            />
            <div className="flex justify-end gap-4">
              <button className="bg-gray-300 p-2 rounded-md" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="bg-black p-3 rounded-md text-white" onClick={handleAddSpending}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display list of spendings */}
      {spendingList.length > 0 && (
        <ul className="space-y-4">
          {spendingList.map((spending, index) => (
            <li key={index} className="p-4 border rounded-md">
              <h3 className="font-bold">{spending.title}</h3>
              <p className="text-sm">Amount: ${spending.amount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FileUpload = () => {
  const [fileList, setFileList] = useState<{ title: string; file: File }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileTitle, setFileTitle] = useState("");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setIsModalOpen(true);
    }
  };

  const handleAddFile = () => {
    if (selectedFile && fileTitle.trim()) {
      setFileList([...fileList, { title: fileTitle, file: selectedFile }]);
      setFileTitle("");
      setSelectedFile(null);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="font-bold text-md">Uploaded Files</h2>
      <button
        className="bg-black text-white p-3 rounded-md"
        onClick={() => document.getElementById("file-input")?.click()}
      >
        + Add File
      </button>

      <input
        id="file-input"
        type="file"
        accept=".pdf"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Modal for adding file details */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-11/12 max-w-md">
            <h2 className="font-bold text-lg mb-4">Add File</h2>
            <input
              type="text"
              placeholder="Title"
              value={fileTitle}
              onChange={(e) => setFileTitle(e.target.value)}
              className="w-full p-3 border rounded-md mb-4"
            />
            <div className="flex justify-end gap-4">
              <button className="bg-gray-300 p-2 rounded-md" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="bg-black text-white p-2 rounded-md" onClick={handleAddFile}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* List of uploaded files */}
      {fileList.length > 0 && (
        <ul className="space-y-4">
          {fileList.map((fileItem, index) => (
            <li key={index} className="p-4 border rounded-md">
              <h3 className="font-bold">{fileItem.title}</h3>
              <p className="text-sm">{fileItem.file.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setError("");
    setIsLoading(true);

    const response = await fetch("https://vw7cf4m67k.execute-api.ap-southeast-1.amazonaws.com/main/api/add-loan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName: "Tech Innovators Inc.",
        companyLogo:
          "https://img.freepik.com/free-photo/portrait-smiling-young-man_23-2148724568.jpg",
        loanTyp: "Microloan",
        date: "30/11/2024",
        details:
          "We manage software solutions with agility and precision, ensuring seamless operations and innovative outcomes.",
        projectTitle: "Project A",
        projectDescription: "This is a description of Project A.",
        loanAmount: "5000",
        loanDuration: "3 - 5 months",
        availableCredit: "RM 10,000",
        discount: "4% discount",
        spendingDetails: [
          {
            title: "Equipment",
            amount: 2000,
          },
          {
            title: "Marketing",
            amount: 1500,
          },
        ],
        fileLinks: [
          {
            title: "Business Plan",
            link: "https://example.com/business-plan.pdf",
          },
          {
            title: "Financial Report",
            link: "https://example.com/financial-report.pdf",
          },
        ],
        loanDetails: [
          {
            icon: "percentage",
            title: "Interest Rate",
            content: "% 10",
          },
          {
            icon: "currency",
            title: "Repayment Period",
            content: "3 - 6 months",
          },
        ],
        requirementsDetails: [
          {
            icon: "",
            title: "Collateral",
            content: "None",
          },
          {
            icon: "",
            title: "Minimum Income",
            content: "$1,000/month",
          },
        ],
        page: "/p2p/lender?company=Tech Innovators Inc.",
      }),
    });

    const data = await response.json();

    setIsLoading(false);

    if (data?.error) {
      setError(data.error);
    } else {
      setSuccess(true);
      setTimeout(() => {
        router.push("/p2p"); // Redirect after success
      }, 2000); // Add delay to show success popup
    }
  };

  return (
    <div className="flex flex-col pb-12 w-full">
      <div className="flex flex-col gap-8 p-6 w-full">
        <TopNav mode="light" isBackBtn={true} />
        <h2 className="w-full font-bold text-2xl">Create a Funding Request</h2>

        <ProjectTitle />
        <ProjectDescription />
        <Deadline />
        <LoanAmount />
        <FileUpload />
        <SpendingDetails />

        <div
          onClick={handleSubmit}
          className="w-full bg-black p-3 rounded-md text-white text-center cursor-pointer"
        >
          Submit
        </div>
      </div>

      {/* Success Popup */}
      {success && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p className="text-lg font-bold">Request Submitted Successfully!</p>
            <p>You will be redirected shortly.</p>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {error && (
        <div className="fixed inset-0 bg-red-600 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p className="text-lg font-bold">Error: Make sure to fill the entire form</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Page;
