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
              variant="outline"
              className="border border-white text-white hover:bg-white hover:text-black px-12 py-7 tracking-[0.25em] text-xs transition-all duration-500 rounded-none"
            >
              AGENDAR CONSULTA
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              className="border border-white/40 text-white hover:bg-white/10 hover:border-white px-12 py-7 tracking-[0.25em] text-xs transition-all duration-500 rounded-none"
            >
              VER CASOS DE ÉXITO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
