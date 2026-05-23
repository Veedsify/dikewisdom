'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import menuData from '@/data/menu.json';

interface NavItem { url: string; label: string }

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
            <div
                className="fixed top-0 left-0 z-[40] h-[2px] w-full animate-scroll-progress"
                style={{ background: 'var(--ink)' }}
            />
            <header
                className="sticky top-0 z-30 border-b not-prose backdrop-blur-md"
                style={{
                    background: 'color-mix(in srgb, var(--bg) 78%, transparent)',
                    borderColor: 'var(--line)',
                }}
            >
                <div className="container flex justify-between items-center py-4">
                    <Link
                        href="/"
                        aria-label="Home"
                        className="flex items-center gap-2.5 no-underline"
                    >
                        <span
                            className="w-8 h-8 rounded-lg grid place-items-center font-mono"
                            style={{
                                background: 'var(--line-strong)',
                                color: 'var(--bg)',
                                fontSize: '12px',
                                fontWeight: 600,
                                letterSpacing: '-0.04em',
                            }}
                        >
                            DW
                        </span>
                        <span className="font-heading text-[22px]" style={{ color: 'var(--ink)' }}>
                            Dike Wisdom
                        </span>
                    </Link>

                    <nav aria-label="Main navigation" className="hidden lg:flex">
                        <ul className="flex gap-7 items-center list-none !m-0 !p-0">
                            {menuItems.map((item) => {
                                const active = isActive(item.url);
                                return (
                                    <li key={item.url}>
                                        <Link
                                            href={item.url}
                                            className="relative pb-1 text-sm no-underline"
                                            style={{
                                                color: active ? 'var(--ink)' : 'var(--ink-2)',
                                                fontWeight: active ? 500 : 400,
                                            }}
                                        >
                                            {item.label}
                                            {active && (
                                                <span
                                                    aria-hidden
                                                    className="absolute left-0 right-0 -bottom-[2px] h-[2px]"
                                                    style={{ background: 'var(--ink)' }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Link
                            href="/contact"
                            className="hidden lg:inline-flex btn-editorial dark-fill"
                            role="button"
                            style={{ padding: '10px 18px', fontSize: '13px' }}
                        >
                            Let&apos;s talk <span className="arrow-circle">→</span>
                        </Link>
                        <button
                            className="lg:hidden cursor-pointer rounded-full p-3 transition-colors border"
                            style={{
                                background: 'var(--bg-elev)',
                                borderColor: 'var(--line)',
                                color: 'var(--ink)',
                            }}
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-controls="modal"
                            aria-haspopup="dialog"
                        >
                            <span className="sr-only">Open Mobile Navigation</span>
                            <span className="w-5 block">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full">
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
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
