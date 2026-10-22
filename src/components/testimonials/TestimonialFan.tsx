"use client";

import Image from "next/image";
import { useState, useSyncExternalStore, type CSSProperties } from "react";
import type { Testimonial } from "@/lib/testimonials";

const HOVER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(HOVER_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}


export function TestimonialFan({ items }: { items: Testimonial[] }) {
  const COUNT = items.length;
  const CENTER = (COUNT - 1) / 2;
  const canHover = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(HOVER_QUERY).matches,
    () => false
  );
  const [hovered, setHovered] = useState<number | null>(null);
  const [tapped, setTapped] = useState(0);
  const [focused, setFocused] = useState(false);

  // Pointer devices fan out on hover; touch devices stay fanned and tap to bring a card forward.
  const open = canHover ? hovered !== null || focused : true;
  const active = canHover ? (hovered !== null && hovered >= 0 ? hovered : null) : tapped;

  const cardStyle = (index: number): CSSProperties => {
    const offset = index - CENTER;
    const isActive = active === index;
    let rotate = offset * (open ? 11 : 4);
    let x = `calc(var(--w) * var(--spread) * ${open ? offset : offset * 0.22})`;
    let y = `${(open ? Math.abs(offset) ** 2 * 10 : Math.abs(offset) * 5).toFixed(1)}px`;
    let scale = 1;

    if (open && active !== null) {
      const side = Math.sign(index - active);
      if (isActive) {
        rotate = 0;
        y = "-1.5rem";
        scale = 1.06;
      } else {
        x = `calc(var(--w) * var(--spread) * ${offset} + var(--w) * var(--push) * ${side})`;
      }
    }

    const distance = active === null ? Math.abs(offset) : Math.abs(index - active);
    return {
      transform: `translateX(-50%) translateX(${x}) translateY(${y}) rotate(${rotate}deg) scale(${scale})`,
      zIndex: isActive ? COUNT + 1 : COUNT - distance,
    };
  };

  return (
    <div
      role="group"
      aria-label="Client testimonials (placeholder reviews)"
      onPointerEnter={(event) => event.pointerType === "mouse" && setHovered((h) => h ?? -1)}
      onPointerLeave={() => setHovered(null)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="[--push:0.07] [--spread:0.12] [--w:min(14rem,54vw)] md:[--push:0.14] md:[--spread:0.62] md:[--w:17rem]"
    >
      <ul className="relative mx-auto h-[calc(var(--w)*1.34+5rem)] w-full max-w-4xl">
        {items.map((item, index) => (
          <li
            key={item.id}
            style={cardStyle(index)}
            tabIndex={0}
            aria-label={`${item.role} — placeholder review`}
            onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(index)}
            onFocus={() => setHovered(index)}
            onBlur={() => setHovered(null)}
            onClick={() => setTapped(index)}
            className="absolute top-10 left-1/2 aspect-[3/4] w-[var(--w)] origin-[50%_115%] cursor-pointer overflow-hidden rounded-2xl border border-champagne/30 bg-ink-soft shadow-2xl shadow-black/70 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne motion-reduce:transition-none"
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 768px) 272px, 58vw"
              className="object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />

            <p className="absolute top-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-champagne-light">
              {item.role}
            </p>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <span aria-hidden="true" className="font-serif text-4xl leading-none text-champagne">
                &ldquo;
              </span>
              <p className="-mt-1 text-[13px] leading-relaxed text-cream/90">{item.quote}</p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-champagne-light">
                {item.name}
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-cream/45">
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-center text-[11px] uppercase tracking-[0.25em] text-cream/40">
        {canHover ? "Hover the cards to fan them out" : "Tap a card to bring it forward"}
      </p>
    </div>
  );
}
