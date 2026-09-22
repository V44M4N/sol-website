import { Navbar } from "@/components/layout/Navbar";
export const metadata = { title: "Gallery | Sol The Brew House" };
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/features/GalleryGrid";
import { gallery, galleryBackdrop } from "@/lib/sol";
import Link from "next/link";
import { Reveal } from "@/components/features/Reveal";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Inside Sol."
        subtitle="The brews. The people. The view."
        videoEnabled={false}
        image={galleryBackdrop}
      />
      <main id="page-content">
        <nav className="section-wrap gallery-navigation" aria-label="Gallery collections">
          <a href="#brew-house-gallery">The Brew House</a>
          <a href="#cafe-gallery">Cafe Sol</a>
          <Link href="/culinary-collective-gallery">Culinary Collective Gallery ↗</Link>
        </nav>
        <section id="brew-house-gallery" className="section-wrap section-space">
          <p className="eyebrow">01 / The Brew House</p>
          <h2>
            Moments at <em>Sol.</em>
          </h2>
          <Reveal>
            <GalleryGrid
              natural
              items={gallery.filter((item) => item.group === "Brew House")}
            />
          </Reveal>
        </section>
        <section id="cafe-gallery" className="gallery-band">
          <div className="section-wrap section-space">
            <p className="eyebrow">02 / Cafe Sol</p>
            <h2>
              The quieter <em>moments.</em>
            </h2>
            <Reveal>
              <GalleryGrid
                natural
                items={gallery.filter((item) => item.group === "Cafe")}
              />
            </Reveal>
          </div>
        </section>
        <section className="section-wrap section-space">
          <p className="eyebrow">A taste of Sol</p>
          <h2>Culinary Collective Gallery</h2>
          <Link className="action secondary" href="/culinary-collective-gallery">Explore food &amp; drinks ↗</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
