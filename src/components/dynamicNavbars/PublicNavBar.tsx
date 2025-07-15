'use client';

import Link from 'next/link';
import React from 'react';

export default function PublicNavbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0 }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}