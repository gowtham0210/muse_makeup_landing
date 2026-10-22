export const CATEGORIES = ["Bridal", "Editorial", "Glam", "Party"] as const;
export type Category = (typeof CATEGORIES)[number];

export type GalleryItem = {
  id: string;
  category: Category;
  title: string;
  image: string;
  alt: string;
};

/**
 * Each entry maps to a real file in public/images/portfolio/.
 * Verified against the filesystem — do not add an entry here unless
 * the matching image actually exists on disk.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "bridal-01",
    category: "Bridal",
    title: "Bridal Look 01",
    image: "/images/portfolio/bridal-01.jpg",
    alt: "Bridal makeup look, soft romantic finish",
  },
  {
    id: "bridal-02",
    category: "Bridal",
    title: "Bridal Look 02",
    image: "/images/portfolio/bridal-02.jpg",
    alt: "Bridal makeup look, classic bridal glam",
  },
  {
    id: "bridal-03",
    category: "Bridal",
    title: "Bridal Look 03",
    image: "/images/portfolio/bridal-03.jpg",
    alt: "Bridal makeup look, elegant wedding-day finish",
  },
  {
    id: "bridal-04",
    category: "Bridal",
    title: "Bridal Look 04",
    image: "/images/portfolio/bridal-04.jpg",
    alt: "Bridal makeup look, traditional bridal style",
  },
  {
    id: "editorial-01",
    category: "Editorial",
    title: "Editorial Look 01",
    image: "/images/portfolio/editorial-01.jpg",
    alt: "Editorial makeup look, bold creative concept",
  },
  {
    id: "editorial-02",
    category: "Editorial",
    title: "Editorial Look 02",
    image: "/images/portfolio/editorial-02.jpg",
    alt: "Editorial makeup look, high-fashion styling",
  },
  {
    id: "editorial-03",
    category: "Editorial",
    title: "Editorial Look 03",
    image: "/images/portfolio/editorial-03.jpg",
    alt: "Editorial makeup look, artistic photoshoot style",
  },
  {
    id: "editorial-04",
    category: "Editorial",
    title: "Editorial Look 04",
    image: "/images/portfolio/editorial-04.jpg",
    alt: "Editorial makeup look, avant-garde concept",
  },
  {
    id: "glam-01",
    category: "Glam",
    title: "Glam Look 01",
    image: "/images/portfolio/glam-01.jpg",
    alt: "Glam makeup look, full-glam finish",
  },
  {
    id: "glam-02",
    category: "Glam",
    title: "Glam Look 02",
    image: "/images/portfolio/glam-02.jpg",
    alt: "Glam makeup look, shimmering evening glam",
  },
  {
    id: "glam-03",
    category: "Glam",
    title: "Glam Look 03",
    image: "/images/portfolio/glam-03.jpg",
    alt: "Glam makeup look, bold glam finish",
  },
  {
    id: "glam-04",
    category: "Glam",
    title: "Glam Look 04",
    image: "/images/portfolio/glam-04.jpg",
    alt: "Glam makeup look, sculpted glam style",
  },
  {
    id: "party-01",
    category: "Party",
    title: "Party Look 01",
    image: "/images/portfolio/party-01.jpg",
    alt: "Party makeup look, vibrant night-out style",
  },
  {
    id: "party-02",
    category: "Party",
    title: "Party Look 02",
    image: "/images/portfolio/party-02.jpg",
    alt: "Party makeup look, bold celebration glam",
  },
  {
    id: "party-03",
    category: "Party",
    title: "Party Look 03",
    image: "/images/portfolio/party-03.jpg",
    alt: "Party makeup look, festive shimmer finish",
  },
  {
    id: "party-04",
    category: "Party",
    title: "Party Look 04",
    image: "/images/portfolio/party-04.jpg",
    alt: "Party makeup look, dramatic eye-focused style",
  },
];
