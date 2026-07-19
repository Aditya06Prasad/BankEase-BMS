const transactions = [
  {
    id: 1,
    title: "Netflix Subscription",
    date: "Today",
    amount: "- ₹499",
  },
  {
    id: 2,
    title: "Salary",
    date: "Yesterday",
    amount: "+ ₹50,000",
  },
  {
    id: 3,
    title: "Swiggy",
    date: "2 Jul",
    amount: "- ₹320",
  },
];

const RecentTransactions = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Recent Transactions
      </h2>

      {transactions.map((items) => (
        <div
          key={items.id}
          className="flex justify-between items-center py-3 border-b last:border-none"
        >
          <div>
            <h3 className="font-medium">{items.title}</h3>
            <p className="text-sm text-gray-500">{items.date}</p>
          </div>

          <span
            className={`font-semibold ${
              items.amount.startsWith("+")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {items.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;