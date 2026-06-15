"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Bot, Sparkles, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Title and description */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/40 rounded-full blur-[150px] -z-10 mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="flex flex-col gap-6 lg:col-span-1 col-span-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 w-fit backdrop-blur-sm">
            <Code2 size={16} className="text-primary" />
            <span className="text-sm font-medium tracking-wide">Next-Gen Digital Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold font-kanit leading-tight">
            Construimos el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Futuro Digital</span><br/>
            de tu Negocio
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 font-open-sans max-w-lg">
            Desarrollamos soluciones de software a la medida para ayudar a tu empresa a crecer y destacarse.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <motion.a 
              href="#services"
              className="px-8 py-4 bg-primary text-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(118,104,231,0.4)] hover:shadow-[0_0_30px_rgba(118,104,231,0.6)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nuestros Servicios <ArrowRight size={20} />
            </motion.a>
            <motion.a 
              href="#contact"
              className="px-8 py-4 bg-foreground/5 border border-foreground/10 text-foreground rounded-full font-semibold hover:bg-foreground/10 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hablemos
            </motion.a>
          </div>
        </motion.div>

        {/* Abstract 3D/Code Visual representation */}
        <motion.div 
          className="relative h-[400px] lg:h-[600px] w-full hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y: y1 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main Logo */}
            <motion.div 
              className="relative w-400 h-400 md:w-500 md:h-500"
              animate={{ 
                rotateY: [0, 360],
                rotateX: [0, 10, 0, -10, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image 
                src="/logos/logo-purple.svg" 
                alt="Deviathan Icon" 
                fill 
                className="object-contain drop-shadow-[0_0_30px_rgba(118,104,231,0.5)]"
                priority
              />
            </motion.div>
          </div>
          
          {/* Floating Element: Code Snippet */}
          <motion.div 
            className="absolute top-1/4 left-0 bg-background/80 backdrop-blur-md border border-foreground/10 p-4 rounded-xl shadow-xl"
            style={{ y: y2 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <pre className="text-xs text-primary font-mono">
              <code>{`const launch = () => {
  success: true,
  scale: "infinite"
}`}</code>
            </pre>
          </motion.div>

          {/* Floating Element: Infrastructure */}
          <motion.div 
            className="absolute bottom-1/4 right-0 bg-background/80 backdrop-blur-md border border-foreground/10 p-4 rounded-xl shadow-xl z-20"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm font-kanit">Infraestructura Operacional</span>
            </div>
          </motion.div>

          {/* Floating Element: AI Chatbot */}
          <motion.div 
            className="absolute top-10 right-10 bg-background/80 backdrop-blur-md border border-foreground/10 p-4 rounded-xl shadow-xl max-w-[200px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot size={16} className="text-primary" />
              </div>
              <span className="text-xs font-semibold font-kanit">AI Chatbot</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-foreground/10 rounded w-full"></div>
              <div className="h-2 bg-foreground/10 rounded w-4/5"></div>
              <div className="flex items-center gap-1 mt-1 text-[10px] text-primary">
                <Sparkles size={10} /> Generando Solución...
              </div>
            </div>
          </motion.div>

          {/* Floating Element: Security */}
          <motion.div 
            className="absolute bottom-10 left-10 bg-background/80 backdrop-blur-md border border-foreground/10 p-4 rounded-xl shadow-xl"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span className="text-xs font-kanit text-foreground/80">Seguridad Óptima</span>
              </div>
              <div className="flex gap-1">
                <div className="w-6 h-1 bg-green-400/50 rounded-full"></div>
                <div className="w-6 h-1 bg-green-400/80 rounded-full"></div>
                <div className="w-6 h-1 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
