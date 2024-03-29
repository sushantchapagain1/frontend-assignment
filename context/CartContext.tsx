'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { createContext, useContext } from 'react';

interface CartContext {
  cart: TCart[];
  addToCart: (data: TCart) => void;
  removeFromCart: (id: number) => void;
  checkCart: (id: number) => boolean;
  totalAmount: number;
}

export type TCart = {
  id: number;
  name: string;
  price: number;
  source: string;
  alt: string | undefined;
};

const CartContext = createContext<CartContext | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useLocalStorage([], 'cart');

  // Not handling quantity  so no need to store duplicate items.
  function checkCart(id: number) {
    return cart.some((item: TCart) => id === item.id);
  }

  function calcTotalAmount() {
    return cart.reduce((total: number, item: TCart) => total + item.price, 0);
  }

  const totalAmount = calcTotalAmount();

  function addToCart(data: TCart) {
    const isInCart = checkCart(data.id);
    if (isInCart) return;
    setCart((cart: TCart[]) => [...cart, data]);
  }

  function removeFromCart(id: number) {
    setCart((cart: TCart[]) => cart.filter((item: TCart) => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, checkCart, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === null)
    throw new Error('Cart context must be used under CartProvider');
  return context;
}

export default CartProvider;
