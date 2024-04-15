'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'Career', href: '/careers' },
  { text: 'Blogs', href: '/blogs' },
  { text: 'About Us', href: '/about' },
];

const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-[1000] w-full bg-blue-950 text-white border-b border-translucent-light-100 px-8 py-3 lg:flex lg:justify-between lg:items-center">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link href="/">
          <span className="flex items-center gap-4">
            <Image src="/metalogo.png" alt="metalogic comany logo" width={48} height={48} />
            <div className="flex flex-col">
              <h1 className="flex text-3xl font-semibold tracking-widest">
                <span>Meta</span>
                <span>Logic</span>
              </h1>
            </div>
          </span>
        </Link>
        <button aria-label="hamburger menu" className="lg:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <ul className={`lg:flex lg:gap-8 lg:font-semibold ${isOpen ? 'block' : 'hidden'}`}>
        {navItems.map((item, index) => (
          <li key={index}  className={`relative pb-1 ${path === item.href ? ' ' : 'hover:border-b-2 border-red-600'}`}>
            <Link href={item.href}>
              <span className={`relative pb-1 ${path === item.href ? 'text-white-600 border-b-2 border-red-600' : ''}`} >
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button className="inline-flex bg-red-600 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 bg-secondary-400 text-white hover:border-secondary-400">
          <Link href="/contact">
            Get in Touch
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
