'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteMetadata } from '@/data/translations';
import {
  Mail,
  GraduationCap,
  MapPin,
  Copy,
  Check,
  Send,
  FileDown,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export default function Contact() {
  const { language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteMetadata.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
            <Mail className="w-4 h-4" />
            <span>{language === 'en' ? 'Get In Touch' : 'İletişime Geçin'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'en'
              ? 'Collaborate & Connect'
              : 'İş Birliği & İletişim'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Open to bioinformatics research collaborations, industry roles, consulting, and discussions on computational genomics and AI agents.'
              : 'Biyoenformatik araştırma iş birlikleri, endüstri rolleri, danışmanlık ve hesaplamalı genomik ile yapay zeka ajanları üzerine fikir alışverişine açığım.'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {language === 'en' ? 'Direct Email' : 'Doğrudan E-posta'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 break-all mt-0.5">
                  {siteMetadata.email}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-2 border-t border-slate-100 dark:border-slate-900">
              <a
                href={`mailto:${siteMetadata.email}`}
                className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Compose' : 'E-posta Gönder'}</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center space-x-1 px-3 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">
                      {language === 'en' ? 'Copied' : 'Kopyalandı'}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Copy' : 'Kopyala'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location & Metropolitan Region */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-slate-900 text-rose-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {language === 'en' ? 'Location' : 'Konum'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Wiesbaden / Frankfurt Rhine-Main, Germany
                </p>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                  {language === 'en' ? 'Central European Time (UTC+1 / UTC+2)' : 'Orta Avrupa Saati (UTC+1 / UTC+2)'}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-900 flex gap-2">
              <a
                href="cv/Burak_Bulut_Master_CV_EN.pdf"
                download
                className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>CV (EN)</span>
              </a>
              <a
                href="cv/Burak_Bulut_Master_CV_TR.pdf"
                download
                className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>CV (TR)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="max-w-md mx-auto flex items-center justify-center gap-3">
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/50 transition-all text-xs font-semibold shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/50 transition-all text-xs font-semibold shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={siteMetadata.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/50 transition-all text-xs font-semibold shadow-sm"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Scholar</span>
          </a>
        </div>
      </div>
    </section>
  );
}
