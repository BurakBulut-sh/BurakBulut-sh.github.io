'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteMetadata, heroContent } from '@/data/translations';
import { FileText } from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  ScholarIcon,
} from '@/components/icons/BrandIcons';
import ScientificText from '@/components/common/ScientificText';

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section id="about" className="relative pt-8 pb-12 sm:pt-12 sm:pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 border-x border-stone-200/80 relative">
        {/* Blueprint Grid Crosshairs */}
        <span className="absolute -top-[7px] -left-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>
        <span className="absolute -top-[7px] -right-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>

        <div className="space-y-6">
          {/* Status line */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-stone-200/90 bg-stone-100/70 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs text-stone-700">
              {heroContent.badge[language]} · {siteMetadata.location}
            </span>
          </div>

          {/* Editorial Headline & Tagline */}
          <div className="space-y-2.5">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-950 leading-tight">
              {heroContent.title}
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-stone-700 leading-relaxed">
              {heroContent.tagline[language]}
            </p>
          </div>

          {/* Summary Bio Paragraph */}
          <div className="space-y-3.5 text-[15px] leading-[1.7] text-stone-600 font-sans">
            <p>
              <ScientificText>{heroContent.summary[language]}</ScientificText>
            </p>
          </div>

          {/* Highlights Ribbon - 4 Transferable Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-stone-200/80 my-6">
            {heroContent.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-mono text-lg sm:text-xl font-semibold text-stone-950">
                  {typeof stat.value === 'string' ? stat.value : stat.value[language]}
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-stone-500 leading-snug">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>

          {/* Actions & Verified Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            {/* CV Download Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="cv/Burak_Bulut_Master_CV_EN.pdf"
                download="Burak_Bulut_Master_CV_EN.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-50 text-sm font-medium transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
              >
                <FileText size={15} strokeWidth={1.5} />
                <span>{heroContent.buttons.downloadCvEn[language]}</span>
              </a>

              <a
                href="cv/Burak_Bulut_Master_CV_TR.pdf"
                download="Burak_Bulut_Master_CV_TR.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-stone-300 hover:border-stone-400 bg-white text-stone-800 text-sm font-medium transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
              >
                <FileText size={15} strokeWidth={1.5} />
                <span>{heroContent.buttons.downloadCvTr[language]}</span>
              </a>
            </div>

            {/* Academic & Professional Profiles */}
            <div className="flex items-center gap-2 text-stone-600">
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded hover:bg-stone-100 hover:text-stone-950 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded hover:bg-stone-100 hover:text-stone-950 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={siteMetadata.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded hover:bg-stone-100 hover:text-stone-950 transition-colors"
                title="Google Scholar"
              >
                <ScholarIcon size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
