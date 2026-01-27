import { create } from "zustand"
import { persist, devtools } from "zustand/middleware"
import type { CartItem } from "../types/cart"

interface CartState {
  items: CartItem[]
  addItem: (product: Omit<CartItem, "quantity">) => void
  decreaseQuantity: (id: number) => void
  removeItem: (id: number) => void
  getTotalPrice: () => number
  clear: () => void

}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],

        addItem: (product) => {
          const items = get().items
          const exists = items.find((i) => i.id === product.id)

          if (exists) {
            return set(
              {
                items: items.map((i) =>
                  i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
              },
              false,
              "cart/addItem"
            )
          }

          set(
            {
              items: [
                ...items,
                {
                  ...product,
                  quantity: 1,
                },
              ],
            },
            false,
            "cart/addNewItem"
          )
        },

        removeItem: (id) =>
          set(
            {
              items: get().items.filter((i) => i.id !== id),
            },
            false,
            "cart/removeItem"
          ),

        getTotalPrice: () => {
          return get().items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )
        },

        decreaseQuantity: (id) => {
          const items = get().items
          const item = items.find((i) => i.id === id)

          if (!item) return

          if (item.quantity === 1) {
            return set(
              {
                items: items.filter((i) => i.id !== id),
              },
              false,
              "cart/decreaseQuantity"
            )
          }

          set(
            {
              items: items.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity - 1 } : i
              ),
            },
            false,
            "cart/decreaseQuantity"
          )
        },

        clear: () => set({ items: [] }, false, "cart/clear"),
      }),
      {
        name: "cart-storage",
      }
    )
  )
)
