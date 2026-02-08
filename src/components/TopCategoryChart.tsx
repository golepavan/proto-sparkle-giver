import { MoreVertical } from "lucide-react";

const categories = [
  { name: "Food & Grocery", amount: "₹6,156.00", color: "hsl(var(--chart-green))" },
  { name: "Investment", amount: "₹5,000.00", color: "hsl(var(--chart-blue))" },
  { name: "Shopping", amount: "₹4,356.00", color: "hsl(var(--chart-orange))" },
  { name: "Travelling", amount: "₹3,670.00", color: "hsl(var(--chart-red))" },
  { name: "Miscellaneous", amount: "₹2,749.00", color: "hsl(var(--chart-teal))" },
  { name: "Bill & Subscription", amount: "₹2,162.00", color: "hsl(var(--chart-yellow))" },
];

const total = 24093;
const values = [6156, 5000, 4356, 3670, 2749, 2162];

export function TopCategoryChart() {
  // Build donut segments
  let cumulative = 0;
  const segments = values.map((v, i) => {
    const pct = (v / total) * 100;
    const offset = cumulative;
    cumulative += pct;
    return { pct, offset, color: categories[i].color };
  });

  return (
    <div className="bg-card rounded-xl p-5 border border-border w-full lg:w-[380px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Top Category</h3>
        <div className="flex items-center gap-2">
          <select className="text-xs bg-secondary text-foreground rounded-lg px-3 py-1.5 border border-border outline-none">
            <option>Recent</option>
          </select>
          <button className="text-muted-foreground hover:text-foreground">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-36 h-36 shrink-0">
          <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90">
            {segments.map((seg, i) => (
              <circle
                key={i}
                cx="21" cy="21" r="15"
                fill="none"
                stroke={seg.color}
                strokeWidth="5"
                strokeDasharray={`${seg.pct * 0.9425} ${94.25 - seg.pct * 0.9425}`}
                strokeDashoffset={`${-seg.offset * 0.9425}`}
              />
            ))}
          </svg>
        </div>
        <ul className="space-y-2.5 min-w-0 flex-1">
          {categories.map((cat) => (
            <li key={cat.name} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                <span className="text-xs text-foreground truncate">{cat.name}</span>
              </div>
              <span className="text-xs font-medium text-foreground whitespace-nowrap">{cat.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
