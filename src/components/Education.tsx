'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationData } from '@/data/translations';
import { ArrowUpRight } from 'lucide-react';

export default function Education() {
  const { language } = useLanguage();

  return (
    <section id="education" className="py-20 sm:py-24 border-t border-stone-200/90">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-900 font-semibold block">
            06 / {language === 'en' ? 'EDUCATION' : 'EĞİTİM'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-950">
            {language === 'en' ? 'Academic Degrees & Research Theses' : 'Akademik Dereceler & Araştırma Tezleri'}
          </h2>
        </div>

        {/* Swiss 2-Column Education Grid */}
        <div className="divide-y divide-stone-200/80">
          {educationData.map((edu, idx) => (
            <article
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 first:pt-0 last:pb-0"
            >
              {/* Left Column: Period & Institution */}
              <div className="md:col-span-4 space-y-2">
                <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-stone-500 font-medium block">
                  {edu.period}
                </span>
                <div className="text-base sm:text-lg font-semibold text-stone-950 leading-snug">
                  {edu.institution[language]}
                </div>
              </div>

              {/* Right Column: Degree, Field, Thesis & Repository Link */}
              <div className="md:col-span-8 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-stone-950 tracking-tight">
                    {edu.degree[language]}
                  </h3>
                  <div className="font-mono text-xs sm:text-sm text-emerald-900 font-medium">
                    {edu.field[language]}
                  </div>
                </div>

                {edu.details && (
                  <p className="text-base sm:text-[17px] leading-[1.75] text-stone-700 font-sans">
                    {edu.details[language]}
                  </p>
                )}

                {edu.link && (
                  <div className="pt-1.5">
                    <a
                      href={edu.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded border border-stone-300 hover:border-stone-900 text-stone-800 hover:text-stone-950 bg-white transition-colors shadow-2xs"
                    >
                      <span>{edu.link.label}</span>
                      <ArrowUpRight size={14} strokeWidth={1.5} />
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
