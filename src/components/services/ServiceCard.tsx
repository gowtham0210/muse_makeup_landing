import Link from "next/link";
import type { Service } from "@/lib/site-config";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      id={service.slug}
      className="flex flex-col justify-between gap-6 border border-champagne/15 px-8 py-10"
    >
      <div>
        <h2 className="font-serif text-2xl text-cream sm:text-3xl">
          {service.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
          {service.description}
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-champagne-light/80">
          Contact for pricing
        </p>
      </div>
      <Link
        href={`/booking?service=${service.slug}`}
        className="inline-block w-fit rounded-full bg-champagne px-7 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:bg-champagne-light"
      >
        Book This Service
      </Link>
    </div>
  );
}
