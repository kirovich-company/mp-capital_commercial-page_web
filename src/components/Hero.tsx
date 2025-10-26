import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYxMzg2OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Business meeting"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-8 py-3 border border-white/30 mb-8 rounded-none">
            <span className="text-white/90 tracking-[0.25em] uppercase text-xs">Soluciones Financieras de Élite</span>
          </div>
          
          <h1 className="text-white mb-8 tracking-wider text-5xl md:text-6xl lg:text-7xl">
            Inversiones Estratégicas para el Crecimiento Sostenible
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto">
            Gestionamos fondos de inversión institucionales y estructuramos operaciones comerciales de alto valor con un enfoque en maximizar retornos y minimizar riesgos.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border border-white text-white hover:bg-white hover:text-black px-12 py-7 tracking-[0.25em] text-xs transition-all duration-500 rounded-none"
            >
              AGENDAR CONSULTA
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border border-white/40 text-white hover:bg-white/10 hover:border-white px-12 py-7 tracking-[0.25em] text-xs transition-all duration-500 rounded-none"
            >
              EXPLORAR SERVICIOS
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pt-12 border-t border-white/20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl text-white mb-3 tracking-tight">$2.5B+</div>
              <div className="text-white/60 tracking-[0.2em] uppercase text-xs">Activos Gestionados</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-white mb-3 tracking-tight">150+</div>
              <div className="text-white/60 tracking-[0.2em] uppercase text-xs">Clientes Institucionales</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-white mb-3 tracking-tight">25+</div>
              <div className="text-white/60 tracking-[0.2em] uppercase text-xs">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}