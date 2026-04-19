import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useProduct } from "@/shop/hooks/useProduct";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";
import { currencyFormatter } from "../../../lib/currency-formatter";

export const AdminProductsPage = () => {
  const { data, isLoading } = useProduct();

  if (isLoading) return <CustomFullScreenLoading />;

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Products"
          subTitle="Aqui puedes ver y administrar tus productos"
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              Nuevo Producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tamaño</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.products?.map((product, id) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{id + 1}</TableCell>
              <TableCell>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell>
                <Link
                  className="hover:text-blue-500 transition-colors duration-150 ease-in-out"
                  to={`/admin/products/${product.id}`}
                >
                  {product.title}
                </Link>
              </TableCell>
              <TableCell className="text-right">
                {currencyFormatter(product.price)}
              </TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell>{product.stock} in stock</TableCell>
              <TableCell>{product.sizes.join(", ")}</TableCell>
              <TableCell>
                <Link to={`/admin/products/${product.id}`}>
                  <PencilIcon className="w-4 h-4 text-blue-500" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CustomPagination totalPages={data?.pages || 1} />
    </>
  );
};
