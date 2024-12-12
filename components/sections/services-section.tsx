import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, Shield, Heart, Package } from "lucide-react";

const services = [
  {
    icon: <Truck className="w-12 h-12 mb-4 text-[#36bde7]" />,
    title: 'Regeltouren',
    description: 'Regelmäßige, planbare Transportlösungen für Ihre täglichen Logistikanforderungen.',
  },
  {
    icon: <Package className="w-12 h-12 mb-4 text-[#36bde7]" />,
    title: 'Privatkundenbelieferung',
    description: 'Flexible Lieferoptionen für Privatkunden mit persönlichem Service.',
  },
  {
    icon: <Clock className="w-12 h-12 mb-4 text-[#36bde7]" />,
    title: 'Direktkurier',
    description: 'Schnelle und direkte Lieferungen für zeitkritische Sendungen.',
  },
  {
    icon: <Shield className="w-12 h-12 mb-4 text-[#36bde7]" />,
    title: 'Mehrwertdienste',
    description: 'Zusätzliche Services wie Verpackung, Lagerung und Kommissionierung.',
  },
  {
    icon: <Heart className="w-12 h-12 mb-4 text-[#36bde7]" />,
    title: 'Medizinlogistik',
    description: 'Spezialisierte Logistiklösungen für Krankenhäuser und medizinische Einrichtungen.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#042d3f]">
          Unsere Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}