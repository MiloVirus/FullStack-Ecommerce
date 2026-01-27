
import { useCartStore } from "../store/useCartStore"
import { Box, IconButton, Badge } from "@chakra-ui/react"
import { FiShoppingCart } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const NavBarCartCount = () => {

    const navigate = useNavigate()
    const items = useCartStore((state) => state.items)
    const count = items.length;

    return (
        <div>
            <Box position="relative">
                <IconButton onClick={()=>navigate('/cart')}
                    aria-label="Cart"
                    variant="ghost"
                    
                >
                    <FiShoppingCart />
                    
                </IconButton>

                {count > 0 && (
                    <Badge
                        position="absolute"
                        top="-1"
                        right="-1"
                        bg="red.500"
                        color="white"
                        borderRadius="full"
                        fontSize="0.8em"
                        px="2"
                    >
                        {count}
                    </Badge>
                )}
            </Box>
        </div>
    )
}

export default NavBarCartCount