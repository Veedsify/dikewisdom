import React from 'react';

const items: { label: string; italic?: boolean }[] = [
    { label: 'Fintech' },
    { label: 'Creator economy', italic: true },
    { label: 'Healthcare' },
    { label: 'Casino & betting QA', italic: true },
    { label: 'E-commerce' },
    { label: 'Immigration tech', italic: true },
    { label: 'DevOps' },
];

const Row: React.FC<{ ariaHidden?: boolean }> = ({ ariaHidden }) => (
    <span aria-hidden={ariaHidden}>
        {items.map((it, i) => (
            <React.Fragment key={`${it.label}-${i}`}>
                {it.italic ? <em className="italic">{it.label}</em> : <span>{it.label}</span>}
                <i className="marquee-sep" />
            </React.Fragment>
        ))}
    </span>
);

const HeroMarquee: React.FC = () => {
    return (
        <div
            className="marquee relative z-10 mt-12 py-6 border-y not-prose"
            style={{ background: 'rgba(255,255,255,0.4)', borderColor: 'var(--line)' }}
        >
            <div
                className="marquee-track font-heading text-2xl md:text-[28px]"
                style={{ color: 'var(--ink-3)' }}
            >
                <Row />
                <Row ariaHidden />
            </div>
        </div>
    );
};

export default HeroMarquee;
