import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts as fetchProducts, addNewProduct } from "../api/firebase";

const useProducts = () => {
  const queryClient = useQueryClient();
  const ProductsQuery = useQuery(["products"], fetchProducts, {
    staleTime: 1000 * 60,
  });
  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  return { ProductsQuery, addProduct };
};

export default useProducts;
