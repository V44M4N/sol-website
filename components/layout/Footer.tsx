"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-foreground pt-24 pb-12 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-6">SOL<span className="text-primary">.</span></h2>
            <p className="text-muted-foreground max-w-sm font-light leading-relaxed mb-8">
              Shimla's premier destination for craft brews, gourmet dining, and high-energy nightlife.
              Experience the magic of the Himalayas from the heart of the city.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-primary">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="/food" className="hover:text-foreground transition-colors">Menu</a></li>
              <li><a href="/brews" className="hover:text-foreground transition-colors">Brews</a></li>
              <li><a href="/gallery" className="hover:text-foreground transition-colors">Gallery</a></li>
              <li><a href="/reservations" className="hover:text-foreground transition-colors">Book a Table</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-primary">Visit Us</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>5th Floor, Hotel Combermere, The Mall, Shimla, Himachal Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 XX XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@solbrewhouse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-muted-foreground">
          <p>© {new Date().getFullYear()} Sol The Brew House. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </section>
  );
};
