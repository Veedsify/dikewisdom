import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExperienceSection from '@/components/sections/ExperienceSection';
import skillsData from '@/data/skills.json';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Professional resume of Dike Wisdom — Full-stack developer, infrastructure engineer, and technical lead.',
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="dark:bg-gray-950 pt-32">
        <section>
          <div className="container">
            <div className="lg:border-x">
              <div className="lg:max-w-screen-lg lg:mx-auto py-14 lg:py-20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-black !mt-0 !mb-2 font-heading">Resume</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 !mt-0">
                      Full-Stack Developer &amp; Infrastructure Engineer
                    </p>
                  </div>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex items-center gap-2 justify-self-start w-full justify-center sm:w-auto flex-shrink-0"
                    download
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    Download PDF
                  </a>
                </div>

                {/* Summary */}
                <div className="border rounded-xl p-8 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 mb-12">
                  <h2 className="text-2xl font-bold font-heading !mt-0">Professional Summary</h2>
                  <p className="text-lg !mb-0">
                    Versatile full-stack developer and infrastructure engineer with expertise
                    spanning frontend (React, Next.js, Vue), backend (Node.js, Go, Laravel,
                    Spring Boot), databases (PostgreSQL, MongoDB, MySQL, Redis), and cloud
                    infrastructure (AWS, Docker, Kubernetes). Proven track record of building
                    production-grade fintech platforms, real-time applications, and scalable
                    SaaS products. Passionate about clean architecture, performance optimization,
                    and Linux-first development workflows.
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold font-heading">Technical Skills</h2>
                  <div className="grid md:grid-cols-2 gap-6 not-prose mt-6">
                    {skillsData.map((category) => (
                      <div key={category.category} className="border rounded-lg p-5 dark:border-gray-800">
                        <h3 className="text-base font-semibold text-gray-950 dark:text-gray-200 mb-4 font-heading">
                          {category.category}
                        </h3>
                        <div className="grid gap-3">
                          {category.skills.map((skill) => (
                            <div key={skill.name}>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  {skill.name}
                                </span>
                                {/* <span className="text-xs text-gray-500">{skill.level}%</span> */}
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div
                                  className="bg-gray-950 dark:bg-gray-200 h-2 rounded-full skill-bar"
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-12">
                  <ExperienceSection />
                </div>

                {/* Education */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold font-heading">Education &amp; Certifications</h2>
                  <div className="not-prose mt-4">
                    <div className="border-l pl-8 pb-8 relative">
                      <span className="bg-gray-200 dark:bg-gray-400 w-[7px] h-[7px] rounded-full block absolute left-0 top-1 -ml-1"></span>
                      <h3 className="text-xl font-medium text-gray-950 dark:text-gray-200">Self-Taught Developer</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Continuous learning through building production applications, open-source
                        contributions, technical documentation, and industry certifications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-8 border-t">
                  <p className="text-lg mb-4">Interested in working together?</p>
                  <div className="flex flex-wrap justify-center gap-4 not-prose">
                    <Link href="/contact" className="btn">
                      Get In Touch
                    </Link>
                    <Link href="/projects" className="btn btn-outline">
                      View My Projects
                    </Link>
                  </div>
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
