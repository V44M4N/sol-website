import { Navbar } from "@/components/layout/Navbar";
export const metadata = { title: "Cafe Sol | Sol The Brew House" };
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { CafeSection } from "@/components/features/CafeSection";
import { GalleryGrid } from "@/components/features/GalleryGrid";
import { gallery, cafeLocation } from "@/lib/sol";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Cafe Sol"
        subtitle="Coffee, food and time to unwind."
      />
      <main id="page-content">
        <CafeSection />
        <section className="section-wrap section-space">
          <h2>Within Cafe Sol</h2>
          <GalleryGrid items={gallery.filter((x) => x.group === "Cafe")} />
        </section>
        <section className="section-wrap section-space location">
          <div>
            <p className="eyebrow">Find Cafe Sol</p>
            <h2>
              A little time.
              <br />
              <em>A place to unwind.</em>
            </h2>
            <a
              className="action secondary"
              href={cafeLocation.maps}
              target="_blank"
              rel="noreferrer"
            >
              Directions to Cafe Sol ↗
            </a>
          </div>
          <iframe
            title="Cafe Sol location on Google Maps"
            src={cafeLocation.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
