"use client";
import { useState } from "react";
import { GalleryGrid } from "./GalleryGrid";
export function MenuViewer() {
  const [tab, setTab] = useState("bar");
  return (
    <>
      <div className="filter-tabs" aria-label="Menus">
        {[
          ["bar", "Bar menu"],
          ["food", "Food menu"],
        ].map(([id, label]) => (
          <button key={id} aria-pressed={tab === id} onClick={() => setTab(id)}>
            {label}
          </button>
        ))}
      </div>
      <p className="menu-note">
        For today&apos;s availability and dietary requirements, please speak
        with our team.
      </p>
      <GalleryGrid
        key={tab}
        menu
        items={Array.from({ length: tab === "bar" ? 9 : 13 }, (_, i) => ({
          src: `/media/menus/${tab}/${i + 1}.avif`,
          alt: `${tab === "bar" ? "Bar" : "Food"} menu · Page ${i + 1}`,
        }))}
      />
    </>
  );
}
