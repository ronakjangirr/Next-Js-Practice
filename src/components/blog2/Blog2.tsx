"use client";
import { usePathname } from 'next/navigation';

function Blog2() {
      const pathname = usePathname();

  return (
    <div>
        <h1>Blog2</h1>
      <h1>{pathname === '/blog2' ? 'Hello on Blog2' : 'Welcome'}</h1>
    </div>
  )
}

export default Blog2