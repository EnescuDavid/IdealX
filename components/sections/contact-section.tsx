'use client';

import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/animations/fade-in";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Kontaktieren Sie uns
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary">Ihre Anfrage</h3>
              <ContactForm />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary">Kontaktinformationen</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Hauptstraße 123, 90411 Nürnberg
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  +49 911 123 4567
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  info@idealx-logistics.de
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}