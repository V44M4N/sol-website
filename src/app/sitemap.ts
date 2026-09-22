import type { MetadataRoute } from "next";
import { beers } from "@/lib/sol";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL;
  if (!base) return [];
  return [
    "",
    "/about",
    "/brew-house",
    "/brews",
    "/cafe",
    "/food",
    "/gallery",
    "/culinary-collective-gallery",
    "/contact",
    "/reservations",
    ...beers.map((b) => "/brews/" + b.slug),
  ].map((path) => ({
    url: base.replace(/\/$/, "") + path,
    changeFrequency: "monthly",
    priority: path ? 0.7 : 1,
  }));
}
