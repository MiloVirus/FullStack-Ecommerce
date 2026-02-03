import { Box, Button, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


type HomePageCardProps =
{
    id: number;
    title: string;
    price: number;
    category: string;
    images: string[];
}

const HomePageProductCard = (props:HomePageCardProps) => {
    return (
        <Box boxShadow='base' p='6' rounded='md' bg='white' w={{sm:"100%", md: "100%"}}>
            <Box fontFamily="Rubik"  textAlign="center" h="250px" display="flex" flexDirection="column" justifyContent="space-around" >
                <Text fontWeight="medium" h={"2.8em"} lineClamp={2}>{props.title}</Text>
                <Box h="120px" display="flex" alignItems="center" justifyContent="center">
                    <Image
                        maxH="100%"
                        maxW="100%"
                        objectFit="contain"
                        src={props.images[0]}
                    />
                </Box>
                <Text fontWeight={'medium'} color="#7B7CE0">{props.price}</Text>
                <Link to={`/product/${props.id}`} relative="path">
                    <Button bg="#7BE0AD" color="white" m={2} fontWeight="normal" className='viewMore'>View more</Button>
                </Link>
            </Box>
        </Box>
    )
}

export default HomePageProductCard