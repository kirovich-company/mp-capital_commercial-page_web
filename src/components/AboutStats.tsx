import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  {
    value: "$2.5B+",
    label: "Activos bajo gestión",
  },
  {
    value: "150+",
    label: "Clientes institucionales",
  },
  {
    value: "25+",
    label: "Años de experiencia",
  },
  {
    value: "15.2%",
    label: "Retorno promedio anual",
  },
  {
    value: "8",
    label: "Oficinas globales",
  },
  {
    value: "200+",
    label: "Profesionales especializados",
  },
];

export function AboutStats() {
  return (
    <section className="py-32 bg-black relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjEzOTkxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Office"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-8 py-3 border border-white/30 mb-6 rounded-none">
            <span className="tracking-[0.25em] uppercase text-xs text-white/90">Nuestra Trayectoria</span>
          </div>
          <h2 className="mb-6 tracking-wider text-white text-4xl md:text-5xl">
            Resultados que Hablan por Sí Mismos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="border border-white/10 p-10 text-center group hover:border-white/30 transition-all duration-500"
            >
              <div className="text-5xl md:text-6xl text-white mb-4 tracking-tight">
                {stat.value}
              </div>
              <div className="text-white/60 tracking-[0.2em] uppercase text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
