"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, ImageIcon, Utensils, Beer, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const STAT_CARDS = [
  { label: "Today's Bookings", value: "12", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Active Offers", value: "4", icon: FileText, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "New Reviews", value: "8", icon: LayoutDashboard, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Media Assets", value: "142", icon: ImageIcon, color: "text-purple-600", bg: "bg-purple-50" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-zinc-900">Dashboard</h1>
        <p className="text-zinc-500">Welcome back. Here is what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STAT_CARDS.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 border border-zinc-200 shadow-sm flex items-center gap-4"
          >
            <div className={cn("p-3 rounded-lg", stat.bg)}>
              <stat.icon size={24} className={stat.color} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-serif font-bold text-zinc-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2 bg-white border border-zinc-200 p-8">
          <h2 className="text-xl font-serif font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/admin/media">
              <Button variant="outline" className="w-full justify-start gap-3 rounded-none py-6 h-auto text-left">
                <ImageIcon size={20} /> Add Photo/Video
              </Button>
            </Link>
            <Link href="/admin/menu">
              <Button variant="outline" className="w-full justify-start gap-3 rounded-none py-6 h-auto text-left">
                <Utensils size={20} /> Update Menu
              </Button>
            </Link>
            <Link href="/admin/brews">
              <Button variant="outline" className="w-full justify-start gap-3 rounded-none py-6 h-auto text-left">
                <Beer size={20} /> Add New Brew
              </Button>
            </Link>
            <Link href="/admin/reservations">
              <Button variant="outline" className="w-full justify-start gap-3 rounded-none py-6 h-auto text-left">
                <Calendar size={20} /> Manage Bookings
              </Button>
            </Link>
          </div>
        </div>

        {/* Notification / Feed */}
        <div className="bg-white border border-zinc-200 p-8">
          <h2 className="text-xl font-serif font-bold mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 pb-6 border-b border-zinc-100 last:border-0">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-sm text-zinc-900 font-medium">New reservation for 4 guests</p>
                  <p className="text-xs text-zinc-500 mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
