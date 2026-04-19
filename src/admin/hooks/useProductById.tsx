import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.action";
import type { Product } from "@/interfaces/product.interface";
import { createUpdateProductAction } from "../actions/create-update-product.action";

export const useProductById = (id: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
    // enabled: !!id, // Enable the query when the id is not empty
  });

  // Mutation
  const mutation = useMutation({
    mutationFn: createUpdateProductAction,
    onSuccess: (product: Product) => {
      // Invalidate cache all products
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      // Invalidate cache product by id
      queryClient.invalidateQueries({
        queryKey: ["product", { id: product.id }],
      });

      // Update queryData
      queryClient.setQueryData(["products", { id: product.id }], product);
    },
  });

  return {
    ...query,
    mutation,
  };
};
