"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { business } from "@/lib/sol";
const links = [
  ["The Brew House", "/brew-house"],
  ["Bar & Food", "/food"],
  ["Gallery", "/gallery"],
  ["Culinary Collection Gallery", "/culinary-collective-gallery"],
  ["Cafe Sol", "/cafe"],
  ["Visit", "/contact"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#page-content">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Sol The Brew House home">
          <Image
            src="/media/logo.webp"
            alt="Sol The Brew House"
            width={76}
            height={76}
            priority
          />
        </Link>
        <button
          className="mobile-toggle"
          aria-label={open ? "Close explore menu" : "Explore Sol"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <span>Explore</span>
          <ChevronDown size={18} aria-hidden="true" />
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          ))}
          <a href={business.telephone} className="action primary">
            <Phone size={16} />
            Call to book
          </a>
        </nav>
      </header>
    </>
  );
}
