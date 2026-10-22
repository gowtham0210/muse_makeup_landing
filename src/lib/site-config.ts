export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/testimonials" },
] as const;

export const BOOKING_PATH = "/booking";

export const VIDEOS = {
  home: "/videos/home-hero.mp4",
  portfolio: "/videos/portfolio-bg.mp4",
  services: "/videos/services-bg.mp4",
  about: "/videos/about-bg.mp4",
  booking: "/videos/booking-bg.mp4",
  testimonials: "/videos/testimonial-bg.mp4",
  studio: "/videos/beauty-studio.mp4",
} as const;

/**
 * Set NEXT_PUBLIC_INSTAGRAM_URL in your environment to point this at the
 * real account. Left as "#" until a real handle is provided.
 */
export const SOCIAL_LINKS = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
};

export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup",
    description:
      "A tailored bridal look designed to last through every moment of the day, from first look to last dance.",
  },
  {
    slug: "party-makeup",
    title: "Party Makeup",
    description:
      "Bold, photo-ready glam for celebrations, nights out, and everything in between.",
  },
  {
    slug: "editorial-makeup",
    title: "Editorial Makeup",
    description:
      "Concept-driven makeup for photoshoots, lookbooks, and campaigns that push creative boundaries.",
  },
  {
    slug: "personal-makeup-sessions",
    title: "Personal Makeup Sessions",
    description:
      "One-on-one sessions focused on your features, your routine, and building confidence in your own hands.",
  },
];
