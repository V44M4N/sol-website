import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { beers, business } from "@/lib/sol";
export function generateStaticParams() {
  return beers.map((b) => ({ slug: b.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const beer = beers.find((b) => b.slug === slug);
  return {
    title: beer ? `${beer.name} | Sol The Brew House` : "Brew not found",
    description: beer?.description,
  };
}
export default async function BeerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const beer = beers.find((b) => b.slug === slug);
  if (!beer) notFound();
  return (
    <>
      <Navbar />
      <main id="page-content" className="section-wrap beer-detail">
        <div className="beer-detail-image">
          <Image
            src={beer.image}
            alt={beer.name}
            fill
            priority
            sizes="(max-width: 700px) 90vw, 50vw"
          />
        </div>
        <div>
          <Link className="text-link" href="/brews">
            ← All brews
          </Link>
          <p className="eyebrow">Brewed at Sol / {beer.style}</p>
          <h1>{beer.name}</h1>
          <p>{beer.description}</p>
          <dl className="beer-measures">
            <div>
              <dt>ABV</dt>
              <dd>{beer.abv}</dd>
            </div>
            <div>
              <dt>IBU</dt>
              <dd>{beer.ibu}</dd>
            </div>
          </dl>
          <a className="action primary" href={business.telephone}>
            Call to book
          </a>
          <p className="small-note">Ask our team about current availability.</p>
        </div>
      </main>
      <section className="section-wrap section-space">
        <h2>Explore the other brews</h2>
        <div className="other-brews">
          {beers
            .filter((b) => b.slug !== slug)
            .map((b) => (
              <Link
                className="text-link"
                key={b.slug}
                href={`/brews/${b.slug}`}
              >
                {b.name} ↗
              </Link>
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
