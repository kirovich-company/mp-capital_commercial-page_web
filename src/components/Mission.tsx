export function Mission() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Mission */}
            <div className="border border-white/10 p-12">
              <div className="mb-8">
                <span className="tracking-[0.25em] uppercase text-xs text-white/50">01</span>
              </div>
              <h2 className="text-white mb-6 tracking-wider text-3xl">Nuestra Misión</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Proporcionar soluciones de inversión superiores que generen retornos 
                excepcionales y sostenibles, mientras mantenemos los más altos estándares 
                de integridad, transparencia y excelencia en el servicio al cliente.
              </p>
            </div>

            {/* Vision */}
            <div className="border border-white/10 p-12">
              <div className="mb-8">
                <span className="tracking-[0.25em] uppercase text-xs text-white/50">02</span>
              </div>
              <h2 className="text-white mb-6 tracking-wider text-3xl">Nuestra Visión</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Ser el socio de inversión más confiable y respetado a nivel global, 
                reconocido por nuestra capacidad de identificar oportunidades únicas 
                y estructurar operaciones que maximicen el valor para todas las partes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
