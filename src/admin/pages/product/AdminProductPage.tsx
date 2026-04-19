import { Navigate, useNavigate, useParams } from "react-router";

import { useProductById } from "@/admin/hooks/useProductById";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { ProductForm } from "./ui/ProductForm";
import type { Product } from "@/interfaces/product.interface";
import { toast } from "sonner";

export const AdminProductPage = () => {
  const { idSlug } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isError,
    mutation,
  } = useProductById(idSlug || "");

  const title = idSlug === "new" ? "Nuevo producto" : "Editar producto";
  const subtitle =
    idSlug === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto.";

  const handleSubmit = async (productLike: Partial<Product>) => {
    await mutation.mutateAsync(productLike, {
      onSuccess: (data) => {
        toast.success("Producto actualizado correctamente", {
          position: "top-right",
        });
        navigate(`/admin/products/${data.id}`);
      },
      onError: (error) => {
        console.log(error);
        toast.error("Error al actualizar el producto", {
          position: "top-right",
        });
      },
    });
  };

  if (isError) return <Navigate to="/admin/products" />;

  if (isLoading) return <CustomFullScreenLoading />;

  if (!product) return <Navigate to="/admin/products" />;

  return (
    <ProductForm
      title={title}
      subTitle={subtitle}
      product={product}
      onSubmit={handleSubmit}
      isPending={mutation.isPending}
    />
  );
};
