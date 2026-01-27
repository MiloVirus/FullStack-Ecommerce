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
      justify={"space-between"}
      gap={4}
      padding={2}
      margin={2}
      borderRadius={8}
    >
      <Image boxSize="100px" objectFit="contain" src={item.images[0]} borderRadius={8} padding={3} background={"#dccdf8"} alt={item.title} />
      <Box flex={1} fontWeight={"bold"}> {item.title}</Box>
      <Box flex={1}>${item.price}</Box>
      <Box flex={1} >{item.quantity}</Box>
      <Button backgroundColor={"gray.300"} textStyle={"xl"} fontWeight={"bold"} onClick={() => decreaseQuantity(itemId)}>-</Button>
      <Button backgroundColor={"gray.300"} textStyle={"xl"} fontWeight={"bold"} onClick={() => addItem({
        id: itemId,
        title: item.title,
        price: item.price,
        images: item.images,
      })}>+</Button>
      <Box flex={1}>
        {item.quantity > 1 ? item.quantity * item.price : null}
      </Box>

    </Flex>
  )
}

export default CartCard

