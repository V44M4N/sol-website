import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/features/Hero";
import { BrewedAtSol } from "@/components/features/BrewedAtSol";
import { SolExperience } from "@/components/features/SolExperience";
import { CafeSection } from "@/components/features/CafeSection";
import { DayNightTransition } from "@/components/features/DayNightTransition";
import { GalleryGrid } from "@/components/features/GalleryGrid";
import { Location } from "@/components/features/Location";
import { gallery } from "@/lib/sol";
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="page-content">
        <Hero />
        <BrewedAtSol />
        <SolExperience />
        <CafeSection />
        <DayNightTransition />
        <section className="section-wrap section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Inside Sol</p>
              <h2>
                A place to <em>be.</em>
              </h2>
            </div>
            <Link href="/gallery" className="text-link">
              The full picture ↗
            </Link>
          </div>
          <GalleryGrid items={gallery.slice(0, 6)} />
        </section>
        <Location />
      </main>
      <Footer />
    </>
  );
}
