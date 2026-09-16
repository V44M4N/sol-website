"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const BrewCard = ({ name, style, abv, notes, image, index }: {
  name: string;
  style: string;
  abv: string;
  notes: string;
  image: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col group"
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">
          {abv} ABV
        </div>
      </div>
      <h3 className="text-2xl font-serif mb-1 group-hover:text-primary transition-colors">{name}</h3>
      <p className="text-primary text-xs uppercase tracking-widest font-medium mb-3">{style}</p>
      <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4">
        {notes}
      </p>
    </motion.div>
  );
};

export const BrewedAtSol = () => {
  const brews = [
    {
      name: "Himalayan Gold",
      style: "Golden Ale",
      abv: "4.5%",
      notes: "Crisp, light, and refreshing with subtle citrus notes and a clean finish.",
      image: "https://images.unsplash.com/photo-1535958636474-b02a74e3867c?auto=format&fit=crop&q=80&w=600",
      index: 0,
    },
    {
      name: "Midnight Peak",
      style: "Stout",
      abv: "6.2%",
      notes: "Deep, roasted coffee flavors with a velvety chocolate undertone.",
      image: "https://images.unsplash.com/photo-1584227613745-95b660745296?auto=format&fit=crop&q=80&w=600",
      index: 1,
    },
    {
      name: "Ridge Runner",
      style: "IPA",
      abv: "7.0%",
      notes: "Bold hop profile with aromas of pine and tropical fruit, balanced by a malty base.",
      image: "https://images.unsplash.com/photo-1584227613745-95b660745296?auto=format&fit=crop&q=80&w=600", // Placeholder
      index: 2,
    },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
              Crafted In-House
            </h3>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Brewed at <span className="italic text-primary">Sol</span>
            </h2>
          </div>
          <Link href="/brews">
            <Button variant="outline" className="rounded-none">
              View All Brews
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {brews.map((brew) => (
            <BrewCard key={brew.name} {...brew} />
          ))}
        </div>
      </Container>
    </section>
  );
};
