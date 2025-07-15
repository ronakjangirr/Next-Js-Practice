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