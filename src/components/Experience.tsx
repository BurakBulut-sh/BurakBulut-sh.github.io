'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData } from '@/data/translations';

export default function Experience() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 font-semibold block">
            01 / {language === 'en' ? 'PROFESSIONAL EXPERIENCE' : 'MESLEKİ DENEYİM'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950">
            {language === 'en' ? 'Career & Research Positions' : 'Kariyer ve Araştırma Pozisyonları'}
          </h2>
        </div>

        {/* Swiss 2-Column Experience Grid */}
        <div className="divide-y divide-stone-200/60">
          {experienceData.map((exp) => (
            <article
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 first:pt-0 last:pb-0"
            >
              {/* Left Column: Dates, Institution & Location */}
              <div className="md:col-span-4 space-y-1.5">
                <div className="font-mono text-xs uppercase tracking-wider text-stone-500">
                  {exp.period[language]}
                </div>
                <div className="text-sm font-semibold text-stone-900 leading-snug">
                  {exp.institution[language]}
                </div>
                <div className="font-mono text-xs text-stone-500">
                  {exp.location[language]}
                </div>
                {exp.badge && (
                  <div className="pt-1">
                    <span className="inline-block font-mono text-[10px] tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-medium">
                      {exp.badge[language]}
                    </span>
                  </div>
                )}
              </div>

              {/* Right Column: Role Title, Bullets & Tools */}
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-lg font-semibold text-stone-900 tracking-tight">
                  {exp.role[language]}
                </h3>

                <ul className="space-y-3 text-[14px] leading-relaxed text-stone-600">
                  {exp.responsibilities[language].map((resp, idx) => (
                    <li key={idx} className="space-y-0.5">
                      <span className="font-medium text-stone-900">
                        {resp.title}:{' '}
                      </span>
                      <span>{resp.description}</span>
                    </li>
                  ))}
                </ul>

                {/* Specific tools tags for the role */}
                <div className="pt-2 flex flex-wrap gap-1.5">
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
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-white text-stone-600 border border-stone-200/80 shadow-2xs"
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
