"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppIcon() {
  return (
    <motion.a
      href="https://wa.me/12817461015"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 md:bottom-10 md:right-10 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
