import { Navbar } from "@/components/layout/Navbar";
export const metadata = { title: "Our Brews | Sol The Brew House" };
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { BrewedAtSol } from "@/components/features/BrewedAtSol";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Brewed at Sol."
        subtitle="Four brews. Each with a character of its own."
      />
      <main id="page-content">
        <BrewedAtSol />
      </main>
      <Footer />
    </>
  );
}
