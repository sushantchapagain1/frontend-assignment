import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-3">
      The page you are looking for could not be found.
      <Link href="/" className="rounded-full bg-white/50 p-3">
        Go back
      </Link>
    </div>
  );
}

export default NotFound;
