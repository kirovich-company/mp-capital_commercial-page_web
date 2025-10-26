import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <div className="inline-block px-8 py-3 border border-white/30 mb-6 rounded-none">
              <span className="tracking-[0.25em] uppercase text-xs text-white/90">Contáctenos</span>
            </div>
            <h2 className="mb-8 tracking-wider text-white text-4xl md:text-5xl">Hablemos de su Estrategia de Inversión</h2>
            <p className="text-xl text-white/60 mb-16 leading-relaxed">
              Nuestro equipo de asesores está disponible para discutir oportunidades de inversión y estructurar soluciones personalizadas para sus necesidades específicas.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white/70" />
                </div>
                <div>
                  <div className="text-white/50 mb-2 tracking-[0.2em] uppercase text-xs">Teléfono</div>
                  <div className="text-xl text-white tracking-wide">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white/70" />
                </div>
                <div>
                  <div className="text-white/50 mb-2 tracking-[0.2em] uppercase text-xs">Email</div>
                  <div className="text-xl text-white tracking-wide">invest@capitalpartners.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white/70" />
                </div>
                <div>
                  <div className="text-white/50 mb-2 tracking-[0.2em] uppercase text-xs">Oficinas</div>
                  <div className="text-xl text-white tracking-wide">Park Avenue, Nueva York<br />Reforma, Ciudad de México</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-white/10 p-10">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="firstName" className="text-white/70 tracking-[0.15em] uppercase text-xs">Nombre</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Juan" 
                    className="bg-transparent border-white/20 text-white placeholder:text-white/30 focus:border-white/50"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="lastName" className="text-white/70 tracking-[0.15em] uppercase text-xs">Apellido</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Pérez" 
                    className="bg-transparent border-white/20 text-white placeholder:text-white/30 focus:border-white/50"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-white/70 tracking-[0.15em] uppercase text-xs">Email Corporativo</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="juan.perez@empresa.com" 
                  className="bg-transparent border-white/20 text-white placeholder:text-white/30 focus:border-white/50"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-white/70 tracking-[0.15em] uppercase text-xs">Teléfono</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+52 555 123 4567" 
                  className="bg-transparent border-white/20 text-white placeholder:text-white/30 focus:border-white/50"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="interest" className="text-white/70 tracking-[0.15em] uppercase text-xs">Área de Interés</Label>
                <Select>
                  <SelectTrigger 
                    id="interest" 
                    className="bg-transparent border-white/20 text-white focus:border-white/50"
                  >
                    <SelectValue placeholder="Seleccione una opción" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem style={{ color: 'white' }} value="funds">Fondos de Inversión</SelectItem>
                    <SelectItem style={{ color: 'white' }} value="deals">Tratos Comerciales</SelectItem>
                    <SelectItem style={{ color: 'white' }} value="wealth">Gestión Patrimonial</SelectItem>
                    <SelectItem style={{ color: 'white' }} value="due-diligence">Due Diligence</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-white/70 tracking-[0.15em] uppercase text-xs">Mensaje</Label>
                <Textarea 
                  id="message" 
                  placeholder="Cuéntenos sobre sus objetivos de inversión..."
                  className="bg-transparent border-white/20 text-white placeholder:text-white/30 min-h-32 focus:border-white/50"
                />
              </div>

              <Button 
                variant="outline"
                className="w-full border border-white text-black hover:bg-white/10 hover:border-white hover:text-white tracking-[0.25em] py-7 transition-all duration-500 rounded-none" 
                size="lg"
              >
                ENVIAR SOLICITUD
              </Button>

              <p className="text-sm text-white/40 text-center">
                Al enviar este formulario, acepta nuestra política de privacidad y confidencialidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}