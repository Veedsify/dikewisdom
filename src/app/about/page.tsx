import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import Socials from '@/components/Socials';

export const metadata: Metadata = {
    title: 'About Me',
    description:
        'Learn about Dike Wisdom — a web platform tester, full-stack developer, and infrastructure engineer based in Lagos, Nigeria. Specializing in web platform QA testing, React, Node.js, Go, and cloud infrastructure.',
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <section className="border-b dark:bg-gray-950 pt-32">
                    <div className="container">
                        <div className="lg:border-x">
                            <div className="lg:max-w-screen-md lg:mx-auto py-14 lg:py-20">
                                <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                                    <div className="grid gap-6">
                                        <Image
                                            src="/images/avatar.jpeg"
                                            alt="Dike Wisdom"
                                            width={300}
                                            height={300}
                                            className="rounded-full w-full aspect-square object-top object-cover saturate-0"
                                            priority
                                        />
                                        <Socials />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl sm:text-5xl font-black !mt-0 font-heading">
                                            About Me
                                        </h1>
                                        <p className="text-xl text-gray-600 dark:text-gray-400 !mt-0">
                                            Web Platform Tester, Full-Stack Developer &amp; Infrastructure Engineer
                                        </p>
                                        <p className="text-lg">
                                            I&apos;m Dike Wisdom, a web platform tester, full-stack developer, and
                                            infrastructure engineer based in Lagos, Nigeria. I bring a unique
                                            combination of hands-on QA testing expertise and deep technical knowledge
                                            I don&apos;t just build platforms, I rigorously test them especially
                                            casino websites, betting apps, and gaming platforms for stability,
                                            usability, and real-world reliability.
                                        </p>
                                        <p className="text-lg">
                                            My testing experience covers end-to-end validation of casino and betting
                                            platforms including payment flow testing (deposits, withdrawals), game
                                            functionality verification, slot and live dealer testing, sports betting
                                            feature checks, cross-browser compatibility, customer support channel
                                            audits, and competitor casino benchmarking. I document findings through
                                            detailed screen recordings, annotated screenshots, and structured reports.
                                        </p>
                                        <p className="text-lg">
                                            On the development side, my work spans fintech platforms processing daily
                                            currency exchanges, content monetization systems with real-time messaging,
                                            healthcare advisory platforms on AWS, and e-commerce solutions for
                                            Nigerian businesses. This dual perspective as both a builder and tester
                                            gives me an exceptional eye for quality and user experience.
                                        </p>
                                        <p className="text-lg">
                                            I believe in writing clean, well-documented code that other developers can
                                            understand and extend. Whether it&apos;s setting up CI/CD pipelines, designing
                                            database schemas, or crafting pixel-perfect UIs, I approach every project
                                            with the same commitment to quality and scalability.
                                        </p>
                                        <div className="flex flex-wrap gap-4 mt-6">
                                            <a href="mailto:me@dikewisdom.com" className="btn">
                                                Get In Touch
                                            </a>
                                            <a
                                                href="/resume.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline"
                                            >
                                                Download CV
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-b dark:bg-gray-950">
                    <div className="container">
                        <div className="lg:border-x">
                            <div className="lg:max-w-screen-md lg:mx-auto py-14 lg:py-20">
                                <ExperienceSection />
                            </div>
                        </div>
                    </div>
                </section>

                <SkillsSection />
            </main>
            <Footer />
        </>
    );
}
