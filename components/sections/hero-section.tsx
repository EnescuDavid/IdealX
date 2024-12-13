'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-secondary text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          opacity: '0.2',
        }}
      />
      <div className="container relative z-10 text-center max-w-4xl">
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
            className="bg-primary hover:bg-primary/90 text-white"
            asChild
          >
            <a href="#contact">Kontaktieren Sie uns</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}