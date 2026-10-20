'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteMetadata } from '@/data/translations';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  ScholarIcon,
} from '@/components/icons/BrandIcons';

export default function Contact() {
  const { language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteMetadata.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 dark:text-emerald-400">
            06 / {language === 'en' ? 'CONTACT & COLLABORATION' : 'İLETİŞİM & İŞ BİRLİĞİ'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950 dark:text-stone-100">
            {language === 'en' ? 'Let’s Connect' : 'İletişime Geçin'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context & Availability */}
          <div className="md:col-span-6 space-y-4 font-sans text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
            <p>
              {language === 'en'
                ? 'I am open to bioinformatics research collaborations, industry scientist positions, consulting projects, and discussions on computational genomics and AI bio-agent architectures.'
                : 'Biyoenformatik araştırma iş birlikleri, endüstri araştırmacı rolleri, danışmanlık projeleri ve hesaplamalı genomik ile yapay zeka ajan mimarileri üzerine fikir alışverişine açığım.'}
            </p>
            <p className="font-mono text-xs text-stone-500">
              {language === 'en'
                ? 'Based in Wiesbaden / Frankfurt Rhine-Main area, Germany. Available for hybrid and remote international engagements.'
                : 'Wiesbaden / Frankfurt Ren-Main bölgesinde yerleşik. Hibrit ve uzaktan uluslararası çalışmalara uygun.'}
            </p>
          </div>

          {/* Right Column: Direct Contact Action Box */}
          <div className="md:col-span-6 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-lg border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-[#141413] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-stone-500">
                  {language === 'en' ? 'Direct Email' : 'Doğrudan E-posta'}
                </span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 font-mono text-xs text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-emerald-600" />
                      <span className="text-emerald-700 dark:text-emerald-400">
                        {language === 'en' ? 'Copied' : 'Kopyalandı'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} strokeWidth={1.5} />
                      <span>{language === 'en' ? 'Copy' : 'Kopyala'}</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${siteMetadata.email}`}
                className="font-mono text-sm sm:text-base font-semibold text-stone-950 dark:text-stone-100 hover:underline block truncate"
              >
                {siteMetadata.email}
              </a>
            </div>

            {/* Profiles Row */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-[#141413] hover:border-stone-400 dark:hover:border-stone-600 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200 text-xs font-medium">
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight size={13} className="text-stone-400" />
              </a>

              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-[#141413] hover:border-stone-400 dark:hover:border-stone-600 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200 text-xs font-medium">
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight size={13} className="text-stone-400" />
              </a>

              <a
                href={siteMetadata.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-[#141413] hover:border-stone-400 dark:hover:border-stone-600 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200 text-xs font-medium">
                  <ScholarIcon size={15} />
                  <span>Scholar</span>
                </div>
                <ArrowUpRight size={13} className="text-stone-400" />
              </a>

              <a
                href={siteMetadata.dissertation}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-[#141413] hover:border-stone-400 dark:hover:border-stone-600 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200 text-xs font-medium">
                  <span className="font-mono text-xs">Ph.D.</span>
                  <span>Thesis</span>
                </div>
                <ArrowUpRight size={13} className="text-stone-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
