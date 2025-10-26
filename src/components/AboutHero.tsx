import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-black pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1703014172880-a9ad043097c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjEzNjA2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern architecture"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-8 py-3 border border-white/30 mb-8 rounded-none">
            <span className="text-white/90 tracking-[0.25em] uppercase text-xs">Acerca de Nosotros</span>
          </div>
          
          <h1 className="text-white mb-8 tracking-wider text-5xl md:text-6xl lg:text-7xl">
            Liderando la Innovación en Inversiones Institucionales
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto">
            Durante más de 25 años, hemos construido un legado de excelencia financiera, 
            combinando experiencia institucional con visión estratégica para generar 
            valor sostenible a nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
