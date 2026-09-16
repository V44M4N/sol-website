"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const ExperienceCard = ({ title, description, items, image, index }: {
  title: string;
  description: string;
  items: string[];
  image: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative h-[500px] overflow-hidden cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <h3 className="text-3xl font-serif text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="text-[10px] uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 px-2 py-1">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const SolExperience = () => {
  const experiences = [
    {
      title: "Day",
      description: "Fresh beginnings, quiet conversations, and the soft morning light of the Himalayas.",
      items: ["Coffee", "Food", "Views", "Conversation"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070",
      index: 0,
    },
    {
      title: "Golden Hour",
      description: "When the sky turns amber and the first brew of the evening hits the glass.",
      items: ["Brews", "Cocktails", "Sunset", "Music"],
      image: "https://images.unsplash.com/photo-1470337458703-7579997a8b7f?auto=format&fit=crop&q=80&w=2070",
      index: 1,
    },
    {
      title: "Night",
      description: "The beat drops, the lights dim, and Sol transforms into the heart of Shimla's nightlife.",
      items: ["DJ", "Music", "Drinks", "Nightlife"],
      image: "https://images.unsplash.com/photo-1514525253344-f85655999952?auto=format&fit=crop&q=80&w=2070",
      index: 2,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="text-center mb-16">
          <h3 className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
            The Vibe
          </h3>
          <h2 className="text-4xl md:text-6xl font-serif">The Sol Experience</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.title} {...exp} />
          ))}
        </div>
      </Container>
    </section>
  );
};
