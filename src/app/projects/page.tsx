import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'Explore projects by Dike Wisdom — from fintech platforms and real-time applications to e-commerce systems and cloud deployments.',
};

export default function ProjectsPage() {
    const projects = projectsData as Project[];

    return (
        <>
            <Header />
            <main className="dark:bg-gray-950 pt-32">
                <section>
                    <div className="container">
                        <div className="lg:border-x">
                            <div className="lg:max-w-screen-lg lg:mx-auto py-14 lg:py-20">
                                <div className="text-center mb-16">
                                    <h1 className="text-4xl sm:text-5xl font-black !mt-0 font-heading">
                                        My Projects
                                    </h1>
                                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                        A selection of projects I&apos;ve built — from concept to production.
                                        Each one represents real challenges solved with thoughtful engineering.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8 not-prose">
                                    {projects.map((project) => (
                                        <Link
                                            key={project.slug}
                                            href={`/projects/${project.slug}`}
                                            className="group border rounded-xl overflow-hidden bg-white dark:bg-gray-900 dark:border-gray-800 hover:shadow-xl transition-all duration-300 no-underline"
                                        >
                                            <div className="relative overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    width={600}
                                                    height={340}
                                                    className="w-full aspect-[16/8] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <span className={`absolute top-3 right-3 px-2 py-0.5 text-xs font-medium rounded-full ${project.status === 'live'
                                                    ? 'bg-emerald-100 text-emerald-700'
                                                    : project.status === 'in-development'
                                                        ? 'bg-amber-100 text-amber-700'
                                                        : 'bg-gray-100 text-gray-600'
                                                    }`}>
                                                    {project.status === 'live' ? '✅ Live' : project.status === 'in-development' ? '🔨 In Dev' : 'Discontinued'}
                                                </span>
                                            </div>
                                            <div className="p-6">
                                                <span className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                                                    {project.category}
                                                </span>
                                                <h2 className="text-xl font-semibold text-gray-950 dark:text-gray-200 mt-1 mb-2 font-heading group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                                    {project.title}
                                                </h2>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                                    {project.tagline}
                                                </p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.techStack.slice(0, 4).map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.techStack.length > 4 && (
                                                        <span className="px-2 py-0.5 text-gray-500 text-xs">
                                                            +{project.techStack.length - 4}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
