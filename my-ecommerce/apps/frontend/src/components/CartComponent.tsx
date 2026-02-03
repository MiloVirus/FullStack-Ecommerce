import { useCartStore } from '../store/useCartStore'
import { Box } from '@chakra-ui/react';
import CartCard from './CartCard'

type CartItem = {
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  images: string[];
};

const CartComponent = () => {
  const items = useCartStore((state) => state.items)

  return (
    <div>
      {items.length >= 1 ? (items.map((item: CartItem) => (
        <CartCard key={item.id} item={item} />
      ))) : (<Box fontSize={"lg"} mt={10}>Your cart is empty.</Box>
      )}
    </div>
  )
}

export default CartComponent