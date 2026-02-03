import { useCartStore } from '../store/useCartStore'
import { Image, Flex, Button, Box } from '@chakra-ui/react'

type CartItem = {
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  images: string[];
};

interface CartCardProps {
  item: CartItem;
}

const CartCard = ({ item }: CartCardProps) => {
  const addItem = useCartStore((state) => state.addItem)
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)

  const itemId = typeof item.id === 'number' ? item.id : parseInt(item.id)

  return (
    <Flex
      key={item.id}
      align={"center"}
      justify={"space-around"}
      gap={[0,4]}
      padding={[1,2]}
      margin={[0,1]}
      borderRadius={8}
      h={100}
    >
      <Image boxSize={["70px","50px","100px"]} objectFit="contain" src={item.images[0]} borderRadius={8} padding={[0,2,3]} background={"#dccdf8"} alt={item.title} />
      <Box w={"20%"}  fontWeight={"bold"} fontSize={["12px", "15px"]}>{item.title}</Box>
      <Box w={"15%"} fontSize={["10px", "15px"]} >${item.price}</Box>
      <Box w={"10%"}  fontSize={["10px", "15px"]} >{item.quantity}</Box>
       <Flex flexDirection={["column","row"]} gap={2} >
          <Button backgroundColor={"purple"}  px={2} minW="20px" w={["20px", "35px"]} h={["20px", "35px"]} fontWeight={"bold"} onClick={() => decreaseQuantity(itemId)}>-</Button>
          <Button backgroundColor={"purple"}  fontWeight={"bold"}  px={2} minW="20px" w={["20px", "35px"]} h={["20px", "35px"]} onClick={() => addItem({
            id: itemId,
            title: item.title,
            price: item.price,
            images: item.images,
          })}>+</Button>
       </Flex>
        

    </Flex>
  )
}

export default CartCard

