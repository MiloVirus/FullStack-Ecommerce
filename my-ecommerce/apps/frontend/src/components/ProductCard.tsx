import { Box, Button, Flex, Image, Text, VStack, } from '@chakra-ui/react'
import type { Product } from '../types/Product'
import { useCartStore } from '../store/useCartStore'
import { Link } from "react-router-dom"

const ProductCard = (props: Product) => {
    const addItem = useCartStore((state) => state.addItem)

    const addItemToCart = () => {
        addItem({
            id: props.id,
            title: props.title,
            price: props.price,
            images: [props.images[0]],
        })
    }
    return (
        <>
            <Box
                w="100%"
                maxWidth="300px"
                boxShadow="xs"
                p="6"
                rounded="md"
                bg="white"
                fontFamily="Rubik"
            >
                <Flex>
                    <Flex
                        id="box-container"
                        w="100%"
                        h="300px"
                        direction="column"
                        justify="space-between"
                    >
                        <Box h="50px" overflow={"hidden"}>
                            <Text fontSize="1em" color="#505050">
                                {props.title}
                            </Text>
                        </Box>
                        <Flex m={3} flexShrink="0.3" className="digiLevel" justify="center">
                            <Image boxSize="100px" objectFit="contain" src={props.images[0]} alt={props.images[0]} />
                        </Flex>
                        <Box m={1}>
                            <Text fontSize={25} fontWeight="medium">{props.price}$</Text>
                        </Box>
                        <VStack align="center">
                            <Button
                                onClick={addItemToCart}
                                bg="#e0b0d5"
                                color="white"
                                fontWeight="medium"
                                w={["100%", "100%", "50%"]}
                            >
                                Add to cart
                            </Button>

                            <Button
                                asChild
                                bg="#c269fd"
                                color="white"
                                fontWeight="medium"
                                w={["100%", "100%", "50%"]}
                            >
                                <Link to={`/product/${props.id}`}>
                                View More
                                </Link>
                            </Button>
                        </VStack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default ProductCard