"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "AWS", type: "Infraestructura en la Nube" },
  { name: "Google Cloud", type: "Infraestructura en la Nube" },
  { name: "Azure", type: "Infraestructura en la Nube" },
  { name: "React & Next.js", type: "Desarrollo Web" },
  { name: "Node.js", type: "Desarrollo de Software" },
  { name: "Flutter", type: "Aplicaciones Móviles" },
  { name: "GitHub", type: "Control de Versiones" },
  { name: "Jenkins", type: "Automatización y Despliegue" },
  { name: "PostgreSQL", type: "Bases de Datos" },
  { name: "Python", type: "Inteligencia Artificial y Automatización" },
  { name: "Docker & Kubernetes", type: "Arquitectura y Escalabilidad" },
  { name: "OpenAI", type: "Inteligencia Artificial" },
  { name: "OpenClaw", type: "Inteligencia Artificial" },
];

const integrations = [
  { name: "WhatsApp Business Bots", type: "Servicio al Cliente, Reservas, Inventarios" },
  { name: "Telegram Bots", type: "Mensajería Instantánea, Bots de tareas" },
  { name: "Slack", type: "Colaboración entre Equipos" },
  { name: "HubSpot", type: "Automatización de Marketing" },
  { name: "Jira", type: "Gestión de Proyectos y Tickets" },
  { name: "Salesforce", type: "CRM" },
  { name: "Google Workspace", type: "Operaciones Comerciales" },
  { name: "Shopify", type: "E-Commerce" },
];

export function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

      <div className="container mx-auto px-6 mb-12 text-center relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold font-kanit mb-4">
          Potenciados por los <span className="text-primary">Estándares de la Industria</span>
        </h2>
        <p className="text-foreground/70 font-open-sans max-w-2xl mx-auto">
          Utilizamos tecnologías de vanguardia y nos integramos perfectamente con las plataformas que ya usas todos los días.
        </p>
      </div>

      {/* Top Carousel */}
      <div className="flex overflow-visible relative w-full mb-8 py-4">
        <motion.div 
          className="flex whitespace-nowrap gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <motion.div 
              key={`tech-${i}`} 
              className="inline-flex flex-col justify-center px-8 py-4 bg-secondary/30 border border-white/10 rounded-2xl min-w-[240px] cursor-default relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(118, 104, 231, 0.5)",
                backgroundColor: "rgba(17, 9, 65, 0.8)",
                boxShadow: "0 10px 30px -10px rgba(118, 104, 231, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="text-lg font-kanit font-semibold text-foreground relative z-10 group-hover:text-primary transition-colors">{tech.name}</span>
              <span className="text-xs font-open-sans text-primary/80 uppercase tracking-wider relative z-10">{tech.type}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Carousel */}
      <div className="flex overflow-visible relative w-full py-4">
        <motion.div 
          className="flex whitespace-nowrap gap-6 px-3"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...integrations, ...integrations].map((app, i) => (
            <motion.div 
              key={`app-${i}`} 
              className="inline-flex flex-col justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-2xl min-w-[240px] cursor-default relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(247, 247, 247, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="text-lg font-kanit font-semibold text-foreground relative z-10 group-hover:text-white transition-colors">{app.name}</span>
              <span className="text-xs font-open-sans text-foreground/50 uppercase tracking-wider relative z-10 group-hover:text-foreground/80 transition-colors">{app.type}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>
    </section>
  );
}
