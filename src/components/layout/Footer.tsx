import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { business } from "@/lib/sol";
import { SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-call">
        <div>
          <p className="eyebrow">Make it a Sol evening</p>
          <h2>
            Your next round.
            <br />
            Your favourite people.
          </h2>
        </div>
        <a className="action primary" href={business.telephone}>
          <Phone size={18} />
          Call to book a table
        </a>
      </div>
      <div className="section-wrap footer-grid">
        <Link href="/" aria-label="Sol home">
          <Image
            src="/media/logo.webp"
            alt={business.name}
            width={110}
            height={110}
          />
        </Link>
        <div>
          <h3>Find us above Shimla</h3>
          <p>{business.address}</p>
          <a href={business.maps} target="_blank" rel="noreferrer">
            Get directions <ArrowUpRight size={14} />
          </a>
        </div>
        <div>
          <h3>Stay in the moment</h3>
          <a href={business.telephone}>{business.phone}</a>
          <div className="social-icons">
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <SiInstagram size={23} />
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <SiFacebook size={23} />
            </a>
          </div>
        </div>
        <div>
          <h3>Explore Sol</h3>
          <Link href="/brews">Our brews</Link>
          <Link href="/food">Bar & food menus</Link>
          <Link href="/culinary-collective-gallery">Culinary Collective Gallery</Link>
          <Link href="/about">Our story</Link>
        </div>
      </div>
      <p className="section-wrap copyright">
        © {new Date().getFullYear()} Sol The Brew House, Shimla.
      </p>
      <div className="mobile-dock">
        <Link href="/food">Menu</Link>
        <a href={business.telephone}>Call to book</a>
        <a href={business.maps} target="_blank" rel="noreferrer">
          Directions
        </a>
      </div>
    </footer>
  );
}
