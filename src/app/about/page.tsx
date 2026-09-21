"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Our Story"
        subtitle="Where mountain serenity meets urban vibrancy."
        image="https://images.unsplash.com/photo-1590059391630-586d37d93a40?auto=format&fit=crop&q=80&w=2070"
      />
      <div className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif mb-8">A Sanctuary Above Shimla</h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  Founded on the belief that the finest moments happen at the intersection of relaxation and energy,
                  Sol The Brew House was created to be more than just a venue. It is a destination.
                </p>
                <p>
                  Located on the 5th floor of Hotel Combermere, we offer a panoramic escape from the bustle of The Mall.
                  Our space is designed to breathe with the city — a serene, sun-drenched lounge by day that
                  evolves into a pulse-pounding club by night.
                </p>
                <p>
                  From our house-brewed ales to our fusion cuisine, every detail at Sol is crafted to evoke the
                  spirit of the Himalayas: bold, timeless, and breathtaking.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
                alt="Sol Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 hidden md:block">
                <p className="text-3xl font-serif">Established</p>
                <p className="text-sm uppercase tracking-widest">In the Heart of Shimla</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
