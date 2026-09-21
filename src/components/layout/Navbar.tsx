"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryLinks = [
    { name: "Cafe", href: "/cafe" },
    { name: "The Brew House", href: "/brew-house" },
  ];

  const secondaryLinks = [
    { name: "Menu", href: "/food" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/90 backdrop-blur-md py-3 border-b border-border" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-foreground">
          SOL <span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Primary Destinations */}
          <div className="flex items-center gap-6 border-r border-border/50 pr-6 mr-2">
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Secondary Links */}
          <div className="flex items-center gap-6">
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium hover:text-primary transition-colors text-muted-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link href="/reservations">
            <Button variant="primary" size="sm" className="rounded-none">
              Book a Table
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-8 md:hidden animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Experiences</p>
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-serif hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-border pt-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Explore</p>
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link href="/reservations" className="mt-4">
            <Button variant="primary" className="w-full rounded-none">
              Book a Table
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
