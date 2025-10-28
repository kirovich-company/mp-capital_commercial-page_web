import { TrendingUp, Wallet, Calendar, DollarSign } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  accentColor?: string;
}

function StatCard({ icon, label, value, change, changeType = "neutral", accentColor = "border-white/20" }: StatCardProps) {
  return (
    <div className={`border ${accentColor} bg-black/40 p-8 group hover:border-white/40 transition-all duration-500`}>
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-500">
          {icon}
        </div>
        {change && (
          <div className={`text-sm tracking-wide ${
            changeType === "positive" ? "text-emerald-400" : 
            changeType === "negative" ? "text-red-400" : 
            "text-white/50"
          }`}>
            {change}
          </div>
        )}
      </div>
      <div className="text-white/50 tracking-[0.2em] uppercase text-xs mb-3">
        {label}
      </div>
      <div className="text-white text-4xl tracking-tight">
        {value}
      </div>
    </div>
  );
}

interface DashboardStatsProps {
  stats: {
    invested: string;
    earned: string;
    period: string;
    totalReturn: string;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon={<Wallet className="h-6 w-6 text-blue-400" />}
        label="Capital Invertido"
        value={stats.invested}
        accentColor="border-blue-900/40"
      />
      <StatCard
        icon={<TrendingUp className="h-6 w-6 text-emerald-400" />}
        label="Ganancias Totales"
        value={stats.earned}
        change="+12.5%"
        changeType="positive"
        accentColor="border-emerald-900/40"
      />
      <StatCard
        icon={<Calendar className="h-6 w-6 text-amber-400" />}
        label="Periodo de Inversión"
        value={stats.period}
        accentColor="border-amber-900/40"
      />
      <StatCard
        icon={<DollarSign className="h-6 w-6 text-purple-400" />}
        label="Retorno Total"
        value={stats.totalReturn}
        change="+15.2%"
        changeType="positive"
        accentColor="border-purple-900/40"
      />
    </div>
  );
}
