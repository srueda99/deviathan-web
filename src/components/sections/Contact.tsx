"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    // Check if there's a service pre-selected from URL hash
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('?service=')) {
        const service = decodeURIComponent(hash.split('?service=')[1]);
        setSelectedService(service);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-kanit mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-primary">Evolve?</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 font-open-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Leave your details below and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>

        <motion.div
          className="bg-secondary/40 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-kanit font-bold mb-2">Message Received!</h3>
              <p className="text-foreground/70 font-open-sans">We will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium font-kanit">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-open-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium font-kanit">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-open-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium font-kanit">Service of Interest</label>
                <select 
                  id="service" 
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-open-sans appearance-none"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Apps">Mobile Apps</option>
                  <option value="Software Dev">Software Dev</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Automation">Automation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium font-kanit">Tell us about your project</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-open-sans resize-none"
                  placeholder="I want to build..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
