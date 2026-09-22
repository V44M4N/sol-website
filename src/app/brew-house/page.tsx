import { Navbar } from "@/components/layout/Navbar";
export const metadata = { title: "The Brew House | Sol The Brew House" };
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { BrewedAtSol } from "@/components/features/BrewedAtSol";
import { SolExperience } from "@/components/features/SolExperience";
import { DayNightTransition } from "@/components/features/DayNightTransition";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="The Brew House."
        subtitle="Craft at the heart. Company all around."
      />
      <main id="page-content">
        <BrewedAtSol />
        <SolExperience />
        <DayNightTransition />
      </main>
      <Footer />
    </>
  );
}
