'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationData } from '@/data/translations';
import { ArrowUpRight } from 'lucide-react';

export default function Education() {
  const { language } = useLanguage();

  return (
    <section id="education" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 dark:text-emerald-400">
            05 / {language === 'en' ? 'EDUCATION' : 'EĞİTİM'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950 dark:text-stone-100">
            {language === 'en' ? 'Academic Degrees & Research Theses' : 'Akademik Dereceler & Araştırma Tezleri'}
          </h2>
        </div>

        {/* Swiss 2-Column Education Grid */}
        <div className="divide-y divide-stone-200/60 dark:divide-stone-800/60">
          {educationData.map((edu, idx) => (
            <article
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 first:pt-0 last:pb-0"
            >
              {/* Left Column: Period & Institution */}
              <div className="md:col-span-4 space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  {edu.period}
                </span>
                <div className="text-sm font-semibold text-stone-900 dark:text-stone-100 leading-snug">
                  {edu.institution[language]}
                </div>
              </div>

              {/* Right Column: Degree, Field, Thesis & Repository Link */}
              <div className="md:col-span-8 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 tracking-tight">
                    {edu.degree[language]}
                  </h3>
                  <div className="font-mono text-xs text-emerald-800 dark:text-emerald-400">
                    {edu.field[language]}
                  </div>
                </div>

                {edu.details && (
                  <p className="text-[14px] leading-relaxed text-stone-600 dark:text-stone-400 font-sans">
                    {edu.details[language]}
                  </p>
                )}

                {edu.link && (
                  <div className="pt-1">
                    <a
                      href={edu.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded border border-stone-200 dark:border-stone-800 hover:border-stone-900 dark:hover:border-stone-100 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
                    >
                      <span>{edu.link.label}</span>
                      <ArrowUpRight size={12} strokeWidth={1.5} />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
