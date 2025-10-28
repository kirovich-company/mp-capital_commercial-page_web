import { useState } from "react";
import { Button } from "./ui/button";
import { Building2, Menu, X, Settings, LogOut, User } from "lucide-react";

interface DashboardNavbarProps {
  onNavigate?: (page: "dashboard" | "settings") => void;
  onLogout?: () => void;
  userName?: string;
}

export function DashboardNavbar({ onNavigate, onLogout, userName = "Usuario" }: DashboardNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Building2 className="h-7 w-7 text-white" />
            <span className="text-lg text-white tracking-[0.3em] uppercase">Capital Partners</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-white/70">
              <User className="h-4 w-4" />
              <span className="tracking-wide text-sm">{userName}</span>
            </div>
            <Button 
              onClick={() => onNavigate?.("settings")}
              variant="outline" 
              className="border border-white/40 text-black hover:bg-white/10 hover:border-white px-6 py-2 tracking-[0.2em] text-xs transition-all duration-500 rounded-none"
            >
              <Settings className="h-4 w-4 mr-2" />
              CONFIGURACIÓN
            </Button>
            <Button 
              onClick={onLogout}
              variant="outline" 
              className="border border-white/40 text-black hover:bg-white hover:text-black px-6 py-2 tracking-[0.2em] text-xs transition-all duration-500 rounded-none"
            >
              <LogOut className="h-4 w-4 mr-2" />
              SALIR
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-white/70 py-2">
                <User className="h-4 w-4" />
                <span className="tracking-wide text-sm">{userName}</span>
              </div>
              <Button 
                onClick={() => {
                  onNavigate?.("settings");
                  setIsOpen(false);
                }}
                variant="outline" 
                className="border border-white/40 text-black hover:bg-white/10 hover:border-white w-full px-6 py-2 tracking-[0.2em] text-xs transition-all duration-500 rounded-none"
              >
                <Settings className="h-4 w-4 mr-2" />
                CONFIGURACIÓN
              </Button>
              <Button 
                onClick={() => {
                  onLogout?.();
                  setIsOpen(false);
                }}
                variant="outline" 
                className="border border-white/40 text-white hover:bg-white hover:text-black w-full px-6 py-2 tracking-[0.2em] text-xs transition-all duration-500 rounded-none"
              >
                <LogOut className="h-4 w-4 mr-2" />
                SALIR
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
