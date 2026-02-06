import { useQuery } from "@tanstack/react-query";  
import {fetchProducts} from "../services/productService";
import type { Product } from "../types/Product";

import { useProductFilters } from "../store/useProductFilters";

export const useProducts = (limit: number, skip:number) => {
  const { category, minPrice, maxPrice } = useProductFilters(); 
   return useQuery<Product[]>({
    queryKey: ["products", category, minPrice, maxPrice, limit, skip],
    queryFn: () => fetchProducts({ category, minPrice, maxPrice, limit, skip })
  });
}