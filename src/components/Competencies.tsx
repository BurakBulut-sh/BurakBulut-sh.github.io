'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { competencyCategories } from '@/data/translations';
import ScientificText from '@/components/common/ScientificText';

export default function Competencies() {
  const { language } = useLanguage();

  return (
    <section id="competencies" className="relative border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 border-x border-stone-200/80 relative py-12 sm:py-16">
        {/* Blueprint Grid Crosshairs */}
        <span className="absolute -top-[7px] -left-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>
        <span className="absolute -top-[7px] -right-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>

        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 font-semibold block">
            04 / {language === 'en' ? 'TRANSFERABLE COMPETENCIES' : 'TRANSFER EDİLEBİLİR YETKİNLİKLER'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950">
            {language === 'en'
              ? 'Computational, Applied AI & Life Science Toolkit'
              : 'Hesaplamalı, Uygulamalı AI & Yaşam Bilimi Araç Seti'}
          </h2>
        </div>

        {/* Structured Specification Table */}
        <div className="divide-y divide-stone-200/80 border-y border-stone-200/80">
          {competencyCategories.map((cat) => (
            <div
              key={cat.id}
              className="py-5 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start"
            >
              {/* Left Column: Category Title */}
              <div className="md:col-span-3 space-y-1">
                <h3 className="font-serif text-base font-medium text-stone-950 tracking-tight">
                  <ScientificText>{cat.title[language]}</ScientificText>
                </h3>
                <p className="font-mono text-[11px] text-stone-500">
                  {cat.skills.length} {language === 'en' ? 'Core Areas' : 'Temel Alan'}
                </p>
              </div>

              {/* Right Column: Detailed Skill Items */}
              <div className="md:col-span-9 space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-sm font-semibold text-stone-900 font-sans">
                        <ScientificText>{skill.name}</ScientificText>
                      </span>
                      {skill.highlight && (
                        <span className="font-mono text-[10px] uppercase px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-medium">
                          {language === 'en' ? 'High Specialization' : 'İleri Uzmanlık'}
                        </span>
                      )}
                    </div>

                    <p className="text-[13px] leading-relaxed text-stone-600 font-sans">
                      <ScientificText>{skill.description[language]}</ScientificText>
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10.5px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200/80"
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
