import React from 'react';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-b dark:bg-gray-950 dark:text-gray-300"
    >
      <div className="container">
        <div className="lg:border-x">
          <SectionTitle id="about-title" title="About Me" />
          <div className="lg:max-w-screen-md lg:mx-auto py-14 lg:py-20">
            <p className="!m-0 text-3xl lg:text-4xl text-gray-950 dark:text-gray-200 font-heading">
              Web platform tester, full-stack developer, and infrastructure engineer based in Lagos, Nigeria.{' '}
              <span className="text-gray-600 dark:text-gray-400">
                I specialize in testing casino websites, betting apps, and gaming platforms
                for stability and usability, while also building scalable web applications. From validating
                payment flows and gameplay on casino and betting platforms to building fintech
                systems handling daily transactions — I ensure quality at every level.
              </span>
            </p>
            <div className="mt-10">
              <Link href="/about" className="btn flex items-center gap-2 justify-self-start w-full justify-center sm:w-auto">
                Learn More About Me
                <span className="w-5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
