import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Building2, Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigate?: (page: "home" | "about") => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastY = window.scrollY || 0;
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrollDir(y > lastY ? "down" : "up");
      lastY = y;
      setIsScrolled(y > 8);
      const doc = document.documentElement;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      setScrollProgress(Math.min(100, Math.max(0, (y / max) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progressRatio = Math.min(1, Math.max(0, scrollProgress / 100));
  const bgOpacity = 0.6 + 0.3 * progressRatio;
  const blurPx = 4 + 8 * progressRatio;
  const shadowOpacity = 0.15 + 0.25 * progressRatio;

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
    } else if (page === "home") {
      // Scroll to top when navigating home without a specific section
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        style={{ transition: "opacity 900ms ease-in-out" }}
      />

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div
          style={{
            width: `${scrollProgress}%`,
            height: "2px",
            background: "rgba(255,255,255,0.6)",
            transition: "width 150ms ease-out",
          }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b transition-transform duration-300 ${isScrolled ? "border-white/20" : "border-white/10"} ${scrollDir === "down" && isScrolled ? "-translate-y-20" : "translate-y-0"}`}
        style={{
          backgroundColor: `rgba(0,0,0, ${bgOpacity.toFixed(3)})`,
          backdropFilter: `blur(${blurPx.toFixed(1)}px)`,
          boxShadow: `0 6px 24px rgba(0,0,0, ${shadowOpacity.toFixed(3)})`,
        }}
      >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-20" : "h-24"}`}>
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
              onClick={() => handleNavigation("home", "contacto")}
              className="text-white/70 hover:text-white transition-colors tracking-[0.2em] uppercase text-xs"
            >
              Contacto
            </button>
            <button 
              onClick={() => handleNavigation("about")}
              style = {{ textDecorationLine: 'underline'}}
              className="text-white/70 hover:text-white transition-colors tracking-[0.2em] uppercase text-xs"
            >
              Nosotros
            </button>

            <Button 
              variant="outline" 
              className="border border-white/40 text-black hover:bg-white/10 hover:border-white hover:text-white hover-gradient-soft btn-icon-white-hover px-8 py-2 tracking-[0.25em] text-xs transition-all duration-300 rounded-none transform hover:-translate-y-0.5 active:scale-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              PORTAL CLIENTES
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Abrir menú"
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu with smooth animation */}
        <div
          className="md:hidden border-t border-white/10 overflow-hidden ease-in-out"
          style={{ maxHeight: isOpen ? 520 : 0, transition: "max-height 900ms ease-in-out" }}
        >
          <div
            className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}
            style={{ transition: "opacity 900ms ease-in-out, transform 900ms ease-in-out", paddingTop: "1.5rem", paddingBottom: "1.5rem", willChange: "opacity, transform" }}
          >
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
                onClick={() => handleNavigation("home", "contacto")}
                className="text-white/70 hover:text-white transition-colors py-2 tracking-[0.2em] uppercase text-xs text-left"
              >
                Contacto
              </button>
              <button 
                onClick={() => handleNavigation("about")}
                style = {{ textDecorationLine: 'underline'}} className="text-white/70 hover:text-white transition-colors py-2 tracking-[0.2em] uppercase text-xs text-left"
              >
                Nosotros
              </button>
              <Button 
                variant="outline" 
                className="border border-white/40 text-black hover:bg-white/10 hover:border-white hover:text-white hover-gradient-soft btn-icon-white-hover w-full px-8 py-2 tracking-[0.25em] text-xs transition-all duration-300 rounded-none transform hover:-translate-y-0.5 active:scale-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                PORTAL CLIENTES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}