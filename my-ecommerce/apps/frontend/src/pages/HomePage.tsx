import { Box, Button, Flex, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProduct'
import HomePageCard from '../components/HomePageCard'
import type { Product } from '../types/Product'


const HomePage = () => {

const { data, isLoading, isError, error } = useProducts();

 if (isLoading || !data) return <div>Cargando productos...</div>;
  if (isError) return <div>Error: {error.message}</div>;

 const featuredProducts = data.filter(
  (p: Product) => (p.rating ?? 0) >= 4.5
);

  return (
    <>
    <Box>
      <Flex id="callToAction" borderRadius="20px" w={["80%","80%","70%","70%"]} m="auto" fontFamily="Rubik" minH="600px" marginBottom={10}
  bgImage="
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.72),
      rgba(0,0,0,0.93)
    ),
    url('https://imagenes.hobbyconsolas.com/files/image_1920_1080/uploads/imagenes/2023/04/25/690100fc00965.png')
  "
  bgSize="cover"
   >
          <Flex flexWrap={'wrap'} alignSelf="center" width="80%" m="auto" >
              <Box w="100%">
                  <Text color="white" fontSize={['2rem','2.5rem','3.5rem','3.5rem']}  fontWeight="bold">
                  Buy the best <Text as='span' color="#7BE0AD" className='ctaTextAnimation'>Mechanical Keyboards</Text> in the market
                  </Text>
              </Box>
              <Box w="100%" alignSelf="center"  p={5}>
              <Link to="/products" relative="path">
                  <Button>View Products</Button>
              </Link>
              </Box>
          </Flex>
      </Flex>
      <Box w={["80%","80%","70%","70%"]} m="auto">
        <SimpleGrid
            bg='gray.50'
            columns={{ sm: 1, md: 2, lg: 2, xl: 4 }}
           
            p='10'
            textAlign='center'
            rounded='lg'
            color='gray.400'
          >
            {featuredProducts.map((element) => (
              <HomePageCard
                key={element.id}
                id={element.id}
                title={element.title}
                price={element.price}
                category={element.category}
                images={element.images}
            />
           ))}
        </SimpleGrid>
      </Box>
    </Box>
    </>   
  )
}

export default HomePage