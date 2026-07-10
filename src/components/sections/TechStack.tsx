"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { 
  FaAws, 
  FaSalesforce, 
  FaSlack
} from "react-icons/fa";
import { 
  BsOpenai
} from "react-icons/bs";
import { 
  VscAzure
} from "react-icons/vsc";
import { 
  SiGooglecloud,
  SiReact,
  SiNodedotjs,
  SiFlutter,
  SiGithub,
  SiJenkins,
  SiPostgresql,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiWhatsapp,
  SiTelegram,
  SiHubspot,
  SiJira,
  SiGoogle,
  SiShopify,
  SiN8N
} from "react-icons/si";

const technologies = [
  { name: "AWS", type: "Infraestructura", icon: FaAws },
  { name: "Google Cloud", type: "Infraestructura", icon: SiGooglecloud },
  { name: "Azure", type: "Infraestructura", icon: VscAzure },
  { name: "React & Next.js", type: "Desarrollo Web", icon: SiReact },
  { name: "Node.js", type: "Backend", icon: SiNodedotjs },
  { name: "Flutter", type: "Apps Móviles", icon: SiFlutter },
  { name: "GitHub", type: "Control Versiones", icon: SiGithub },
  { name: "Jenkins", type: "Integración Continua", icon: SiJenkins },
  { name: "PostgreSQL", type: "Bases de Datos", icon: SiPostgresql },
  { name: "Python", type: "Machine Learning", icon: SiPython },
  { name: "Docker", type: "Arquitectura", icon: SiDocker },
  { name: "Kubernetes", type: "Orquestación", icon: SiKubernetes },
  { name: "OpenAI", type: "Inteligencia Artificial", icon: BsOpenai },
  { name: "OpenClaw", type: "Inteligencia Artificial", icon: Brain },
  { name: "N8N", type: "Automatización", icon: SiN8N }
];

const integrations = [
  { name: "WhatsApp Bots", type: "Atención y Ventas", icon: SiWhatsapp },
  { name: "Telegram Bots", type: "Mensajería", icon: SiTelegram },
  { name: "Slack", type: "Colaboración", icon: FaSlack },
  { name: "HubSpot", type: "Marketing", icon: SiHubspot },
  { name: "Jira", type: "Gestión Proyectos", icon: SiJira },
  { name: "Salesforce", type: "CRM", icon: FaSalesforce },
  { name: "Google Workspace", type: "Operaciones", icon: SiGoogle },
  { name: "Shopify", type: "E-Commerce", icon: SiShopify },
];

export function TechStack() {
  return (
    <section className="py-32 relative overflow-hidden bg-background border-y border-foreground/5">
      {/* Efecto de desenfoque a los lados */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      {/* Título y descripción */}
      <div className="container mx-auto px-6 mb-20 text-center relative z-20">
        <h2 className="text-4xl md:text-5xl font-black font-kanit mb-6 uppercase tracking-tight">
          Potenciados por los <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Estándares del Mercado</span>
        </h2>
        <p className="text-lg md:text-xl text-foreground font-open-sans max-w-2xl mx-auto font-normal">
          Utilizamos tecnologías de vanguardia y nos integramos perfectamente con las plataformas que ya usas todos los días.
        </p>
      </div>
      {/* Carrusel de tecnologías superior */}
      <div className="flex overflow-visible relative w-full mb-10 py-4">
        <motion.div 
          className="flex whitespace-nowrap gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 50, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div 
              key={`tech-${i}`} 
              className="inline-flex items-center gap-5 px-8 py-5 bg-background/40 backdrop-blur-xl border border-foreground/10 rounded-2xl min-w-[280px] cursor-default relative overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_var(--primary)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="text-foreground/30 group-hover:text-primary transition-colors duration-500 relative z-10">
                <tech.icon size={40} />
              </div>
              <div className="flex flex-col relative z-10">
                <span className="text-xl font-kanit font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
                <span className="text-[11px] font-open-sans text-foreground/40 uppercase tracking-widest font-semibold group-hover:text-primary/80 transition-colors duration-300">
                  {tech.type}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Carrusel de integraciones inferior */}
      <div className="flex overflow-visible relative w-full py-4">
        <motion.div 
          className="flex whitespace-nowrap gap-6 px-3"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: 60, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...integrations, ...integrations, ...integrations].map((app, i) => (
            <div 
              key={`app-${i}`} 
              className="inline-flex items-center gap-5 px-8 py-5 bg-background/40 backdrop-blur-xl border border-foreground/10 rounded-2xl min-w-[280px] cursor-default relative overflow-hidden group hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_var(--accent)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="text-foreground/30 group-hover:text-accent transition-colors duration-500 relative z-10">
                <app.icon size={40} />
              </div>
              <div className="flex flex-col relative z-10">
                <span className="text-xl font-kanit font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {app.name}
                </span>
                <span className="text-[11px] font-open-sans text-foreground/40 uppercase tracking-widest font-semibold group-hover:text-accent/80 transition-colors duration-300">
                  {app.type}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/10 rounded-[100%] blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>
    </section>
  );
}