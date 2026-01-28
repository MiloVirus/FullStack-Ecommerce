export type Product = {
  id: number;
  title: string;   
  price: number;
  category: string;
  images: string[];
  rating?: number;
  brand?: string;
  reviews: [];
  shippingInformation: string;
};