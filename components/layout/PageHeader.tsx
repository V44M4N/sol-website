"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
      {image ? (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-muted z-0" />
      )}

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-4 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground text-lg md:text-xl font-light italic max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
