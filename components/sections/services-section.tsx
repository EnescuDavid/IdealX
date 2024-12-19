'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, Shield, Heart, Package, Building2 } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const services = [
  {
    icon: <Truck className="w-12 h-12 mb-4 text-primary" />,
    title: 'Regeltouren',
    description: 'Täglich, wöchentlich oder monatlich. Wir entlasten Ihren Fuhrpark und Sie können sich auf Ihr Kerngeschäft konzentrieren.',
  },
  {
    icon: <Clock className="w-12 h-12 mb-4 text-primary" />,
    title: 'Direktkurier',
    description: 'Sonderfahrten und Eiltransporte für alles, was extraschnell gehen muss. Innerhalb Deutschland oder quer durch Europa.',
  },
  {
    icon: <Package className="w-12 h-12 mb-4 text-primary" />,
    title: 'Privatkundenbelieferung',
    description: 'Einzelbelieferung oder Touren von Privatkunden. Lieferung mit Zwei-Mann-Teams. Retouren- & Verpackungsmanagement.',
  },
  {
    icon: <Heart className="w-12 h-12 mb-4 text-primary" />,
    title: 'Krankenhaus- & Medizinlogistik',
    description: 'Rundlauftouren zwischen Labor und Arzt im 24/7 Schichtbetrieb, Transport von Organspenden, Notfallkonzept zur Vermeidung von Ausfällen.',
  },
  {
    icon: <Building2 className="w-12 h-12 mb-4 text-primary" />,
    title: 'Mehrwertdienste',
    description: 'Wir bieten nicht nur von A nach B sondern auf Wunsch auch von Z nach A. Vertragen mit 2-Mann-Team, Kommissionieren, Abbau & Entsorgung.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Unsere Services
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto justify-center">
          {services.map((service, index) => (
            <FadeIn 
              key={index} 
              delay={index * 0.1}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2 text-secondary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}