import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { MenuSection } from "@/components/features/MenuSection";
import { Container } from "@/components/ui/Container";

const BREW_MENU = {
  "House Specialties": [
    { name: "Himalayan Gold", price: "₹450", description: "Golden Ale - 4.5% ABV. Crisp, light, and refreshing with subtle citrus notes." },
    { name: "Midnight Peak", price: "₹550", description: "Stout - 6.2% ABV. Deep, roasted coffee flavors with a velvety chocolate undertone." },
    { name: "Ridge Runner", price: "₹500", description: "IPA - 7.0% ABV. Bold hop profile with aromas of pine and tropical fruit." },
  ],
  "Seasonal Brews": [
    { name: "Winter Frost", price: "₹550", description: "Seasonal Wheat - 5.0% ABV. Notes of cinnamon and orange peel." },
    { name: "Spring Bloom", price: "₹450", description: "Fruit Ale - 4.8% ABV. Infused with wild mountain berries." },
  ],
};

export default function BrewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="The Brew House"
        subtitle="Crafted in-house. Inspired by the peaks."
        image="https://images.unsplash.com/photo-1535958636474-b02a74e3867c?auto=format&fit=crop&q=80&w=2070"
      />
      <div className="py-24">
        <Container>
          {Object.entries(BREW_MENU).map(([category, items]) => (
            <MenuSection key={category} category={category} items={items} />
          ))}
        </Container>
      </div>
      <Footer />
    </main>
  );
}
