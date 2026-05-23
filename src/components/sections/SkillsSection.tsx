import React from 'react';
import Link from 'next/link';
import skillsData from '@/data/skills.json';

interface Skill { name: string; level: number }
interface Category { category: string; icon: string; skills: Skill[] }

const SkillsSection: React.FC = () => {
    const categories = skillsData as Category[];

    return (
        <section
            id="skills"
            aria-labelledby="skills-title"
            className="scroll-mt-20 border-b not-prose"
            style={{ borderColor: 'var(--line)' }}
        >
            <div className="container">
                <div className="py-28 lg:py-36">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-end mb-14 lg:mb-16">
                        <div>
                            <span className="eyebrow">/ Skills Matrix</span>
                            <h2
                                id="skills-title"
                                className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl !mt-3 !mb-0 leading-[1]"
                                style={{ letterSpacing: '-0.02em', fontWeight: 400 }}
                            >
                                The tools,{' '}
                                <em className="italic" style={{ color: 'var(--ink-3)' }}>
                                    honestly rated.
                                </em>
                            </h2>
                        </div>
                        <p className="text-base max-w-md md:ml-auto !m-0" style={{ color: 'var(--ink-3)' }}>
                            No 11/10s. Levels reflect where I&apos;d actually be useful in your codebase
                            on day one — and where I&apos;d ramp.
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border"
                        style={{ background: 'var(--line)', borderColor: 'var(--line)' }}
                    >
                        {categories.map((cat) => (
                            <SkillCard key={cat.category} category={cat} />
                        ))}

                        {/* Currently learning dark promo */}
                        <div
                            className="p-7 flex flex-col gap-4"
                            style={{ background: '#0e0e0e', color: '#fff' }}
                        >
                            <div
                                className="flex justify-between items-center pb-3.5 border-b"
                                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                            >
                                <h4
                                    className="font-heading !m-0"
                                    style={{ fontSize: '22px', fontWeight: 400, color: '#fff' }}
                                >
                                    Currently learning
                                </h4>
                            </div>
                            <p
                                className="font-heading !m-0"
                                style={{ fontSize: '22px', lineHeight: 1.25, color: '#fff', fontWeight: 400 }}
                            >
                                Rust for systems work, and deeper SRE — eBPF, distributed tracing,
                                multi-region failover patterns.
                            </p>
                            <Link
                                href="/contact"
                                className="font-mono no-underline mt-auto self-start"
                                style={{
                                    fontSize: '12px',
                                    color: '#b8b6ad',
                                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                                    paddingBottom: '4px',
                                }}
                            >
                                Want to pair on something? →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillCard: React.FC<{ category: Category }> = ({ category }) => (
    <div className="p-7 flex flex-col gap-4" style={{ background: 'var(--bg-elev)' }}>
        <div
            className="flex justify-between items-center pb-3.5 border-b"
            style={{ borderColor: 'var(--line)' }}
        >
            <h4 className="font-heading !m-0" style={{ fontSize: '22px', fontWeight: 400 }}>
                {category.category}
            </h4>
            <span
                className="font-mono uppercase px-2 py-0.5 rounded-full border"
                style={{
                    fontSize: '10.5px',
                    color: 'var(--ink-4)',
                    borderColor: 'var(--line)',
                }}
            >
                {category.skills.length} SKILLS
            </span>
        </div>
        <div className="grid gap-3">
            {category.skills.map((s) => (
                <div key={s.name} className="grid gap-1.5">
                    <div className="flex justify-between" style={{ fontSize: '12.5px' }}>
                        <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{s.name}</span>
                        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--ink-4)' }}>
                            {s.level}
                        </span>
                    </div>
                    <div
                        className="h-[3px] rounded-full overflow-hidden"
                        style={{ background: 'var(--bg)' }}
                    >
                        <div
                            className="h-full rounded-full skill-bar"
                            style={{ width: `${s.level}%`, background: 'var(--ink)' }}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default SkillsSection;
