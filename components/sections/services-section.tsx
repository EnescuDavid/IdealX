'use client';

import { Truck, PackageSearch, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { FlipCard } from "@/components/ui/flip-card";

const services = [
  {
    title: "Expressversand",
    description: "Schnelle und zuverlässige Lieferung Ihrer Waren am selben Tag oder am nächsten Werktag.",
    icon: Clock
  },
  {
    title: "Transportservice",
    description: "Professioneller Transport Ihrer Güter mit unserer modernen und vielfältigen Fahrzeugflotte.",
    icon: Truck
  },
  {
    title: "Sendungsverfolgung",
    description: "Transparente Verfolgung Ihrer Sendungen in Echtzeit für maximale Kontrolle.",
    icon: PackageSearch
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Unsere Dienstleistungen
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <FlipCard
                front={
                  <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg shadow-md">
                    <service.icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold text-secondary">
                      {service.title}
                    </h3>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-6 bg-primary text-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-center">
                      {service.description}
                    </p>
                  </div>
                }
                className="h-[200px] cursor-pointer"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}