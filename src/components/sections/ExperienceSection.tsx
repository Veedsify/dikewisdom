import React from 'react';
import timelineData from '@/data/timeline.json';

interface ExperienceEntry {
  title: string;
  company: string;
  description?: string;
  bullets?: string[];
}

interface TimelineItem {
  year: string;
  entries: ExperienceEntry[];
}

const ExperienceSection: React.FC = () => {
  const timeline: TimelineItem[] = timelineData;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="grid gap-12 dark:bg-gray-950"
    >
      <h3 id="experience-title" className="text-4xl lg:text-5xl !m-0 font-heading">
        My Experience
      </h3>
      <div className="not-prose">
        {timeline.map((item, index) => (
          <dl key={index} className="border-l-2 border-gray-200 dark:border-gray-800 pl-8 sm:pl-12 md:pl-16 pb-14 last:pb-0 relative">
            {/* Timeline dot */}
            <span className="bg-gray-950 dark:bg-gray-200 w-3 h-3 rounded-full block absolute left-0 top-0.5 -ml-[7px] ring-4 ring-white dark:ring-gray-950"></span>
            <span className="text-sm uppercase text-gray-500 dark:text-gray-500 font-semibold tracking-widest mb-6 block leading-[1]">
              {item.year}
            </span>
            {item.entries.map((entry, entryIndex) => (
              <div
                key={entryIndex}
                className="pb-8 last:pb-0 animate-in-and-out"
              >
                <dt className="text-xl sm:text-2xl md:text-3xl text-gray-950 dark:text-gray-200 font-semibold font-heading leading-tight">
                  {entry.title}
                </dt>
                <dd className="text-base text-gray-600 dark:text-gray-400 font-medium mt-1">
                  {entry.company}
                </dd>
                {entry.description && (
                  <dd className="text-gray-600 dark:text-gray-400 text-sm mt-2 max-w-2xl leading-relaxed">
                    {entry.description}
                  </dd>
                )}
                {entry.bullets && entry.bullets.length > 0 && (
                  <dd className="mt-3 max-w-2xl">
                    <ul className="grid gap-2">
                      {entry.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          <span className="text-gray-400 dark:text-gray-600 mt-1.5 flex-shrink-0">
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
