'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { heroContent, siteMetadata } from '@/data/translations';
import {
  FileDown,
  Mail,
  GraduationCap,
  Sparkles,
  MapPin,
  Cpu,
  GitBranch,
  BookOpen,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-slate-900/90 border border-blue-200 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span>{heroContent.badge[language]}</span>
          </div>

          {/* Headline Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
            {heroContent.title}
          </h1>

          {/* Subtitle & Location */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
            <span className="flex items-center space-x-1 text-blue-600 dark:text-cyan-400 font-semibold">
              <Cpu className="w-4 h-4" />
              <span>
                {language === 'en'
                  ? 'Genomics • HPC • AI Bio-Agents'
                  : 'Genomik • HPC • Yapay Zeka Ajanları'}
              </span>
            </span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>{siteMetadata.location}</span>
            </span>
          </div>

          {/* Bio Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-balance mx-auto">
            {heroContent.summary[language]}
          </p>

          {/* CV Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="cv/Burak_Bulut_Master_CV_EN.pdf"
              download="Burak_Bulut_Master_CV_EN.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>{heroContent.buttons.downloadCvEn[language]}</span>
            </a>

            <a
              href="cv/Burak_Bulut_Master_CV_TR.pdf"
              download="Burak_Bulut_Master_CV_TR.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm shadow-md transition-all duration-200 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>{heroContent.buttons.downloadCvTr[language]}</span>
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-800 transition-all duration-200"
            >
              <GitBranch className="w-4 h-4 text-cyan-500" />
              <span>{heroContent.buttons.viewProjects[language]}</span>
            </a>
          </div>

          {/* Social and Academic Channels */}
          <div className="pt-4 flex items-center justify-center space-x-3">
            <a
              href={`mailto:${siteMetadata.email}`}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all"
              title="Send Email"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={siteMetadata.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all"
              title="Google Scholar Citations"
              aria-label="Google Scholar"
            >
              <GraduationCap className="w-5 h-5" />
            </a>

            <a
              href={siteMetadata.dissertation}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all"
              title="Ph.D. Dissertation (OpenScience Mainz)"
              aria-label="Dissertation"
            >
              <BookOpen className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {heroContent.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm shadow-sm hover:border-blue-500/30 dark:hover:border-cyan-500/30 transition-all"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
