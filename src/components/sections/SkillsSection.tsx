'use client';

import React from 'react';
import SectionTitle from '../SectionTitle';
import skillsData from '@/data/skills.json';

const iconMap: Record<string, React.ReactNode> = {
  frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  realtime: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-20 border-b dark:bg-gray-950"
    >
      <div className="container">
        <div className="lg:border-x">
          <SectionTitle id="skills-title" title="Tech Stack & Skills" />
          <div className="py-14 lg:py-20 lg:max-w-screen-lg lg:mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 not-prose">
              {skillsData.map((category) => (
                <div
                  key={category.category}
                  className="border rounded-xl p-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-gray-700 dark:text-gray-300">
                      {iconMap[category.icon]}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-950 dark:text-gray-200 font-heading">
                      {category.category}
                    </h3>
                  </div>
                  <div className="grid gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          {/* <span className="text-sm text-gray-500 dark:text-gray-500">
                            {skill.level}%
                          </span> */}
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gray-950 dark:bg-gray-200 h-2 rounded-full skill-bar transition-all duration-1000"
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
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
