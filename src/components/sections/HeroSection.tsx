import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../Socials';

const HeroSection: React.FC = () => {
    return (
        <section aria-labelledby="hero-title" className="border-b dark:bg-gray-950">
            <div className="container">
                <div className="lg:border-x pt-48">
                    <div className="lg:max-w-screen-lg lg:mx-auto dotted-side-borders pb-32">
                        <div className="lg:max-w-screen-md lg:mx-auto grid text-center gap-10 isolate">
                            <div className="grid">
                                <span className="animated-border">Available for work 🎉</span>
                                <figure className="relative w-32 h-32 mx-auto grid !mb-0 animate animate-out-up">
                                    <Image
                                        src="/images/avatar.jpeg"
                                        alt="Dike Wisdom's profile"
                                        width={128}
                                        height={128}
                                        className="rounded-full aspect-square object-cover object-top"
                                        priority
                                    />
                                    <span className="rounded-full block w-3 h-3 bg-emerald-400 absolute bottom-3 right-3 border-2 border-white dark:border-gray-950"></span>
                                </figure>
                            </div>
                            <div className="grid gap-7 animate animate-out-up">
                                <p className="!my-0 text-xl">Hi, I&apos;m Dike Wisdom 👋</p>
                                <h1
                                    id="hero-title"
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-regular !m-0 font-heading"
                                >
                                    Web Platform Tester, Full-Stack Developer &amp; DevOps Engineer
                                </h1>
                                <p className="!mb-0 !mt-0 max-w-xl mx-auto text-xl font-medium">
                                    Based in Lagos, Nigeria. I <b>test casino, gaming &amp; betting platforms</b> for stability and usability,
                                    build <b>scalable web applications</b>, and manage <b>cloud infrastructure</b> — from
                                    QA validation to production deployment.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link href="/contact" className="btn" role="button">
                                        Discuss Your Project
                                    </Link>
                                    <Link href="/projects" className="btn btn-outline" role="button">
                                        View My Work
                                    </Link>
                                </div>
                                <div className="mt-10">
                                    <Socials center={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
