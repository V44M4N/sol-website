"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

export const DayNightTransition = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const xOffset = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={targetRef} className="relative h-[150vh] w-full bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Night Side (Bottom Layer) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514525253344-f85655999952?auto=format&fit=crop&q=80&w=2070"
            alt="Sol Nightlife"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Day Side (Top Layer - Slides away) */}
        <motion.div
          style={{ x: xOffset }}
          className="absolute inset-0 z-10 overflow-hidden border-r-4 border-primary"
        >
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070"
            alt="Sol Day"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/10" />
        </motion.div>

        {/* Overlay Text */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
          <Container className="text-center">
            <h2 className="text-5xl md:text-8xl font-serif text-foreground tracking-tight">
              Lounge by Day.<br />
              <span className="text-primary italic">Club by Night.</span>
            </h2>
          </Container>
        </motion.div>
      </div>
    </section>
  );
};
