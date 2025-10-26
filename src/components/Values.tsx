import { Target, Shield, Users, TrendingUp, Award, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excelencia",
    description: "Búsqueda constante de los más altos estándares en cada aspecto de nuestro trabajo.",
  },
  {
    icon: Shield,
    title: "Integridad",
    description: "Actuamos con ética y transparencia absoluta en todas nuestras operaciones.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Creemos en el poder de las relaciones a largo plazo y la confianza mutua.",
  },
  {
    icon: TrendingUp,
    title: "Innovación",
    description: "Adoptamos nuevas estrategias y tecnologías para mantener nuestra ventaja competitiva.",
  },
  {
    icon: Award,
    title: "Resultados",
    description: "Comprometidos con la generación de valor medible y sostenible para nuestros clientes.",
  },
  {
    icon: Globe,
    title: "Visión Global",
    description: "Perspectiva internacional con profundo conocimiento de mercados locales.",
  },
];

export function Values() {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-8 py-3 border border-white/30 mb-6 rounded-none">
            <span className="tracking-[0.25em] uppercase text-xs text-white/90">Nuestros Valores</span>
          </div>
          <h2 className="mb-6 tracking-wider text-white text-4xl md:text-5xl">
            Principios que Guían Nuestras Decisiones
          </h2>
          <p className="text-xl text-white/60">
            Estos valores fundamentales definen quiénes somos y cómo operamos cada día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="border border-white/10 p-10 group hover:border-white/30 transition-all duration-500"
              >
                <div className="w-14 h-14 border border-white/30 flex items-center justify-center mb-6 group-hover:border-white transition-colors duration-500">
                  <Icon className="h-7 w-7 text-white/70 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-white mb-4 tracking-wide text-xl">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
