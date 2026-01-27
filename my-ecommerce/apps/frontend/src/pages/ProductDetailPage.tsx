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

const ProductDetailPage = () => {

    const {id} = useParams();
    const productId = Number(id); ;

     const { data, isLoading, error } = useProductById(productId)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading product</div>
    return (
        <Container maxW="container.xl" py={8}>
            <Grid
                templateColumns={{ base: "1fr", md: "3fr 2fr" }}
                gap={8}
            >
                {/* LEFT: Images */}
                <GridItem>
                    <SimpleGrid columns={{ base: 1, md: 1
                     }} gap={4}>
                        <Image src={data?.images[0]} alt="product" />
                    </SimpleGrid>
                </GridItem>

                {/* RIGHT: Product info */}
                <GridItem>
                    <Stack gap={4}>
                        <Text fontSize="sm" color="gray.500">
                           {data?.brand}
                        </Text>

                        <Heading size="lg">
                            {data?.title}
                        </Heading>

                        {/* Rating */}
                        <HStack gap={2}>
                            <Text>⭐⭐⭐⭐⭐</Text>
                            <Text fontSize="sm" color="gray.500">
                                2 reviews
                            </Text>
                        </HStack>

                        {/* Price */}
                        <Text fontSize="2xl" fontWeight="bold">
                            £69.00
                        </Text>

                        {/* Delivery */}
                        <Box bg="green.700" color="white" p={3} borderRadius="md">
                            Free standard delivery on orders over £50
                        </Box>

                        {/* Color */}
                        <Box>
                            <Text fontWeight="semibold">Colour</Text>
                            <Text>Navy Mix</Text>
                        </Box>
                        {/* CTA */}
                        <Button
                            size="lg"
                            bg="green.400"
                            color="black"
                            _hover={{ bg: "green.500" }}
                        >
                            Add to bag
                        </Button>
                    </Stack>
                </GridItem>
            </Grid>
        </Container>
    )
}

export default ProductDetailPage