import { Edit } from "lucide-react";
import { useState } from "react";

export default function CurrentSettings() {
  const [intervalAmount, setIntervalAmount] = useState("RM 50");
  const [frequency, setFrequency] = useState("Monthly");
  const [paybackTime, setPaybackTime] = useState("24 Months");

  const [isEditingInterval, setIsEditingInterval] = useState(false);
  const [isEditingFrequency, setIsEditingFrequency] = useState(false);
  const [isEditingPaybackTime, setIsEditingPaybackTime] = useState(false);

  return (
    <div className="pt-6    w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Current Settings</h2>

      {/* Interval Amount */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="block text-gray-600">Interval Amount</span>
          {isEditingInterval ? (
            <input
              type="text"
              value={intervalAmount}
              onChange={(e) => setIntervalAmount(e.target.value)}
              onBlur={() => setIsEditingInterval(false)}
              className="border-b-2 border-gray-300 outline-none"
              autoFocus
            />
          ) : (
            <span>{intervalAmount}</span>
          )}
        </div>
        <Edit
          className="text-purple-500 cursor-pointer"
          onClick={() => setIsEditingInterval(true)}
        />
      </div>

      {/* Frequency */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="block text-gray-600">Frequency</span>
          {isEditingFrequency ? (
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              onBlur={() => setIsEditingFrequency(false)}
              className="border-b-2 border-gray-300 outline-none"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          ) : (
            <span>{frequency}</span>
          )}
        </div>
        <Edit
          className="text-purple-500 cursor-pointer"
          onClick={() => setIsEditingFrequency(true)}
        />
      </div>

      {/* Estimated Payback Time */}
      <div className="flex justify-between items-center">
        <div>
          <span className="block text-gray-600">Estimated Payback Time</span>
          {isEditingPaybackTime ? (
            <select
              value={paybackTime}
              onChange={(e) => setPaybackTime(e.target.value)}
              onBlur={() => setIsEditingPaybackTime(false)}
              className="border-b-2 border-gray-300 outline-none"
            >
              <option value="12 Months">12 Months</option>
              <option value="24 Months">24 Months</option>
              <option value="36 Months">36 Months</option>
              <option value="48 Months">48 Months</option>
            </select>
          ) : (
            <span>{paybackTime}</span>
          )}
        </div>
        <Edit
          className="text-purple-500 cursor-pointer"
          onClick={() => setIsEditingPaybackTime(true)}
        />
      </div>
    </div>
  );
}
