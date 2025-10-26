import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import backgroundImage from "../assets/images/background.png";
import { CountUp } from "./CountUp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Business meeting" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-8 py-3 border border-white/30 mb-8 rounded-none">
            <span className="text-white/90 tracking-[0.25em] uppercase text-xs">Soluciones Financieras de Élite</span>
          </div>
          
          <h1 className="text-white mb-8 tracking-wider text-5xl md:text-6xl lg:text-7xl">
            Inversiones Estratégicas para tu crecimiento
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto">
            Gestionamos fondos de inversión institucionales y estructuramos operaciones comerciales de alto valor con un enfoque en maximizar retornos y minimizar riesgos.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="group border border-white text-black hover:bg-white/10 hover:border-white hover:text-white btn-hover-shine btn-icon-white-hover px-12 py-7 tracking-[0.25em] text-xs transition-all duration-300 rounded-none transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              AGENDAR CONSULTA
              <ArrowRight className="ml-3 h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border border-white/40 text-black hover:bg-white/10 hover:border-white hover:text-white hover-gradient-soft btn-icon-white-hover px-12 py-7 tracking-[0.25em] text-xs transition-all duration-300 rounded-none transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              EXPLORAR SERVICIOS
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pt-12 border-t border-white/20 max-w-4xl mx-auto">
            <div className="text-center">
              <CountUp to={2.5} decimals={1} suffix="B+" className="text-5xl text-white mb-3 tracking-tight" />
              <div className="text-white/60 tracking-[0.2em] uppercase text-xs">Activos Gestionados</div>
            </div>
            <div className="text-center">
              <CountUp to={150} suffix="+" className="text-5xl text-white mb-3 tracking-tight" />
              <div className="text-white/60 tracking-[0.2em] uppercase text-xs">Clientes Institucionales</div>
            </div>
            <div className="text-center">
              <CountUp to={25} suffix="+" className="text-5xl text-white mb-3 tracking-tight" />
              <div className="text-white/60 tracking-[0.2em] uppercase text-xs">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}