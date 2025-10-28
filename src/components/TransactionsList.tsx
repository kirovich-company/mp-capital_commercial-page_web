import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Transaction {
  id: string;
  type: "investment" | "return";
  fund: string;
  date: string;
  amount: string;
  profit: string;
  profitPercent: string;
}

interface TransactionsListProps {
  transactions: Transaction[];
}

export function TransactionsList({ transactions }: TransactionsListProps) {
  return (
    <div className="border border-white/10 bg-black/40">
      <div className="border-b border-white/10 p-6">
        <h3 className="text-white tracking-wider text-xl">Historial de Transacciones</h3>
        <p className="text-white/50 text-sm mt-2 tracking-wide">
          Resumen de sus inversiones y retornos
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-6 text-white/50 tracking-[0.15em] uppercase text-xs">
                Tipo
              </th>
              <th className="text-left p-6 text-white/50 tracking-[0.15em] uppercase text-xs">
                Fondo
              </th>
              <th className="text-left p-6 text-white/50 tracking-[0.15em] uppercase text-xs">
                Fecha
              </th>
              <th className="text-right p-6 text-white/50 tracking-[0.15em] uppercase text-xs">
                Monto
              </th>
              <th className="text-right p-6 text-white/50 tracking-[0.15em] uppercase text-xs">
                Ganancia
              </th>
              <th className="text-right p-6 text-white/50 tracking-[0.15em] uppercase text-xs">
                Rendimiento
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr 
                key={transaction.id} 
                className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
              >
                <td className="p-6">
                  <div className="flex items-center gap-2">
                    {transaction.type === "investment" ? (
                      <div className="w-8 h-8 border border-blue-900/40 flex items-center justify-center">
                        <ArrowUpRight className="h-4 w-4 text-blue-400" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 border border-emerald-900/40 flex items-center justify-center">
                        <ArrowDownRight className="h-4 w-4 text-emerald-400" />
                      </div>
                    )}
                    <span className="text-white/70 text-sm tracking-wide">
                      {transaction.type === "investment" ? "Inversión" : "Retorno"}
                    </span>
                  </div>
                </td>
                <td className="p-6">
                  <span className="text-white tracking-wide">{transaction.fund}</span>
                </td>
                <td className="p-6">
                  <span className="text-white/60 tracking-wide text-sm">{transaction.date}</span>
                </td>
                <td className="p-6 text-right">
                  <span className="text-white tracking-wide">{transaction.amount}</span>
                </td>
                <td className="p-6 text-right">
                  <span className="text-emerald-400 tracking-wide">{transaction.profit}</span>
                </td>
                <td className="p-6 text-right">
                  <div className="inline-block px-3 py-1 border border-emerald-900/40 bg-emerald-950/20">
                    <span className="text-emerald-400 text-sm tracking-wide">
                      +{transaction.profitPercent}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
