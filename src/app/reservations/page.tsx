"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

interface ReservationStep {
  step: number;
  title: string;
  description: string;
}

const STEPS: ReservationStep[] = [
  { step: 1, title: "When", description: "Choose your date and time" },
  { step: 2, title: "Who", description: "Tell us about your party" },
  { step: 3, title: "Confirm", description: "Verify your details" },
];

export default function ReservationsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    requests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resId, setResId] = useState("");

  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handlePrev = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResId("SOL-" + Math.random().toString(36).substr(2, 9).toUpperCase());
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center py-32 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-white text-zinc-900 p-12 text-center border border-zinc-200"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full">
                <CheckCircle size={48} />
              </div>
            </div>
            <h1 className="text-3xl font-serif font-bold mb-4">Reservation Confirmed</h1>
            <p className="text-zinc-500 mb-8">Your table is waiting for you. We look forward to seeing you at Sol.</p>
            <div className="bg-zinc-100 p-6 mb-8 text-left space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Reservation ID</span>
                <span className="font-mono font-bold">{resId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Date & Time</span>
                <span className="font-medium">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Guests</span>
                <span className="font-medium">{formData.guests} People</span>
              </div>
            </div>
            <Button variant="primary" className="w-full rounded-none" onClick={() => window.location.reload()}>
              Make Another Booking
            </Button>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Book Your Table"
        subtitle="Secure your spot for an evening of luxury and nightlife."
        image="https://images.unsplash.com/photo-1559339769-067ed557759b?auto=format&fit=crop&q=80&w=2070"
      />

      <div className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Progress Stepper */}
            <div className="flex justify-between items-center mb-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -z-10" />
              {STEPS.map((step) => (
                <div key={step.step} className="flex flex-col items-center gap-2">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                    currentStep >= step.step ? "bg-primary text-primary-foreground" : "bg-zinc-800 text-zinc-500"
                  )}>
                    {currentStep > step.step ? <CheckCircle size={18} /> : step.step}
                  </div>
                  <span className={cn(
                    "text-[10px] uppercase tracking-widest font-medium",
                    currentStep >= step.step ? "text-foreground" : "text-zinc-500"
                  )}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Form Container */}
            <div className="bg-white text-zinc-900 p-8 md:p-12 border border-zinc-200 shadow-sm">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-serif font-bold mb-2">When are you visiting?</h2>
                      <p className="text-zinc-500">Select your preferred date and time.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium flex items-center gap-2">
                          <Calendar size={14} /> Date
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm outline-none focus:border-primary transition-colors"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium flex items-center gap-2">
                          <Clock size={14} /> Time
                        </label>
                        <select
                          className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm outline-none focus:border-primary transition-colors"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        >
                          <option value="">Select Time</option>
                          <option value="18:00">06:00 PM</option>
                          <option value="19:00">07:00 PM</option>
                          <option value="20:00">08:00 PM</option>
                          <option value="21:00">09:00 PM</option>
                          <option value="22:00">10:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-end pt-6">
                      <Button
                        variant="primary"
                        className="rounded-none px-12"
                        disabled={!formData.date || !formData.time}
                        onClick={handleNext}
                      >
                        Continue
                      </Button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-serif font-bold mb-2">Who is joining?</h2>
                      <p className="text-zinc-500">Provide your details and party size.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium flex items-center gap-2">
                          <Users size={14} /> Guest Count
                        </label>
                        <select
                          className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm outline-none focus:border-primary transition-colors"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                          <option value="9+">9+ Guests</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm outline-none focus:border-primary transition-colors"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm outline-none focus:border-primary transition-colors"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Phone Number</label>
                        <input
                          type="tel"
                          required
                          className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm outline-none focus:border-primary transition-colors"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Special Requests (Optional)</label>
                      <textarea
                        rows={3}
                        className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm outline-none focus:border-primary transition-colors resize-none"
                        value={formData.requests}
                        onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                        placeholder="Birthday celebration, window seat, etc."
                      />
                    </div>
                    <div className="flex justify-between pt-6">
                      <Button variant="outline" className="rounded-none" onClick={handlePrev}>Back</Button>
                      <Button
                        variant="primary"
                        className="rounded-none px-12"
                        disabled={!formData.name || !formData.email || !formData.phone}
                        onClick={handleNext}
                      >
                        Continue
                      </Button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-serif font-bold mb-2">Confirm Your Visit</h2>
                      <p className="text-zinc-500">Please review your details before finalizing.</p>
                    </div>
                    <div className="bg-zinc-50 border border-zinc-200 p-6 space-y-4">
                      <div className="flex justify-between py-2 border-b border-zinc-200">
                        <span className="text-zinc-400 text-sm">Guest Name</span>
                        <span className="font-medium">{formData.name}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-zinc-200">
                        <span className="text-zinc-400 text-sm">Date & Time</span>
                        <span className="font-medium">{formData.date} at {formData.time}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-zinc-200">
                        <span className="text-zinc-400 text-sm">Party Size</span>
                        <span className="font-medium">{formData.guests} Guests</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-zinc-200">
                        <span className="text-zinc-400 text-sm">Contact</span>
                        <span className="font-medium">{formData.phone}</span>
                      </div>
                      {formData.requests && (
                        <div className="py-2">
                          <span className="text-zinc-400 text-sm block mb-1">Special Requests</span>
                          <span className="text-sm font-light italic">"{formData.requests}"</span>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between pt-6">
                      <Button variant="outline" className="rounded-none" onClick={handlePrev}>Back</Button>
                      <Button
                        variant="primary"
                        className="rounded-none px-12 flex gap-2"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                      >
                        {isSubmitting ? "Processing..." : "Confirm Booking"}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
