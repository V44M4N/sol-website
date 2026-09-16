import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { MenuSection } from "@/components/features/MenuSection";
import { Container } from "@/components/ui/Container";

const FOOD_MENU = {
  "Small Plates": [
    { name: "Artisanal Cheese Platter", price: "₹850", description: "Selection of imported and local cheeses, served with honey, nuts and crackers." },
    { name: "Truffle Fries", price: "₹450", description: "Hand-cut potatoes tossed in white truffle oil and topped with parmesan." },
    { name: "Spicy Calamari", price: "₹650", description: "Crispy squid rings served with a zesty lemon-garlic aioli." },
    { name: "Himalayan Dumplings", price: "₹550", description: "Authentic steamed momos served with a spicy tomato chutney." },
  ],
  "Main Course": [
    { name: "Sol Fusion Burger", price: "₹750", description: "Premium wagyu beef, caramelized onions, sol sauce, and aged cheddar." },
    { name: "Wild Mushroom Risotto", price: "₹950", description: "Creamy arborio rice with a medley of forest mushrooms and truffle oil." },
    { name: "Grilled Salmon", price: "₹1250", description: "Atlantic salmon fillet with a lemon-butter glaze and sautéed asparagus." },
    { name: "Pan-Seared Paneer", price: "₹650", description: "Cottage cheese marinated in a tandoori blend, served with mint chutney." },
  ],
  "Sweets": [
    { name: "Molten Lava Cake", price: "₹450", description: "Dark chocolate cake with a gooey center, served with vanilla bean gelato." },
    { name: "Apple Crumble", price: "₹400", description: "Warm cinnamon apples topped with a buttery oat crumble." },
  ],
};

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Culinary Arts"
        subtitle="A fusion of global flavors and Himalayan inspiration."
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070"
      />
      <div className="py-24">
        <Container>
          {Object.entries(FOOD_MENU).map(([category, items]) => (
            <MenuSection key={category} category={category} items={items} />
          ))}
        </Container>
      </div>
      <Footer />
    </main>
  );
}
