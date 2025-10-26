import { Separator } from "./ui/separator";
import { Building2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-7 w-7 text-white" />
              <span className="text-lg tracking-[0.3em] uppercase text-white">Capital Partners</span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Excelencia en inversiones institucionales y estructuración de operaciones de alto valor.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 tracking-[0.2em] uppercase text-xs text-white/70">Servicios</h3>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Fondos de Inversión</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Tratos Comerciales</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Gestión Patrimonial</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Due Diligence</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 tracking-[0.2em] uppercase text-xs text-white/70">Empresa</h3>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Acerca de Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Equipo Directivo</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Carreras</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 tracking-[0.2em] uppercase text-xs text-white/70">Legal</h3>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Cumplimiento Regulatorio</a></li>
              <li><a href="#" className="hover:text-white transition-colors tracking-wide">Documentos Legales</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40">
          <p className="tracking-wide text-sm">© {currentYear} Capital Partners. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors tracking-[0.2em] uppercase text-xs">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors tracking-[0.2em] uppercase text-xs">Twitter</a>
            <a href="#" className="hover:text-white transition-colors tracking-[0.2em] uppercase text-xs">Bloomberg</a>
          </div>
        </div>

        <div className="mt-12 text-sm text-white/30 max-w-4xl leading-relaxed">
          <p>
            Advertencia de Riesgo: Las inversiones conllevan riesgos. El valor de las inversiones puede fluctuar. 
            El rendimiento pasado no garantiza resultados futuros. Este sitio es solo para fines informativos y 
            no constituye asesoramiento de inversión. Consulte con un profesional financiero antes de tomar decisiones de inversión.
          </p>
        </div>
      </div>
    </footer>
  );
}