import Image from 'next/image';
import { PlusIcon } from './icons';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

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
    <div className="flex h-full flex-col items-center text-white">
      <Image
        src={source}
        alt={alt || 'plant image'}
        width={700}
        height={700}
        className="h-full w-full"
      />

      <div
        className={cn('flex flex-col items-center', isActive && 'lg:hidden')}
      >
        <h3 className="font-medium">{name}</h3>
        <p className="font-bold">
          <span>$</span>
          {price}
        </p>
      </div>

      <div
        className={cn(
          'absolute -bottom-2 !z-50 w-fit translate-y-full items-center justify-between overflow-scroll rounded-full bg-white/35 p-3 opacity-0 transition-opacity duration-[1000ms] md:w-[360px] lg:flex',
          { 'translate-y-0 lg:opacity-100': isActive },
        )}
      >
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
    </div>
  );
}

export default ProductCard;
