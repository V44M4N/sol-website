import Image from "next/image";
import Link from "next/link";
import { cafe } from "@/lib/sol";
import { Reveal } from "./Reveal";
export function CafeSection() {
  return (
    <section className="section-wrap section-space cafe-section">
      <Reveal>
        <div className="cafe-photo">
          <Image
            src={cafe("lounge1")}
            alt="The relaxing lounge at Cafe Sol"
            fill
            sizes="(max-width: 700px) 90vw, 50vw"
          />
        </div>
      </Reveal>
      <Reveal>
        <p className="eyebrow">03 / A quieter side of Sol</p>
        <h2>
          Slow down.
          <br />
          <em>You&apos;re at Sol.</em>
        </h2>
        <p>
          Between the brews and the music, there is room to unwind. Cafe Sol
          brings coffee, food and unhurried conversations to the Sol experience.
        </p>
        <Link className="text-link" href="/cafe">
          Discover Cafe Sol ↗
        </Link>
      </Reveal>
    </section>
  );
}
