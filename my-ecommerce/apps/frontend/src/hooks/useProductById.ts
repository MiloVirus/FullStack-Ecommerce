// hooks/useProduct.ts
import { useQuery } from "@tanstack/react-query"
import { fetchProductById } from "../services/productService"
import type { Product } from "../types/Product"

export const useProductById = (id?: number) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id as number),
    enabled: !!id,
  })
}
