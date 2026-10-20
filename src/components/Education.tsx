'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationData } from '@/data/translations';
import { ArrowUpRight } from 'lucide-react';
import ScientificText from '@/components/common/ScientificText';

export default function Education() {
  const { language } = useLanguage();

  return (
    <section id="education" className="py-14 sm:py-18 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 font-semibold block">
            05 / {language === 'en' ? 'EDUCATION' : 'EĞİTİM'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950">
            {language === 'en' ? 'Academic Degrees & Research Theses' : 'Akademik Dereceler & Araştırma Tezleri'}
          </h2>
        </div>

        {/* Swiss 2-Column Education Grid */}
        <div className="divide-y divide-stone-200/60">
          {educationData.map((edu, idx) => (
            <article
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-7 first:pt-0 last:pb-0"
            >
              {/* Left Column: Period & Institution (col-span-3 on lg) */}
              <div className="md:col-span-4 lg:col-span-3 space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-stone-500 block">
                  {edu.period}
                </span>
                <div className="text-sm font-semibold text-stone-900 leading-snug">
                  <ScientificText>{edu.institution[language]}</ScientificText>
                </div>
              </div>

              {/* Right Column: Degree, Field, Thesis & Repository Link (col-span-9 on lg) */}
              <div className="md:col-span-8 lg:col-span-9 space-y-2.5">
                <div className="space-y-0.5">
                  <h3 className="text-lg font-semibold text-stone-900 tracking-tight">
                    <ScientificText>{edu.degree[language]}</ScientificText>
                  </h3>
                  <div className="font-mono text-xs text-emerald-800 font-medium">
                    <ScientificText>{edu.field[language]}</ScientificText>
                  </div>
                </div>

                {edu.details && (
                  <p className="text-[14px] leading-relaxed text-stone-600 font-sans">
                    <ScientificText>{edu.details[language]}</ScientificText>
                  </p>
                )}

                {edu.link && (
                  <div className="pt-1">
                    <a
                      href={edu.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded border border-stone-200 hover:border-stone-900 text-stone-700 hover:text-stone-950 bg-white transition-colors shadow-2xs whitespace-nowrap"
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
