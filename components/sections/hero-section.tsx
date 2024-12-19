'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#042d3f] text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/Hero-Video.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Ihre Kompetenz im Fokus,<br />unsere Logistik im Rücken
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Seit über 25 Jahren Ihr verlässlicher Partner für professionelle Logistiklösungen in Nürnberg
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-white hover:text-primary text-white transition-colors"
            asChild
          >
            <a href="#contact">Kontaktieren Sie uns</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}