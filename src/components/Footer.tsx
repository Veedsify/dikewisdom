import React from 'react';
import Link from 'next/link';
import menuData from '@/data/menu.json';
import socialsData from '@/data/socials.json';
import contactData from '@/data/contact.json';

interface NavItem { url: string; label: string }
interface Social { name: string; link: string; icon: string }
interface ContactItem { name: string; value: string; link?: string }

const Footer: React.FC = () => {
    const menu = menuData as NavItem[];
    const socials = socialsData as Social[];
    const contact = contactData as ContactItem[];
    const year = new Date().getFullYear();

    return (
        <footer className="not-prose" style={{ background: '#0e0e0e', color: '#b8b6ad' }}>
            <div className="container">
                <div className="pt-16 pb-10">
                    <div
                        className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] pb-10 border-b"
                        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                        {/* Brand col */}
                        <div>
                            <div className="flex items-center gap-2.5">
                                <span
                                    className="w-8 h-8 rounded-lg grid place-items-center font-mono"
                                    style={{ background: '#fff', color: '#0e0e0e', fontSize: '12px', fontWeight: 600, letterSpacing: '-0.04em' }}
                                >
                                    DW
                                </span>
                                <span className="font-heading text-2xl" style={{ color: '#fff' }}>
                                    Dike Wisdom
                                </span>
                            </div>
                            <p className="!mt-5 !mb-0 max-w-[320px] text-sm" style={{ color: '#888578' }}>
                                Full-stack engineer &amp; platform QA. Building, testing, and keeping the systems running.
                            </p>
                        </div>

                        {/* Navigate */}
                        <FooterCol title="Navigate">
                            {menu.map((m) => (
                                <li key={m.url}>
                                    <Link href={m.url} className="no-underline text-sm" style={{ color: '#d6d3c8' }}>
                                        {m.label}
                                    </Link>
                                </li>
                            ))}
                        </FooterCol>

                        {/* Connect */}
                        <FooterCol title="Connect">
                            {socials.map((s) => (
                                <li key={s.name}>
                                    <a
                                        href={s.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="no-underline text-sm"
                                        style={{ color: '#d6d3c8' }}
                                    >
                                        {s.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="mailto:me@dikewisdom.com" className="no-underline text-sm" style={{ color: '#d6d3c8' }}>
                                    Email
                                </a>
                            </li>
                        </FooterCol>

                        {/* Contact */}
                        <FooterCol title="Contact">
                            {contact.map((c) => (
                                <li key={c.name} className="text-sm" style={{ color: '#d6d3c8' }}>
                                    {c.link ? (
                                        <a href={c.link} className="no-underline" style={{ color: '#d6d3c8' }}>
                                            {c.value}
                                        </a>
                                    ) : (
                                        c.value
                                    )}
                                </li>
                            ))}
                        </FooterCol>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6 font-mono uppercase"
                        style={{ fontSize: '11.5px', color: '#6e6c64' }}
                    >
                        <span>© {year} Dike Wisdom · All Rights Reserved</span>
                        <span>Built with Next.js · Deployed on Vercel</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterCol: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h5
            className="font-mono uppercase !mt-0 !mb-4"
            style={{ fontSize: '11px', color: '#6e6c64', letterSpacing: '0.14em', fontWeight: 500 }}
        >
            {title}
        </h5>
        <ul className="list-none !p-0 !m-0 grid gap-2.5">{children}</ul>
    </div>
);

export default Footer;
