import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center border border-white/10 p-16 md:p-20">
          <h2 className="text-white mb-8 tracking-wider text-4xl md:text-5xl">
            ¿Listo para Comenzar su Estrategia de Inversión?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo de expertos está disponible para discutir cómo podemos 
            ayudarle a alcanzar sus objetivos financieros con soluciones personalizadas 
            de inversión institucional.
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
        </div>
      </div>
    </section>
  );
}
