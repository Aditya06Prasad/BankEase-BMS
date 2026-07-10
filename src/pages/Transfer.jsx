import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

const Transfer = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold">
            Transfer Money
          </h1>
        </main>
      </div>
    </div>
  );
};

export default Transfer;