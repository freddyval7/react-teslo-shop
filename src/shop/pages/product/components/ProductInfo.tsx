import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: string[];
  gender: string;
  tags: string[];
  images: string[];
}

interface Props {
  product: Product;
}

export const ProductInfo = ({ product }: Props) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const stockLabel =
    product.stock === 0
      ? { text: "Out of Stock", className: "text-stock-out" }
      : product.stock <= 5
        ? { text: `Only ${product.stock} left`, className: "text-stock-low" }
        : { text: "In Stock", className: "text-stock-in" };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {product.gender}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
          {product.title}
        </h1>
        <p className="text-2xl font-light text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {product.description}
      </p>

      {/* Stock */}
      <div>
        <span
          className={`text-xs font-medium uppercase tracking-widest ${stockLabel.className}`}
        >
          {stockLabel.text}
        </span>
      </div>

      {/* Sizes */}
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Size
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`flex h-12 w-12 items-center justify-center border text-sm font-medium transition-colors ${
                selectedSize === size
                  ? "border-foreground bg-foreground text-primary-foreground"
                  : "border-border bg-transparent text-foreground hover:border-foreground"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <Button
        className="h-14 w-full text-sm font-semibold uppercase tracking-[0.15em]"
        disabled={product.stock === 0 || !selectedSize}
      >
        {product.stock === 0 ? "Sold Out" : "Add to Cart"}
      </Button>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 border-t border-border pt-6">
        {product.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};
