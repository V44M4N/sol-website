import Image from "next/image";
import { venue } from "@/lib/sol";
import { Reveal } from "./Reveal";
export function SolExperience() {
  return (
    <section className="experience section-space">
      <div className="section-wrap">
        <Reveal>
          <p className="eyebrow">02 / The atmosphere</p>
          <div className="section-heading">
            <h2>
              Good company.
              <br />
              <em>Great surroundings.</em>
            </h2>
            <p>
              Expansive city views, unique in-house German and Belgian brews,
              global cuisine and live music. Lounge by day. Club by night.
            </p>
          </div>
        </Reveal>
        <div className="experience-grid">
          {[
            ["_peopleinthelounge1", "A round worth sharing"],
            ["_outsidelounge2", "Above the city"],
            ["_loungearea3", "Stay a little longer"],
            ["_goldenhour1", "Catch the golden hour"],
            ["_outsidelounge3", "A little closer to the view"],
            ["_loungearea5", "Make yourself at home"],
            ["_loungearea6", "Room for a few more"],
            ["2", "The spirit of Sol"],
          ].map(([src, label], i) => (
            <Reveal key={src} delay={i * 0.12}>
              <figure>
                <div className="experience-photo">
                  <Image
                    src={venue(src)}
                    alt={label}
                    fill
                    sizes="(max-width: 700px) 90vw, 33vw"
                  />
                </div>
                <figcaption>
                  <span>0{i + 1}</span>
                  {label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
