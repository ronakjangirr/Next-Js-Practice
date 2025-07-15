#. How to change the colors of active links?



// components/NavLink.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md ${
        isActive ? 'text-blue-600 font-semibold' : 'text-gray-500'
      }`}
    >
      {children}
    </Link>
  );
}


// components/NavBar.tsx
import NavLink from '@/components/navlink/NavLink';

export default function Navbar() {
  return (
    <nav className="flex gap-4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </nav>
  );
}