import axios from "axios";
import type { Product } from "../types/Product";

export const fetchProducts = async (filters: {
  category: string;
  minPrice: number;
  maxPrice: number;
}): Promise<Product[]> => {
  const res = await axios.get("https://dummyjson.com/products?limit=50");

  let products = res.data.products;

  if (filters.category) {
    products = products.filter(
      (p:Product) => p.category.toLowerCase() === filters.category.toLowerCase()
    );
  }

  products = products.filter(
    (p:Product) => p.price >= filters.minPrice && p.price <= filters.maxPrice
  );

  return products;
}
