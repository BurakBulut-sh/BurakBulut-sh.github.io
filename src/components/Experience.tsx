'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData } from '@/data/translations';

export default function Experience() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-stone-200/90">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-900 font-semibold block">
            02 / {language === 'en' ? 'PROFESSIONAL EXPERIENCE' : 'MESLEKİ DENEYİM'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-950">
            {language === 'en' ? 'Career & Research Positions' : 'Kariyer ve Araştırma Pozisyonları'}
          </h2>
        </div>

        {/* Swiss 2-Column Experience Grid */}
        <div className="divide-y divide-stone-200/80">
          {experienceData.map((exp) => (
            <article
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 first:pt-0 last:pb-0"
            >
              {/* Left Column: Dates, Institution & Location */}
              <div className="md:col-span-4 space-y-2">
                <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-stone-500 font-medium">
                  {exp.period[language]}
                </div>
                <div className="text-base sm:text-lg font-semibold text-stone-950 leading-snug">
                  {exp.institution[language]}
                </div>
                <div className="font-mono text-xs sm:text-sm text-stone-500">
                  {exp.location[language]}
                </div>
                {exp.badge && (
                  <div className="pt-1.5">
                    <span className="inline-block font-mono text-xs tracking-wider px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-medium">
                      {exp.badge[language]}
                    </span>
                  </div>
                )}
              </div>

              {/* Right Column: Role Title, Bullets & Tools */}
              <div className="md:col-span-8 space-y-5">
                <h3 className="text-xl sm:text-2xl font-semibold text-stone-950 tracking-tight">
                  {exp.role[language]}
                </h3>

                <ul className="space-y-3.5 text-base sm:text-[17px] leading-[1.75] text-stone-700">
                  {exp.responsibilities[language].map((resp, idx) => (
                    <li key={idx} className="space-y-0.5">
                      <span className="font-semibold text-stone-950">
                        {resp.title}:{' '}
                      </span>
                      <span>{resp.description}</span>
                    </li>
                  ))}
                </ul>

                {/* Specific tools tags for the role */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {(exp.id === 'senckenberg'
                    ? [
                        'Snakemake',
                        'SLURM',
                        'WGS',
                        'RNA-Seq',
                        'GATK4',
                        'BWA-MEM',
                        'DESeq2',
                        'R / tidyverse',
                        'Python',
                        'Docker',
                      ]
                    : [
                        'DFG Grant Writing',
                        'Local LLMs (Qwen 32B)',
                        'Hermes Agent Architecture',
                        'Scientific Coordination',
                        'Python CLI',
                        'Genomic Data Analysis',
                      ]
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-white text-stone-700 border border-stone-200 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
