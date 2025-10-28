import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Eye, EyeOff } from "lucide-react";
import { wrap } from "node:module";

interface LoginFormProps {
  onNavigate?: (page: "home" | "about" | "login") => void;
  onLogin?: () => void;
}

export function LoginForm({ onNavigate, onLogin }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación real
    onLogin?.();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:p-30 lg:px-8 lg:pl-12 lg:pr-12 lg:pt-1 lg:px-1" >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <button 
            onClick={() => onNavigate?.("home")}
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <h1 className="text-white tracking-[0.3em] uppercase text-2xl mb-3">
              Capital Partners
            </h1>
          </button>
          <div className="h-px w-24 bg-white/20 mx-auto mb-8"></div>
          <div className="inline-block px-8 py-3 border border-white/30 rounded-none">
            <span className="tracking-[0.25em] uppercase text-xs text-white/90">Portal de Clientes</span>
          </div>
        </div>

        {/* Login Form */}
        <div className="border border-white/10 p-10">
          <h2 className="text-white mb-2 tracking-wider text-center text-2xl">
            Acceso Seguro
          </h2>
          <p className="text-white/50 text-center mb-10 tracking-wide text-sm">
            Ingrese sus credenciales para continuar
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-white/70 tracking-[0.15em] uppercase text-xs">
                Email Corporativo
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="nombre@empresa.com"
                className="bg-transparent border-white/20 text-white placeholder:text-white/30 focus:border-white/50 h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-white/70 tracking-[0.15em] uppercase text-xs">
                Contraseña
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-transparent border-white/20 text-white placeholder:text-white/30 focus:border-white/50 h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 z-10 text-white/60 hover:text-white transition-colors p-1"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 border border-white/30 group-hover:border-white/50 transition-colors flex items-center justify-center">
                  <input type="checkbox" className="hidden" />
                </div>
                <span className="text-white/50 group-hover:text-white/70 transition-colors tracking-wide text-xs">
                  Recordar sesión
                </span>
              </label>
              <button
                type="button"
                className="text-white/50 hover:text-white transition-colors tracking-wide text-xs"
              >
                ¿Olvidó su contraseña?
              </button>
            </div>

            <Button
              type="submit"
              variant="outline"
              className="w-full border border-white text-black hover:bg-white hover:text-black tracking-[0.25em] py-7 transition-all duration-500 rounded-none"
              
              size="lg"
            >
              INICIAR SESIÓN
            </Button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-black px-4 text-white/40 tracking-widest uppercase">
                  O
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              style={{ whiteSpace: "wrap" }}
              className="w-full border border-white/30 text-black hover:bg-white/5 hover:border-white/50 tracking-[0.2em] py-6 transition-all duration-500 rounded-none"
            >
              ACCESO CON CERTIFICADO DIGITAL
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-center text-white/40 text-sm leading-relaxed">
              ¿Necesita acceso al portal?{" "}
              <button className="text-white/70 hover:text-white transition-colors tracking-wide">
                Contacte a su asesor
              </button>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 text-center">
          <p className="text-white/30 text-xs leading-relaxed">
            Conexión segura SSL/TLS · Autenticación de dos factores disponible
          </p>
        </div>
      </div>
    </div>
  );
}