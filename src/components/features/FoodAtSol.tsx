"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const DishCard = ({ name, category, description, image, index }: {
  name: string;
  category: string;
  description: string;
  image: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <p className="text-primary text-[10px] uppercase tracking-widest mb-1">{category}</p>
        <h3 className="text-xl font-serif text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-xs font-light opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const FoodAtSol = () => {
  const dishes = [
    {
      name: "Artisanal Platters",
      category: "Small Plates",
      description: "A curated selection of local cheeses and cured meats.",
      image: "https://images.unsplash.com/photo-1541529086489-77167767ed6c?auto=format&fit=crop&q=80&w=600",
      index: 0,
    },
    {
      name: "Himalayan Fusion Burger",
      category: "Mains",
      description: "Premium beef patty with locally sourced spices and artisanal bun.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58kk?auto=format&fit=crop&q=80&w=600", // Placeholder
      index: 1,
    },
    {
      name: "Garden Fresh Greens",
      category: "Salads",
      description: "Organic greens from the valley, tossed in a house-made citrus vinaigrette.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
      index: 2,
    },
    {
      name: "Sol Signature Desserts",
      category: "Sweets",
      description: "A decadent finish to your experience, crafted by our pastry chef.",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d7f6?auto=format&fit=crop&q=80&w=600",
      index: 3,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
              Culinary Arts
            </h3>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Food at <span className="italic text-primary">Sol</span>
            </h2>
          </div>
          <Link href="/food">
            <Button variant="outline" className="rounded-none">
              View Menu
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {dishes.map((dish) => (
            <DishCard key={dish.name} {...dish} />
          ))}
        </div>
      </Container>
    </section>
  );
};
