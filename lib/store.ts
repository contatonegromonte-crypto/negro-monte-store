import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type Store = {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  toggleCart: () => void;
  closeCart: () => void;
};

export const useCartStore = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      isCartOpen: false,
      addToCart: (item) =>
        set((state) => {
          const existing = state.cart.find((entry) => entry.id === item.id);
          if (existing) {
            return {
              cart: state.cart.map((entry) =>
                entry.id === item.id ? { ...entry, quantity: entry.quantity + item.quantity } : entry,
              ),
            };
          }
          return { cart: [...state.cart, item] };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart
            .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item))
            .filter((item) => item.quantity > 0),
        })),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      closeCart: () => set({ isCartOpen: false }),
    }),
    { name: 'negro-monte-store-cart' },
  ),
);
