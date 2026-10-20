'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { competencyCategories } from '@/data/translations';
import ScientificText from '@/components/common/ScientificText';

export default function Competencies() {
  const { language } = useLanguage();

  return (
    <section id="competencies" className="py-14 sm:py-18 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 font-semibold block">
            03 / {language === 'en' ? 'TECHNICAL COMPETENCIES' : 'TEKNİK YETKİNLİKLER'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950">
            {language === 'en' ? 'Bioinformatics & Engineering Matrix' : 'Biyoenformatik ve Mühendislik Matrisi'}
          </h2>
        </div>

        {/* Structured Specification Table (Wider columns to save vertical space) */}
        <div className="divide-y divide-stone-200/80 border-y border-stone-200/80">
          {competencyCategories.map((cat) => (
            <div
              key={cat.id}
              className="py-5 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              {/* Left Column: Category Title & Summary (col-span-3 on lg) */}
              <div className="md:col-span-4 lg:col-span-3 space-y-1">
                <h3 className="font-sans text-base font-semibold text-stone-950 tracking-tight">
                  <ScientificText>{cat.title[language]}</ScientificText>
                </h3>
                <p className="font-mono text-xs text-stone-500">
                  {cat.skills.length} {language === 'en' ? 'Core Domains' : 'Temel Alan'}
                </p>
              </div>

              {/* Right Column: Detailed Skill Items & Technical Chips (col-span-9 on lg) */}
              <div className="md:col-span-8 lg:col-span-9 space-y-3.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-sm font-medium text-stone-900">
                        <ScientificText>{skill.name}</ScientificText>
                      </span>
                      {skill.highlight && (
                        <span className="font-mono text-[10px] uppercase px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-medium">
                          {language === 'en' ? 'Core Specialization' : 'Temel Uzmanlık'}
                        </span>
                      )}
                    </div>

                    <p className="text-[13px] leading-relaxed text-stone-600">
                      <ScientificText>{skill.description[language]}</ScientificText>
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2 py-0.5 rounded bg-white border border-stone-200/90 text-stone-700 shadow-2xs"
                        >
                          <ScientificText>{tag}</ScientificText>
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
