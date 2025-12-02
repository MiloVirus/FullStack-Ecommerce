import {create} from 'zustand';

type ProductFiltersState = {
  category: string;
  minPrice: number;
  maxPrice: number;
  setFilters: (filters: Partial<Omit<ProductFiltersState, 'setFilters'>>) => void;  
};

export const useProductFilters = create<ProductFiltersState>((set) => ({
  category: "",
  minPrice: 0,
  maxPrice: 9999,
    setFilters: (filters) =>
        set((state) => ({
            ...state,
            ...filters,
        })),
}));    