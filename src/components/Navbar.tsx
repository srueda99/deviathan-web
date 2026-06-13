"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="relative h-16 w-48 md:h-28 md:w-80 flex items-center shrink-0">
          <Image
            src="/logos/logoAndname-white.svg"
            alt="Deviathan Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors font-kanit"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 text-xl font-semibold rounded-full bg-primary text-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground ml-4 shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background/90 backdrop-blur-md border-t border-white/5 shadow-2xl h-[50vh] overflow-y-auto"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "50vh" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col px-8 py-8 gap-6 h-full">
            {navLinks.map((link, index) => (
              <div key={link.name} className="flex flex-col">
                <Link
                  href={link.href}
                  className="text-2xl font-kanit font-medium text-foreground/90 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="h-px bg-white/10 w-[80%] mt-4" />
                )}
              </div>
            ))}
            
            <Link
              href="#contact"
              className="mt-4 px-6 py-3 text-center text-lg font-semibold rounded-full bg-primary text-foreground hover:bg-primary/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
