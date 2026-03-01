'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

interface NavItem {
  url: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, menuItems }) => {
  if (!isOpen) return null;

  return (
    <dialog
      id="modal"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-modal
      className={`fixed z-[999] ${isOpen ? 'open' : ''}`}
      open={isOpen}
    >
      <div className="modal-content bg-gray-950 justify-between gap-20 p-12 sm:p-20 flex flex-col h-full overflow-y-auto">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={onClose}
            className="w-14 sm:w-20 flex flex-shrink-0 transition-opacity hover:opacity-75 duration-300 text-white dark:text-gray-100"
            aria-label="Home"
          >
            <Logo />
          </Link>
          <button
            onClick={onClose}
            className="text-gray-100 transition-colors duration-300 hover:text-gray-300 cursor-pointer z-10 flex modal-close"
          >
            <span className="sr-only">Close modal</span>
            <span className="w-12">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </span>
          </button>
        </div>
        <nav className="bg-gray-950 text-white" data-modal-menu>
          <ul className="not-prose grid gap-10">
            {menuItems.map((item) => (
              <li key={item.url}>
                <Link
                  href={item.url}
                  onClick={onClose}
                  className="text-4xl font-bold transition-colors duration-300 hover:text-white/75 text-white no-underline font-heading"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-white/50 mobile-copyright">
          <p className="!m-0">
            &copy; {new Date().getFullYear()} Dike Wisdom. All rights reserved.
          </p>
        </div>
      </div>
    </dialog>
  );
};

export default MobileMenu;