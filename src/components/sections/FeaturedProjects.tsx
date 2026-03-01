import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types';

const FeaturedProjects: React.FC = () => {
  const featured = (projectsData as Project[]).filter((p) => p.featured);

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-20 border-b dark:bg-gray-950"
    >
      <div className="container">
        <div className="lg:border-x">
          <SectionTitle id="work-title" title="Featured Projects" />
          <div className="grid gap-20 lg:mx-auto lg:max-w-screen-lg py-14 lg:py-20">
            {featured.map((project, index) => (
              <article key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <Image
                    className="animate-reveal w-full rounded-lg hover:opacity-90 transition-opacity duration-300"
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={675}
                    quality={95}
                    priority={index === 0}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
                  />
                </Link>
                <div className="grid md:grid-cols-2 gap-10 mt-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2 not-prose">
                      <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                        project.status === 'live'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300'
                          : project.status === 'in-development'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300'
                          : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                      }`}>
                        {project.status === 'live' ? '✅ Live' : project.status === 'in-development' ? '🔨 In Development' : 'Discontinued'}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-500">{project.category}</span>
                    </div>
                    <h3 className="mt-0 text-3xl font-medium font-heading">
                      <Link href={`/projects/${project.slug}`} className="no-underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-400">{project.tagline}</p>
                    <p className="text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="btn btn-sm flex items-center gap-2"
                        role="button"
                      >
                        View Case Study
                        <span className="w-4">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                          </svg>
                        </span>
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="btn btn-outline btn-sm flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Site
                          <span className="w-4">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                            </svg>
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="not-prose">
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            <div className="text-center">
              <Link href="/projects" className="btn">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
