"use client";
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

        <a href="/p2p" className="w-full bg-black p-3 rounded-md text-white text-center">
          Submit
        </a>
      </div>
    </div>
  );
};

export default Page;
