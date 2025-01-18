'use client';

import { useState } from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    image: "/images/vehicles/pkw.jpg",
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
    image: "/images/vehicles/caddy.jpg",
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
    image: "/images/vehicles/transporter-4-paletten.jpg",
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
    image: "/images/vehicles/transporter-6-paletten.jpg",
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
    image: "/images/vehicles/transporter-koffer-plane.jpg",
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
    image: "/images/vehicles/lkw.jpg",
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
    image: "/images/vehicles/lkw.jpg",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const filteredTransport = transportMethods.filter(
    method => activeCategory === "all" || method.category === activeCategory
  );

  return (
    <section id="transport" className="py-20 bg-[#ededed]">
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

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {filteredTransport.map((method, index) => (
                <div key={method.name} className="flex-[0_0_280px]"> {/* Fixed width for slides */}
                  <FadeIn delay={index * 0.1}>
                    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={method.image}
                          alt={method.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-secondary mb-2">{method.name}</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <ul className="list-disc list-inside">
                            <li>{method.specs.weight}</li>
                            <li>{method.specs.dimensions}</li>
                            <li>{method.specs.pallets}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
} 