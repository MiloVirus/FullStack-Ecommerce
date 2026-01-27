import { Box, Button, Image, Text } from '@chakra-ui/react'

type HomePageCardProps =
{
    id: number;
    title: string;
    price: number;
    category: string;
    images: string[];
}

const HomePageCard = (props:HomePageCardProps) => {
    return (
        <Box boxShadow='base' p='6' rounded='md' bg='white'>
            <Box fontFamily="Rubik" >
                <Text fontWeight="medium" >{props.title}</Text>
                <Image w="70%" m="auto" align="center" src={props.images[0]}/>
                <Text fontWeight={'medium'} color="#7B7CE0">{props.price}</Text>
                <Button bg="#7BE0AD" color="white" m={2} fontWeight="normal" className='viewMore'>View more</Button>
            </Box>
        </Box>
    )
}

export default HomePageCard