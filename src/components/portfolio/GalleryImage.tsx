import Image from "next/image";

type GalleryImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function GalleryImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 25vw, 50vw",
  priority = false,
}: GalleryImageProps) {
  return (
    <div className={`relative overflow-hidden bg-ink-soft ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
