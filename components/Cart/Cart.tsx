'use client';
import { useCart } from '@/context/CartContext';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

function Cart() {
  const { cart } = useCart();
  if (cart.length <= 0) return <EmptyCart />;

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} />
      ))}
    </div>
  );
}

export default Cart;
