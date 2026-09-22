"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit3, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  isAvailable: boolean;
  isFeatured: boolean;
  experience: "CAFE" | "BREW_HOUSE" | "SHARED";
}

const MOCK_MENU: MenuItem[] = [];

export default function MenuPage() {
  return (
    <Suspense fallback={<p>Loading menu...</p>}>
      <MenuManager />
    </Suspense>
  );
}
function MenuManager() {
  const searchParams = useSearchParams();
  const experience = searchParams.get("experience") || "SHARED";

  const [items, setItems] = useState(MOCK_MENU);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSave = (e: React.FormEvent, data: any) => {
    e.preventDefault();
    if (editingItem) {
      setItems(
        items.map((i) =>
          i.id === editingItem.id ? { ...editingItem, ...data } : i,
        ),
      );
    } else {
      setItems([
        ...items,
        { ...data, id: Math.random().toString(36).substr(2, 9), experience },
      ]);
    }
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const deleteItem = (id: string) => {
    if (confirm("Delete this menu item?")) {
      setItems(items.filter((i) => i.id !== id));
    }
  };

  const filteredItems = items.filter(
    (i) =>
      i.experience === experience &&
      i.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const experienceLabels: Record<string, { title: string; desc: string }> = {
    CAFE: {
      title: "Cafe Menu Management",
      desc: "Update your morning coffee and light bites offerings.",
    },
    BREW_HOUSE: {
      title: "Brew House Menu Management",
      desc: "Update your craft beer and gastro pub fare.",
    },
    SHARED: {
      title: "General Menu Management",
      desc: "Manage overall culinary offerings.",
    },
  };

  const currentLabel = experienceLabels[experience] || experienceLabels.SHARED;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-zinc-900">
            {currentLabel.title}
          </h1>
          <p className="text-zinc-500">{currentLabel.desc}</p>
        </div>
        <Button
          variant="primary"
          className="rounded-none flex gap-2"
          onClick={() => {
            setEditingItem(null);
            setIsModalOpen(true);
          }}
        >
          <Plus size={18} /> Add Item
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
            placeholder="Search items..."
            className="w-full bg-white border border-zinc-200 pl-10 pr-4 py-2 text-sm outline-none focus:border-primary transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="rounded-none flex gap-2">
          <Filter size={18} /> Filter
        </Button>
      </div>

      <div className="bg-white border border-zinc-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 uppercase tracking-widest text-[10px] font-medium">
            <tr>
              <th className="px-6 py-4">Item Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-zinc-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <p className="font-medium text-zinc-900">{item.name}</p>
                    <p className="text-xs text-zinc-400 truncate max-w-xs">
                      {item.description}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-zinc-600">{item.category}</td>
                  <td className="px-6 py-4 font-medium text-zinc-900">
                    ₹{item.price}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                        item.isAvailable
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700",
                      )}
                    >
                      {item.isAvailable ? "Available" : "Sold Out"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => {
                        setEditingItem(item);
                        setIsModalOpen(true);
                      }}
                      className="p-2 text-zinc-400 hover:text-primary transition-colors"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="p-2 text-zinc-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-12 text-center text-zinc-400 italic"
                >
                  No items found for {experience} experience.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-out z-50 flex items-center justify-center p-4">
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
                {editingItem ? "Edit Item" : "Add New Item"}
              </h3>
              <form
                onSubmit={(e) =>
                  handleSave(e, {
                    name: (e.target as any).name.value,
                    category: (e.target as any).category.value,
                    price: (e.target as any).price.value,
                    description: (e.target as any).description.value,
                    isAvailable: (e.target as any).isAvailable.checked,
                    isFeatured: (e.target as any).isFeatured.checked,
                  })
                }
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                      Item Name
                    </label>
                    <input
                      name="name"
                      defaultValue={editingItem?.name}
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                        Category
                      </label>
                      <input
                        name="category"
                        defaultValue={editingItem?.category}
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                        Price (₹)
                      </label>
                      <input
                        name="price"
                        type="number"
                        defaultValue={editingItem?.price}
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
                      defaultValue={editingItem?.description}
                      rows={3}
                      className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary resize-none"
                    />
                  </div>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="isAvailable"
                        defaultChecked={editingItem?.isAvailable ?? true}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-sm text-zinc-600">Available</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="isFeatured"
                        defaultChecked={editingItem?.isFeatured ?? false}
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
                    Save Item
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
