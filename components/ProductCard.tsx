import Image from 'next/image';
import { PlusIcon } from './icons';

export type TProduct = {
  id?: string;
  source: string;
  alt?: string;
  name: string;
  price: number;
  isActive: boolean;
};

function ProductCard({ source, name, price, alt, isActive }: TProduct) {
  return (
    <div className="flex flex-col items-center text-white">
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
        <div className="absolute -bottom-16 z-[999] flex w-fit items-center justify-between rounded-full bg-white/35 p-3 transition-all duration-300">
          <div className="flex w-full flex-col">
            <h3 className="text-lg font-medium">{name}</h3>
            <p className="text-xl font-bold">
              <span>$</span>
              {price}
            </p>
          </div>
          <button className="flex w-full items-center gap-1 rounded-full bg-white p-3 text-gray-700">
            <PlusIcon height={20} width={20} />
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
