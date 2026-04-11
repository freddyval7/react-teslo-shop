import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/mocks/products.mock";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { useParams } from "react-router";

export const GenderPage = () => {
  const { gender } = useParams();
  const genderLabel =
    gender === "men" ? "Hombres" : gender === "kid" ? "Niños" : "Mujeres";

  return (
    <>
      <CustomJumbotron
        title={`Productos para ${genderLabel}`}
        subTitle="Lorem ipsum dolor sit amet"
      />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={6} />
    </>
  );
};
