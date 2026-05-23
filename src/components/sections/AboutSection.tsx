import React from 'react';
import Link from 'next/link';
import statsData from '@/data/stats.json';
import timelineData from '@/data/timeline.json';

interface Stat { n: string; l: string }
interface TimelineEntry { title: string; company: string; description?: string }
interface TimelineGroup { year: string; entries: TimelineEntry[] }

const AboutSection: React.FC = () => {
    const stats = statsData as Stat[];
    const groups = (timelineData as TimelineGroup[]).slice(0, 3);

    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="scroll-mt-20 border-b not-prose"
            style={{ borderColor: 'var(--line)' }}
        >
            <div className="container">
                <div className="py-28 lg:py-36">
                    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">
                        {/* Left: bio + stats + actions */}
                        <div>
                            <span className="eyebrow">/ About</span>
                            <h2
                                id="about-title"
                                className="font-heading text-4xl sm:text-5xl lg:text-6xl !mt-3 !mb-7 leading-[1]"
                                style={{ letterSpacing: '-0.02em', fontWeight: 400 }}
                            >
                                Eight years building<br />
                                and breaking the web.
                            </h2>
                            <p className="!mt-0 !mb-5 text-[17px] leading-[1.6]" style={{ color: 'var(--ink-2)' }}>
                                I&apos;m a Lagos-based engineer working across three continents of clients. My
                                day usually splits between shipping new features on production fintech and
                                creator-platform code, and stress-testing someone else&apos;s casino or betting
                                product before it goes live.
                            </p>
                            <p className="!mt-0 !mb-0 text-[17px] leading-[1.6]" style={{ color: 'var(--ink-3)' }}>
                                I care about boring things — transaction integrity, observable systems,
                                deploys that don&apos;t wake you at 3am. Most of what I do is invisible if it
                                works, which is the point.
                            </p>

                            <div
                                className="flex flex-wrap gap-7 my-8 py-5 border-y"
                                style={{ borderColor: 'var(--line)' }}
                            >
                                {stats.map((s) => (
                                    <div key={s.l}>
                                        <div
                                            className="font-heading leading-none"
                                            style={{ fontSize: '40px', fontWeight: 400 }}
                                        >
                                            {s.n}
                                        </div>
                                        <div
                                            className="font-mono uppercase mt-1"
                                            style={{ fontSize: '10.5px', color: 'var(--ink-4)', letterSpacing: '0.12em' }}
                                        >
                                            {s.l}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-editorial dark-fill">
                                    Download CV <span className="arrow-circle">↓</span>
                                </a>
                                <Link href="/resume" className="btn-editorial ghost">
                                    Read résumé
                                </Link>
                            </div>
                        </div>

                        {/* Right: timeline */}
                        <div>
                            <span className="eyebrow block !mb-4">/ Experience</span>

                            <div className="pl-7 relative" style={{ borderLeft: '1px solid var(--line)' }}>
                                {groups.map((group) => (
                                    <div key={group.year} className="mb-9 relative">
                                        <p
                                            className="relative font-mono uppercase !mt-0 !mb-3"
                                            style={{ fontSize: '11px', color: 'var(--ink-4)', letterSpacing: '0.12em' }}
                                        >
                                            <span
                                                aria-hidden
                                                className="absolute top-[5px] -left-[33px] w-[9px] h-[9px] rounded-full"
                                                style={{
                                                    background: 'var(--ink)',
                                                    border: '2px solid var(--bg)',
                                                    boxShadow: '0 0 0 1px var(--ink)',
                                                }}
                                            />
                                            {group.year}
                                        </p>
                                        {group.entries.map((e) => (
                                            <div key={e.title} className="mb-7">
                                                <h4
                                                    className="font-heading !my-0"
                                                    style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.2 }}
                                                >
                                                    {e.title}
                                                </h4>
                                                <div
                                                    className="font-mono mt-0.5 mb-2"
                                                    style={{ fontSize: '11.5px', color: 'var(--ink-3)' }}
                                                >
                                                    {e.company}
                                                </div>
                                                {e.description && (
                                                    <p className="!my-0 text-sm" style={{ color: 'var(--ink-3)' }}>
                                                        {e.description}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-7 pl-7">
                                <Link
                                    href="/resume"
                                    className="eyebrow"
                                    style={{ borderBottom: '1px solid var(--line)', paddingBottom: '4px' }}
                                >
                                    See full résumé →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
