import { useParams } from "react-router";

import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { useProduct } from "@/shop/hooks/useProduct";

export const GenderPage = () => {
  const { gender } = useParams();

  const { data, isLoading } = useProduct();

  const genderLabel =
    gender === "men" ? "Hombres" : gender === "kid" ? "Niños" : "Mujeres";

  return (
    <>
      <CustomJumbotron
        title={`Productos para ${genderLabel}`}
        subTitle="Lorem ipsum dolor sit amet"
      />
      <ProductsGrid products={data?.products || []} isLoading={isLoading} />
      <CustomPagination totalPages={data?.pages || 1} />
    </>
  );
};
