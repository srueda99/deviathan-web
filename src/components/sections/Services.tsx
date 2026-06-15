"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  PenTool, 
  Server, 
  ShieldCheck, 
  Bot, 
  Zap,
  ArrowRight,
  Code2Icon
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Desarrollo Web",
    description: "Creamos sitios web y aplicaciones modernas, rápidas y adaptadas a las necesidades de tu negocio.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Aplicaciones Móviles",
    description: "Diseñamos aplicaciones para iOS y Android con experiencias intuitivas y alto rendimiento.",
  },
  {
    icon: <Code2Icon className="w-8 h-8" />,
    title: "Software a la medida",
    description: "Soluciones digitales adaptadas a las necesidades de tu negocio.",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Diseño UI/UX",
    description: "Diseñamos interfaces atractivas y fáciles de usar para ofrecer experiencias memorables.",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Infraestructura",
    description: "Implementamos infraestructura segura y escalable para acompañar el crecimiento de tu negocio.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Ciberseguridad",
    description: "Protección de alto nivel para tus datos y activos digitales.",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Inteligencia Artificial",
    description: "Integramos herramientas de IA para automatizar procesos y generar nuevas oportunidades.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automatización",
    description: "Eliminamos tareas repetitivas y mejoramos la productividad con flujos de trabajo automatizados.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-kanit mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nuestros <span className="text-primary">Servicios</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 font-open-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Nos encargamos de cada detalle para que puedas concentrarte en lo que más importa:<br/><span className="text-primary">tu negocio</span>.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group relative bg-secondary/30 border border-white/5 p-6 rounded-2xl hover:bg-secondary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-kanit font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/60 font-open-sans text-sm mb-6 line-clamp-3">
                {service.description}
              </p>
              
              <Link 
                href={`#contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center text-sm font-kanit font-medium text-primary group-hover:text-white transition-colors"
              >
                Me interesa <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
