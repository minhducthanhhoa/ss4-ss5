// components/Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li className={router.pathname === '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === '/about' ? 'active' : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={router.pathname === '/contact' ? 'active' : ''}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={router.pathname === '/login' ? 'active' : ''}>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;