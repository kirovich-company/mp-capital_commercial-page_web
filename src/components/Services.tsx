import { TrendingUp, Building2, Users, Shield } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Fondos de Inversión",
    description: "Estructuración y gestión de fondos de capital privado, deuda estructurada y vehículos de inversión alternativos para inversionistas institucionales.",
  },
  {
    icon: Building2,
    title: "Tratos Comerciales",
    description: "Asesoría en fusiones, adquisiciones y operaciones de gran escala. Estructuramos transacciones complejas que maximizan el valor para todas las partes.",
  },
  {
    icon: Users,
    title: "Gestión Patrimonial",
    description: "Soluciones personalizadas para ultra-high-net-worth individuals y family offices con estrategias de preservación y crecimiento de capital.",
  },
  {
    icon: Shield,
    title: "Due Diligence",
    description: "Análisis exhaustivo de oportunidades de inversión, evaluación de riesgos y auditoría financiera para decisiones informadas y seguras.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-8 py-3 border border-white/30 mb-6 rounded-none">
            <span className="tracking-[0.25em] uppercase text-xs text-white/90">Nuestros Servicios</span>
          </div>
          <h2 className="mb-6 tracking-wider text-white text-4xl md:text-5xl">Soluciones Integrales de Inversión</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ofrecemos servicios especializados para inversionistas institucionales y empresas que buscan maximizar su potencial financiero.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="border border-white/10 hover:border-white/30 transition-all duration-300 p-10 group"
              >
                <div className="w-14 h-14 border border-white/30 flex items-center justify-center mb-6 group-hover:border-white transition-colors duration-300">
                  <Icon className="h-7 w-7 text-white/70 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-white mb-4 tracking-wide text-2xl">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}