import Image from 'next/image';

import { useCart, type TCart } from '@/context/CartContext';
import { CloseIcon } from '../icons';

function CartItem({ name, source, price, alt, id }: TCart) {
  const { removeFromCart } = useCart();
  return (
    <div className="flex items-center rounded-md border border-white/40 px-3 text-gray-700">
      <Image src={source} alt={alt || 'plant image'} width={90} height={90} />
      <div className="flex w-full items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-sm">${price}</span>
        </div>
        <button
          className="rounded-full bg-white p-2"
          onClick={() => removeFromCart(id)}
        >
          <CloseIcon height={24} width={24} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
