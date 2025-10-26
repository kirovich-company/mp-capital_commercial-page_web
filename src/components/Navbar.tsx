import { useState } from "react";
import { Button } from "./ui/button";
import { Building2, Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigate?: (page: "home" | "about") => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (page: "home" | "about", sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    if (sectionId && page === "home") {
      // Small delay to allow page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Building2 className="h-7 w-7 text-white" />
            <span className="text-lg text-white tracking-[0.3em] uppercase">Capital Partners</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <button 
              onClick={() => handleNavigation("home", "servicios")}
              className="text-white/70 hover:text-white transition-colors tracking-[0.2em] uppercase text-xs"
            >
              Servicios
            </button>
            <button 
              onClick={() => handleNavigation("home", "inversiones")}
              className="text-white/70 hover:text-white transition-colors tracking-[0.2em] uppercase text-xs"
            >
              Inversiones
            </button>
            <button 
              onClick={() => handleNavigation("about")}
              className="text-white/70 hover:text-white transition-colors tracking-[0.2em] uppercase text-xs"
            >
              Nosotros
            </button>
            <button 
              onClick={() => handleNavigation("home", "contacto")}
              className="text-white/70 hover:text-white transition-colors tracking-[0.2em] uppercase text-xs"
            >
              Contacto
            </button>
            <Button 
              variant="outline" 
              className="border border-white/40 text-white hover:bg-white hover:text-black px-8 py-2 tracking-[0.25em] text-xs transition-all duration-500 rounded-none"
            >
              PORTAL CLIENTES
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
              <button 
                onClick={() => handleNavigation("home", "servicios")}
                className="text-white/70 hover:text-white transition-colors py-2 tracking-[0.2em] uppercase text-xs text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => handleNavigation("home", "inversiones")}
                className="text-white/70 hover:text-white transition-colors py-2 tracking-[0.2em] uppercase text-xs text-left"
              >
                Inversiones
              </button>
              <button 
                onClick={() => handleNavigation("about")}
                className="text-white/70 hover:text-white transition-colors py-2 tracking-[0.2em] uppercase text-xs text-left"
              >
                Nosotros
              </button>
              <button 
                onClick={() => handleNavigation("home", "contacto")}
                className="text-white/70 hover:text-white transition-colors py-2 tracking-[0.2em] uppercase text-xs text-left"
              >
                Contacto
              </button>
              <Button 
                variant="outline" 
                className="border border-white/40 text-white hover:bg-white hover:text-black w-full px-8 py-2 tracking-[0.25em] text-xs transition-all duration-500 rounded-none"
              >
                PORTAL CLIENTES
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}