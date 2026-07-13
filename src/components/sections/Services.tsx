"use client";

import { m, Variants } from "framer-motion";
import {
  Zap,
  ArrowRight
} from "lucide-react";

const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, title: string) => {
  e.preventDefault();
  
  // Acutaliza el servicio seleccionado en la URL
  const url = new URL(window.location.href);
  url.searchParams.set('service', title);
  url.hash = 'contact';
  window.history.pushState({}, '', url.toString());

  // Se envía el evento al Contact
  window.dispatchEvent(new CustomEvent('serviceSelected', { detail: title }));

  // Scroll suave al Contact
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const services = [
  {
    title: "Convierte tus datos en decisiones inteligentes",
    description: "Inteligencia Artificial",
    colSpan: "lg:col-span-2",
    iconColorClass: "group-hover:text-accent transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-accent hover:shadow-primary",
  },
  {
    title: "Resuelve problemas únicos con software hecho para tu empresa",
    description: "Software a la Medida",
    colSpan: "lg:col-span-1 lg:row-span-2",
    iconColorClass: "group-hover:text-primary transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-primary hover:shadow-primary",
  },
  {
    title: "Sitios web que convierten visitantes en clientes",
    description: "Desarrollo Web",
    colSpan: "lg:col-span-1",
    iconColorClass: "group-hover:text-primary transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-primary hover:shadow-primary",
  },
  {
    title: "Tu negocio siempre al alcance de tus clientes",
    description: "Aplicaciones Móviles",
    colSpan: "lg:col-span-1",
    iconColorClass: "group-hover:text-accent transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-accent hover:shadow-primary",
  },
  {
    title: "Automatiza tareas que hoy consumen horas de trabajo",
    description: "Automatización",
    colSpan: "lg:col-span-1",
    iconColorClass: "group-hover:text-accent transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-accent hover:shadow-primary",
  },
  {
    title: "Evita ataques, robos de datos y riesgos que pueden hundir tu negocio",
    description: "Ciberseguridad",
    colSpan: "lg:col-span-2",
    iconColorClass: "group-hover:text-primary transition-colors",
    colorClass: "bg-foreground/10 hover:bg-background hover:border-2 hover:border-primary hover:shadow-primary",
  },
];

// Animacion de aparición del grid
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
// Animacion de aparición de cada servicio
const item: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      {/* Efecto de iluminacion del fondo */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -left-[20%] top-[20%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      {/* Contenedor principal */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            {/* Titulo y descripcion */}
            <m.h2
              className="text-5xl md:text-7xl font-black font-kanit tracking-tight uppercase"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Nuestros <span className="text-transparent bg-clip-text bg-primary">Servicios</span>
            </m.h2>
            <m.p 
              className="text-xl text-foreground font-open-sans mt-6 max-w-xl font-normal"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Nos encargamos de cada detalle para que puedas concentrarte en lo que más importa: <span className="text-accent">tu negocio</span>.
            </m.p>
          </div>
          {/* Animación del relámpago */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 rounded-full border border-foreground/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <Zap className="text-accent w-10 h-10" />
            </div>
          </m.div>
        </div>
        {/* Grid de servicios */}
        <m.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <m.div 
              key={index} 
              variants={item}
              className={`group relative rounded-3xl overflow-hidden glass-card transition-all duration-500 ${service.colorClass} ${service.colSpan}`}
            >
              {/* Flecha del hover */}
              <div className="relative h-full p-8 flex flex-col justify-evenly z-10">
                <div className="flex justify-between items-start">
                  <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-foreground" />
                </div>
                {/* Titulo y descripcion del servicio */}
                <div>
                  <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-normal font-jersey-10 mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-foreground group-hover:to-foreground/50 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground font-open-sans text-base leading-relaxed group-hover:font-semibold transition-colors">
                    {service.description}
                  </p>
                </div>
                {/* Redirección al contacto */}
                <a 
                  href="#contact" 
                  onClick={(e) => handleServiceClick(e, service.description)} 
                  className="absolute inset-0 z-10 cursor-pointer"
                >
                  <span className="sr-only">Seleccionar servicio {service.description}</span>
                </a>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}