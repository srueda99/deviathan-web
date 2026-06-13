"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background ambient elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/40 rounded-full blur-[150px] -z-10 mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
            <Code2 size={16} className="text-primary" />
            <span className="text-sm font-medium tracking-wide">Next-Gen Digital Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-kanit leading-tight">
            We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Build</span><br/>
            Your Future
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 font-open-sans max-w-lg">
            Stop struggling with outdated tech. We turn complex problems into elegant, scalable, and secure digital realities.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <motion.a 
              href="#services"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(118,104,231,0.4)] hover:shadow-[0_0_30px_rgba(118,104,231,0.6)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services <ArrowRight size={20} />
            </motion.a>
            <motion.a 
              href="#contact"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
            </motion.a>
          </div>
        </motion.div>

        {/* Abstract 3D/Code Visual representation */}
        <motion.div 
          className="relative h-[400px] lg:h-[600px] w-full hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y: y1 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main Logo Graphic element */}
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
          
          {/* Floating code elements */}
          <motion.div 
            className="absolute top-1/4 left-0 bg-secondary/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl"
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

          <motion.div 
            className="absolute bottom-1/4 right-0 bg-secondary/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm font-kanit">Systems Operational</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
