'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { mentalModelContent } from '@/data/translations';
import { Compass, Sparkles, Network, Film } from 'lucide-react';
import ScientificText from '@/components/common/ScientificText';

export default function MentalModel() {
  const { language } = useLanguage();

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'visual-first':
        return <Compass size={18} strokeWidth={1.5} className="text-emerald-800" />;
      case 'shaping-ai':
        return <Sparkles size={18} strokeWidth={1.5} className="text-emerald-800" />;
      case 'adaptive-execution':
        return <Network size={18} strokeWidth={1.5} className="text-emerald-800" />;
      default:
        return <Compass size={18} strokeWidth={1.5} className="text-emerald-800" />;
    }
  };

  return (
    <section id="mindset" className="relative border-t border-stone-200/80">
      {/* Blueprint Grid Crosshairs */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 border-x border-stone-200/80 relative py-12 sm:py-16">
        <span className="absolute -top-[7px] -left-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>
        <span className="absolute -top-[7px] -right-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>

        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 font-semibold block">
            {mentalModelContent.sectionNumber} / {mentalModelContent.title[language]}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950">
            {mentalModelContent.subtitle[language]}
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {mentalModelContent.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="space-y-3 relative flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200/80">
                  <div className="flex items-center gap-2">
                    {getPillarIcon(pillar.id)}
                    <span className="font-mono text-xs text-stone-500 font-medium">
                      Pillar {pillar.number}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                    Active
                  </span>
                </div>

                <h3 className="font-serif text-lg font-medium text-stone-950 leading-snug">
                  {pillar.title[language]}
                </h3>

                <p className="font-sans text-[13.5px] leading-relaxed text-stone-600">
                  <ScientificText>{pillar.description[language]}</ScientificText>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Off-Screen Rhythm Banner */}
        <div className="mt-10 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-stone-600 text-xs font-sans">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-stone-900 font-semibold shrink-0">
            <Film size={14} strokeWidth={1.5} className="text-emerald-800" />
            <span>{mentalModelContent.offScreenRhythm.label[language]}:</span>
          </div>
          <p className="font-serif italic text-[13.5px] text-stone-700 leading-relaxed sm:text-right">
            {mentalModelContent.offScreenRhythm.text[language]}
          </p>
        </div>
      </div>
    </section>
  );
}
