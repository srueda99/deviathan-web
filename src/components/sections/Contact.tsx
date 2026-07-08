"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Loader2, MessageCircle, CheckCircle2 } from "lucide-react";

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
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      
      {/* Subtle Grid Pattern - Expanded coverage */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.08] pointer-events-none [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_30%,transparent_80%)]"></div>
      
      {/* Animated abstract shapes DIRECTLY behind the form to highlight glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[800px] z-0 pointer-events-none opacity-60">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-primary/40 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[20%] w-[450px] h-[450px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen"
        />
      </div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-semibold mb-6 uppercase tracking-widest bg-foreground/5 backdrop-blur-md"
          >
            <MessageCircle size={16} /> Contacto Directo
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold font-kanit mb-6 uppercase tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ESTAMOS LISTOS. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient-xy_3s_linear_infinite]">
              ¿Y Tú?
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-foreground font-open-sans max-w-2xl mx-auto font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Soluciones convencionales traen resultados convencionales. Déjanos tus datos y empecemos a crear algo extraordinario. Te responderemos en menos de una hora.
          </motion.p>
        </div>

        <motion.div
          className="rounded-[40px] p-8 md:p-14 relative overflow-hidden shadow-[0_0_30px_var(--secondary)] border border-foreground/10 bg-secondary/5 backdrop-blur-[2px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          {/* Subtle reflection overlay for the glass */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>
          <div className="absolute -left-[50%] -top-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
          
          <div className="relative z-10">
            {submitted ? (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-24 h-24 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_var(--accent)]">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-kanit font-black mb-4 tracking-tight">¡Misión Exitosa!</h3>
                <p className="text-foreground/70 font-open-sans text-xl">Hemos recibido tu solicitud. Nuestro equipo se contactará contigo a la brevedad.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3 relative group">
                    <label htmlFor="name" className={`text-sm font-bold font-kanit uppercase tracking-widest transition-colors ${focusedField === 'name' ? 'text-accent' : 'text-foreground/60'}`}>Nombre Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-background/30 backdrop-blur-md border border-foreground/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-open-sans placeholder:text-foreground/30 shadow-inner"
                      placeholder="Ej: Juan Pérez"
                    />
                  </div>
                  <div className="space-y-3 relative group">
                    <label htmlFor="email" className={`text-sm font-bold font-kanit uppercase tracking-widest transition-colors ${focusedField === 'email' ? 'text-accent' : 'text-foreground/60'}`}>Correo Corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-background/30 backdrop-blur-md border border-foreground/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-open-sans placeholder:text-foreground/30 shadow-inner"
                      placeholder="juan@tuempresa.com"
                    />
                  </div>
                </div>

                <div className="space-y-3 relative group">
                  <label htmlFor="service" className={`text-sm font-bold font-kanit uppercase tracking-widest transition-colors ${focusedField === 'service' ? 'text-accent' : 'text-foreground/60'}`}>Servicio de Interés</label>
                  <select 
                    id="service" 
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-background/30 backdrop-blur-md border border-foreground/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-open-sans cursor-pointer appearance-none shadow-inner"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="" disabled className="bg-secondary text-foreground/50">Selecciona el área principal</option>
                    <option value="Software a la Medida" className="bg-background text-foreground">Software a la Medida</option>
                    <option value="Automatizaciones" className="bg-background text-foreground">Automatizaciones</option>
                    <option value="Inteligencia Artificial" className="bg-background text-foreground">Inteligencia Artificial</option>
                    <option value="Plataformas Web" className="bg-background text-foreground">Plataformas Web</option>
                    <option value="Apps Móviles" className="bg-background text-foreground">Apps Móviles</option>
                    <option value="Ciberseguridad" className="bg-background text-foreground">Ciberseguridad</option>
                    <option value="Diseño UI/UX" className="bg-background text-foreground">Diseño UI/UX</option>
                    <option value="Otro" className="bg-background text-foreground">Otro</option>
                  </select>
                </div>

                <div className="space-y-3 relative group">
                  <label htmlFor="message" className={`text-sm font-bold font-kanit uppercase tracking-widest transition-colors ${focusedField === 'message' ? 'text-accent' : 'text-foreground/60'}`}>Detalles del Proyecto</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-background/30 backdrop-blur-md border border-foreground/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-open-sans resize-none placeholder:text-foreground/30 shadow-inner"
                    placeholder="Cuéntanos brevemente qué tienes en mente..."
                  ></textarea>
                </div>

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white hover:text-foreground font-kanit font-black text-xl py-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-4 mt-10 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-secondary opacity-0 font-foreground group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" /> PROCESANDO...
                      </>
                    ) : (
                      <>
                        ENVIAR <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}