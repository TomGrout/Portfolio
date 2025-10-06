"use client";
import { useState } from "react";
import { Maximize2 } from "lucide-react";

type CarouselImage = { src: string; desc?: string };

type ImageCarouselProps = {
  images: CarouselImage[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));

  const active = images[current];

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Image area */}
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-md group bg-black flex items-center justify-center">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.desc || `Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
          {/* Desc + fullscreen box (visible only on hover) */}
          {active.desc && (
            <div className="absolute top-3 right-3 hidden group-hover:flex items-center border border-gray-400/50 rounded-lg overflow-hidden text-sm text-gray-100 bg-black/40 backdrop-blur-sm">
              <span className="px-2 py-1">{active.desc}</span>
              <div className="h-5 w-px bg-gray-500/50" />
              <button
                type="button"
                className="px-2 py-1 hover:bg-gray-700/50 transition"
                title="View fullscreen"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-[-2rem] top-1/2 -translate-y-1/2 text-3xl text-gray-700 dark:text-gray-200 hover:text-gray-500"
        aria-label="Previous image"
      >
        &lt;
      </button>
      <button
        onClick={next}
        className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-3xl text-gray-700 dark:text-gray-200 hover:text-gray-500"
        aria-label="Next image"
      >
        &gt;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full border transition ${
              i === current
                ? "bg-gray-700 dark:bg-gray-200"
                : "border-gray-500"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
