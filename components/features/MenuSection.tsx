"use client";

import React from "react";
import { motion } from "framer-motion";

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
}

const MenuItem = ({ name, price, description }: MenuItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group py-6 border-b border-border/50 flex flex-col md:flex-row md:items-baseline justify-between gap-2"
    >
      <div className="flex-1">
        <div className="flex items-baseline justify-between mb-1">
          <h4 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors">{name}</h4>
          <span className="text-primary font-medium ml-4">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm font-light leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const MenuSection = ({ category, items }: { category: string; items: MenuItemProps[] }) => {
  return (
    <div className="mb-20">
      <h3 className="text-2xl font-serif mb-8 text-center md:text-left border-l-4 border-primary pl-4">
        {category}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-2">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};
