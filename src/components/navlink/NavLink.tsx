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
