import { ProductImageGallery } from "./components/ProductImageGallery";
import { ProductInfo, type Product } from "./components/ProductInfo";

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
  // const { id } = useParams();

  // const [product, setProduct] = useState<Product>(sampleProduct);

  return (
    <div className="min-h-screen bg-background">
      {/* Product */}
      <main className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <ProductImageGallery
            images={sampleProduct.images}
            title={sampleProduct.title}
          />
          <ProductInfo product={sampleProduct} />
        </div>
      </main>
    </div>
  );
};
