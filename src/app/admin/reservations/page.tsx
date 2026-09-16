"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle, XCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Reservation {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guestCount: number;
  status: "PENDING" | "CONFIRMED" | "REJECTED" | "CANCELLED";
  requests: string;
}

const MOCK_RESERVATIONS: Reservation[] = [
  { id: "r1", customerName: "Amit Sharma", phone: "+91 98765 43210", email: "amit@example.com", date: "2026-09-17", time: "19:00", guestCount: 4, status: "PENDING", requests: "Window seat preferred" },
  { id: "r2", customerName: "Priya Kapoor", phone: "+91 98765 11111", email: "priya@example.com", date: "2026-09-17", time: "20:30", guestCount: 2, status: "CONFIRMED", requests: "Birthday celebration" },
  { id: "r3", customerName: "Rahul Verma", phone: "+91 98765 22222", email: "rahul@example.com", date: "2026-09-18", time: "18:00", guestCount: 6, status: "PENDING", requests: "None" },
];

export default function ReservationManager() {
  const [reservations, setReservations] = useState(MOCK_RESERVATIONS);
  const [filter, setFilter] = useState<"ALL" | "PENDING" | "CONFIRMED">("ALL");

  const updateStatus = (id: string, status: Reservation["status"]) => {
    setReservations(reservations.map(r => r.id === id ? { ...r, status } : r));
  };

  const filteredReservations = reservations.filter(r => filter === "ALL" || r.status === filter);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-zinc-900">Reservation Management</h1>
          <p className="text-zinc-500">Manage guest bookings and table availability.</p>
        </div>
        <div className="flex gap-2">
          {["ALL", "PENDING", "CONFIRMED"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={cn(
                "px-4 py-2 text-xs uppercase tracking-widest font-medium transition-colors border",
                filter === f ? "bg-primary text-primary-foreground border-primary" : "bg-white text-zinc-500 border-zinc-200 hover:bg-zinc-50"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredReservations.map((res) => (
            <motion.div
              key={res.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-zinc-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="flex gap-6 items-start">
                <div className="bg-zinc-100 p-4 rounded-lg text-zinc-600">
                  <Users size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-serif font-bold">{res.customerName}</h3>
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                      res.status === "CONFIRMED" ? "bg-emerald-100 text-emerald-700" :
                      res.status === "PENDING" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                    )}>
                      {res.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} /> {res.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} /> {res.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} /> {res.guestCount} Guests
                    </div>
                  </div>
                  {res.requests && (
                    <p className="mt-3 text-xs italic text-zinc-400 bg-zinc-50 p-2 border-l-2 border-primary">
                      "{res.requests}"
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                <div className="flex gap-2 mr-4">
                  <button
                    onClick={() => updateStatus(res.id, "CONFIRMED")}
                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded transition-colors"
                    title="Confirm"
                  >
                    <CheckCircle size={20} />
                  </button>
                  <button
                    onClick={() => updateStatus(res.id, "REJECTED")}
                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                    title="Reject"
                  >
                    <XCircle size={20} />
                  </button>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${res.phone}`} className="p-2 text-zinc-400 hover:text-primary transition-colors" title="Call">
                    <Phone size={20} />
                  </button>
                  <a href={`mailto:${res.email}`} className="p-2 text-zinc-400 hover:text-primary transition-colors" title="Email">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
