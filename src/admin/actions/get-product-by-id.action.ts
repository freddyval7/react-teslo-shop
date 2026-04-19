import { tesloApi } from "@/api/tesloApi";
import type { Product } from "@/interfaces/product.interface";

export const getProductByIdAction = async (id: string): Promise<Product> => {
  if (!id) throw new Error("Product ID is required");

  if (id === "new") {
    return {
      id: "new",
      title: "",
      price: 0,
      description: "",
      slug: "",
      images: [],
      sizes: [],
      gender: "men",
      tags: [],
      stock: 0,
    } as unknown as Product;
  }

  const { data } = await tesloApi.get<Product>(`products/${id}`);

  const images = data.images.map((image) => {
    if (image.includes("http")) {
      return image;
    }

    return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
  });

  return {
    ...data,
    images,
  };
};
