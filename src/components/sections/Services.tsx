"use client";

import { motion, Variants } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Code2Icon,
  ShieldCheck, 
  Bot, 
  Zap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Code2Icon className="w-10 h-10" />,
    title: "Software a la Medida",
    description: "Soluciones arquitectónicas de alto rendimiento, escalables y diseñadas exactamente para las necesidades de tu negocio.",
    colSpan: "lg:col-span-2",
    iconColorClass: "group-hover:text-accent transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-accent hover:shadow-primary",
  },
  {
    icon: <Bot className="w-10 h-10" />,
    title: "Inteligencia Artificial",
    description: "Modelos predictivos, agentes autónomos y automatización cognitiva que revolucionan tus procesos internos.",
    colSpan: "lg:col-span-1 lg:row-span-2",
    iconColorClass: "group-hover:text-primary transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-primary hover:shadow-primary",
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Desarrollo Web",
    description: "Experiencias web inmersivas y ultrarrápidas utilizando las últimas tecnologías del mercado.",
    colSpan: "lg:col-span-1",
    iconColorClass: "group-hover:text-primary transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-primary hover:shadow-primary",
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Aplicaciones Móviles",
    description: "Aplicaciones nativas e híbridas que conquistan a los usuarios con interfaces fluidas.",
    colSpan: "lg:col-span-1",
    iconColorClass: "group-hover:text-accent transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-accent hover:shadow-primary",
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Ciberseguridad",
    description: "Blindaje absoluto de tu infraestructura. Auditorías, mitigación de riesgos y protección de datos.",
    colSpan: "lg:col-span-1",
    iconColorClass: "group-hover:text-accent transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-accent hover:shadow-primary",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
    </svg>,
    title: "Automatizaciones",
    description: "Automatización de procesos repetitivos y tareas complejas para optimizar el tiempo y los recursos de tu empresa.",
    colSpan: "lg:col-span-2",
    iconColorClass: "group-hover:text-primary transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-primary hover:shadow-primary",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -left-[20%] top-[20%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              className="text-5xl md:text-7xl font-black font-kanit tracking-tight uppercase"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Nuestros <span className="text-transparent bg-clip-text bg-primary">Servicios</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-foreground/60 font-open-sans mt-6 max-w-xl font-light"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Nos encargamos de cada detalle para que puedas concentrarte en lo que más importa: <span className="text-accent">tu negocio</span>.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 rounded-full border border-foreground/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <Zap className="text-accent w-10 h-10" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className={`group relative rounded-3xl overflow-hidden glass-card transition-all duration-500 ${service.colorClass} ${service.colSpan}`}
            >
              <div className="relative h-full p-8 flex flex-col justify-evenly z-10">
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl bg-foreground/15 text-foreground transition-all duration-500 group-hover:bg-foreground/10`}>
                    <div className={service.iconColorClass}>
                      {service.icon}
                    </div>
                  </div>
                  <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-foreground" />
                </div>

                <div>
                  <h3 className="text-3xl font-black font-kanit mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-foreground group-hover:to-foreground/50 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 font-open-sans text-base leading-relaxed group-hover:text-foreground/90 transition-colors">
                    {service.description}
                  </p>
                </div>
                
                <Link href={`#contact?service=${encodeURIComponent(service.title)}`} className="absolute inset-0 z-20">
                  <span className="sr-only">Saber más sobre {service.title}</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}