import { CATEGORIES, type Category } from "./galleryData";

type GalleryFiltersProps = {
  active: Category | "All";
  onChange: (category: Category | "All") => void;
};

export function GalleryFilters({ active, onChange }: GalleryFiltersProps) {
  const options: (Category | "All")[] = ["All", ...CATEGORIES];

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.15em] transition-colors duration-200 ${
              isActive
                ? "border-champagne bg-champagne text-ink"
                : "border-champagne/40 text-cream/80 hover:border-champagne hover:text-champagne-light"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
