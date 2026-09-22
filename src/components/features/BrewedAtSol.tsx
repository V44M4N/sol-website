import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { beers } from "@/lib/sol";
import { Reveal } from "./Reveal";
export function BrewedAtSol() {
  return (
    <section id="the-craft" className="section-wrap section-space">
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / The craft</p>
            <h2>
              The heart of Sol.
              <br />
              <em>Freshly brewed.</em>
            </h2>
          </div>
          <Link className="text-link" href="/food">
            Explore the bar menu <ArrowUpRight size={18} />
          </Link>
        </div>
      </Reveal>
      <div className="brew-grid">
        {beers.map((beer, i) => (
          <Reveal key={beer.slug} delay={i * 0.08}>
            <Link href={`/brews/${beer.slug}`} className="brew-item">
              <div className="brew-image">
                <Image
                  src={beer.image}
                  alt={beer.name}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 23vw"
                />
              </div>
              <div className="brew-heading">
                <h3>{beer.name}</h3>
                <ArrowUpRight size={20} />
              </div>
              <p>{beer.style}</p>
              <div className="brew-spec">
                <span>ABV {beer.abv}</span>
                <span>IBU {beer.ibu}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
