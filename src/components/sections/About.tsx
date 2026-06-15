"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Si tienes una página web, podemos mejorarla.",
  "Si tienes una idea, podemos desarrollarla.",
  "Si tienes un problema, podemos resolverlo.",
  "Si tienes tareas repetitivas, podemos automatizarlas.",
  "Si quieres más seguridad, podemos añadirla.",
  "Si quieres usar IA, podemos ayudarte.",
  "Si quieres llevar tu sistema a la nube, podemos hacerlo por ti.",
];

export function About() {
  return (
    <section id="about" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent rounded-full blur-3xl mix-blend-screen"></div>
              <motion.div 
                className="absolute inset-4 rounded-3xl bg-background/50 backdrop-blur-xl flex items-center justify-center overflow-hidden"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(118,104,231,0)", "0 0 40px rgba(118,104,231,0.2)", "0 0 0px rgba(118,104,231,0)"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="absolute w-[275%] h-[275%] -top-[60%] -left-[60%] origin-center">
                  <Image 
                    src="/logos/logo-white.svg"
                    alt="Deviathan Core"
                    fill
                    className="object-contain opacity-90 drop-shadow-[0_0_30px_rgba(118,104,231,0.3)]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-kanit mb-6">
              Lleva tu Negocio al<br/> <span className="text-primary">Siguiente Nivel</span>
            </h2>
            
            <p className="text-lg text-foreground/80 font-open-sans mb-8">
              No solo escribimos código; construimos el motor que impulsa tu negocio. 
              Nuestro objetivo es llevar tus operaciones al siguiente nivel a través de una integración tecnológica estratégica.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="font-open-sans text-foreground/90">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-10 p-6 bg-primary/10 border border-primary/20 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="font-kanit font-medium text-lg text-white">
                ¿El Resultado? <span className="text-primary/90">Mayor eficiencia, costos reducidos y una ventaja competitiva evidente.</span>
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
