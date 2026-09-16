"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1590059391630-586d37d93a40?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1470337458703-7579997a8b7f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514525253344-f85655999952?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1535958636474-b02a74e3867c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1584227613745-95b660745296?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Visual Journey"
        subtitle="A glimpse into the world of Sol."
        image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070"
      />
      <div className="py-24">
        <Container>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery item ${idx + 1}`}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-widest border border-white px-3 py-1">View Full</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
