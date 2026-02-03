import { Box, Flex } from "@chakra-ui/react"
import CartComponent from "../components/CartComponent"
import CartSummary from "../components/CartSummary"


const CartPage = () => {
  return (
    <Flex w={"100%"} minH="100vh" justifyContent="center">
        <Box w={["100%","80%","80%","60%"]} >
          <Box>
            <CartSummary />
          </Box>
          <Box>
            <CartComponent />
          </Box>
        </Box>
    </Flex>
    
  )
}

export default CartPage