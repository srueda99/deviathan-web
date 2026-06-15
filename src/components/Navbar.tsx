"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('?')) return;

    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth"
      });
      window.history.pushState({}, '', href);
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 z-40 w-full transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="relative h-16 w-48 md:h-28 md:w-80 flex items-center shrink-0 cursor-pointer">
          {mounted && (
            <Image
              src={resolvedTheme === 'dark' ? "/logos/logoAndname-white.svg" : "/logos/logoAndname-black.svg"}
              alt="Deviathan Logo"
              fill
              className="object-contain object-left"
              priority
            />
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ThemeToggle />
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg xl:text-xl font-medium text-foreground/80 hover:text-primary transition-colors font-kanit cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="px-5 py-2 text-lg xl:text-xl font-semibold rounded-full bg-primary text-foreground hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Comenzar
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center lg:hidden gap-2">
          <ThemeToggle />
          <button
            className="text-foreground ml-2 mr-2 shrink-0 relative w-8 h-8 flex items-center justify-center focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300 origin-center overflow-hidden">
              <div className={`bg-foreground h-[2px] w-7 transform transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-[42deg] w-8' : ''}`}></div>
              <div className={`bg-foreground h-[2px] w-7 rounded transform transition-all duration-300 ${isMobileMenuOpen ? '-translate-x-10 opacity-0' : ''}`}></div>
              <div className={`bg-foreground h-[2px] w-7 transform transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-[42deg] w-8' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-background/90 backdrop-blur-md border-t border-foreground/5 shadow-2xl h-[50vh] overflow-y-auto"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "50vh" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col px-8 py-8 gap-6 h-full">
            {navLinks.map((link, index) => (
              <div key={link.name} className="flex flex-col">
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl font-kanit font-medium text-foreground/90 hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  {link.name}
                </a>
                {index < navLinks.length - 1 && (
                  <div className="h-px bg-foreground/10 w-[80%] mt-4" />
                )}
              </div>
            ))}
            
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="mt-4 px-6 py-3 text-center text-lg font-semibold rounded-full bg-primary text-foreground hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
