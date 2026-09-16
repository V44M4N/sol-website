import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you."
        image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070"
      />
      <div className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-serif mb-8">Visit Sol</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-muted-foreground font-light">5th Floor, Hotel Combermere, The Mall, Shimla, Himachal Pradesh</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground font-light">+91 XX XXXX XXXX</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground font-light">hello@solbrewhouse.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border border-border">
              <h3 className="text-2xl font-serif mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                    <input type="text" className="bg-background border border-border p-3 text-sm outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                    <input type="email" className="bg-background border border-border p-3 text-sm outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea rows={4} className="bg-background border border-border p-3 text-sm outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <Button variant="primary" className="w-full rounded-none">Send Message</Button>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
