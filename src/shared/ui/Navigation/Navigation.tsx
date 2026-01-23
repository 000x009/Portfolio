'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { id: 'player', label: 'Player', path: '/' },
  { id: 'exp', label: 'Stats', path: '/stats' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-14 z-49 sticky top-0 bg-black px-6 py-6 md:p-10">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.id}
            href={item.path}
            className={`font-sans text-xs md:text-sm transition-colors relative ${
              isActive ? 'text-primary' : 'text-white hover:text-primary/70'
            }`}
          >
            {isActive && <span className="absolute -left-4 md:-left-6">[ </span>}
            {item.label}
            {isActive && <span className="absolute -right-4 md:-right-6"> ]</span>}
          </Link>
        );
      })}
    </nav>
  );
};
