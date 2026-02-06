import { useProductFilters } from "../store/useProductFilters";

export const FiltersSidebar = () => {
  const { category, minPrice, maxPrice, setFilters } = useProductFilters(); 

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ category: e.target.value === "all" ? "" : e.target.value });
  }

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ minPrice: Number(e.target.value) });
  } 

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ maxPrice: Number(e.target.value) });
  }

  return (
    <aside style={{ padding: "1rem", width: "250px" }}>
      <h2>Filters</h2>

      <label>
        Category:
        <select value={category ?? "all"} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="kitchen-accessories">Kitchen Accessories</option>
          <option value="clothes">Clothes</option>
        </select>
      </label>

      <br /><br />

      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={handleMinPriceChange}
          min={0}
        />
      </label>

      <br /><br />

      {/* MAX PRICE */}
      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          min={0}
        />
      </label>
    </aside>
  );
}