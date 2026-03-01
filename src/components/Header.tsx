'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import menuData from '@/data/menu.json';

interface NavItem {
  url: string;
  label: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems: NavItem[] = menuData;
  const pathname = usePathname();

  const isActive = (url: string) => {
    if (url === '/') return pathname === '/';
    return pathname.startsWith(url);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-[40] shadow bg-gray-950 dark:bg-gray-200 h-1 w-full animate-scroll-progress"></div>
      <header className="border-b py-4 not-prose fixed inset-x-0 bg-white dark:bg-gray-950 z-30">
        <div className="container flex justify-between items-center gap-8">
          <div className="flex items-center gap-16 xl:gap-32 flex-grow">
            <Link
              href="/"
              className="w-20 grid transition-opacity hover:opacity-75 duration-300 text-gray-950 dark:text-gray-100"
              aria-label="Home"
            >
              <Logo />
            </Link>
            <nav aria-label="Main navigation" className="hidden lg:flex">
              <ul className="flex gap-8 xl:gap-12 items-center list-none m-0 py-0">
                {menuItems.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      className={`navlink ${isActive(item.url) ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact" className="btn btn-sm hidden lg:flex" role="button">
              Let&apos;s Talk
            </Link>
            <button
              className="cursor-pointer rounded-full bg-gray-100 dark:bg-gray-800 text-gray-950 dark:text-gray-100 p-4 flex transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-controls="modal"
              aria-haspopup="dialog"
            >
              <span className="sr-only">Open Mobile Navigation</span>
              <span className="w-6">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;