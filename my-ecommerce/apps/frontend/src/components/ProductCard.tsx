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
                         <Box className="digiName" h="50px" overflow={"hidden"}>
                             <Text fontSize="1em" color="#505050">
                                 {props.title}
                             </Text>
                         </Box>
                        <Flex m={3} flexShrink="0.3" className="digiLevel" justify="center">
                            <Image boxSize="100px" objectFit="contain" src={props.images[0]} alt={props.title} />
                         </Flex>
                             <Box m={1}>
                                 <Text fontSize={25} fontWeight="medium">{props.price}$</Text>
                             </Box>
                            <Flex className="button-container" justify="center" gap={2} flexWrap={"wrap"}>
                                 <Button  fontWeight={'medium'} className='viewMore' bg="#e0b0d5" color="white" >
                                     Add to cart
                                 </Button>
                             </Flex>
                    </Flex>
                 </Flex>
            </Box>
        </>
    )
}

export default ProductCard