'use client';

import { useState } from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";
import Image from 'next/image';

// Categories for filtering
const categories = [
  { label: "Alle", value: "all" },
  { label: "PKW & Caddy", value: "small" },
  { label: "Transporter", value: "transporter" },
  { label: "LKW", value: "lkw" },
];

// Transport methods with actual data
const transportMethods = [
  {
    name: "PKW",
    description: "Für kleinere Sendungen bis 100 kg, keine Palettenware möglich",
    image: "/transporter/pkw.jpg", // Add actual image
    category: "small",
    specs: {
      weight: "bis 100 kg",
      dimensions: "Kleinere Sendungen",
      pallets: "Keine Palettenware"
    }
  },
  {
    name: "Caddy",
    description: "Ideal für mittlere Sendungen bis 500 kg, keine Palettenware",
    image: "/transporter/caddy.jpg",
    category: "small",
    specs: {
      weight: "bis 500 kg",
      dimensions: "120 x 80 x 115 cm",
      pallets: "Keine Palettenware"
    }
  },
  {
    name: "Transporter Kompakt",
    description: "Für 1-3 Paletten mit bis zu 1100 kg Zuladung",
    image: "/transporter/transporter-small.jpg",
    category: "transporter",
    specs: {
      weight: "bis 1100 kg",
      dimensions: "320 x 130 x 170 cm",
      pallets: "1-3 Paletten"
    }
  },
  {
    name: "Transporter Maxi",
    description: "Geräumiger Transporter für 4-5 Paletten mit bis zu 1000 kg",
    image: "/transporter/transporter-medium.jpg",
    category: "transporter",
    specs: {
      weight: "bis 1000 kg",
      dimensions: "430 x 130 x 180 cm",
      pallets: "4-5 Paletten"
    }
  },
  {
    name: "Transporter Koffer/Plane",
    description: "Großraumtransporter für bis zu 8 Paletten",
    image: "/transporter/transporter-large.jpg",
    category: "transporter",
    specs: {
      weight: "bis 1100 kg",
      dimensions: "Höhe bis 230 cm",
      pallets: "bis 8 Paletten"
    }
  },
  {
    name: "LKW 7,5t",
    description: "LKW für große Lieferungen bis 5500 kg",
    image: "/transporter/lkw-7-5.jpg",
    category: "lkw",
    specs: {
      weight: "bis 5500 kg",
      dimensions: "Höhe bis 240 cm",
      pallets: "bis 17 Paletten"
    }
  },
  {
    name: "LKW Schwerlast",
    description: "Schwerlast-LKW ab 7,5 Tonnen für maximale Kapazität",
    image: "/transporter/lkw-heavy.jpg",
    category: "lkw",
    specs: {
      weight: "bis 5500 kg",
      dimensions: "Höhe bis 240 cm",
      pallets: "bis 17 Paletten"
    }
  }
];

export function TransportSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTransport = transportMethods.filter(
    method => activeCategory === "all" || method.category === activeCategory
  );

  return (
    <section id="transport" className="py-20 bg-background">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Unsere Fahrzeugflotte
          </h2>
        </FadeIn>

        {/* Categories */}
        <div className="flex justify-center mb-8 border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "px-6 py-3 text-sm font-medium transition-colors relative",
                activeCategory === category.value
                  ? "text-primary border-b-2 border-primary -mb-[2px]"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Transport Methods Grid/Slider */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTransport.map((method, index) => (
            <FadeIn key={method.name} delay={index * 0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={method.image}
                  alt={method.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">{method.name}</h3>
                  <p className="text-sm text-white/90 mb-2">{method.description}</p>
                  <div className="space-y-1 text-xs text-white/80">
                    <p>🏋️‍♂️ {method.specs.weight}</p>
                    <p>📏 {method.specs.dimensions}</p>
                    <p>📦 {method.specs.pallets}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
} 