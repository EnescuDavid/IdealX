'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Building2, Shield } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Über IdealX GmbH
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">25+ Jahre Erfahrung</h3>
                <p className="text-muted-foreground">Langjährige Expertise in der Logistikbranche mit bewährten Prozessen.</p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Building2 className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Regionale Expertise</h3>
                <p className="text-muted-foreground">Starke Präsenz und umfassende Kenntnisse in der Region Nürnberg.</p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">Zuverlässigkeit</h3>
                <p className="text-muted-foreground">Transparente Prozesse und höchste Qualitätsstandards.</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}