'use client';

import { Truck, Clock, Shield, Heart, Building2, FlipVertical } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { FlipCard } from "@/components/ui/flip-card";

const services = [
  {
    title: 'Regeltouren',
    description: 'Täglich, wöchentlich oder monatlich. Wir entlasten Ihren Fuhrpark und Sie können sich auf Ihr Kerngeschäft konzentrieren.',
    icon: Truck
  },
  {
    title: 'Direktkurier',
    description: 'Sonderfahrten und Eiltransporte für alles, was extraschnell gehen muss. Innerhalb Deutschland oder quer durch Europa.',
    icon: Clock
  },
  {
    title: 'Privatkundenbelieferung',
    description: 'Einzelbelieferung oder Touren von Privatkunden. Lieferung mit Zwei-Mann-Teams. Retouren- & Verpackungsmanagement.',
    icon: Shield
  },
  {
    title: 'Krankenhaus- & Medizinlogistik',
    description: 'Rundlauftouren zwischen Labor und Arzt im 24/7 Schichtbetrieb, Transport von Organspenden, Notfallkonzept zur Vermeidung von Ausfällen.',
    icon: Heart
  },
  {
    title: 'Mehrwertdienste',
    description: 'Wir bieten nicht nur von A nach B sondern auf Wunsch auch von Z nach A. Vertragen mit 2-Mann-Team, Kommissionieren, Abbau & Entsorgung.',
    icon: Building2
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Unsere Services
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <FlipCard
                front={
                  <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg shadow-md relative">
                    <service.icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold text-secondary text-center">
                      {service.title}
                    </h3>
                    <button className="absolute bottom-3 right-3 p-2 text-primary hover:text-primary/80 transition-colors group">
                      <FlipVertical className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-6 bg-primary text-white rounded-lg shadow-md relative">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-center text-sm">
                      {service.description}
                    </p>
                    <button className="absolute bottom-3 right-3 p-2 text-white/80 hover:text-white transition-colors group">
                      <FlipVertical className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                }
                className="h-[250px] cursor-pointer"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}