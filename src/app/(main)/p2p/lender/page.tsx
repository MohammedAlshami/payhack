"use client";
import { ArrowRight, Currency, Percent } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TopNav } from "../../_components/TopNav";
import ProjectDetails from "./ProjectDetails";
interface ProfileProbs {
  companyName: string;
  loanTyp: string;
  date: string;
  companyLogo: string;
  details: string;
}

const Profile = ({ companyLogo, companyName, loanTyp, date, details }: ProfileProbs) => {
  return (
    <div className="space-y-8">
      <div className="w-10/12 flex justify-between items-center text-white h-fit px-6 sm:justify-center sm:gap-24 sm:px-0">
        <img src={companyLogo} alt="" className="rounded-full h-28 w-28 border-4 border-white/80" />
        <div className="h-full flex flex-col  gap-4">
          <h2 className="font-bold text-xl">{companyName}</h2>
          <div className="grid grid-cols-2 w-fit gap-4">
            <h2 className="text-sm h-fit p-1 px-2 bg-background text-primary rounded-xl">
              3 - 6 months
            </h2>
            <h2 className="text-sm h-fit p-1 px-2 bg-background text-primary rounded-xl">
              3 - 6 months
            </h2>
            <h2 className="text-sm h-fit p-1 px-2 bg-background text-primary rounded-xl">
              3 - 6 months
            </h2>
          </div>
        </div>
      </div>
      <p className="w-full px-6 text-background">{details}</p>
    </div>
  );
};

interface LoanDetailComponentProbs {
  icon: string;
  title: string;
  content: string;
}

const LoanDetailComponent = ({ icon, title, content }: LoanDetailComponentProbs) => {
  const renderIcon = () => {
    if (icon === "percentage") {
      return <Percent />;
    } else if (icon === "currency") {
      return <Currency />;
    } else if (icon === "icon3") {
      return <Percent />;
    } else {
      return <Percent />;
    }
  };

  return (
    <div className="flex items-center">
      <div className="w-full flex gap-4">
        <div className="bg-accent h-fit p-4 rounded-xl text-white">{renderIcon()}</div>
        <div>
          <h2>{title}</h2>
          <h2 className="font-bold">{content}</h2>
        </div>
      </div>
      <ArrowRight />
    </div>
  );
};
const DebtInfo = ({ loanDetails, requirementsDetails, projectInfo }) => {
  console.log(projectInfo.spendingDetails);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [submissionText, setSubmissionText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const companyName = "Tech Innovators Inc.";

  const handleSubmit = () => {
    if (submissionText.trim()) {
      fetch("https://vw7cf4m67k.execute-api.ap-southeast-1.amazonaws.com/main/api/add-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          details: submissionText,
          company: companyName,
        }),
      })
        .then((res) => {
          if (res.ok) {
            setSubmissionStatus("Success! Your submission has been received.");
          } else {
            setSubmissionStatus("Failed! Your submission could not be processed.");
          }
          setShowSuccess(true);
          setTimeout(() => {
            window.location.href = "/p2p";
          }, 1500);
        })
        .catch((err) => {
          console.error("Failed to submit request:", err);
          setSubmissionStatus("Failed! Your submission could not be processed.");
          setShowSuccess(true);
        });
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 px-4 sm:px-18 py-8 bg-background rounded-t-3xl pb-24 relative">
      <div className="flex flex-col gap-8">
        {projectInfo && (
          <ProjectDetails
            projectTitle={projectInfo.projectTitle}
            projectDescription={projectInfo.projectDescription}
            loanAmount={projectInfo.loanAmount}
            spendingDetails={projectInfo.spendingDetails}
            fileLinks={projectInfo.fileLinks}
          />
        )}
        <h2 className="text-xl font-bold">Loan Details</h2>

        <div className="space-y-4">
          {loanDetails.map((loan, index) => (
            <LoanDetailComponent
              key={index}
              icon={loan.icon}
              title={loan.title}
              content={loan.content}
            />
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Requirements</h2>
        <div className="space-y-4">
          {requirementsDetails.map((requirement, index) => (
            <LoanDetailComponent
              key={index}
              icon={requirement.icon}
              title={requirement.title}
              content={requirement.content}
            />
          ))}
        </div>
      </div> */}

      <button
        onClick={() => setIsFormVisible(true)}
        className="w-full bg-black p-3 rounded-md text-white"
      >
        Apply
      </button>

      {/* Slide-up Form */}
      <div
        className={`fixed bottom-0 left-0 w-full h-[28rem]  bg-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isFormVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h2 className="text-xl font-bold">Submission Details</h2>
        <p className="mt-4">What will you use the loan for, and how can we help?</p>
        <textarea
          value={submissionText}
          onChange={(e) => setSubmissionText(e.target.value)}
          className="w-full mt-4 p-3 border rounded-md"
          placeholder="Explain your purpose..."
          rows={4}
        ></textarea>
        <button onClick={handleSubmit} className="w-full bg-accent p-3 mt-4 rounded-md text-white">
          Confirm
        </button>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold">{submissionStatus}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

const Page = () => {
  const searchParams = useSearchParams();

  const company = searchParams.get("company");

  const [requirementsDetails, setRequirementsDetails] = useState([]);
  const [loanDetails, setLoanDetails] = useState([]);
  const [companyLogo, setCompanyLogo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loanTyp, setLoanTyp] = useState("");
  const [date, setDate] = useState("");
  const [details, setdetails] = useState("");

  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [spendingDetails, setSpendingDetails] = useState([]);
  const [fileLinks, setFileLinks] = useState([]);

  const [projectInfo, setProjectInfo] = useState({});

  useEffect(() => {
    // Fetch Microvendors data
    fetch(`http://127.0.0.1:5000/api/get-loan-details?name=${company}`)
      .then((res) => res.json())
      .then((data) => {
        setRequirementsDetails(data.requirementsDetails);
        setLoanDetails(data.loanDetails);
        setLoanDetails(data.loanDetails);
        setCompanyLogo(data.companyLogo);
        setCompanyName(data.companyName);

        setdetails(data.details);
        setProjectTitle(data.projectTitle);
        setProjectDescription(data.projectDescription);
        setLoanAmount(data.loanAmount);
        setSpendingDetails(data.spendingDetails);
        setFileLinks(data.fileLinks);

        setProjectInfo({
          projectTitle: data.projectTitle,
          projectDescription: data.projectDescription,
          loanAmount: data.loanAmount,
          spendingDetails: data.spendingDetails,
          fileLinks: data.fileLinks,
        });
      })
      .catch((err) => console.error("Failed to fetch Microvendors:", err));
  }, []);
  return (
    <div className="flex flex-col gap-12 w-full bg-accent h-screen">
      <TopNav mode="dark" isBackBtn={true} />
      <Profile
        companyLogo={companyLogo}
        companyName={companyName}
        loanTyp={loanTyp}
        date={date}
        details={details}
      />
      <DebtInfo
        loanDetails={loanDetails}
        requirementsDetails={requirementsDetails}
        projectInfo={projectInfo}
      />
    </div>
  );
};

export default Page;
