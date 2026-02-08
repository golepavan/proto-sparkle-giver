import { MoreVertical, Filter } from "lucide-react";

const expenses = [
  { sn: 1, amount: "₹2,100.00", category: "Shopping", subCategory: "Amazon", date: "31 May 2025", mode: "UPI" },
  { sn: 2, amount: "₹299.00", category: "Movie", subCategory: "PVR", date: "28 May 2025", mode: "UPI" },
  { sn: 3, amount: "₹5,000.00", category: "Investment", subCategory: "Grow", date: "24 May 2025", mode: "Bank" },
  { sn: 4, amount: "₹2,460.00", category: "Travel", subCategory: "IRCTC", date: "20 May 2025", mode: "Card" },
  { sn: 5, amount: "₹678.00", category: "Food", subCategory: "Swiggy", date: "15 May 2025", mode: "UPI" },
];

export function RecentExpenses() {
  return (
    <div className="bg-card rounded-xl p-5 border border-border flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Recent Expenses</h3>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-xs bg-secondary text-foreground rounded-lg px-3 py-1.5 border border-border">
            <Filter className="h-3 w-3" /> Filter
          </button>
          <select className="text-xs bg-secondary text-foreground rounded-lg px-3 py-1.5 border border-border outline-none">
            <option>Recent</option>
          </select>
          <button className="text-muted-foreground hover:text-foreground">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted-foreground text-xs border-b border-border">
              <th className="text-left py-2 font-medium">S.N</th>
              <th className="text-left py-2 font-medium">Amount</th>
              <th className="text-left py-2 font-medium">Category</th>
              <th className="text-left py-2 font-medium">Sub Category</th>
              <th className="text-left py-2 font-medium">Date</th>
              <th className="text-left py-2 font-medium">Mode</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={e.sn} className="border-b border-border last:border-0">
                <td className="py-3 text-foreground">{e.sn}.</td>
                <td className="py-3 font-medium text-foreground">{e.amount}</td>
                <td className="py-3 text-foreground">{e.category}</td>
                <td className="py-3 text-foreground">{e.subCategory}</td>
                <td className="py-3 text-muted-foreground">{e.date}</td>
                <td className="py-3">
                  <span className="text-xs bg-secondary px-2 py-0.5 rounded text-foreground">{e.mode}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
