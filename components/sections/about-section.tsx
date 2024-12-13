import { Card, CardContent } from "@/components/ui/card";
import { Clock, Building2, Shield } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#042d3f]">
          Über IdealX GmbH
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <Clock className="w-12 h-12 mb-4 text-[#36bde7]" />
              <h3 className="text-xl font-semibold mb-2">25+ Jahre Erfahrung</h3>
              <p>Langjährige Expertise in der Logistikbranche mit bewährten Prozessen.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Building2 className="w-12 h-12 mb-4 text-[#36bde7]" />
              <h3 className="text-xl font-semibold mb-2">Regionale Expertise</h3>
              <p>Starke Präsenz und umfassende Kenntnisse in der Region Nürnberg.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 mb-4 text-[#36bde7]" />
              <h3 className="text-xl font-semibold mb-2">Zuverlässigkeit</h3>
              <p>Transparente Prozesse und höchste Qualitätsstandards.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}