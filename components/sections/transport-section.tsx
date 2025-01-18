'use client';

import { useState } from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";
import Image from 'next/image';

// Categories for filtering
const categories = [
  { label: "Alle", value: "all" },
  { label: "Sprinter", value: "sprinter" },
  { label: "LKW", value: "lkw" },
  { label: "Sonderfahrzeuge", value: "special" },
];

// Sample transport methods (replace with actual data)
const transportMethods = [
  {
    name: "Mercedes Sprinter",
    description: "Ideal für kleinere Lieferungen und Express-Sendungen",
    image: "/transporter/sprinter.jpg", // Add actual image
    category: "sprinter",
    labels: {
      top: "Neu",
      bottom: "Express"
    }
  },
  // Add more transport methods here
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
                {method.labels?.top && (
                  <span className="absolute top-2 left-2 bg-primary text-white px-2 py-1 text-sm rounded">
                    {method.labels.top}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">{method.name}</h3>
                  <p className="text-sm text-white/90">{method.description}</p>
                  {method.labels?.bottom && (
                    <span className="mt-2 inline-block bg-primary text-white px-2 py-1 text-sm rounded">
                      {method.labels.bottom}
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
} 