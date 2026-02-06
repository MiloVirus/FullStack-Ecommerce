import {create} from 'zustand';

type FiltersState = {
  category: string;
  minPrice: number;
  maxPrice: number;
};

type ProductFiltersState = FiltersState & {
  setFilters: (filters: Partial<FiltersState>) => void;
}

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