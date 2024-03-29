import Image from 'next/image';
import { PlusIcon } from './icons';
import { useCart } from '@/context/CartContext';

export type TProduct = {
  id: number;
  source: string;
  alt?: string | undefined;
  name: string;
  price: number;
  isActive: boolean;
};

function ProductCard({ source, name, price, alt, isActive, id }: TProduct) {
  const { addToCart, checkCart, removeFromCart } = useCart();

  const isInCart = checkCart(id);

  return (
    <div className="flex flex-col items-center overflow-auto text-white">
      <Image
        src={source}
        alt={alt || 'plant image'}
        width={700}
        height={700}
        className="h-full w-full"
      />
      {!isActive && (
        <>
          <h3 className="font-medium">{name}</h3>
          <p className="font-bold">
            <span>$</span>
            {price}
          </p>
        </>
      )}
      {isActive && (
        <div className="absolute -bottom-9 z-[999] flex w-fit items-center justify-between rounded-full bg-white/35 p-3 transition-all duration-300 md:w-[360px]">
          <div className="flex w-full flex-col">
            <h3 className="text-base font-medium md:text-lg">{name}</h3>
            <p className="text-sm font-bold md:text-xl">
              <span>$</span>
              {price}
            </p>
          </div>
          <button
            className="flex w-full items-center justify-center gap-1 rounded-full bg-white p-3 text-gray-700"
            onClick={
              isInCart
                ? () => removeFromCart(id)
                : () => addToCart({ id, name, price, source, alt })
            }
          >
            {!isInCart && <PlusIcon height={20} width={20} />}
            {isInCart ? 'Remove from cart' : 'Add to cart'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
