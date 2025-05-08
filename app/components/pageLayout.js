'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function PageLayout({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => document.documentElement.classList.remove(theme);
  }, [theme]);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto no-scrollbar">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="flex-1 pt-13 text-black dark:text-white p-6">
          {children}
        </div>
        <div className="bg-red-500 p-4">Footer</div>
      </div>
      
    </div>
  );
}
