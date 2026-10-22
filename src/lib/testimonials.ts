export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

/**
 * PLACEHOLDER CONTENT — these reviews are sample text written for layout
 * purposes only. Replace with verified client reviews (and confirm photo
 * permissions) before launch. Photos reuse existing /images/portfolio files.
 */
export const TESTIMONIALS_ARE_PLACEHOLDERS = true;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "bridal",
    quote:
      "My bridal look felt completely like me, only more polished. The whole session was calm, thoughtful and unhurried.",
    name: "Priya",
    role: "Bridal Makeup",
    image: "/images/portfolio/bridal-04.jpg",
    imageAlt: "Bridal makeup look, traditional bridal style",
  },
  {
    id: "editorial",
    quote:
      "She understood the concept for our shoot right away and brought bold, creative ideas that photographed beautifully.",
    name: "Rudhra",
    role: "Editorial Makeup",
    image: "/images/portfolio/editorial-02.jpg",
    imageAlt: "Editorial makeup look, high-fashion styling",
  },
  {
    id: "glam",
    quote:
      "Every detail was considered, from the colours to the finish. I felt confident the moment I looked in the mirror.",
    name: "Ashmi",
    role: "Glam Makeup",
    image: "/images/portfolio/glam-02.jpg",
    imageAlt: "Glam makeup look, shimmering evening glam",
  },
  {
    id: "party",
    quote:
      "Photo-ready from the first hour to the last dance. The makeup stayed fresh all night and I loved how it felt.",
    name: "Hema",
    role: "Party Makeup",
    image: "/images/portfolio/party-02.jpg",
    imageAlt: "Party makeup look, bold celebration glam",
  },
];
