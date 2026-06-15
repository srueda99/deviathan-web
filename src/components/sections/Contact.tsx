"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('?service=')) {
        const service = decodeURIComponent(hash.split('?service=')[1]);
        setSelectedService(service);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-kanit mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ¡Estamos Listos! <span className="text-primary">¿Y Tú?</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 font-open-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Déjanos tus datos y te contactaremos en menos de una hora.
          </motion.p>
        </div>

        <motion.div
          className="bg-secondary/40 border border-foreground/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-kanit font-bold mb-2">¡Mensaje Recibido!</h3>
              <p className="text-foreground/70 font-open-sans">Te contactaremos a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3 relative">
                  <label htmlFor="name" className={`text-sm font-medium font-kanit transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-foreground/80'}`}>Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-background/30 border-b-2 border-x-0 border-t-0 border-foreground/10 px-0 py-3 focus:outline-none focus:ring-0 focus:border-primary transition-all font-open-sans placeholder:text-foreground/20 rounded-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3 relative">
                  <label htmlFor="email" className={`text-sm font-medium font-kanit transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-foreground/80'}`}>Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-background/30 border-b-2 border-x-0 border-t-0 border-foreground/10 px-0 py-3 focus:outline-none focus:ring-0 focus:border-primary transition-all font-open-sans placeholder:text-foreground/20 rounded-none"
                    placeholder="john@ejemplo.com"
                  />
                </div>
              </div>

              <div className="space-y-3 relative">
                <label htmlFor="service" className={`text-sm font-medium font-kanit transition-colors ${focusedField === 'service' ? 'text-primary' : 'text-foreground/80'}`}>Servicio de Interés</label>
                <select 
                  id="service" 
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-background/30 border-b-2 border-x-0 border-t-0 border-foreground/10 px-0 py-3 focus:outline-none focus:ring-0 focus:border-primary transition-all font-open-sans appearance-none rounded-none cursor-pointer"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="" disabled className="bg-secondary text-foreground/50">Selecciona un servicio</option>
                  <option value="Web Development" className="bg-secondary text-foreground">Desarrollo Web</option>
                  <option value="Mobile Apps" className="bg-secondary text-foreground">Aplicaciones Móviles</option>
                  <option value="Software Dev" className="bg-secondary text-foreground">Desarrollo de Software</option>
                  <option value="UI/UX Design" className="bg-secondary text-foreground">Diseño UI/UX</option>
                  <option value="Infrastructure" className="bg-secondary text-foreground">Infraestructura</option>
                  <option value="Cybersecurity" className="bg-secondary text-foreground">Ciberseguridad</option>
                  <option value="Artificial Intelligence" className="bg-secondary text-foreground">Inteligencia Artificial</option>
                  <option value="Automation" className="bg-secondary text-foreground">Automatización</option>
                  <option value="Other" className="bg-secondary text-foreground">Otro</option>
                </select>
              </div>

              <div className="space-y-3 relative">
                <label htmlFor="message" className={`text-sm font-medium font-kanit transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-foreground/80'}`}>Háblanos de tu proyecto</label>
                <textarea 
                  id="message" 
                  rows={3}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-background/30 border-b-2 border-x-0 border-t-0 border-foreground/10 px-0 py-3 focus:outline-none focus:ring-0 focus:border-primary transition-all font-open-sans resize-none placeholder:text-foreground/20 rounded-none"
                  placeholder="Quiero construir..."
                ></textarea>
              </div>

              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-foreground/5 border border-foreground/10 hover:bg-primary hover:border-primary text-foreground font-kanit font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Procesando...
                  </>
                ) : (
                  <>
                    Iniciar Proyecto <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
