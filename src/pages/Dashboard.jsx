import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import BalanceCard from "../components/dashboard/BalanceCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentTransactions from "../components/dashboard/RecentTransactions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <BalanceCard />
            <QuickActions />
            <RecentTransactions />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;