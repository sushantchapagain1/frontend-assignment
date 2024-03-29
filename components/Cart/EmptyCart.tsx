import Link from 'next/link';

function EmptyCart() {
  return (
    <div className="flex flex-col items-center p-6">
      <p className="mb-6">You do not have anything in cart :(</p>
      <Link
        href={'/'}
        className="rounded-full bg-white/40 px-6 py-3 font-medium"
      >
        Continue Buying
      </Link>
    </div>
  );
}

export default EmptyCart;
