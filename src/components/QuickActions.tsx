import { Button } from "./ui/button";
import { Plus, Download, TrendingUp } from "lucide-react";

interface QuickActionsProps {
  onAddFunds?: () => void;
  onViewReports?: () => void;
  onNewInvestment?: () => void;
}

export function QuickActions({ onAddFunds, onViewReports, onNewInvestment }: QuickActionsProps) {
  return (
    <div className="border border-white/10 bg-black/40 p-8">
      <h3 className="text-white tracking-wider text-xl mb-6">Acciones Rápidas</h3>
      <div className="space-y-4">
        <Button
          onClick={onAddFunds}
          variant="outline"
          className="w-full border border-emerald-900/40 text-emerald-400 hover:bg-emerald-950/30 hover:border-emerald-700/60 px-8 py-6 tracking-[0.2em] text-xs transition-all duration-500 rounded-none justify-start"
        >
          <Plus className="h-5 w-5 mr-3" />
          AGREGAR FONDOS
        </Button>
        
        <Button
          onClick={onNewInvestment}
          variant="outline"
          className="w-full border border-blue-900/40 text-blue-400 hover:bg-blue-950/30 hover:border-blue-700/60 px-8 py-6 tracking-[0.2em] text-xs transition-all duration-500 rounded-none justify-start"
        >
          <TrendingUp className="h-5 w-5 mr-3" />
          NUEVA INVERSIÓN
        </Button>
        
        <Button
          onClick={onViewReports}
          variant="outline"
          className="w-full border border-white/30 text-black-400 hover:bg-white/10 hover:border-white/50 px-8 py-6 tracking-[0.2em] text-xs transition-all duration-500 rounded-none justify-start"
        >
          <Download className="h-5 w-5 mr-3" />
          DESCARGAR REPORTE
        </Button>
      </div>
    </div>
  );
}
