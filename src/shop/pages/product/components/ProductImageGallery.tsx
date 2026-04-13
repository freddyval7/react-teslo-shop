import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductImageGalleryProps {
  images: string[];
  title: string;
}

export const ProductImageGallery = ({
  images,
  title,
}: ProductImageGalleryProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-4/5 w-full overflow-hidden bg-secondary">
        <AnimatePresence mode="wait">
          <motion.img
            key={selected}
            src={images[selected]}
            alt={`${title} - View ${selected + 1}`}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            width={1024}
            height={1280}
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative aspect-square w-20 overflow-hidden bg-secondary transition-opacity ${
                selected === i
                  ? "opacity-100 ring-1 ring-foreground"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              <img
                src={img}
                alt={`${title} thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
                width={80}
                height={80}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
