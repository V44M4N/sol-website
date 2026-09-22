"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    businessName: "Sol The Brew House",
    address: "5th Floor, Hotel Combermere, The Mall, Shimla",
    phone: "+91 80913 96732",
    whatsapp: "+91 80913 96732",
    email: "",
    openingHours: "",
    instagram: "https://www.instagram.com/solthebrewhouse/",
    facebook: "https://www.facebook.com/solthebrewhouse/",
    twitter: "",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif font-bold text-zinc-900">
          Site Settings
        </h1>
        <Button variant="primary" className="rounded-none" onClick={handleSave}>
          Save All Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-zinc-200 p-8 space-y-6">
          <h3 className="text-lg font-serif font-bold mb-4 border-b border-zinc-100 pb-2">
            General Business Info
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                Business Name
              </label>
              <input
                type="text"
                value={settings.businessName}
                onChange={(e) =>
                  setSettings({ ...settings, businessName: e.target.value })
                }
                className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                Physical Address
              </label>
              <textarea
                value={settings.address}
                onChange={(e) =>
                  setSettings({ ...settings, address: e.target.value })
                }
                rows={3}
                className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  value={settings.phone}
                  onChange={(e) =>
                    setSettings({ ...settings, phone: e.target.value })
                  }
                  className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  WhatsApp
                </label>
                <input
                  type="text"
                  value={settings.whatsapp}
                  onChange={(e) =>
                    setSettings({ ...settings, whatsapp: e.target.value })
                  }
                  className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) =>
                  setSettings({ ...settings, email: e.target.value })
                }
                className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                Opening Hours
              </label>
              <input
                type="text"
                value={settings.openingHours}
                onChange={(e) =>
                  setSettings({ ...settings, openingHours: e.target.value })
                }
                className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-zinc-200 p-8 space-y-6">
          <h3 className="text-lg font-serif font-bold mb-4 border-b border-zinc-100 pb-2">
            Digital Presence
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                Instagram Handle
              </label>
              <div className="flex items-center gap-2">
                <span className="text-zinc-400">@</span>
                <input
                  type="text"
                  value={settings.instagram}
                  onChange={(e) =>
                    setSettings({ ...settings, instagram: e.target.value })
                  }
                  className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                Facebook Page
              </label>
              <input
                type="text"
                value={settings.facebook}
                onChange={(e) =>
                  setSettings({ ...settings, facebook: e.target.value })
                }
                className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                Twitter/X Handle
              </label>
              <div className="flex items-center gap-2">
                <span className="text-zinc-400">@</span>
                <input
                  type="text"
                  value={settings.twitter}
                  onChange={(e) =>
                    setSettings({ ...settings, twitter: e.target.value })
                  }
                  className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
