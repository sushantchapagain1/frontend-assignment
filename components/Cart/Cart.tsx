'use client';
import { useCart } from '@/context/CartContext';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

function Cart() {
  const { cart, totalAmount } = useCart();
  if (cart.length <= 0) return <EmptyCart />;

  return (
    <div className="flex flex-col text-gray-700">
      <div className="flex flex-col gap-3">
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="my-3 self-end">
        <h3 className="flex flex-col">
          <span className="font-semibold">
            Total:{''} ${totalAmount}
          </span>
          <button className="mt-3 rounded-full bg-white px-3 py-2 text-gray-700">
            Checkout
          </button>
        </h3>
      </div>
    </div>
  );
}

export default Cart;
