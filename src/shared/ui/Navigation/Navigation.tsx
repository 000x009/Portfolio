'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { id: 'player', label: 'Player', path: '/' },
  { id: 'exp', label: 'Stats', path: '/exp' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-14 z-49 sticky top-0 bg-black p-10">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.id}
            href={item.path}
            className={`font-sans text-sm transition-colors relative ${
              isActive ? 'text-primary' : 'text-white hover:text-primary/70'
            }`}
          >
            {isActive && <span className='absolute -left-6'>[ </span>}
            {item.label}
            {isActive && <span className='absolute -right-6'> ]</span>}
          </Link>
        );
      })}
    </nav>
  );
};
