'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="relative border-t border-stone-200/80 bg-[#FAF9F5]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 border-x border-stone-200/80 relative py-8">
        {/* Blueprint Grid Crosshairs */}
        <span className="absolute -top-[7px] -left-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>
        <span className="absolute -top-[7px] -right-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>© 2026 Burak Bulut, Ph.D.</div>
          <div className="text-stone-400">Wiesbaden, DE — Istanbul, TR</div>
          <div className="text-stone-600 font-serif italic text-[13px]">
            {language === 'en'
              ? 'Built from scratch with clarity & purpose.'
              : 'Netlik ve amaç odaklı olarak sıfırdan inşa edildi.'}
          </div>
        </div>
      </div>
    </footer>
  );
}
