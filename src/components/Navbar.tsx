import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";
import { Building2, Menu, X } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface NavbarProps {
  onNavigate?: (page: "home" | "about" | "login") => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  // Login overlay state
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrorEmail, setLoginErrorEmail] = useState<string>("");
  const [loginErrorPassword, setLoginErrorPassword] = useState<string>("");
  const [loginSubmitting, setLoginSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState<string>("");

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

  // Lock body scroll and ESC to close when loginOpen
  useEffect(() => {
    if (loginOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLoginOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [loginOpen]);

  const progressRatio = Math.min(1, Math.max(0, scrollProgress / 100));
  const bgOpacity = 0.6 + 0.3 * progressRatio;
  const blurPx = 4 + 8 * progressRatio;
  const shadowOpacity = 0.15 + 0.25 * progressRatio;

  const handleNavigation = (page: "home" | "about" | "login", sectionId?: string) => {
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

  function validateEmail(value: string) {
    return /.+@.+\..+/.test(value);
  }

  function validatePassword(value: string) {
    return value.trim().length >= 6;
  }

  async function handleLoginSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoginErrorEmail("");
    setLoginErrorPassword("");
    setLoginSuccess("");

    let hasError = false;
    if (!validateEmail(loginEmail)) {
      setLoginErrorEmail("Email inválido");
      hasError = true;
    }
    if (!validatePassword(loginPassword)) {
      setLoginErrorPassword("Mínimo 6 caracteres");
      hasError = true;
    }
    if (hasError) return;

    setLoginSubmitting(true);
    try {
      // Simular request (no endpoint real aún)
      await new Promise((r) => setTimeout(r, 1000));
      setLoginSuccess("Ingreso exitoso (demo)");
      setTimeout(() => setLoginOpen(false), 700);
    } finally {
      setLoginSubmitting(false);
    }
  }

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
              // onClick={() => (onNavigate ? onNavigate("login") : setLoginOpen(true))}
              onClick={() => handleNavigation("login")}
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
                onClick={() => (onNavigate ? onNavigate("login") : setLoginOpen(true))}
                className="border border-white/40 text-black hover:bg-white/10 hover:border-white hover:text-white hover-gradient-soft btn-icon-white-hover w-full px-8 py-2 tracking-[0.25em] text-xs transition-all duration-300 rounded-none transform hover:-translate-y-0.5 active:scale-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                PORTAL CLIENTES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* Login Overlay via Portal */}
    {loginOpen && createPortal(
      <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setLoginOpen(false)}>
        <div className="w-[320px] sm:w-[360px] bg-white p-6 relative rounded-lg shadow-2xl ring-1 ring-black/10" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setLoginOpen(false)} className="absolute top-4 right-4 text-black/60 hover:text-black transition-colors" aria-label="Cerrar">
            <X className="h-5 w-5" />
          </button>
          <div className="mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-black" />
            <div className="text-black text-base tracking-wide">Portal Clientes</div>
          </div>
          <div className="text-black/60 text-sm mb-4">Inicia sesión para acceder a tu cuenta.</div>
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-black">
            <div className="space-y-2">
              <Label htmlFor="login-email" className="text-black/60 tracking-[0.15em] uppercase text-xs">Usuario*</Label>
              <Input id="login-email" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="Usuario" className="bg-white border text-black placeholder:text-black/40" />
              {loginErrorEmail && <div className="text-red-600 text-xs">{loginErrorEmail}</div>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password" className="text-black/60 tracking-[0.15em] uppercase text-xs">Contraseña*</Label>
              <Input id="login-password" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Contraseña" className="bg-white border text-black placeholder:text-black/40" />
              {loginErrorPassword && <div className="text-red-600 text-xs">{loginErrorPassword}</div>}
            </div>
            {loginSuccess && <div className="text-green-600 text-xs">{loginSuccess}</div>}
            <div className="flex flex-col gap-3 pt-2">
              <Button type="submit" disabled={loginSubmitting} className="bg-black text-white hover:bg-black/90 rounded-full tracking-[0.15em] py-5">
                {loginSubmitting ? "Ingresando..." : "Ingresar"}
              </Button>
              <button type="button" onClick={() => alert('Recuperación (demo)')} className="text-center text-black/70 text-sm hover:underline">¿Olvidó su contraseña?</button>
            </div>
          </form>
        </div>
      </div>,
      document.body,
    )}
    </>
  );
}