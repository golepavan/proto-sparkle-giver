import { Search, Bell } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-card border-b border-border">
      <div>
        <h1 className="text-xl font-semibold text-foreground">
          Hi, Ananya 👋
        </h1>
        <p className="text-sm text-muted-foreground">Track your all expenses and transactions</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-secondary rounded-xl px-4 py-2 w-72">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search expenses, transactions, cards"
            className="bg-transparent border-none outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <button className="relative p-2 rounded-xl hover:bg-secondary transition-colors">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-destructive rounded-full text-[10px] text-destructive-foreground flex items-center justify-center font-medium">2</span>
        </button>

        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
          <span className="text-sm font-semibold text-primary">A</span>
        </div>
      </div>
    </header>
  );
}
