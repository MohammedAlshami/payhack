import { ArrowLeft, CheckIcon, X } from "lucide-react";
import { FC, useState } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const banks = [
  {
    name: "Maybank",
    logo: "https://play-lh.googleusercontent.com/tKvJp1TadWbY9YjwbkUC-h97-sBjn0BEb1ztaGdonVZvqqzenMy_PGyc_qGsKIxCiZk",
  },
  {
    name: "CIMB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/CIMB_logo.svg",
  },
  {
    name: "Public Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Public_Bank_logo.svg",
  },
  {
    name: "RHB Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/RHB_Bank_logo.svg",
  },
  {
    name: "Hong Leong Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Hong_Leong_Bank_logo.svg",
  },
];

const Step2: FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBank, setSelectedBank] = useState<string | null>(null);

    const filteredBanks = banks.filter((bank) =>
        bank.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const handleSelectBank = (bankName: string) => {
        setSelectedBank(bankName);
    };

    return (
        <div className="flex flex-col gap-6">
            <input
                type="text"
                placeholder="Search for a bank"
                className="bg-blue-600/10 w-full p-3 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredBanks.map((bank) => (
                <div
                    key={bank.name}
                    className="flex justify-between cursor-pointer"
                    onClick={() => handleSelectBank(bank.name)}
                >
                    <div className="flex items-center gap-4">
                        <img src={bank.logo} alt={bank.name} className="w-8 h-8 rounded-full" />
                        <h2 className="font-bold">{bank.name}</h2>
                    </div>
                    {selectedBank === bank.name && (
                        <div className="bg-black rounded-full flex items-center h-full w-8">
                            <CheckIcon className="text-white w-full" />
                        </div>
                    )}
                </div>
            ))}
            <div className="flex flex-col gap-4 items-center">
                <button className="w-full bg-black p-3 rounded-md text-white">Confirm</button>
            </div>
        </div>
    );
};
const Step3 = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Bank Info */}
      <div className="flex items-center gap-4">
        {" "}
        <img
          src="https://play-lh.googleusercontent.com/tKvJp1TadWbY9YjwbkUC-h97-sBjn0BEb1ztaGdonVZvqqzenMy_PGyc_qGsKIxCiZk"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <h2 className="font-bold">Maybank</h2>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <h2 className="w-full font-bold">Enter your login Credentials</h2>
        {/* Input */}
        <div className="w-full flex flex-col gap-2">
          <h2 className="font-bold text-xs">Username</h2>
          <input
            type="text"
            placeholder="Username"
            className="bg-blue-600/10 w-full p-3 rounded-md"
          />
        </div>
        <button className="w-full bg-black p-3 rounded-md text-white">Login</button>
        <h2 className="underline">Need help?</h2>
      </div>
    </div>
  );
};
const Step4 = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Bank Info */}
      <div className="flex items-center gap-4">
        {" "}
        <img
          src="https://play-lh.googleusercontent.com/tKvJp1TadWbY9YjwbkUC-h97-sBjn0BEb1ztaGdonVZvqqzenMy_PGyc_qGsKIxCiZk"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <h2 className="font-bold">Maybank</h2>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="w-full bg-black/5 font-bold text-center p-4 rounded-md">Sunflower</h2>
          <p className="text-sm italic">is this your security phrase</p>
        </div>
        <div className="flex gap-4">
          <input type="checkbox" />
          <h2 className="text-sm">Yes, this my security phrase</h2>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <h2 className="w-full font-bold">Enter your login Credentials</h2>
        {/* Input */}
        <div className="w-full flex flex-col gap-2">
          <h2 className="font-bold text-xs">Password</h2>
          <input
            type="password"
            placeholder="Enter Password"
            className="bg-blue-600/10 w-full p-3 rounded-md"
          />
        </div>
        <button className="w-full bg-black p-3 rounded-md text-white">Login</button>
        <h2 className="underline">Need help?</h2>
      </div>
    </div>
  );
};
const Step5 = () => {
  return (
    <div className="h-full flex flex-col gap-6">
      {/* Bank Info */}
      <div className=" flex items-center gap-4">
        {" "}
        <img
          src="https://play-lh.googleusercontent.com/tKvJp1TadWbY9YjwbkUC-h97-sBjn0BEb1ztaGdonVZvqqzenMy_PGyc_qGsKIxCiZk"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <h2 className="font-bold">Maybank</h2>
      </div>

      <div className="h-full flex flex-col gap-4 items-start justify-between pb-4">
        <div className="space-y-2">
          <h2 className="w-full font-bold">Enter your login Credentials</h2>
          <p>Tap on the notification, review it and click approve</p>
        </div>
        {/* Input */}

        <h2 className="w-full text-center font-medium">Awaiting for approval</h2>
      </div>
    </div>
  );
};

const Step6 = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Bank Info */}
      <div className="flex items-center gap-4 w-10/12">
        {" "}
        <h2 className="font-bold">Select account(s) to share information with SM FM</h2>
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-black/5  p-4 rounded-md flex flex-col gap-4">
          <div className="flex justify-between items-center w-full  font-bold ">
            <div className="w-full">
              <h2>PayBank Savings</h2>
              <p className="text-sm font-normal">*******1234</p>
            </div>
            <input type="checkbox" className="size-4 accent-black" checked />
          </div>
          <div className="flex justify-between items-center w-full  font-bold ">
            <div className="w-full">
              <h2 className="text-md">PayBank Savings</h2>
              <p className="text-sm font-normal">*******1234</p>
            </div>
            <input type="checkbox" className="size-4 accent-black" checked />
          </div>
          <div className="flex justify-between items-center w-full  font-bold ">
            <div className="w-full">
              <h2>PayBank Savings</h2>
              <p className="text-sm font-normal">*******1234</p>
            </div>
            <input type="checkbox" className="size-4 accent-black" checked />
          </div>
          <div className="flex justify-between items-center w-full  font-bold ">
            <div className="w-full">
              <h2>PayBank Savings</h2>
              <p className="text-sm font-normal">*******1234</p>
            </div>
            <input type="checkbox" className="size-4 accent-black" checked />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <button className="w-full bg-black p-3 rounded-md text-white">All Set</button>
      </div>
    </div>
  );
};
const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Drawer */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-white shadow-lg transform z-[1000000000000000] rounded-t-3xl ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out`}
        style={{ height: "83.333%" }} // 10/12 of the screen height
      >
        <div className="px-6 flex flex-col gap-12 pt-8 h-full">
          {/* <h2 className="text-xl font-bold">Drawer Content</h2>
          <p>This is the content of the drawer.</p> */}

          {/* Button to Close Drawer */}

          <div className="flex justify-between">
            <ArrowLeft />
            <h2 className="font-bold">OpenFinance</h2>
            <X onClick={onClose} />
          </div>

          <Step2 />
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50"></div>}
    </>
  );
};

export default Drawer;
