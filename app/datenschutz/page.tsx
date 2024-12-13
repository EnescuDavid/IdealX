import { PageHeader } from "@/components/layout/page-header";
import { PageContent } from "@/components/layout/page-content";

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader title="Datenschutzerklärung" />
      <PageContent>
        <h2>1. Datenschutz auf einen Blick</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <h2>2. Allgemeine Hinweise</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>3. Datenerfassung auf unserer Website</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </PageContent>
    </>
  );
}