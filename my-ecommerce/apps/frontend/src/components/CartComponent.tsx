import { useCartStore } from '../store/useCartStore'
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
      {items.map((item: CartItem) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CartComponent