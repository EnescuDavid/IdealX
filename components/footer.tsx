import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#042d3f] text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">IdealX GmbH</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Hauptstraße 123, 90411 Nürnberg
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +49 911 123 4567
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@idealx-logistics.de
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/#services">Regeltouren</Link></li>
              <li><Link href="/#services">Direktkurier</Link></li>
              <li><Link href="/#services">Medizinlogistik</Link></li>
              <li><Link href="/#services">Mehrwertdienste</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
              <li><Link href="/agb">AGB</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} IdealX GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}