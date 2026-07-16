import MainLayout from "../layouts/MainLayout";
import BalanceCard from "../components/dashboard/BalanceCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentTransactions from "../components/dashboard/RecentTransactions";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <BalanceCard />
          <QuickActions />
          <RecentTransactions />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;