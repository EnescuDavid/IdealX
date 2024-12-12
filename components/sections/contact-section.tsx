import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#042d3f]">
          Kontaktieren Sie uns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ihre Anfrage</h3>
            <ContactForm />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontaktinformationen</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[#36bde7]" />
                Hauptstraße 123, 90411 Nürnberg
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#36bde7]" />
                +49 911 123 4567
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#36bde7]" />
                info@idealx-logistics.de
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}