import { DashboardNavbar } from "../components/DashboardNavbar";
import { UserProfile } from "../components/UserProfile";
import { DashboardStats } from "../components/DashaboardStats";
import { TransactionsList } from "../components/TransactionsList";
import { QuickActions } from "../components/QuickActions";

interface DashboardProps {
  onLogout?: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  // Mock data - en producción vendría de una API
  const userData = {
    firstName: "Ricardo",
    lastName: "Mendoza",
    email: "ricardo.mendoza@empresa.com",
  };

  const statsData = {
    invested: "$250,000",
    earned: "$37,500",
    period: "18 meses",
    totalReturn: "$287,500",
  };

  const transactionsData = [
    {
      id: "1",
      type: "investment" as const,
      fund: "Fondo de Capital Privado A",
      date: "15 Oct 2024",
      amount: "$50,000",
      profit: "$7,500",
      profitPercent: "15.0%",
    },
    {
      id: "2",
      type: "return" as const,
      fund: "Fondo de Infraestructura B",
      date: "01 Oct 2024",
      amount: "$75,000",
      profit: "$11,250",
      profitPercent: "15.0%",
    },
    {
      id: "3",
      type: "investment" as const,
      fund: "Fondo de Tecnología C",
      date: "20 Sep 2024",
      amount: "$100,000",
      profit: "$15,200",
      profitPercent: "15.2%",
    },
    {
      id: "4",
      type: "return" as const,
      fund: "Fondo Inmobiliario D",
      date: "05 Sep 2024",
      amount: "$25,000",
      profit: "$3,550",
      profitPercent: "14.2%",
    },
    {
      id: "5",
      type: "investment" as const,
      fund: "Fondo de Energía Renovable E",
      date: "12 Ago 2024",
      amount: "$80,000",
      profit: "$12,400",
      profitPercent: "15.5%",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <DashboardNavbar 
        onLogout={onLogout}
        userName={`${userData.firstName} ${userData.lastName}`}
      />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block px-8 py-3 border border-white/30 mb-6 rounded-none">
              <span className="tracking-[0.25em] uppercase text-xs text-white/90">
                Panel de Control
              </span>
            </div>
            <h1 className="text-white text-4xl md:text-5xl tracking-wider mb-4">
              Bienvenido, {userData.firstName}
            </h1>
            <p className="text-white/60 text-lg tracking-wide">
              Resumen de su portafolio de inversiones
            </p>
          </div>

          {/* User Profile & Quick Actions */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2">
              <UserProfile user={userData} />
            </div>
            <div>
              <QuickActions
                onAddFunds={() => console.log("Add funds")}
                onViewReports={() => console.log("View reports")}
                onNewInvestment={() => console.log("New investment")}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mb-12">
            <DashboardStats stats={statsData} />
          </div>

          {/* Transactions */}
          <div>
            <TransactionsList transactions={transactionsData} />
          </div>
        </div>
      </main>
    </div>
  );
}
