import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types';

const FeaturedProjects: React.FC = () => {
    const featured = (projectsData as Project[]).filter((p) => p.featured);

    return (
        <section
            id="work"
            aria-labelledby="work-title"
            className="scroll-mt-20 border-y not-prose"
            style={{ background: 'var(--bg-accent)', borderColor: 'var(--line)' }}
        >
            <div className="container">
                <div className="py-28 lg:py-36">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-end mb-14 lg:mb-16">
                        <div>
                            <span className="eyebrow">/ Selected Work</span>
                            <h2
                                id="work-title"
                                className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl !mt-3 !mb-0 leading-[1]"
                                style={{ letterSpacing: '-0.02em', fontWeight: 400 }}
                            >
                                Six platforms,{' '}
                                <em className="italic" style={{ color: 'var(--ink-3)' }}>
                                    still shipping.
                                </em>
                            </h2>
                        </div>
                        <p className="text-base max-w-md md:ml-auto !m-0" style={{ color: 'var(--ink-3)' }}>
                            A slice of the systems I&apos;ve architected and maintained — each live in
                            production, each with real users and real money moving through it.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {featured.map((p, index) => (
                            <ProjectCard key={p.slug} project={p} reverse={index % 2 === 1} index={index} />
                        ))}
                    </div>

                    <div className="text-center mt-14">
                        <Link href="/projects" className="btn-editorial ghost">
                            See all projects <span className="arrow-circle">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface CardProps { project: Project; reverse: boolean; index: number }

const ProjectCard: React.FC<CardProps> = ({ project, reverse, index }) => {
    const badge =
        project.status === 'live'
            ? `● LIVE · ${project.category.toUpperCase()}`
            : project.status === 'in-development'
                ? `● IN-DEV · ${project.category.toUpperCase()}`
                : `● ${project.category.toUpperCase()}`;

    return (
        <article
            className="group overflow-hidden rounded-3xl border grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.18)]"
            style={{ background: 'var(--bg-elev)', borderColor: 'var(--line)' }}
        >
            <div
                className={`relative min-h-[320px] lg:min-h-[480px] overflow-hidden ${reverse ? 'lg:order-2' : ''}`}
                style={{ background: 'linear-gradient(135deg, #e8e4d6, #d9d2bf)' }}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover !m-0"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <span
                    className="absolute top-5 left-5 font-mono backdrop-blur-md text-white px-3 py-1.5 rounded-full"
                    style={{ fontSize: '10.5px', background: 'rgba(14,14,14,0.85)', letterSpacing: '0.06em' }}
                >
                    {badge}
                </span>
            </div>

            <div className="p-8 lg:p-11 flex flex-col justify-center gap-[18px]">
                <span
                    className="font-mono uppercase"
                    style={{ fontSize: '11px', color: 'var(--ink-4)', letterSpacing: '0.12em' }}
                >
                    {project.tagline}
                </span>
                <h3
                    className="font-heading !my-0"
                    style={{ fontSize: '40px', lineHeight: 1.02, letterSpacing: '-0.015em', fontWeight: 400 }}
                >
                    {project.title}
                </h3>
                <p className="!my-0 text-[15px] leading-[1.55]" style={{ color: 'var(--ink-2)' }}>
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="font-mono px-2.5 py-1 rounded-full border"
                            style={{
                                fontSize: '10.5px',
                                background: 'var(--bg)',
                                borderColor: 'var(--line)',
                                color: 'var(--ink-2)',
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div
                    className="mt-2 pt-4 flex justify-between items-center border-t"
                    style={{ borderColor: 'var(--line)' }}
                >
                    <span
                        className="font-mono uppercase"
                        style={{ fontSize: '11px', color: 'var(--ink-4)', letterSpacing: '0.12em' }}
                    >
                        {project.liveUrl ? new URL(project.liveUrl).host : project.category}
                    </span>
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 font-mono no-underline"
                        style={{ fontSize: '12px', color: 'var(--ink)', fontWeight: 500 }}
                    >
                        Open case study
                        <span
                            className="w-6 h-6 rounded-full grid place-items-center transition-transform group-hover:-rotate-45"
                            style={{ background: 'var(--ink)', color: 'var(--bg)', fontSize: '11px' }}
                        >
                            ↗
                        </span>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default FeaturedProjects;
