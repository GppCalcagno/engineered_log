'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function PageLayout({ children }) {
  const [theme, setTheme] = useState(null); // Start with null to prevent flickering
  const [isThemeLoaded, setIsThemeLoaded] = useState(false); // To prevent rendering before theme is loaded

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Store the theme in localStorage
  };

  useEffect(() => {
    // Check localStorage for saved theme and set it immediately
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('light'); // Default to light mode if no saved theme
    }
  }, []);

  useEffect(() => {
    if (theme) {
      // Once the theme is determined, apply it to the document
      document.documentElement.classList.add(theme);
      setIsThemeLoaded(true);
      return () => document.documentElement.classList.remove(theme);
    }
  }, [theme]);

  if (!isThemeLoaded) {
    // Prevent rendering until the theme is loaded
    return null;
  }

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto no-scrollbar">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="flex-1 pt-13 sm:px-14 px-6">
          {children}
        </div>
        <div className="sm:px-14 px-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
