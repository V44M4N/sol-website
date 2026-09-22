"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { foodAndDrinks, foodVideos, galleryBackdrop } from "@/lib/sol";
import { GalleryGrid } from "./GalleryGrid";
import { Reveal } from "./Reveal";

const chapters = [
  { title: "Start with something good.", items: foodAndDrinks.slice(0, 2) },
  { title: "A little fresh perspective.", items: foodAndDrinks.slice(2, 4) },
  { title: "Made for the table.", items: foodAndDrinks.slice(4, 6) },
  { title: "Stay for another taste.", items: foodAndDrinks.slice(6, 8) },
  { title: "End on a sweet note.", items: foodAndDrinks.slice(8) },
];

export function FoodGallery() {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const root = section.current;
    if (!root) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const sync = () => setAllowed(!preference.matches && !connection?.saveData);
    const frame = requestAnimationFrame(sync);
    preference.addEventListener("change", sync);
    let inView = false;
    const syncVisibility = () => setVisible(inView && !document.hidden);
    document.addEventListener("visibilitychange", syncVisibility);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncVisibility();
    });
    observer.observe(root);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);
  useEffect(() => {
    const current = video.current;
    if (!current) return;
    let cancelled = false;
    if (visible && allowed && !paused)
      current.play().catch((error) => {
        if (!cancelled && error.name !== "AbortError") setPaused(true);
      });
    else current.pause();
    return () => {
      cancelled = true;
      current.pause();
    };
  }, [active, visible, allowed, paused]);
  return (
    <section
      ref={section}
      className="food-story"
      aria-label="Food and drinks at Sol"
    >
      <div className="food-backdrop" aria-hidden="true">
        <Image src={galleryBackdrop} alt="" fill sizes="100vw" />
        {allowed && (
          <video
            key={active}
            ref={video}
            src={visible ? foodVideos[active] : undefined}
            muted
            playsInline
            onEnded={() => {
              setReady(false);
              setActive(index => (index + 1) % foodVideos.length);
            }}
            preload="none"
            autoPlay={visible && !paused}
            onPlaying={() => setReady(true)}
            onError={() => {
              setReady(false);
              setPaused(true);
            }}
            className={ready ? "ready" : ""}
          />
        )}
        <div className="food-backdrop-shade" />
      </div>
      <div className="food-story-content section-wrap">
        <div className="section-heading food-story-heading">
          <div>
              <p className="eyebrow">Food &amp; Drinks / At Sol</p>
            <h2>
              For the table.
              <br />
              <em>For the senses.</em>
            </h2>
          </div>
          {allowed && (
            <button
              className="icon-button"
              aria-label={
                paused ? "Play gallery background" : "Pause gallery background"
              }
              title={
                paused ? "Play gallery background" : "Pause gallery background"
              }
              onClick={() => setPaused(!paused)}
            >
              {paused ? <Play /> : <Pause />}
            </button>
          )}
        </div>
        {chapters.map((chapter, index) => (
          <article
            key={chapter.title}
            data-chapter={index}
            className="food-chapter"
          >
            <Reveal>
              <p className="eyebrow">0{index + 1} / At Sol</p>
              <h3>{chapter.title}</h3>
              <GalleryGrid natural items={chapter.items} />
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
