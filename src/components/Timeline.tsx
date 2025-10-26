const milestones = [
  {
    year: "2000",
    title: "Fundación",
    description: "Capital Partners es fundada en Nueva York con una visión clara: revolucionar la gestión de inversiones institucionales.",
  },
  {
    year: "2005",
    title: "Expansión Internacional",
    description: "Apertura de oficinas en Ciudad de México y Londres, consolidando nuestra presencia global.",
  },
  {
    year: "2010",
    title: "$1B en Activos",
    description: "Alcanzamos el hito de mil millones de dólares en activos bajo gestión.",
  },
  {
    year: "2015",
    title: "Diversificación de Fondos",
    description: "Lanzamiento de nuestros fondos de infraestructura y energías renovables.",
  },
  {
    year: "2020",
    title: "Tecnología e Innovación",
    description: "Implementación de plataformas de análisis de datos avanzadas y AI para optimización de portafolios.",
  },
  {
    year: "2025",
    title: "$2.5B+ en Activos",
    description: "Más de 150 clientes institucionales confían en nosotros para gestionar sus inversiones estratégicas.",
  },
];

export function Timeline() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-8 py-3 border border-white/30 mb-6 rounded-none">
            <span className="tracking-[0.25em] uppercase text-xs text-white/90">Nuestra Historia</span>
          </div>
          <h2 className="mb-6 tracking-wider text-white text-4xl md:text-5xl">
            25 Años de Crecimiento y Excelencia
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 group"
            >
              <div className="text-right">
                <div className="text-5xl text-white tracking-tight group-hover:text-white/70 transition-colors duration-500">
                  {milestone.year}
                </div>
              </div>
              
              <div className="border-l border-white/20 pl-8 md:pl-12 pb-8">
                <h3 className="text-white mb-4 tracking-wide text-2xl">
                  {milestone.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
