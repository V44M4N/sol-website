"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Media - Placeholder for Cinematic Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070"
          alt="Sol The Brew House Cinematic View"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>

      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-primary uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4">
            Sol
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif text-foreground mb-6 tracking-tight">
            The Brew House
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light italic tracking-wide">
            Lounge by Day. Club by Night.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="rounded-none">
              Book a Table
            </Button>
            <Button variant="outline" size="lg" className="rounded-none">
              Explore Sol
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient for transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
