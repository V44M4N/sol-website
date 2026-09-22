import { Navbar } from "@/components/layout/Navbar";
export const metadata = { title: "Our Story | Sol The Brew House" };
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SolExperience } from "@/components/features/SolExperience";
import { CafeSection } from "@/components/features/CafeSection";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="One Sol."
        subtitle="Craft brews, conversations and Shimla evenings."
      />
      <main id="page-content">
        <section className="section-wrap section-space about-copy">
          <p className="eyebrow">Sol The Brew House</p>
          <h2>
            Rooted in craft.
            <br />
            <em>At home in Shimla.</em>
          </h2>
          <p>
            Find Sol The Brew House on the fifth floor of Hotel Combermere, on
            The Mall in Shimla. In-house brews, food, music and views come
            together in one place.
          </p>
          <p>
            From an easy afternoon at Cafe Sol to a round with friends at the
            Brew House, the mood changes. The spirit stays Sol.
          </p>
        </section>
        <SolExperience />
        <CafeSection />
      </main>
      <Footer />
    </>
  );
}
