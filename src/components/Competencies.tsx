'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { competencyCategories } from '@/data/translations';

export default function Competencies() {
  const { language } = useLanguage();

  return (
    <section id="competencies" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 dark:text-emerald-400">
            03 / {language === 'en' ? 'TECHNICAL COMPETENCIES' : 'TEKNİK YETKİNLİKLER'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950 dark:text-stone-100">
            {language === 'en' ? 'Bioinformatics & Engineering Matrix' : 'Biyoenformatik ve Mühendislik Matrisi'}
          </h2>
        </div>

        {/* Structured Specification Table */}
        <div className="divide-y divide-stone-200/80 dark:divide-stone-800/80 border-y border-stone-200/80 dark:border-stone-800/80">
          {competencyCategories.map((cat) => (
            <div
              key={cat.id}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Left Column: Category Title & Summary */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-sans text-base font-semibold text-stone-950 dark:text-stone-100 tracking-tight">
                  {cat.title[language]}
                </h3>
                <p className="font-mono text-xs text-stone-500">
                  {cat.skills.length} {language === 'en' ? 'Core Domains' : 'Temel Alan'}
                </p>
              </div>

              {/* Right Column: Detailed Skill Items & Technical Chips */}
              <div className="md:col-span-8 space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-sm font-medium text-stone-900 dark:text-stone-100">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="font-mono text-[10px] uppercase px-1.5 py-0.2 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                          {language === 'en' ? 'Key Specialization' : 'Temel Uzmanlık'}
                        </span>
                      )}
                    </div>

                    <p className="text-[13px] leading-relaxed text-stone-600 dark:text-stone-400">
                      {skill.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2 py-0.5 rounded bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 text-stone-700 dark:text-stone-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
