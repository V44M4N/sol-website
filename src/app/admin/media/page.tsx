"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, Film, Trash2, Upload, Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { gallery } from "@/lib/sol";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

interface MediaAsset {
  id: string;
  url: string;
  type: "image" | "video";
  altText: string;
  createdAt: string;
  experience: "CAFE" | "BREW_HOUSE" | "SHARED";
}

const MOCK_MEDIA: MediaAsset[] = gallery.map((item, i) => ({
  id: String(i),
  url: item.src,
  type: "image",
  altText: item.alt,
  createdAt: "",
  experience: item.group === "Cafe" ? "CAFE" : "BREW_HOUSE",
}));

function MediaLibrary() {
  const searchParams = useSearchParams();
  const experience = searchParams.get("experience") || "SHARED";

  const [assets, setAssets] = useState<MediaAsset[]>(MOCK_MEDIA);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAssets = assets.filter(
    (asset) =>
      (asset.experience === experience || asset.experience === "SHARED") &&
      asset.altText.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const deleteAsset = (id: string) => {
    setAssets(assets.filter((a) => a.id !== id));
  };

  const experienceLabels: Record<string, { title: string; desc: string }> = {
    CAFE: {
      title: "Cafe Media Gallery",
      desc: "Manage photographs and videos for the Cafe experience.",
    },
    BREW_HOUSE: {
      title: "Brew House Media Gallery",
      desc: "Manage photographs and videos for the Brew House experience.",
    },
    SHARED: {
      title: "Global Media Library",
      desc: "Manage all images and videos used across the site.",
    },
  };

  const currentLabel = experienceLabels[experience] || experienceLabels.SHARED;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-zinc-900">
            {currentLabel.title}
          </h1>
          <p className="text-zinc-500">{currentLabel.desc}</p>
        </div>
        <Button
          variant="primary"
          className="rounded-none flex gap-2"
          onClick={() => setIsUploadOpen(true)}
        >
          <Upload size={18} /> Upload Asset
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
            placeholder="Search assets..."
            className="w-full bg-white border border-zinc-200 pl-10 pr-4 py-2 text-sm outline-none focus:border-primary transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <AnimatePresence>
          {filteredAssets.length > 0 ? (
            filteredAssets.map((asset) => (
              <motion.div
                key={asset.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative aspect-square bg-zinc-200 overflow-hidden border border-zinc-200"
              >
                <img
                  src={asset.url}
                  alt={asset.altText}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-2 right-2">
                  <div
                    className={cn(
                      "p-1 rounded bg-black/50 text-white",
                      asset.type === "image" ? "text-xs" : "text-xs",
                    )}
                  >
                    {asset.type === "image" ? (
                      <ImageIcon size={12} />
                    ) : (
                      <Film size={12} />
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <p className="text-white text-xs font-medium truncate mb-2">
                    {asset.altText}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-zinc-400">
                      {asset.createdAt}
                    </span>
                    <button
                      onClick={() => deleteAsset(asset.id)}
                      className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-24 text-center text-zinc-400 italic">
              No assets found for the {experience} experience.
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Upload Modal */}
      <AnimatePresence>
        {isUploadOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsUploadOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg border border-zinc-200 shadow-xl p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-serif font-bold">
                  Upload New Asset
                </h3>
                <button
                  onClick={() => setIsUploadOpen(false)}
                  className="text-zinc-400 hover:text-zinc-600"
                >
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-6">
                <div
                  className="border-2 border-dashed border-zinc-200 rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer bg-zinc-50"
                  onClick={() => {}} // File input trigger
                >
                  <Upload className="mx-auto text-zinc-400 mb-4" size={48} />
                  <p className="text-sm font-medium text-zinc-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    PNG, JPG, MP4 up to 20MB
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                      Alt Text
                    </label>
                    <input
                      type="text"
                      className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
                      placeholder="Describe the image..."
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                      Experience
                    </label>
                    <select className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors">
                      <option value="SHARED">Shared (Global)</option>
                      <option value="CAFE">Cafe</option>
                      <option value="BREW_HOUSE">The Brew House</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                      Folder/Category
                    </label>
                    <input
                      type="text"
                      className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm outline-none focus:border-primary transition-colors"
                      placeholder="e.g. Homepage, Menu"
                    />
                  </div>
                </div>

                <Button variant="primary" className="w-full rounded-none py-4">
                  Start Upload
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MediaPage() {
  return (
    <Suspense fallback={<p>Loading media...</p>}>
      <MediaLibrary />
    </Suspense>
  );
}
