import React from 'react';
import testimonialsData from '@/data/testimonials.json';

interface Testimonial { quote: string; author: string; role?: string }

const TestimonialsSection: React.FC = () => {
    const all = testimonialsData as Testimonial[];
    const visible = all.slice(0, 3);

    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-title"
            className="scroll-mt-20 border-y not-prose"
            style={{ background: 'var(--bg-accent)', borderColor: 'var(--line)' }}
        >
            <div className="container">
                <div className="py-28 lg:py-36">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-end mb-14 lg:mb-16">
                        <div>
                            <span className="eyebrow">/ What Clients Say</span>
                            <h2
                                id="testimonials-title"
                                className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl !mt-3 !mb-0 leading-[1]"
                                style={{ letterSpacing: '-0.02em', fontWeight: 400 }}
                            >
                                Trusted on the{' '}
                                <em className="italic" style={{ color: 'var(--ink-3)' }}>
                                    hard problems.
                                </em>
                            </h2>
                        </div>
                        <p className="text-base max-w-md md:ml-auto !m-0" style={{ color: 'var(--ink-3)' }}>
                            Selected words from teams who&apos;ve shipped production systems with me.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {visible.map((t, i) => (
                            <article
                                key={i}
                                className="rounded-2xl p-8 flex flex-col gap-5 border"
                                style={{ background: 'var(--bg-elev)', borderColor: 'var(--line)' }}
                            >
                                <span
                                    aria-hidden
                                    className="font-heading block leading-[0.6] h-6"
                                    style={{ fontSize: '64px', color: 'var(--ink-4)' }}
                                >
                                    &ldquo;
                                </span>
                                <p
                                    className="font-heading !m-0"
                                    style={{ fontSize: '19px', lineHeight: 1.4, color: 'var(--ink)' }}
                                >
                                    {t.quote}
                                </p>
                                <div
                                    className="mt-auto pt-5 border-t flex flex-col gap-0.5"
                                    style={{ borderColor: 'var(--line)' }}
                                >
                                    <span className="font-medium text-sm" style={{ color: 'var(--ink)' }}>
                                        {t.author}
                                    </span>
                                    {t.role && (
                                        <span
                                            className="font-mono uppercase"
                                            style={{ fontSize: '11px', color: 'var(--ink-4)', letterSpacing: '0.04em' }}
                                        >
                                            {t.role}
                                        </span>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>

                    <div
                        className="flex justify-between items-center mt-10 pt-7 border-t"
                        style={{ borderColor: 'var(--line)' }}
                    >
                        <span className="eyebrow">{all.length} testimonials</span>
                        <div className="flex gap-2.5">
                            <button
                                type="button"
                                aria-label="Previous"
                                className="w-9 h-9 rounded-full border grid place-items-center"
                                style={{ background: 'var(--bg-elev)', borderColor: 'var(--line)' }}
                            >
                                ←
                            </button>
                            <button
                                type="button"
                                aria-label="Next"
                                className="w-9 h-9 rounded-full border grid place-items-center"
                                style={{ background: 'var(--bg-elev)', borderColor: 'var(--line)' }}
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
