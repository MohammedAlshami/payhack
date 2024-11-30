import { Currency, FileText, Folder } from "lucide-react";
import React from "react";

interface ProjectDetailsProps {
  projectTitle: string;
  projectDescription: string;
  loanAmount: string;
  spendingDetails: Array<{
    title: string;
    amount: number;
  }>;
  fileLinks: Array<{
    title: string;
    link: string;
  }>;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectTitle,
  projectDescription,
  loanAmount,
  spendingDetails,
  fileLinks,
}) => {
  return (
    <div className="w-full h-full flex flex-col gap-6   bg-white rounded-t-3xl ">
      {/* Project Details Section */}
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-bold">Project Details</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Folder className="text-accent" />
            <div>
              <h3 className="font-semibold">Project Title</h3>
              <p>{projectTitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Folder className="text-accent" />
            <div>
              <h3 className="font-semibold">Project Description</h3>
              <p>{projectDescription}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Currency className="text-accent" />
            <div>
              <h3 className="font-semibold">Loan Amount</h3>
              <p>${loanAmount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spending Details Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Spending Breakdown</h2>
        <div className="space-y-2">
          {spendingDetails.map((spending, index) => (
            <div key={index} className="flex justify-between border-b pb-2">
              <span>{spending.title}</span>
              <span className="font-bold">${spending.amount}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${spendingDetails.reduce((sum, item) => sum + item.amount, 0)}</span>
          </div>
        </div>
      </div>

      {/* File Links Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Supporting Documents</h2>
        <div className="space-y-2">
          {fileLinks.map((file, index) => (
            <a
              key={index}
              href={file.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition"
            >
              <FileText className="text-accent" />
              <span>{file.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
