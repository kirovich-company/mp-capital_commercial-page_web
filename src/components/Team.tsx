import { ImageWithFallback } from "./figma/ImageWithFallback";

const team = [
  {
    name: "Ricardo Mendoza",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE0Mzc4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "25+ años de experiencia en banca de inversión y private equity.",
  },
  {
    name: "Carolina Suárez",
    position: "Chief Investment Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE0Mzc4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Especialista en estrategias de inversión global con MBA de Harvard.",
  },
  {
    name: "Miguel Ángel Torres",
    position: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE0Mzc4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Experto en estructuración financiera y gestión de riesgos.",
  },
  {
    name: "Sofía Ramírez",
    position: "Head of Client Relations",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE0Mzc4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Relaciones institucionales con enfoque en family offices UHNW.",
  },
];

export function Team() {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-8 py-3 border border-white/30 mb-6 rounded-none">
            <span className="tracking-[0.25em] uppercase text-xs text-white/90">Equipo Directivo</span>
          </div>
          <h2 className="mb-6 tracking-wider text-white text-4xl md:text-5xl">
            Liderazgo con Visión Global
          </h2>
          <p className="text-xl text-white/60">
            Profesionales de élite con décadas de experiencia en los mercados financieros más importantes del mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="border border-white/10 group hover:border-white/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <h3 className="text-white mb-2 tracking-wide text-2xl">{member.name}</h3>
                <div className="text-white/50 mb-4 tracking-[0.2em] uppercase text-xs">
                  {member.position}
                </div>
                <p className="text-white/60 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
