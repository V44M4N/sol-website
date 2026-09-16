import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/features/Hero";
import { AboveShimla } from "@/components/features/AboveShimla";
import { SolExperience } from "@/components/features/SolExperience";
import { BrewedAtSol } from "@/components/features/BrewedAtSol";
import { FoodAtSol } from "@/components/features/FoodAtSol";
import { DayNightTransition } from "@/components/features/DayNightTransition";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboveShimla />
      <SolExperience />
      <BrewedAtSol />
      <FoodAtSol />
      <DayNightTransition />

      <section className="py-24 px-4 text-center bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Your Table is Waiting</h2>
          <p className="text-muted-foreground text-lg font-light italic mb-10">
            Join us for an unforgettable experience above the city.
          </p>
          <div className="flex justify-center">
            <Link href="/reservations">
              <Button variant="primary" size="lg" className="rounded-none px-12">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
