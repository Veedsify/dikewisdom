import React from 'react';
import Link from 'next/link';
import contactData from '@/data/contact.json';

interface ContactItem { name: string; value: string; link?: string }

const ContactCTA: React.FC = () => {
    const items = contactData as ContactItem[];
    const email = items.find((c) => c.name === 'email');

    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="relative overflow-hidden not-prose border-b"
            style={{ borderColor: 'var(--line)' }}
        >
            <div className="blob blob-cool w-[700px] h-[700px] -top-[200px] left-1/2 -translate-x-1/2" />

            <div className="container relative z-10">
                <div className="text-center max-w-[880px] mx-auto py-32 lg:py-40">
                    <span className="eyebrow justify-self-center inline-flex">
                        <span className="eyebrow-dot" />
                        Open for Q3 2026 engagements
                    </span>
                    <h2
                        id="contact-title"
                        className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[110px] leading-[0.98] !mt-6 !mb-7"
                        style={{ letterSpacing: '-0.02em', fontWeight: 400 }}
                    >
                        Have a platform that<br />
                        <em className="italic" style={{ color: 'var(--ink-3)' }}>
                            can&apos;t go down?
                        </em>
                    </h2>
                    <p
                        className="!mt-0 !mb-9 mx-auto max-w-[560px] text-lg"
                        style={{ color: 'var(--ink-2)' }}
                    >
                        Tell me what you&apos;re building. I&apos;ll come back within 24 hours
                        with whether — and how — I can help.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {email && (
                            <a href={email.link} className="btn-editorial dark-fill">
                                {email.value} <span className="arrow-circle">→</span>
                            </a>
                        )}
                        <Link href="/contact" className="btn-editorial ghost">
                            Book a 30-min intro
                        </Link>
                    </div>
                    <p
                        className="font-mono uppercase mt-9 !mb-0"
                        style={{ fontSize: '12px', color: 'var(--ink-4)', letterSpacing: '0.08em' }}
                    >
                        Lagos, Nigeria · Available for remote worldwide
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
