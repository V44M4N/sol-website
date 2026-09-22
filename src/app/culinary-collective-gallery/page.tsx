import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { FoodGallery } from "@/components/features/FoodGallery";
import { foodAndDrinks } from "@/lib/sol";

export const metadata = {
  title: "Culinary Collective Gallery | Sol The Brew House",
  description: "Explore the food and drinks of Sol The Brew House, from fresh pours and charcoal pizza to sushi and cheesecake.",
};

export default function CulinaryCollectiveGallery() {
  return <>
    <Navbar />
    <PageHeader title="Culinary Collective Gallery" subtitle="A taste of Sol. A feast for the senses." image={foodAndDrinks[7].src} videoEnabled={false} />
    <main id="page-content">
      <nav className="section-wrap gallery-navigation" aria-label="Gallery collections">
        <Link href="/gallery">Venue gallery</Link>
        <Link href="/food">Bar &amp; food menus</Link>
      </nav>
      <FoodGallery />
    </main>
    <Footer />
  </>;
}
