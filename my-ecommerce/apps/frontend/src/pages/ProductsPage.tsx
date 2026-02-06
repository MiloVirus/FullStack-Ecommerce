import { useEffect, useState } from "react";
import { FiltersSidebar } from "../components/FiltersSidebar";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProduct";
import {
  Box,
  Flex,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import type { Product } from "../types/Product";


export default function ProductsPage() {

  const [skip, setSkip] = useState(0)

  const { data, isLoading, isError, error } = useProducts(10, skip);
  const [productsArray, setProductsArray] = useState<Product[]>([]);

  useEffect(() =>
  {
    if(data && data.length > 0)
    {
      setProductsArray(prev => ([...prev, ...data]))
      console.log(productsArray)
    }
  }, [data])

  if (isLoading || !data) return <div>Cargando productos...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const updateSkipState = () => {
     setSkip(prev => prev + 10);
  }



  return (
    <Box fontFamily="Rubik" w="80%" mx="auto">
      <Flex align="flex-start" gap={6}>

        {/* SIDEBAR */}
        <Box
          position="sticky"
          top="80px"        // altura del navbar
          h="fit-content"
          minW="250px"
        >
          <FiltersSidebar />
        </Box>

        {/* PRODUCTS */}
        <Box>

          <SimpleGrid
            flex="1"
            bg="gray.50"
            columns={{ sm: 2, md: 2, lg: 3, xl: 4 }}
            gap="15px"
            p="10"
            rounded="lg"
            color="gray.400"
            fontFamily="Rubik"
            fontWeight="medium"
          >
            {productsArray.map((element) => (
              <div key={element.id}>
                <ProductCard
                key={element.id}
                {...element}
              />
              </div>
              
            ))}

          </SimpleGrid>
          <Button
            onClick={updateSkipState}
          >Load More</Button>
        </Box>

      </Flex>
    </Box>


  );
}
