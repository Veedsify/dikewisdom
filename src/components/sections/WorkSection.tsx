import React from 'react';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import workData from '@/data/work.json';

interface WorkMeta {
  name: string;
  value: string;
}

interface WorkItem {
  title: string;
  description: string;
  image: string;
  website: string;
  meta: WorkMeta[];
}

const WorkSection: React.FC = () => {
  const workItems: WorkItem[] = workData;

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-20 border-b dark:bg-gray-950"
    >
      <div className="container">
        <div className="lg:border-x">
          <SectionTitle id="work-title" title="Examples of my work" />
          <div className="grid gap-20 lg:mx-auto lg:max-w-screen-lg py-14 lg:py-20">
            {workItems.map((item, index) => (
              <article key={index}>
                <Image
                  className="animate-reveal w-full rounded-lg"
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={675}
                  quality={95}
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
                />
                <div className="grid md:grid-cols-2 gap-20 mt-11">
                  <div>
                    <h3 className="mt-0 text-3xl font-medium">{item.title}</h3>
                    <p className="text-lg">{item.description}</p>
                    <a
                      href={item.website}
                      className="btn mt-10 flex items-center gap-2 justify-self-start w-full justify-center sm:w-auto"
                      role="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Website
                      <span className="w-5">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-12 not-prose">
                      {item.meta.map((meta, metaIndex) => (
                        <dl key={metaIndex} className="grid gap-2">
                          <dt className="text-base font-medium text-gray-600 dark:text-gray-500 capitalize">
                            {meta.name}
                          </dt>
                          <dd className="text-xl font-medium text-gray-950 dark:text-gray-200">
                            {meta.value}
                          </dd>
                        </dl>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;