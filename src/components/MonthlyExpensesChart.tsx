import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { MoreVertical, TrendingUp } from "lucide-react";

const data = [
  { month: "Dec", amount: 22000 },
  { month: "Jan", amount: 18000 },
  { month: "Feb", amount: 25000 },
  { month: "Mar", amount: 20000 },
  { month: "Apr", amount: 28000 },
  { month: "May", amount: 15000 },
  { month: "Jun", amount: 30000 },
];

export function MonthlyExpensesChart() {
  return (
    <div className="bg-card rounded-xl p-5 border border-border flex-1">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className="font-semibold text-foreground">Monthly Expenses</h3>
          <span className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-success/10 text-success">
            <TrendingUp className="h-3 w-3" /> 6% more than last month
          </span>
        </div>
        <div className="flex items-center gap-2">
          <select className="text-xs bg-secondary text-foreground rounded-lg px-3 py-1.5 border border-border outline-none">
            <option>Recent</option>
          </select>
          <button className="text-muted-foreground hover:text-foreground">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barSize={32}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip
            contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }}
            formatter={(value: number) => [`₹${value.toLocaleString("en-IN")}`, "Amount"]}
          />
          <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
