'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {motion} from 'framer-motion'
import { IoInformationCircle } from "react-icons/io5";

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

  return  (
    <>
    <div style={{ backgroundImage: 'url(/herobg.svg)' }}>
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'tween', duration: 0.5 }}>

    <nav className="sticky top-0 transition-all z-[1000] w-full text-white  border-translucent-light-100 px-8 py-3 lg:flex lg:justify-between lg:items-center" style={{ backgroundImage: 'url(/herobg.svg)'}}>
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link href="/">
          <span className="flex items-center gap-4">
            <Image src="/metalogo.png" alt="metalogic comapany logo" width={48} height={48} />
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
   

       
      
      
       <button className=' inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none h-9 px-4 py-2 bg-red-500 hover:text-white'>
        <Link href='/contact'>Get in touch</Link>
       </button>
      
    </nav>
    </motion.div>
    </div>


    </>
  );
};

export default Navbar;
