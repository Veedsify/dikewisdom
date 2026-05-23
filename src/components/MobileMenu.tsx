'use client';

import React from 'react';
import Link from 'next/link';

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
            data-modal
            className={`fixed z-[999] ${isOpen ? 'open' : ''}`}
            open={isOpen}
        >
            <div
                className="modal-content justify-between gap-16 px-7 py-8 sm:p-14 flex flex-col h-full overflow-y-auto"
                style={{ background: '#0e0e0e', color: '#fafaf5' }}
            >
                <div className="flex items-center justify-between gap-4">
                    <Link
                        href="/"
                        onClick={onClose}
                        className="flex items-center gap-2.5 no-underline"
                        aria-label="Home"
                    >
                        <span
                            className="w-10 h-10 rounded-lg grid place-items-center font-mono"
                            style={{
                                background: '#fafaf5',
                                color: '#0e0e0e',
                                fontSize: '14px',
                                fontWeight: 600,
                                letterSpacing: '-0.04em',
                            }}
                        >
                            DW
                        </span>
                        <span className="font-heading text-[22px]" style={{ color: '#fafaf5' }}>
                            Dike Wisdom
                        </span>
                    </Link>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close modal"
                        className="cursor-pointer rounded-full p-2.5 border modal-close transition-colors"
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            borderColor: 'rgba(255,255,255,0.12)',
                            color: '#fafaf5',
                        }}
                    >
                        <span className="w-5 h-5 block">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                        </span>
                    </button>
                </div>

                <nav data-modal-menu className="flex-1">
                    <ul className="not-prose grid gap-7 !p-0 !m-0 list-none">
                        {menuItems.map((item, i) => (
                            <li key={item.url} className="flex items-baseline gap-4">
                                <span
                                    className="font-mono shrink-0"
                                    style={{
                                        fontSize: '11px',
                                        color: 'rgba(255,255,255,0.35)',
                                        letterSpacing: '0.12em',
                                    }}
                                >
                                    0{i + 1}
                                </span>
                                <Link
                                    href={item.url}
                                    onClick={onClose}
                                    className="font-heading text-4xl sm:text-5xl no-underline transition-colors hover:opacity-75"
                                    style={{
                                        color: '#fafaf5',
                                        fontWeight: 400,
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div
                    className="mobile-copyright font-mono uppercase pt-6 border-t"
                    style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.4)',
                        borderColor: 'rgba(255,255,255,0.08)',
                        letterSpacing: '0.12em',
                    }}
                >
                    © {new Date().getFullYear()} Dike Wisdom · Lagos, Nigeria
                </div>
            </div>
        </dialog>
    );
};

export default MobileMenu;
