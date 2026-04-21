import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "../components/CustomJumbotron";
import { ProductsGrid } from "../components/ProductsGrid";
import { useProduct } from "../hooks/useProduct";

export const HomePage = () => {
  const { data, isLoading } = useProduct();

  return (
    <>
      <CustomJumbotron
        title="Todos los productos"
        subTitle="Lorem ipsum dolor sit amet"
      />
      <ProductsGrid products={data?.products || []} isLoading={isLoading} />
      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
