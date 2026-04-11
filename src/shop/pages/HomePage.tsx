import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "../components/CustomJumbotron";
import { products } from "@/mocks/products.mock";
import { ProductsGrid } from "../components/ProductsGrid";

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron
        title="Todos los productos"
        subTitle="Lorem ipsum dolor sit amet"
      />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={6} />
    </>
  );
};
