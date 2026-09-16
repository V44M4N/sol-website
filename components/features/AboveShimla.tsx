"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export const AboveShimla = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-primary uppercase tracking-widest text-sm font-medium">
              The Location
            </h3>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Above the City.<br />
              <span className="italic">Inside the Moment.</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-md leading-relaxed">
              Perched on the 5th floor of Hotel Combermere, Sol offers a breathtaking panoramic view of Shimla's ridge.
              A sanctuary where the Himalayan breeze meets the rhythm of the city.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[600px] w-full overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1590059391630-586d37d93a40?auto=format&fit=crop&q=80&w=2070"
              alt="Shimla Panoramic View"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
