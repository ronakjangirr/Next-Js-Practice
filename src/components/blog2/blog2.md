What is usePathname()?
usePathname() is a Client Component hook from next/navigation that returns the current URL path (e.g., "/about" or "/dashboard/settings").


import { usePathname } from 'next/navigation';

const pathname = usePathname();
✅ When to Use usePathname()
You use usePathname() inside Client Components when you need to:

Use Case	Example
✅ Highlight current nav item	Sidebar: highlight the active tab based on the current URL
✅ Conditionally render UI based on route	Show/hide breadcrumbs, buttons, or sections
✅ Add tracking or analytics per page	Log current path on route change
✅ Customize layouts or headers dynamically	Show a different title or theme based on path
✅ Detect route in client-only logic (like modals, popups)	Close a modal if the pathname changes

🧠 Example 1: Highlighting Active Nav Item

"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
      <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
    </nav>
  );
};
🧠 Example 2: Show Special Header on a Specific Page

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