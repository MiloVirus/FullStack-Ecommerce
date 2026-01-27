import type { Product}  from "./Product";

export type CartItem = Omit<Product, "category"> & {
  quantity: number;
};