import { Navbar } from "@/components/layout/Navbar";
export const metadata = { title: "Bar & Food Menus | Sol The Brew House" };
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { MenuViewer } from "@/components/features/MenuViewer";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="The bar. The table."
        subtitle="Find your next favourite."
      />
      <main id="page-content">
        <section className="section-wrap section-space">
          <p className="eyebrow">The menus at Sol</p>
          <h2>
            Start with a drink.
            <br />
            <em>Stay for the food.</em>
          </h2>
          <MenuViewer />
        </section>
      </main>
      <Footer />
    </>
  );
}
