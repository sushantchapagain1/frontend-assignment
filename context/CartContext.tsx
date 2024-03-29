'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { createContext, useContext } from 'react';

interface CartContext {
  cart: TCart[];
  addToCart: (data: TCart) => void;
  removeFromCart: (id: number) => void;
}

type TCart = {
  id: number;
  name: string;
  price: number;
  source: string;
  alt: string;
};

const CartContext = createContext<CartContext | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useLocalStorage([], 'cart');

  function addToCart(data: TCart) {
    console.log(data);
  }

  function removeFromCart(id: number) {}

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === null)
    throw new Error('Cart provider must be used under CartProvider');
  return context;
}

export default CartProvider;
