"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { InViewVideo } from "@/components/common/InViewVideo";

const HOVER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(HOVER_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

type FilmstripCardProps = {
  index: number;
  href: string;
  label: string;
  title: string;
  videoSrc: string;
  startAt?: number;
  className?: string;
};

export function FilmstripCard({
  index,
  href,
  label,
  title,
  videoSrc,
  startAt,
  className = "",
}: FilmstripCardProps) {
  const [engaged, setEngaged] = useState(false);
  const canHover = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(HOVER_QUERY).matches,
    () => false
  );

  return (
    <Link
      href={href}
      onPointerEnter={() => setEngaged(true)}
      onPointerLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={() => setEngaged(false)}
      className={`group relative block aspect-[3/4] overflow-hidden bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne ${className}`}
    >
      <InViewVideo
        src={videoSrc}
        startAt={startAt}
        active={canHover ? engaged : undefined}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40 transition-opacity duration-500 group-hover:opacity-80" />

      <span className="absolute left-5 top-5 font-serif text-sm text-champagne-light/80">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-5 bottom-5">
        <p className="text-[11px] uppercase tracking-[0.3em] text-champagne-light/90">
          {label}
        </p>
        <p className="mt-2 font-serif text-xl leading-snug text-cream sm:text-2xl">
          {title}
        </p>
        <span
          aria-hidden="true"
          className="mt-4 inline-block text-sm text-champagne-light transition-transform duration-200 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </div>
    </Link>
  );
}
