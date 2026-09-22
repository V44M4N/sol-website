"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { venue } from "@/lib/sol";
const moments = [
  {
    name: "Day",
    image: "_loungearea1-large",
    text: "Settle into the Brew House. Food, conversation and a fresh pour.",
  },
  {
    name: "Golden hour",
    image: "_goldenhour1-large",
    text: "Take it to the terrace. A brew in hand, Shimla in view.",
  },
  {
    name: "Night",
    image: "_outsidelounge1-large",
    text: "Stay for the evening. The Brew House finds its after-dark rhythm.",
  },
];
export function DayNightTransition() {
  const [active, setActive] = useState(0);
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start center", "end center"],
  });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!reduced) setActive(Math.min(2, Math.floor(value * 3)));
  });
  return (
    <section ref={section} className="day-night">
      <div className="moment-images">
        {moments.map((m, i) => (
          <Image
            key={m.name}
            src={venue(m.image)}
            alt={m.name + " at Sol The Brew House"}
            fill
            sizes="100vw"
            quality={90}
            className={i === active ? "active" : ""}
          />
        ))}
      </div>
      <div className="moment-shade" />
      <div className="section-wrap moment-copy">
        <p className="eyebrow">04 / One Sol. Every hour.</p>
        <h2>
          The Brew House.
          <br />
          <em>From day into night.</em>
        </h2>
        <div className="moment-tabs" role="tablist" aria-label="Time of day">
          {moments.map((m, i) => (
            <button
              key={m.name}
              role="tab"
              id={`moment-tab-${i}`}
              aria-selected={i === active}
              aria-controls="moment-panel"
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  const n = (i + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                  setActive(n);
                  document.getElementById(`moment-tab-${n}`)?.focus();
                }
              }}
              tabIndex={i === active ? 0 : -1}
            >
              {m.name}
            </button>
          ))}
        </div>
        <p
          id="moment-panel"
          role="tabpanel"
          aria-labelledby={`moment-tab-${active}`}
        >
          {moments[active].text}
        </p>
      </div>
    </section>
  );
}
