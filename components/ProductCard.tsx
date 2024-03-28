import Image from 'next/image';

export type TProduct = {
  id?: string;
  source: string;
  alt?: string;
  name: string;
  price: number;
};

function ProductCard({ source, name, price, alt }: TProduct) {
  return (
    <div className="flex flex-col items-center text-white">
      <Image
        src={source}
        alt={alt || 'plant image'}
        width={500}
        height={500}
        className="h-full w-full"
      />
      <h3 className="font-medium">{name}</h3>
      <p className="font-bold">
        <span>$</span>
        {price}
      </p>
    </div>
  );
}

export default ProductCard;
