'use client';

import { BsSun, BsMoon } from 'react-icons/bs';
import { AiOutlineMenu } from "react-icons/ai";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from './Logo'



const menuItems = [
  { label: 'Projects', href: '/projects', icon: '/icons/tools.png' },
  { label: 'Notes', href: '/notes', icon: '/icons/idea.png' },
  { label: 'About', href: '/aboutme', icon: '/icons/idcard.png' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-12 z-50 flex items-center md:pr-[var(--sidebar-width)] bg-(--background)">

      <div className='w-full h-full flex justify-between sm:mx-10  mx-2 border-b border-[var(--color-shade)]'>
        
        <div className='flex sm:hidden'>
          <Logo/>
        </div>

        <div></div>

        <div className='flex justify-end'>

          <ul className="hidden ml-auto sm:flex space-x-4 items-center">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="nav-btn">
                      <Image src={item.icon} alt={item.label} width={18} height={18} />
                      <span className='ml-3'>{item.label}</span>
                    </Link>
                  </li>
                ))}
          </ul>
          
          
          <button onClick={toggleTheme} className="nav-btn transition-transform duration-300 font-bold">
            {theme === 'light' ? <BsMoon size={20} className="text-gray-800"/> : <BsSun size={20} className="text-yellow-500"/>}
          </button>
        
          <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden nav-btn">
                  <AiOutlineMenu color={theme === 'light' ? 'black':'white' } size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="fixed top-12 w-full h-full bg-(--color-sand-dark) dark:bg-(--background) flex flex-col items-center justify-center space-y-6 sm:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="nav-btn text-xl"
            >
              <Image src={item.icon} alt={`${item.label} icon`} width={22} height={22} />
              <span className='mx-1.5'>{item.label}</span>
              </Link>
          ))}
        </div>
      )}

    </nav>
  );
}
