'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educationData } from '@/data/translations';
import { GraduationCap, ExternalLink, Calendar, Award } from 'lucide-react';

export default function Education() {
  const { language } = useLanguage();

  return (
    <section
      id="education"
      className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
            <GraduationCap className="w-4 h-4" />
            <span>
              {language === 'en' ? 'Academic Foundations' : 'Akademik Geçmiş'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'en' ? 'Education & Degrees' : 'Eğitim & Dereceler'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {language === 'en'
              ? 'Doctoral and graduate education focused on genomics, computational bioinformatics, and molecular biology.'
              : 'Genomik, hesaplamalı biyoenformatik ve moleküler biyolojiye odaklanan doktora ve lisansüstü eğitim.'}
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-blue-400/50 dark:hover:border-cyan-500/40 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="p-2 rounded-xl bg-blue-50 dark:bg-cyan-950/60 text-blue-600 dark:text-cyan-400">
                      <Award className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {item.degree[language]}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400 pl-11">
                    {item.field[language]}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pl-11">
                    {item.institution[language]}
                  </div>
                </div>

                <div className="sm:self-start pl-11 sm:pl-0">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                </div>
              </div>

              {item.details && (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-11">
                  {item.details[language]}
                </p>
              )}

              {item.link && (
                <div className="pl-11 pt-1">
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>{item.link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
