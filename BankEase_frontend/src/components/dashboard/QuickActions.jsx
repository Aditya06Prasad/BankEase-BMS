import {
  FaPaperPlane,
  FaMoneyBillWave,
  FaUniversity,
} from "react-icons/fa";

const QuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <button className="flex flex-col items-center gap-2 p-4 rounded-lg bg-blue-100 hover:bg-blue-200 transition">
          <FaPaperPlane className="text-2xl text-blue-600" />
          <span>Transfer</span>
        </button>

        <button className="flex flex-col items-center gap-2 p-4 rounded-lg bg-green-100 hover:bg-green-200 transition">
          <FaMoneyBillWave className="text-2xl text-green-600" />
          <span>Deposit</span>
        </button>

        <button className="flex flex-col items-center gap-2 p-4 rounded-lg bg-purple-100 hover:bg-purple-200 transition">
          <FaUniversity className="text-2xl text-purple-600" />
          <span>Accounts</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;