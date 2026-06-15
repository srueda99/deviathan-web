"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

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
          className="bg-secondary/40 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium font-kanit">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-open-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium font-kanit">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-open-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium font-kanit">Servicio de Interés</label>
                <select 
                  id="service" 
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-open-sans appearance-none"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="" disabled>Selecciona un servicio</option>
                  <option value="Web Development">Desarrollo Web</option>
                  <option value="Mobile Apps">Aplicaciones Móviles</option>
                  <option value="Software Dev">Desarrollo de Software</option>
                  <option value="UI/UX Design">Diseño UI/UX</option>
                  <option value="Infrastructure">Infraestructura</option>
                  <option value="Cybersecurity">Ciberseguridad</option>
                  <option value="Artificial Intelligence">Inteligencia Artificial</option>
                  <option value="Automation">Automatización</option>
                  <option value="Other">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium font-kanit">Háblanos de tu proyecto</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-open-sans resize-none"
                  placeholder="Quiero construir..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Procesando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
