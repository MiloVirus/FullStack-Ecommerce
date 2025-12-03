import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProduct";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";


export default function ProductsPage() {
  const { data, isLoading, isError, error } = useProducts();

 if (isLoading || !data) return <div>Cargando productos...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Box fontFamily="Rubik" w="80%" margin={"auto"}>
        
        <Box overflowY="auto" h={["70%", "70%", "90%"]} borderRadius="20px">
          <SimpleGrid
            bg="gray.50"
            columns={{ sm: 2, md: 2, lg: 3 }}
            gap="15px"
            p="10"
            textAlign="center"
            rounded="lg"
            color="gray.400"
            fontFamily="Rubik"
            fontWeight="medium"
          >
            {data.map((element) => (
              <ProductCard
                key={element.id}
                id={element.id}
                title={element.title}
                price={element.price}
                category={element.category}
                thumbnail={element.thumbnail}
                images={element.images}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    
  );
}
