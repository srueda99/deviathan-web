"use client";

import { useState, useEffect } from "react";
import { m, useScroll } from "framer-motion";
import { CheckCircle2, Hexagon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const benefits = [
  "Entendemos el problema antes de desarrollar.",
  "Mantenemos comunicación directa durante todo el proyecto.",
  "Nada de soluciones genéricas.",
  "Simplificamos procesos, no los complicamos.",
  "Construimos pensando en el crecimiento.",
  "Actuamos como socios, no como proveedores.",
];

export function About() {
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="py-32 relative bg-secondary/10 overflow-hidden border-y border-foreground/5">
      {/* Patrón de puntos en el fondo */}
      <div className="absolute inset-0 opacity-[0.25] z-0" style={{ backgroundImage: 'radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      {/* Contenedor principal */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <m.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            {/* Contenedor del Logo */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-30 blur-2xl animate-pulse"></div>
              <m.div 
                className="absolute inset-0 rounded-[40px] bg-background/40 backdrop-blur-3xl border border-foreground/10 flex items-center justify-center overflow-hidden cursor-crosshair group shadow-[0_0_50px_rgba(0,0,0,0.2)]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Marco decorativo */}
                <div className="absolute top-0 left-10 w-px h-full bg-foreground/10"></div>
                <div className="absolute top-10 left-0 w-full h-px bg-foreground/10"></div>
                <div className="absolute bottom-0 right-10 w-px h-full bg-foreground/10"></div>
                <div className="absolute bottom-10 right-0 w-full h-px bg-foreground/10"></div>
                {/* Logo según el tema */}
                <div className={`absolute w-[200%] h-[200%] origin-center transition-transform duration-700 ease-out group-hover:scale-110 ${!mounted ? '' : resolvedTheme === 'dark' ?
                                    'translate-x-12 translate-y-5 md:translate-x-16  lg:translate-x-14 xl:translate-x-16 2xl:translate-y-6' :
                                    'translate-x-8 translate-y-1 md:translate-x-11 lg:translate-x-10 xl:translate-x-12'}`
                                }>
                  {mounted && (
                    <Image
                      src={resolvedTheme === 'dark' ? "/logos/logo-white.svg" : "/logos/logo-black.svg"}
                      alt="Deviathan Core"
                      fill
                      className={`object-contain opacity-100 drop-shadow-[0_0_30px_var(--primary)] transition-all duration-300 ${isHovered ? 'blur-[2px] opacity-80' : ''}`}
                    />
                  )}
                  {/* Efecto glitch en el hover */}
                  {isHovered && mounted && (
                    <>
                      <div 
                        className="absolute inset-0 opacity-80 mix-blend-screen"
                        style={{ 
                          animation: 'glitch-anim-1 0.2s infinite linear alternate-reverse',
                          filter: 'drop-shadow(-8px 0px 0px var(--accent))'
                        }}
                      >
                        <Image src={resolvedTheme === 'dark' ? "/logos/logo-white.svg" : "/logos/logo-black.svg"} alt="" fill className="object-contain" />
                      </div>
                      <div 
                        className="absolute inset-0 opacity-80 mix-blend-screen"
                        style={{ 
                          animation: 'glitch-anim-2 0.3s infinite linear alternate-reverse',
                          filter: 'drop-shadow(8px 0px 0px var(--primary))'
                        }}
                      >
                        <Image src={resolvedTheme === 'dark' ? "/logos/logo-white.svg" : "/logos/logo-black.svg"} alt="" fill className="object-contain" />
                      </div>
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,107,0,0.06),rgba(0,0,0,0.02),rgba(118,104,231,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10" />
                    </>
                  )}
                </div>
              </m.div>
            </div>
          </m.div>
          {/* Texto y beneficios */}
          <m.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Hexagon className="text-accent animate-[spin_10s_linear_infinite]" size={24} />
              <span className="text-accent font-mono uppercase tracking-[0.3em] text-sm">Nuestro ADN</span>
            </div>
            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black font-kanit mb-8 leading-tight">
              NUESTRA PROMESA ES<br/>
              <span className="text-transparent bg-clip-text bg-primary">SIMPLE</span>
            </h2>
            {/* Subtítulo */}
            <p className="text-xl text-foreground font-open-sans mb-10 font-normal leading-relaxed">
              Queremos que la tecnología impulse tu empresa, no que se convierta en otro problema por resolver.
              Por eso trabajamos como tu <span className="text-primary font-semibold">aliado</span> tecnológico en cada etapa del camino.
            </p>
            {/* Beneficios */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <m.div 
                  key={index}
                  className="flex items-center gap-4 group cursor-default"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-open-sans text-lg text-foreground/90 group-hover:text-primary transition-colors duration-300 font-medium">{benefit}</p>
                </m.div>
              ))}
            </div>
            {/* Texto de cierre */}
            <m.div 
              className="mt-12 p-8 glass-card rounded-2xl border-l-4 border-l-accent relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="absolute -right-5 -top-5 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
              <p className="font-kanit text-2xl font-bold text-foreground relative z-10">
                El Resultado: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
                  Más tiempo para hacer crecer tu negocio. Menos tiempo resolviendo problemas.
                </span>
              </p>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}