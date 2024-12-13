import { Button } from "@/components/ui/button";
import * as React from 'react';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-[#042d3f] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          opacity: '0.2',
        }}
      />
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Ihre Kompetenz im Fokus,<br />unsere Logistik im Rücken
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Seit über 25 Jahren Ihr verlässlicher Partner für professionelle Logistiklösungen in Nürnberg
        </p>
        <Button
          size="lg"
          className="bg-[#36bde7] hover:bg-[#2da8d0] text-white"
          asChild
        >
          <a href="#contact">Kontaktieren Sie uns</a>
        </Button>
      </div>
    </section>
  );
}