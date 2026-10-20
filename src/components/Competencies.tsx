'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { competencyCategories } from '@/data/translations';
import { Layers, CheckCircle2 } from 'lucide-react';

export default function Competencies() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? competencyCategories
      : competencyCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="competencies"
      className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
            <Layers className="w-4 h-4" />
            <span>
              {language === 'en' ? 'Technical Expertise' : 'Teknik Uzmanlık'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'en'
              ? 'Core Technical Competencies'
              : 'Temel Teknik Yetkinlikler'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {language === 'en'
              ? 'Multi-disciplinary blend of high-throughput computational biology, HPC orchestration, AI agent engineering, and experimental life sciences.'
              : 'Yüksek verimli hesaplamalı biyoloji, HPC orkestrasyonu, yapay zeka ajan mühendisliği ve deneysel yaşam bilimlerinin çok disiplinli sentezi.'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {language === 'en' ? 'All Domains' : 'Tüm Alanlar'}
          </button>

          {competencyCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.title[language]}
            </button>
          ))}
        </div>

        {/* Competencies Grid */}
        <div className="space-y-10">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 dark:border-cyan-400 pl-3">
                {cat.title[language]}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-blue-400/50 dark:hover:border-cyan-500/40 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between">
                        <h4 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                          {skill.name}
                        </h4>
                        {skill.highlight && (
                          <span className="flex-shrink-0 inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-cyan-950/50 text-blue-600 dark:text-cyan-400 border border-blue-200 dark:border-cyan-800/50">
                            Core
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {skill.description[language]}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-900 flex flex-wrap gap-1.5">
                      {skill.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center space-x-1 text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                          <span>{tag}</span>
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
