import { PageHeader } from "@/components/layout/page-header";
import { PageContent } from "@/components/layout/page-content";

export default function ImpressumPage() {
  return (
    <>
      <PageHeader title="Impressum" />
      <PageContent>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 911 123 4567<br />
          E-Mail: info@idealx-logistics.de
        </p>

        <h2>Registereintrag</h2>
        <p>
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Nürnberg<br />
          Registernummer: HRB XXXXX
        </p>
      </PageContent>
    </>
  );
}