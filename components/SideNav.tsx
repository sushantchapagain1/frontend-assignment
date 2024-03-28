'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import { SIDE_NAV_LINKS } from '@/constants';

function SideNav() {
  const pathName = usePathname();
  return (
    <nav className="rounded-full border bg-white/60 text-gray-700 backdrop-blur-xl">
      <ul className="flex items-center justify-between gap-4 md:flex-col md:p-2">
        {SIDE_NAV_LINKS.map((link) => {
          const isActive = pathName === link.href;
          const Icon = link.icon;
          return (
            <li
              key={link.href}
              className={cn(
                'rounded-full p-2 transition-all duration-200 hover:bg-white/35',
                isActive && ' bg-white/35',
              )}
            >
              <Link href={link.href}>
                <Icon height={24} width={24} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideNav;
