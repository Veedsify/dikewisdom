import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroMarquee from './HeroMarquee';

const HeroSection: React.FC = () => {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative overflow-hidden border-b not-prose"
        >
            {/* Decorative blobs */}
            <div className="blob blob-violet w-[620px] h-[620px] -top-[200px] -right-[160px] hidden md:block" />
            <div className="blob blob-amber w-[480px] h-[480px] -bottom-[260px] -left-[180px] hidden md:block" />

            <div className="container relative z-10">
                <div className="max-w-[920px] mx-auto pt-32 lg:pt-40 pb-20 text-center grid gap-8">
                    <div className="justify-self-center">
                        <span className="available-pill">
                            <span className="available-ring" />
                            <span>Available for new engagements — Q3 2026</span>
                        </span>
                    </div>

                    <div className="justify-self-center w-24 h-24 rounded-full p-1"
                         style={{ background: 'conic-gradient(from 220deg, #c7b8ff, #fff3c7, #b6e5d8, #c7b8ff)' }}>
                        <Image
                            src="/images/avatar.jpeg"
                            alt="Dike Wisdom"
                            width={96}
                            height={96}
                            className="rounded-full w-full h-full object-cover object-top border-[3px] !m-0"
                            style={{ borderColor: 'var(--bg)' }}
                            priority
                        />
                    </div>

                    <span className="eyebrow justify-self-center">
                        <span className="eyebrow-dot" />
                        Hi, I&apos;m Dike Wisdom — based in Lagos
                    </span>

                    <h1
                        id="hero-title"
                        className="display-h text-[44px] sm:text-6xl md:text-7xl lg:text-[96px] xl:text-[104px] !m-0"
                    >
                        Full-stack engineering<br />
                        for products that <em>can&apos;t go down.</em>
                    </h1>

                    <p className="!my-0 max-w-[620px] mx-auto text-lg lg:text-xl text-[var(--ink-2)] leading-[1.5]">
                        I build <b className="text-[var(--ink)] font-semibold">scalable fintech, healthcare and creator platforms</b> — and I stress-test the
                        ones I don&apos;t. Eight years across <b className="text-[var(--ink)] font-semibold">Next.js, Go, Laravel and AWS</b>, with a parallel
                        practice in <b className="text-[var(--ink)] font-semibold">QA &amp; platform testing</b> for casino, betting and gaming products.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/contact" className="btn-editorial dark-fill">
                            Discuss your project <span className="arrow-circle">→</span>
                        </Link>
                        <Link href="/projects" className="btn-editorial ghost">
                            View selected work
                        </Link>
                    </div>

                    <HeroSocials />
                </div>
            </div>

            <HeroMarquee />
        </section>
    );
};

const HeroSocials: React.FC = () => {
    const items: { label: string; href: string; icon: React.ReactNode }[] = [
        {
            label: 'GitHub',
            href: 'https://github.com/veedsify',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39s1.99.13 2.92.39c2.22-1.5 3.2-1.18 3.2-1.18.63 1.6.23 2.79.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
                </svg>
            ),
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/dike-wisdom-180569281/',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-9 14H7v-7h3v7Zm-1.5-8.3c-.97 0-1.75-.79-1.75-1.75S7.53 5.2 8.5 5.2s1.75.79 1.75 1.75S9.47 8.7 8.5 8.7ZM18 17h-3v-3.5c0-.83-.02-1.9-1.16-1.9-1.16 0-1.34.9-1.34 1.84V17h-3v-7h2.88v.96h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V17Z" />
                </svg>
            ),
        },
        {
            label: 'X',
            href: 'https://x.com/veedsify',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
            ),
        },
        {
            label: 'Email',
            href: 'mailto:me@dikewisdom.com',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px]">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                </svg>
            ),
        },
    ];

    return (
        <div className="flex gap-[10px] justify-center mt-3">
            {items.map((s) => (
                <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border grid place-items-center text-[var(--ink-2)] hover:bg-[var(--ink)] hover:text-white hover:border-[var(--ink)] transition-colors"
                    style={{ background: 'var(--bg-elev)', borderColor: 'var(--line)' }}
                >
                    {s.icon}
                </a>
            ))}
        </div>
    );
};

export default HeroSection;
