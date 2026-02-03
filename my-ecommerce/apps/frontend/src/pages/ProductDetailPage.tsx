import {
    Box,
    Container,
    Grid,
    GridItem,
    Image,
    Stack,
    Text,
    Heading,
    Button,
    HStack,
    SimpleGrid,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useProductById } from "../hooks/useProductById";
import { useCartStore } from "../store/useCartStore";



const ProductDetailPage = () => {
const addItem = useCartStore((state) => state.addItem);
    const {id} = useParams();
    const productId = Number(id); ;

     const { data, isLoading, error } = useProductById(productId)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading product</div>
    

    const getStars = (rating: number) => {
        if (rating < 1) return "☆☆☆☆☆"
        if (rating < 2) return "★☆☆☆☆"
        if (rating < 3) return "★★☆☆☆"
        if (rating < 4) return "★★★☆☆"
        if (rating < 5) return "★★★★☆"
    return "★★★★★"
}

const addItemToCart = () => {
  if (!data) return

  addItem({
    id: data.id,
    title: data.title,
    price: data.price,
    images: [data.images[0]],
  })
}
    return (
        <Container maxW="container.xl" py={8}>
            <Grid
                templateColumns={{ base: "1fr", md: "3fr 2fr" }}
                gap={8}
            >
                <GridItem>
                    <SimpleGrid columns={{ base: 1, md: 1
                     }} gap={4}>
                        <Image src={data?.images[0]} alt="product" maxW={680} w={"100%"}/>
                    </SimpleGrid>
                </GridItem>

                <GridItem display="flex" alignItems="center">
                    <Stack gap={4} flex={1}>
                        <Text fontSize="sm" color="gray.500">
                           {data?.brand}
                        </Text>

                        <Heading size="lg">
                            {data?.title}
                        </Heading>

                        {/* Rating */}
                        <HStack gap={2} m={{base:'auto',sm:'auto', md:'0'}}>
                            <Text>{getStars(data?.rating ?? 0)}</Text>
                            <Text fontSize="sm" color="gray.500">
                                {data?.reviews.length} reviews
                            </Text>
                        </HStack>

                        {/* Price */}
                        <Text fontSize="2xl" fontWeight="bold">
                            ${data?.price}
                        </Text>

                        {/* Delivery */}
                        <Box bg="green.700" color="white" p={3} borderRadius="md">
                            {data?.shippingInformation}
                        </Box>

                        <Button
                            onClick={addItemToCart}
                            size="lg"
                            bg="green.400"
                            color="black"
                            _hover={{ bg: "green.500" }}
                        >
                            Add to cart
                        </Button>
                    </Stack>
                </GridItem>
            </Grid>
        </Container>
    )
}

export default ProductDetailPage