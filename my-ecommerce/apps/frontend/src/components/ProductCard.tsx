import { Box, Button, Flex, Image, Text,  } from '@chakra-ui/react'
import type { Product } from '../types/Product'

const ProductCard = (props: Product) => {
    return (
        <>
            <Box
                w="100%"
                maxWidth="300px"
                boxShadow="xs"
                p="6"
                rounded="md"
                bg="white"
                border="black 13px shadow"
                fontFamily="Rubik"
            >
                <Flex>
                    <Box w="100%">
                        <Box className="digiName">
                            <Text fontSize="1.3em" color="#505050">
                                {props.title}
                            </Text>
                        </Box>
                        <Box className="digiLevel">
                        </Box>
                        <Flex m={3} flexShrink="0.3" className="digiLevel" justifyContent={"center"}>
                            <Image width="100px" src={props.thumbnail}></Image>
                        </Flex>
                        <Box flexShrink="0.3" className="digiLevel" justifyContent={"center"}>
                            <Box m={3}>
                                <Text fontSize={25} fontWeight="medium">{props.price}$</Text>
                            </Box>
                            <Flex justifyContent={"center"}>
                                    <Button fontWeight={'medium'} className='viewMore' bg="#7BE0AD" color="white" m={2}>
                                        View More
                                    </Button>
                                <Button  fontWeight={'medium'} className='viewMore' bg="#e0b0d5" color="white" m={2}>
                                    Add to cart
                                </Button>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default ProductCard