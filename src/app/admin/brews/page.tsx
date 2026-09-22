"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit3, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { beers } from "@/lib/sol";
import { cn } from "@/lib/utils";

interface Brew {
  id: string;
  name: string;
  style: string;
  description: string;
  abv: string;
  ibu: string;
  isAvailable: boolean;
  isFeatured: boolean;
}

const MOCK_BREWS: Brew[] = beers.map((beer) => ({
  ...beer,
  id: beer.slug,
  isAvailable: false,
  isFeatured: true,
}));

export default function BrewManager() {
  const [brews, setBrews] = useState(MOCK_BREWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBrew, setEditingBrew] = useState<Brew | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSave = (e: React.FormEvent, data: any) => {
    e.preventDefault();
    if (editingBrew) {
      setBrews(
        brews.map((b) =>
          b.id === editingBrew.id ? { ...editingBrew, ...data } : b,
        ),
      );
    } else {
      setBrews([
        ...brews,
        { ...data, id: Math.random().toString(36).substr(2, 9) },
      ]);
    }
    setIsModalOpen(false);
    setEditingBrew(null);
  };

  const deleteBrew = (id: string) => {
    if (confirm("Delete this brew?")) {
      setBrews(brews.filter((b) => b.id !== id));
    }
  };

  const filteredBrews = brews.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-zinc-900">
            Brew House Management
          </h1>
          <p className="text-zinc-500">
            Manage your signature craft brews and specifications.
          </p>
        </div>
        <Button
          variant="primary"
          className="rounded-none flex gap-2"
          onClick={() => {
            setEditingBrew(null);
            setIsModalOpen(true);
          }}
        >
          <Plus size={18} /> Add Brew
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search brews..."
            className="w-full bg-white border border-zinc-200 pl-10 pr-4 py-2 text-sm outline-none focus:border-primary transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white border border-zinc-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 uppercase tracking-widest text-[10px] font-medium">
            <tr>
              <th className="px-6 py-4">Brew Name</th>
              <th className="px-6 py-4">Style</th>
              <th className="px-6 py-4">ABV / IBU</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {filteredBrews.map((brew) => (
              <tr
                key={brew.id}
                className="hover:bg-zinc-50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-zinc-900">{brew.name}</p>
                  <p className="text-xs text-zinc-400 truncate max-w-xs">
                    {brew.description}
                  </p>
                </td>
                <td className="px-6 py-4 text-zinc-600">{brew.style}</td>
                <td className="px-6 py-4 font-medium text-zinc-900">
                  {brew.abv} / {brew.ibu}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                      brew.isAvailable
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700",
                    )}
                  >
                    {brew.isAvailable ? "Available" : "Sold Out"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button
                    onClick={() => {
                      setEditingBrew(brew);
                      setIsModalOpen(true);
                    }}
                    className="p-2 text-zinc-400 hover:text-primary transition-colors"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    onClick={() => deleteBrew(brew.id)}
                    className="p-2 text-zinc-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg border border-zinc-200 shadow-xl p-8"
            >
              <h3 className="text-xl font-serif font-bold mb-6">
                {editingBrew ? "Edit Brew" : "Add New Brew"}
              </h3>
              <form
                onSubmit={(e) =>
                  handleSave(e, {
                    name: (e.target as any).name.value,
                    style: (e.target as any).style.value,
                    description: (e.target as any).description.value,
                    abv: (e.target as any).abv.value,
                    ibu: (e.target as any).ibu.value,
                    isAvailable: (e.target as any).isAvailable.checked,
                    isFeatured: (e.target as any).isFeatured.checked,
                  })
                }
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                      Brew Name
                    </label>
                    <input
                      name="name"
                      defaultValue={editingBrew?.name}
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                      Style
                    </label>
                    <input
                      name="style"
                      defaultValue={editingBrew?.style}
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                        ABV (%)
                      </label>
                      <input
                        name="abv"
                        defaultValue={editingBrew?.abv}
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                        IBU
                      </label>
                      <input
                        name="ibu"
                        defaultValue={editingBrew?.ibu}
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                      Description
                    </label>
                    <textarea
                      name="description"
                      defaultValue={editingBrew?.description}
                      rows={3}
                      className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary resize-none"
                    />
                  </div>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="isAvailable"
                        defaultChecked={editingBrew?.isAvailable ?? true}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-sm text-zinc-600">Available</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="isFeatured"
                        defaultChecked={editingBrew?.isFeatured ?? false}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-sm text-zinc-600">Featured</span>
                    </label>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="primary"
                    className="flex-1 rounded-none py-4"
                  >
                    Save Brew
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-none py-4"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
