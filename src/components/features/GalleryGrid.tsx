"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { gallery } from "@/lib/sol";
import { motion, useReducedMotion } from "framer-motion";
import dimensions from "@/lib/media-dimensions.json";
type Item = { src: string; alt: string; group?: string };
export function GalleryGrid({
  items = gallery,
  filters = false,
  menu = false,
  editorial = false,
  natural = false,
}: {
  items?: Item[];
  filters?: boolean;
  menu?: boolean;
  editorial?: boolean;
  natural?: boolean;
}) {
  const [filter, setFilter] = useState("All");
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState(0);
  const [zoom, setZoom] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const shown = items.filter((x) => filter === "All" || x.group === filter);
  const open = (i: number, button: HTMLButtonElement) => {
    setSelected(i);
    setZoom(false);
    trigger.current = button;
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = (n: number) => {
    setSelected((i) => (i + n + shown.length) % shown.length);
    setZoom(false);
  };
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const onClose = () => {
      document.body.style.overflow = "";
      trigger.current?.focus();
    };
    d.addEventListener("close", onClose);
    return () => {
      d.removeEventListener("close", onClose);
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <>
      {filters && (
        <div className="filter-tabs" aria-label="Gallery filter">
          {["All", "Brew House", "Cafe"].map((x) => (
            <button
              key={x}
              aria-pressed={filter === x}
              onClick={() => setFilter(x)}
            >
              {x}
            </button>
          ))}
        </div>
      )}
      <div
        className={
          menu ? "menu-grid" : natural ? "gallery-natural" : editorial ? "gallery-editorial" : "gallery-grid"
        }
      >
        {shown.map((item, i) => (
          <motion.button
            className="gallery-tile"
            initial={false}
            whileInView={
              reduced || menu ? {} : { opacity: [0.65, 1], y: [18, 0] }
            }
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            key={item.src}
            onClick={(e) => {
              document.body.style.overflow = "hidden";
              open(i, e.currentTarget);
            }}
            aria-label={`Enlarge ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={dimensions[item.src as keyof typeof dimensions]?.width ?? 900}
              height={dimensions[item.src as keyof typeof dimensions]?.height ?? 1000}
              sizes={
                menu
                  ? "(max-width: 700px) 90vw, 45vw"
                  : "(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 33vw"
              }
              className={menu ? "menu-scan" : ""}
            />
            <span>
              {item.alt}
              <ZoomIn size={18} />
            </span>
          </motion.button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={menu ? "Menu page viewer" : "Sol photo viewer"}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        <div className="lightbox-toolbar">
          <span>
            {selected + 1} / {shown.length}
          </span>
          <button
            className="icon-button"
            aria-label={zoom ? "Zoom out" : "Zoom in"}
            title={zoom ? "Zoom out" : "Zoom in"}
            onClick={() => setZoom(!zoom)}
          >
            {zoom ? <ZoomOut /> : <ZoomIn />}
          </button>
          <button
            className="icon-button"
            aria-label="Close viewer"
            title="Close viewer"
            onClick={close}
          >
            <X />
          </button>
        </div>
        <div className={`lightbox-image ${zoom ? "zoomed" : ""}`}>
          {/* Original-resolution assets keep menu text sharp when zoomed. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shown[selected]?.src} alt={shown[selected]?.alt} />
        </div>
        <div className="lightbox-bottom">
          <button
            className="icon-button"
            aria-label="Previous image"
            title="Previous image"
            onClick={() => step(-1)}
          >
            <ChevronLeft />
          </button>
          <p>{shown[selected]?.alt}</p>
          <button
            className="icon-button"
            aria-label="Next image"
            title="Next image"
            onClick={() => step(1)}
          >
            <ChevronRight />
          </button>
        </div>
      </dialog>
    </>
  );
}
