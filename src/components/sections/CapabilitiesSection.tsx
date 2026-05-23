import React from 'react';
import capabilitiesData from '@/data/capabilities.json';

interface Capability {
    num: string;
    title: string;
    blurb: string;
    stack: string[];
    icon: string;
}

const icons: Record<string, React.ReactNode> = {
    frontend: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px]">
            <path d="m7 8-4 4 4 4" />
            <path d="m17 8 4 4-4 4" />
            <path d="m14 4-4 16" />
        </svg>
    ),
    backend: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px]">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14a9 3 0 0 0 18 0V5" />
            <path d="M3 12a9 3 0 0 0 18 0" />
        </svg>
    ),
    infra: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px]">
            <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78 6 6 0 0 0-11.59 1.36A4 4 0 0 0 6 19h11.5Z" />
        </svg>
    ),
    qa: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px]">
            <path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    ),
};

const CapabilitiesSection: React.FC = () => {
    const caps = capabilitiesData as Capability[];

    return (
        <section
            id="capabilities"
            aria-labelledby="capabilities-title"
            className="border-y not-prose scroll-mt-20"
            style={{ borderColor: 'var(--line)' }}
        >
            <div className="container">
                <div className="py-24 lg:py-32">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-end mb-12 lg:mb-16">
                        <div>
                            <span className="eyebrow">/ Capabilities</span>
                            <h2
                                id="capabilities-title"
                                className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl !mt-3 !mb-0 leading-[1]"
                                style={{ letterSpacing: '-0.02em', fontWeight: 400 }}
                            >
                                What I bring<br />
                                to your <em className="italic" style={{ color: 'var(--ink-3)' }}>roadmap.</em>
                            </h2>
                        </div>
                        <p className="text-base lg:text-[16px] max-w-md md:ml-auto !m-0" style={{ color: 'var(--ink-3)' }}>
                            Four practices, one engineer. I move across the stack so you don&apos;t have to coordinate three vendors — and I keep the QA hat on the whole time.
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l"
                        style={{ borderColor: 'var(--line)' }}
                    >
                        {caps.map((cap) => (
                            <div
                                key={cap.num}
                                className="flex flex-col gap-[18px] p-8 lg:px-7 lg:py-9 border-r border-b min-h-[280px] transition-colors"
                                style={{ borderColor: 'var(--line)', background: 'var(--bg-elev)' }}
                            >
                                <div className="flex justify-between items-center">
                                    <span
                                        className="font-mono uppercase tracking-[0.1em]"
                                        style={{ fontSize: '11px', color: 'var(--ink-4)' }}
                                    >
                                        {cap.num}
                                    </span>
                                    <div
                                        className="w-10 h-10 rounded-[10px] grid place-items-center border"
                                        style={{ background: 'var(--bg)', borderColor: 'var(--line)', color: 'var(--ink)' }}
                                    >
                                        {icons[cap.icon]}
                                    </div>
                                </div>
                                <h3 className="font-heading text-[28px] !my-0 leading-[1.05]" style={{ fontWeight: 400 }}>
                                    {cap.title}
                                </h3>
                                <p className="!my-0 text-sm" style={{ color: 'var(--ink-3)' }}>
                                    {cap.blurb}
                                </p>
                                <div className="mt-auto flex flex-wrap gap-1.5">
                                    {cap.stack.map((s) => (
                                        <span
                                            key={s}
                                            className="font-mono px-2 py-[3px] rounded border"
                                            style={{
                                                fontSize: '10.5px',
                                                color: 'var(--ink-3)',
                                                background: 'var(--bg)',
                                                borderColor: 'var(--line)',
                                            }}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
