"use client";
import Image from "next/image";
import Link from "next/link";
import { Pause, Play, ArrowDown, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { business, venue, headerVideos } from "@/lib/sol";
import { Reveal } from "./Reveal";
export function Hero({
  title = "Sol The Brew House",
  subtitle = "Lounge by Day. Club by Night.",
  compact = false,
  videoEnabled = true,
  image = venue("_bararea1"),
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  videoEnabled?: boolean;
  image?: string;
}) {
  const [clip, setClip] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const syncPlayback = () =>
      setPlaying(videoEnabled && !preference.matches && !connection?.saveData);
    preference.addEventListener("change", syncPlayback);
    // Let the poster paint before starting optional background playback.
    const frame = requestAnimationFrame(syncPlayback);
    return () => {
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", syncPlayback);
    };
  }, [videoEnabled]);
  useEffect(() => {
    if (!video.current) return;
    if (playing) video.current.play().catch(() => setPlaying(false));
    else video.current.pause();
  }, [playing, clip]);
  const next = () => {
    setReady(false);
    setClip((n) => (n % headerVideos.length) + 1);
  };
  return (
    <section className={`sol-hero ${compact ? "compact" : ""}`}>
      <Image
        src={image}
        alt="The bar and brewing tanks at Sol The Brew House"
        fill
        priority
        sizes="100vw"
        className="hero-photo"
      />
      {(playing || ready) && (
        <video
          ref={video}
          key={clip}
          src={headerVideos[clip - 1]}
          muted
          playsInline
          autoPlay={playing}
          preload="metadata"
          onPlaying={() => setReady(true)}
          onEnded={next}
          onError={() => {
            setReady(false);
            setPlaying(false);
          }}
          className={`hero-video ${ready ? "is-ready" : ""}`}
          aria-hidden="true"
        />
      )}
      <div className="hero-shade" />
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">Craft brews. Shimla views.</p>
          <h1>
            {title === "Sol The Brew House" ? (
              <>
                <span className="sol-word">SOL</span>
                <span className="hero-name">The Brew House</span>
              </>
            ) : (
              title
            )}
          </h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="actions">
            <a className="action primary" href={business.telephone}>
              <Phone size={17} /> Call to book
            </a>
            <Link className="action secondary" href="/brews">
              Discover the brews
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="hero-bottom">
        <span>Hotel Combermere / The Mall, Shimla</span>
        <a
          href={compact ? "#page-content" : "#the-craft"}
          aria-label="Explore Sol"
        >
          <ArrowDown size={20} />
        </a>
        {videoEnabled && (
          <button
            className="icon-button"
            title={playing ? "Pause background video" : "Play background video"}
            aria-label={
              playing ? "Pause background video" : "Play background video"
            }
            onClick={() => setPlaying(!playing)}
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
        )}
      </div>
    </section>
  );
}
