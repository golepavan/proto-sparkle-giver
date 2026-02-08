import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatCard } from "@/components/StatCard";
import { GoalCard } from "@/components/GoalCard";
import { MonthlyExpensesChart } from "@/components/MonthlyExpensesChart";
import { TopCategoryChart } from "@/components/TopCategoryChart";
import { RecentExpenses } from "@/components/RecentExpenses";
import { BillSubscription } from "@/components/BillSubscription";
import { Wallet, Receipt, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Account Balance"
              value="₹8,98,450.00"
              icon={<Wallet className="h-4 w-4" />}
              trend={{ value: "6% more than last month", positive: true }}
              badge="SBI"
            />
            <StatCard
              title="Monthly Expenses"
              value="₹24,093.00"
              icon={<Receipt className="h-4 w-4" />}
              trend={{ value: "2% less than last month", positive: false }}
            />
            <StatCard
              title="Total Investment"
              value="₹1,45,555.00"
              icon={<TrendingUp className="h-4 w-4" />}
            />
            <GoalCard />
          </div>

          {/* Charts */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <MonthlyExpensesChart />
            <TopCategoryChart />
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row gap-4">
            <RecentExpenses />
            <BillSubscription />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
