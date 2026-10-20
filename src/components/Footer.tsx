'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteMetadata } from '@/data/translations';
import { Dna, Heart } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Name */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Dna className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {siteMetadata.name}
            </span>
            <span>•</span>
            <span>{siteMetadata.location}</span>
          </div>

          {/* Copyright & Stack */}
          <div className="text-center sm:text-right space-y-1">
            <p>
              © {new Date().getFullYear()} {siteMetadata.name}.{' '}
              {language === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              {language === 'en'
                ? 'Engineered with Next.js, TypeScript & Tailwind CSS • Deployed on GitHub Pages'
                : 'Next.js, TypeScript ve Tailwind CSS ile geliştirildi • GitHub Pages üzerinde barındırılmaktadır'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
