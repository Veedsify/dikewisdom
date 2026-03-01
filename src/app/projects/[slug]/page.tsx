import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types';

const projects = projectsData as Project[];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Dike Wisdom`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="dark:bg-gray-950 pt-32">
        <article>
          <div className="container">
            <div className="lg:border-x">
              <div className="lg:max-w-screen-lg lg:mx-auto py-14 lg:py-20">
                {/* Breadcrumb */}
                <nav className="mb-8 not-prose" aria-label="Breadcrumb">
                  <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <li><Link href="/" className="hover:text-gray-950 dark:hover:text-gray-200 transition-colors">Home</Link></li>
                    <li>/</li>
                    <li><Link href="/projects" className="hover:text-gray-950 dark:hover:text-gray-200 transition-colors">Projects</Link></li>
                    <li>/</li>
                    <li className="text-gray-950 dark:text-gray-200 font-medium">{project.title}</li>
                  </ol>
                </nav>

                {/* Hero image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={675}
                  quality={95}
                  priority
                  className="w-full rounded-xl"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />

                {/* Project info */}
                <div className="grid lg:grid-cols-[2fr_1fr] gap-12 mt-12">
                  <div>
                    <div className="flex items-center gap-3 mb-4 not-prose">
                      <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                        project.status === 'live'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300'
                          : project.status === 'in-development'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300'
                          : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                      }`}>
                        {project.status === 'live' ? '✅ Live' : project.status === 'in-development' ? '🔨 In Development' : 'Discontinued'}
                      </span>
                      <span className="text-sm text-gray-500">{project.category}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black !mt-0 font-heading">
                      {project.title}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">{project.tagline}</p>
                    <p className="text-lg">{project.longDescription || project.description}</p>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mt-8">
                        <h2 className="text-2xl font-bold font-heading">Key Highlights</h2>
                        <ul className="grid gap-3 mt-4">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-emerald-500 mt-1 flex-shrink-0">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-4 mt-8 not-prose">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn flex items-center gap-2"
                        >
                          Visit Live Site
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline flex items-center gap-2"
                        >
                          View on GitHub
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Sidebar */}
                  <aside className="not-prose">
                    <div className="border rounded-xl p-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 sticky top-24">
                      <h3 className="text-lg font-semibold text-gray-950 dark:text-gray-200 mb-4 font-heading">
                        Project Details
                      </h3>
                      <dl className="grid gap-4">
                        <div>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">Category</dt>
                          <dd className="text-base font-medium text-gray-950 dark:text-gray-200 mt-1">{project.category}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">Status</dt>
                          <dd className="text-base font-medium text-gray-950 dark:text-gray-200 mt-1 capitalize">{project.status.replace('-', ' ')}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-2">Tech Stack</dt>
                          <dd className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </aside>
                </div>

                {/* Other projects */}
                {otherProjects.length > 0 && (
                  <div className="mt-20 pt-12 border-t">
                    <h2 className="text-2xl font-bold font-heading mb-8">Other Projects</h2>
                    <div className="grid md:grid-cols-3 gap-6 not-prose">
                      {otherProjects.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/projects/${p.slug}`}
                          className="group border rounded-xl overflow-hidden bg-white dark:bg-gray-900 dark:border-gray-800 hover:shadow-lg transition-all duration-300 no-underline"
                        >
                          <Image
                            src={p.image}
                            alt={p.title}
                            width={400}
                            height={225}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="p-4">
                            <h3 className="text-base font-semibold text-gray-950 dark:text-gray-200 font-heading">
                              {p.title}
                            </h3>
                            <p className="text-gray-500 text-sm mt-1 line-clamp-1">{p.tagline}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
