'use client';

import { BsSun, BsMoon } from 'react-icons/bs';
import { AiOutlineMenu } from "react-icons/ai";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from './Logo'



const menuItems = [
  { label: 'Projects', href: '/projects', icon: '/icons/project.png' },
  { label: 'Notes', href: '/notes', icon: '/icons/notes.png' },
  { label: 'About', href: '/aboutme', icon: '/icons/aboutme.png' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-12 z-50 flex items-center lg:pr-[var(--sidebar-width)] bg-(--background)">

      <div className='w-full h-full flex justify-between sm:mx-10  mx-2 border-b border-[var(--color-shade)]'>
        
        <div className='flex lg:hidden'>
          <Logo/>
        </div>

        <div></div>

        <div className='flex justify-end'>

          <ul className="hidden ml-auto md:flex space-x-4 items-center">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="nav-btn">
                      <Image src={item.icon} alt={item.label} width={23} height={23} />
                      <span className='ml-3'>{item.label}</span>
                    </Link>
                  </li>
                ))}
          </ul>
          
          
          <button onClick={toggleTheme} className="font-bold mx-2 py-0 nav-btn ">
            {theme === 'light' ? <BsMoon size={20} className="text-blue-700"/> : <BsSun size={20} className="text-yellow-500"/>}
          </button>
        
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden nav-btn">
                  <AiOutlineMenu color={theme === 'light' ? 'black':'white' } size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="fixed top-12 w-full h-full bg-(--color-sand-dark) dark:bg-(--background) flex flex-col items-center justify-center space-y-10 lg:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="nav-btn text-xl"
            > 
              
              <Image src={item.icon} alt={`${item.label} icon`} width={30} height={30} />
              <span className='mx-5'>{item.label}</span>
              </Link>
          ))}
        </div>
      )}

    </nav>
  );
}
