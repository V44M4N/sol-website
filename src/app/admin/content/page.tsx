"use client";

import React, { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { GripVertical, Eye, EyeOff, Trash2, Edit3, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PageSection {
  id: string;
  type: string;
  title: string;
  isVisible: boolean;
  order: number;
}

const MOCK_SECTIONS: PageSection[] = [
  { id: "s1", type: "HERO", title: "Main Hero", isVisible: true, order: 1 },
  { id: "s2", type: "IMAGE_TEXT", title: "Above Shimla", isVisible: true, order: 2 },
  { id: "s3", type: "GALLERY", title: "The Sol Experience", isVisible: true, order: 3 },
  { id: "s4", type: "BREW_SHOWCASE", title: "Brewed at Sol", isVisible: true, order: 4 },
  { id: "s5", type: "MENU_HIGHLIGHTS", title: "Food at Sol", isVisible: true, order: 5 },
  { id: "s6", type: "VIDEO", title: "Day Night Transition", isVisible: true, order: 6 },
];

export default function ContentManager() {
  const [sections, setSections] = useState(MOCK_SECTIONS);
  const [editingId, setEditingId] = useState<string | null>(null);

  const toggleVisibility = (id: string) => {
    setSections(sections.map(s => s.id === id ? { ...s, isVisible: !s.isVisible } : s));
  };

  const deleteSection = (id: string) => {
    if (confirm("Are you sure you want to delete this section?")) {
      setSections(sections.filter(s => s.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-zinc-900">Content Manager</h1>
          <p className="text-zinc-500">Reorder and manage the homepage layout.</p>
        </div>
        <Button variant="primary" className="rounded-none flex gap-2" onClick={() => {}}>
          <Plus size={18} /> Add Section
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-md flex justify-between items-center text-xs uppercase tracking-widest text-zinc-500 font-medium">
            <span>Section Order</span>
            <span>Drag to reorder</span>
          </div>

          <Reorder.Group axis="y" values={sections} onReorder={setSections} className="space-y-3">
            {sections.map((section) => (
              <Reorder.Item
                key={section.id}
                value={section}
                className="bg-white border border-zinc-200 p-4 flex items-center justify-between group hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="cursor-grab active:cursor-grabbing text-zinc-300 group-hover:text-zinc-500 transition-colors">
                    <GripVertical size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900">{section.title}</p>
                    <p className="text-[10px] uppercase tracking-tighter text-zinc-400">{section.type}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleVisibility(section.id)}
                    className={cn(
                      "p-2 rounded transition-colors",
                      section.isVisible ? "text-emerald-600 bg-emerald-50" : "text-zinc-400 bg-zinc-100"
                    )}
                    title={section.isVisible ? "Visible" : "Hidden"}
                  >
                    {section.isVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                  <button
                    onClick={() => setEditingId(section.id)}
                    className="p-2 text-zinc-400 hover:text-primary transition-colors"
                    title="Edit Content"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button
                    onClick={() => deleteSection(section.id)}
                    className="p-2 text-zinc-400 hover:text-red-600 transition-colors"
                    title="Delete Section"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>

        <div className="bg-white border border-zinc-200 p-6 h-fit sticky top-6">
          <h3 className="text-lg font-serif font-bold mb-4">Section Details</h3>
          {editingId ? (
            <div className="space-y-6">
              <p className="text-sm text-zinc-500 mb-4">Editing: <span className="font-medium text-zinc-900">{sections.find(s => s.id === editingId)?.title}</span></p>

              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Section Title</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-50 border border-zinc-200 p-2 text-sm outline-none focus:border-primary"
                    defaultValue={sections.find(s => s.id === editingId)?.title}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Content</label>
                  <textarea
                    rows={4}
                    className="w-full bg-zinc-50 border border-zinc-200 p-2 text-sm outline-none focus:border-primary resize-none"
                    placeholder="Enter section content..."
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="primary" className="flex-1 rounded-none">Save Changes</Button>
                <Button variant="outline" className="rounded-none" onClick={() => setEditingId(null)}>Cancel</Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-zinc-400">
              <FileText size={48} className="mx-auto mb-4 opacity-20" />
              <p className="text-sm font-light">Select a section to edit its content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
