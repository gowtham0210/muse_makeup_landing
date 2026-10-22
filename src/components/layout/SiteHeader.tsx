"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, BOOKING_PATH } from "@/lib/site-config";
import { useScrolled } from "@/hooks/useScrolled";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-cream/5 bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.2em] text-cream"
          onClick={() => setMenuOpen(false)}
        >
          MUSE
        </Link>

        <ul className="hidden items-center gap-6 text-sm lg:gap-10 uppercase tracking-[0.15em] text-cream/80 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-champagne-light ${
                    isActive ? "text-champagne-light" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href={BOOKING_PATH}
              className="rounded-full border border-champagne/60 px-4 py-2 text-xs uppercase tracking-[0.15em] text-champagne-light transition-colors duration-200 hover:border-champagne hover:bg-champagne/10"
            >
              Book Now
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-cream transition-transform duration-200 ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform duration-200 ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <ul
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-cream/5 bg-ink/95 px-6 py-4 text-sm uppercase tracking-[0.15em] text-cream/80 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 transition-colors duration-200 hover:text-champagne-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={BOOKING_PATH}
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-full border border-champagne/60 px-4 py-3 text-center text-champagne-light"
            >
              Book Now
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
