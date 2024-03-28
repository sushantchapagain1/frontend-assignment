'use client';
import Link from 'next/link';
import { CartIcon, HomeIcon, LockIcon, PlantBucketIcon } from './icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', icon: <HomeIcon /> },
  { href: '/plants', icon: <PlantBucketIcon /> },
  { href: '/cart', icon: <CartIcon /> },
  { href: '/list', icon: <LockIcon /> },
] as const;

function SideNav() {
  const pathName = usePathname();
  return (
    <nav className="rounded-full border bg-white/60 backdrop-blur-xl">
      <ul className="flex items-center justify-between gap-4 md:flex-col md:p-2">
        {links.map((link) => {
          const isActive = pathName === link.href;
          return (
            <li
              key={link.href}
              className={cn('p-2', isActive && 'rounded-full bg-white/35')}
            >
              <Link href={link.href}>{link.icon}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideNav;
