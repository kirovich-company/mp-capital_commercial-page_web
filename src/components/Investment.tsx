import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Estrategias de inversión diversificadas y probadas",
  "Gestión activa con monitoreo continuo de portafolios",
  "Acceso a oportunidades exclusivas de mercado",
  "Transparencia total y reportes detallados",
  "Equipo con experiencia en mercados globales",
  "Enfoque en generación de valor a largo plazo",
];

export function Investment() {
  return (
    <section id="inversiones" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-8 py-3 border border-white/30 mb-6 rounded-none">
              <span className="tracking-[0.25em] uppercase text-xs text-white/90">Por Qué Elegirnos</span>
            </div>
            <h2 className="mb-8 tracking-wider text-white text-4xl md:text-5xl">Excelencia en Gestión de Inversiones</h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Nuestra filosofía se centra en construir relaciones a largo plazo basadas en confianza, transparencia y resultados consistentes. Cada estrategia es diseñada para cumplir objetivos específicos de nuestros clientes.
            </p>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-5 h-5 border border-white/30 flex-shrink-0 mt-1 group-hover:border-white transition-colors duration-300" />
                  <span className="text-white/70 group-hover:text-white transition-colors duration-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1638481826540-7710b13f7d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwZ3JhcGh8ZW58MXx8fHwxNzYxNDQwMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Financial investment"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black border border-white/20 text-white p-10 max-w-xs">
              <div className="text-5xl mb-3 tracking-tight text-white">15.2%</div>
              <div className="text-white/60 tracking-[0.2em] uppercase text-xs">Retorno promedio anual últimos 10 años</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}