import { useProductById } from "@/admin/hooks/useProductById";
import { ProductImageGallery } from "./components/ProductImageGallery";
import { ProductInfo, type Product } from "./components/ProductInfo";
import { Navigate, useParams } from "react-router";

const sampleProduct: Product = {
  id: "1",
  title: "Cybertruck Heavyweight Hoodie",
  price: 150.0,
  slug: "cybertruck-heavyweight-hoodie",
  description:
    "Engineered for ultimate comfort. This heavyweight hoodie features a relaxed fit with premium brushed fleece lining, reinforced ribbed cuffs, and a kangaroo pocket. Made from 100% organic cotton.",
  stock: 4,
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  gender: "unisex",
  tags: ["hoodie", "cybertruck", "heavyweight", "organic cotton"],
  images: [
    "https://placehold.co/250x250",
    "https://placehold.co/250x250",
    "https://placehold.co/250x250",
  ],
};

export const ProductPage = () => {
  const { idSlug } = useParams();

  console.log(idSlug);

  if (!idSlug) <Navigate to="/" />;

  const { data: product, isLoading } = useProductById(idSlug || "");

  return (
    <div className="min-h-screen bg-background">
      {/* Product */}
      {isLoading ? (
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        </div>
      ) : (
        <main className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ProductImageGallery
              images={product?.images || []}
              title={product?.title || ""}
            />
            <ProductInfo product={product || sampleProduct} />
          </div>
        </main>
      )}
    </div>
  );
};
