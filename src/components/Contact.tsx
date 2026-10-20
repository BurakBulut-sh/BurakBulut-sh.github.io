'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteMetadata } from '@/data/translations';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
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
    <section id="contact" className="py-20 sm:py-24 border-t border-stone-200/90">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-900 font-semibold block">
            07 / {language === 'en' ? 'CONTACT & COLLABORATION' : 'İLETİŞİM & İŞ BİRLİĞİ'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-950">
            {language === 'en' ? 'Let’s Connect' : 'İletişime Geçin'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context & Availability */}
          <div className="md:col-span-6 space-y-4 font-sans text-base sm:text-[17px] leading-[1.8] text-stone-700">
            <p>
              {language === 'en'
                ? 'I am open to bioinformatics research collaborations, industry scientist positions, consulting projects, and discussions on computational genomics and autonomous AI bio-agent architectures.'
                : 'Biyoenformatik araştırma iş birlikleri, endüstri araştırmacı rolleri, danışmanlık projeleri ve hesaplamalı genomik ile otonom yapay zeka ajan mimarileri üzerine fikir alışverişine açığım.'}
            </p>
            <p className="font-mono text-xs sm:text-sm text-stone-500">
              {language === 'en'
                ? 'Based in Wiesbaden / Frankfurt Rhine-Main area, Germany. Available for hybrid and remote international engagements.'
                : 'Wiesbaden / Frankfurt Ren-Main bölgesinde yerleşik. Hibrit ve uzaktan uluslararası çalışmalara uygun.'}
            </p>
          </div>

          {/* Right Column: Direct Contact Action Box */}
          <div className="md:col-span-6 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-lg border border-stone-200/90 bg-white shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-stone-500 font-medium">
                  {language === 'en' ? 'Direct Email' : 'Doğrudan E-posta'}
                </span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-stone-600 hover:text-stone-950 cursor-pointer px-2 py-1 rounded hover:bg-stone-100 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-emerald-700" />
                      <span className="text-emerald-800 font-semibold">
                        {language === 'en' ? 'Copied' : 'Kopyalandı'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} strokeWidth={1.5} />
                      <span>{language === 'en' ? 'Copy Address' : 'Adresi Kopyala'}</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${siteMetadata.email}`}
                className="font-mono text-base sm:text-lg font-semibold text-stone-950 hover:underline block truncate"
              >
                {siteMetadata.email}
              </a>
            </div>

            {/* Profiles Row */}
            <div className="grid grid-cols-2 gap-3.5">
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-stone-200/90 bg-white hover:border-stone-400 transition-colors flex items-center justify-between shadow-2xs"
              >
                <div className="flex items-center gap-2.5 text-stone-900 text-sm font-medium">
                  <LinkedinIcon size={17} />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight size={15} className="text-stone-400" />
              </a>

              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-stone-200/90 bg-white hover:border-stone-400 transition-colors flex items-center justify-between shadow-2xs"
              >
                <div className="flex items-center gap-2.5 text-stone-900 text-sm font-medium">
                  <GithubIcon size={17} />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight size={15} className="text-stone-400" />
              </a>

              <a
                href={siteMetadata.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-stone-200/90 bg-white hover:border-stone-400 transition-colors flex items-center justify-between shadow-2xs"
              >
                <div className="flex items-center gap-2.5 text-stone-900 text-sm font-medium">
                  <ScholarIcon size={17} />
                  <span>Scholar</span>
                </div>
                <ArrowUpRight size={15} className="text-stone-400" />
              </a>

              <a
                href={siteMetadata.dissertation}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-stone-200/90 bg-white hover:border-stone-400 transition-colors flex items-center justify-between shadow-2xs"
              >
                <div className="flex items-center gap-2.5 text-stone-900 text-sm font-medium">
                  <span className="font-mono text-xs font-semibold">Ph.D.</span>
                  <span>Thesis</span>
                </div>
                <ArrowUpRight size={15} className="text-stone-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
