'use client';

import { CalendarDays, Building2, Shield } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#f5f5f5]">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Über IdealX GmbH
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="text-center">
              <Building2 className="w-12 h-12 mb-4 text-primary mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-secondary">Regionale Expertise</h3>
              <p className="text-muted-foreground">Starke Präsenz und umfassende Kenntnisse in der Region Nürnberg.</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="text-center">
              <CalendarDays className="w-12 h-12 mb-4 text-primary mx-auto" />
              <div className="mb-3">
                <h3 className="text-4xl font-bold text-secondary mb-1">25+</h3>
                <h4 className="text-xl font-semibold text-secondary">Jahre Erfahrung</h4>
              </div>
              <p className="text-muted-foreground">Langjährige Expertise in der Logistikbranche mit bewährten Prozessen.</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="text-center">
              <Shield className="w-12 h-12 mb-4 text-primary mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-secondary">Zuverlässigkeit</h3>
              <p className="text-muted-foreground">Transparente Prozesse und höchste Qualitätsstandards.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}