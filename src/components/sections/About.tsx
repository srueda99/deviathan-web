"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  "If you have a website, we can improve it.",
  "If you have an idea, we can develop it.",
  "If you have a problem, we can solve it.",
  "If you have monotonous tasks, we can automate them.",
  "If you want more security, we can add it.",
  "If you want to use AI, we can help you.",
  "If you want to move to the cloud, we can do it.",
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
            {/* Visual Abstract representation of Deviathan */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent rounded-full blur-3xl mix-blend-screen"></div>
              <motion.div 
                className="absolute inset-4 rounded-3xl border border-white/10 bg-background/50 backdrop-blur-xl flex items-center justify-center overflow-hidden"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(118,104,231,0)", "0 0 40px rgba(118,104,231,0.2)", "0 0 0px rgba(118,104,231,0)"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="relative w-3/4 h-3/4">
                  <Image 
                    src="/logos/logo-purpledark.svg"
                    alt="Deviathan Core"
                    fill
                    className="object-contain opacity-80"
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
              Empowering Your <span className="text-primary">Business</span>
            </h2>
            
            <p className="text-lg text-foreground/80 font-open-sans mb-8">
              We don&apos;t just write code; we build the engine that drives your business forward. 
              Our goal is to take your operations to the next level through strategic technological integration.
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
                The Result? <span className="text-primary/90">Increased efficiency, reduced costs, and unshakeable competitive advantage.</span>
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
