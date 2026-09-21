import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/features/Hero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Coffee, Beer } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Main cinematic hero - introducing the brand */}
      <Hero />

      {/* Gateway Section */}
      <section className="relative py-24 px-4 bg-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
              One Experience. <span className="text-primary">Two Worlds.</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light italic max-w-2xl mx-auto">
              Whether you seek the serenity of a mountain morning or the energy of a Shimla night, 
              Sol has a place for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cafe Card */}
            <Link 
              href="/cafe" 
              className="group relative h-[600px] overflow-hidden border border-border/30 bg-zinc-900 transition-all duration-500 hover:border-primary/50"
            >
              <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1501339819896-2a70d6777f7a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Sol Cafe" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500">
                    <Coffee size={32} />
                  </div>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-4">CAFE</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-widest mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  Coffee · Food · Desserts · Views
                </p>
                <Button variant="primary" size="lg" className="mx-auto rounded-none px-12">
                  Explore Cafe
                </Button>
              </div>
            </Link>

            {/* Brew House Card */}
            <Link 
              href="/brew-house" 
              className="group relative h-[600px] overflow-hidden border border-border/30 bg-zinc-900 transition-all duration-500 hover:border-primary/50"
            >
              <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1514933651103-005e9fa7584e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Sol Brew House" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500">
                    <Beer size={32} />
                  </div>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-4">THE BREW HOUSE</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-widest mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  Freshly Brewed Beer · Music · Nightlife
                </p>
                <Button variant="primary" size="lg" className="mx-auto rounded-none px-12">
                  Explore Brew House
                </Button>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
