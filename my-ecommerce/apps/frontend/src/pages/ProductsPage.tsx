import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProduct";


export default function ProductsPage() {
  const { data, isLoading, isError, error } = useProducts();

 if (isLoading || !data) return <div>Cargando productos...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Productos</h1>
      {data!.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          thumbnail={product.thumbnail}
        />
))}
    </div>
  );
}
