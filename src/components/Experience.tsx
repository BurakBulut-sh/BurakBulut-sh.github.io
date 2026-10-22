'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData } from '@/data/translations';
import ScientificText from '@/components/common/ScientificText';

export default function Experience() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="relative border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 border-x border-stone-200/80 relative py-12 sm:py-16">
        {/* Blueprint Grid Crosshairs */}
        <span className="absolute -top-[7px] -left-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>
        <span className="absolute -top-[7px] -right-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>

        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 font-semibold block">
            02 / {language === 'en' ? 'PROFESSIONAL EXPERIENCE' : 'MESLEKİ DENEYİM'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950">
            {language === 'en' ? 'Applied R&D & Research Appointments' : 'Uygulamalı Ar-Ge ve Araştırma Görevleri'}
          </h2>
        </div>

        {/* Swiss 2-Column Experience Layout */}
        <div className="divide-y divide-stone-200/80">
          {experienceData.map((exp) => (
            <article
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 first:pt-0 last:pb-0"
            >
              {/* Left Column: Dates, Institution & Location */}
              <div className="md:col-span-3 space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-stone-500 font-medium">
                  {exp.period[language]}
                </div>
                <div className="text-sm font-semibold text-stone-900 leading-snug">
                  <ScientificText>{exp.institution[language]}</ScientificText>
                </div>
                <div className="font-mono text-xs text-stone-500">
                  {exp.location[language]}
                </div>
                {exp.badge && (
                  <div className="pt-0.5">
                    <span className="inline-block font-mono text-[10px] tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-medium">
                      {exp.badge[language]}
                    </span>
                  </div>
                )}
              </div>

              {/* Right Column: Role Title, Core Impact, Clean Left-Bordered Bullets */}
              <div className="md:col-span-9 space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-950 tracking-tight">
                    <ScientificText>{exp.role[language]}</ScientificText>
                  </h3>
                  {exp.coreImpact && (
                    <p className="font-serif italic text-[14.5px] sm:text-[15px] text-stone-700 leading-relaxed">
                      <ScientificText>{exp.coreImpact[language]}</ScientificText>
                    </p>
                  )}
                </div>

                {/* Clean Typographic Bullet List with Left Hairline Rule */}
                <div className="border-l-2 border-stone-300 pl-4 space-y-3.5 text-[14px] leading-relaxed text-stone-600">
                  {exp.responsibilities[language].map((resp, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="font-medium text-stone-900 block font-sans">
                        <ScientificText>{resp.title}</ScientificText>
                      </span>
                      <p className="font-sans">
                        <ScientificText>{resp.description}</ScientificText>
                      </p>
                    </div>
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
