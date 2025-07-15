'use client';

import Link from 'next/link';
import React from 'react';

export default function DashboardNavbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#003366', color: 'white' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0 }}>
        <li>
          <Link href="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/profile" style={{ color: 'white' }}>Profile</Link>
        </li>
        <li>
          <Link href="/logout" style={{ color: 'white' }}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
}