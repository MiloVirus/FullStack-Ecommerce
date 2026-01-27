import { Box,Text, Button } from "@chakra-ui/react"
import { useCartStore } from "../store/useCartStore"

const CartSummary = () => {
  const items = useCartStore((state) => state.items)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  const totalPrice = getTotalPrice()

  return (
    <Box color={"gray.800"}>
      <Box
        gap={4}
        padding={2}
        margin={2}
        borderRadius={8}
      >
        <Text>Items {itemCount}</Text>
        <Text fontWeight={"bold"} textStyle={"xl"}>Your cart total is ${totalPrice.toFixed(2)}</Text>
        <Button mt={4}>Go to checkout</Button>
      </Box>
    </Box>
  )
}

export default CartSummary
