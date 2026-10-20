'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData } from '@/data/translations';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
            <Briefcase className="w-4 h-4" />
            <span>
              {language === 'en' ? 'Career & Research' : 'Kariyer & Araştırma'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'en'
              ? 'Professional Experience'
              : 'Profesyonel Deneyim'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {language === 'en'
              ? 'Demonstrated leadership in grant coordination, HPC pipeline engineering, and multi-disciplinary genomic research.'
              : 'Hibe koordinasyonu, HPC boru hattı mühendisliği ve çok disiplinli genomik araştırmalarda kanıtlanmış liderlik.'}
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-cyan-500 before:to-slate-300 dark:before:to-slate-800">
          {experienceData.map((item, idx) => (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              } gap-6 md:gap-12`}
            >
              {/* Timeline Pin */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-500 dark:border-cyan-400 flex items-center justify-center shadow-md z-10">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-300" />
              </div>

              {/* Card Container */}
              <div className="ml-12 md:ml-0 md:w-1/2 p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-lg hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all space-y-4">
                {/* Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-cyan-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-800/60">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period[language]}</span>
                  </span>

                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {item.badge[language]}
                  </span>
                </div>

                {/* Role & Institution */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.role[language]}
                  </h3>
                  <div className="text-sm font-medium text-blue-600 dark:text-cyan-400 mt-0.5">
                    {item.institution[language]}
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location[language]}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-900">
                  {item.responsibilities[language].map((resp, rIdx) => (
                    <div key={rIdx} className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                        <span>{resp.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 pl-5 leading-relaxed">
                        {resp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
