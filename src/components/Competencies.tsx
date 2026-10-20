'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { competencyCategories } from '@/data/translations';

export default function Competencies() {
  const { language } = useLanguage();

  return (
    <section id="competencies" className="py-20 sm:py-24 border-t border-stone-200/90">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-900 font-semibold block">
            04 / {language === 'en' ? 'TECHNICAL COMPETENCIES' : 'TEKNİK YETKİNLİKLER'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-950">
            {language === 'en' ? 'Bioinformatics & Engineering Matrix' : 'Biyoenformatik ve Mühendislik Matrisi'}
          </h2>
        </div>

        {/* Structured Specification Table */}
        <div className="divide-y divide-stone-200/90 border-y border-stone-200/90">
          {competencyCategories.map((cat) => (
            <div
              key={cat.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              {/* Left Column: Category Title & Summary */}
              <div className="md:col-span-4 space-y-1.5">
                <h3 className="font-sans text-lg sm:text-xl font-semibold text-stone-950 tracking-tight">
                  {cat.title[language]}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-stone-500">
                  {cat.skills.length} {language === 'en' ? 'Core Sub-domains' : 'Temel Alt Alan'}
                </p>
              </div>

              {/* Right Column: Detailed Skill Items & Technical Chips */}
              <div className="md:col-span-8 space-y-6">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex flex-wrap items-baseline gap-2.5">
                      <span className="text-base font-semibold text-stone-950">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="font-mono text-[11px] uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                          {language === 'en' ? 'Core Specialization' : 'Temel Uzmanlık'}
                        </span>
                      )}
                    </div>

                    <p className="text-[15px] sm:text-base leading-relaxed text-stone-700 font-sans">
                      {skill.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs sm:text-[13px] px-2.5 py-1 rounded bg-white border border-stone-200 text-stone-700 shadow-2xs"
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
