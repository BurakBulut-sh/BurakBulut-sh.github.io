'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems, siteMetadata } from '@/data/translations';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-stone-200/90 bg-[#FAF9F5]/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-14 flex items-center justify-between flex-nowrap">
        {/* Left: Academic Identity - STRICTLY SINGLE LINE */}
        <a
          href="#"
          className="flex items-center gap-2.5 shrink-0 flex-nowrap group whitespace-nowrap"
          aria-label="Burak Bulut, Ph.D. — Home"
        >
          <span className="font-serif text-lg sm:text-[19px] font-medium tracking-tight text-stone-950 group-hover:text-emerald-900 transition-colors whitespace-nowrap">
            {siteMetadata.name}
          </span>
          <span className="hidden md:inline-block font-mono text-[11px] tracking-tight text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200/90 whitespace-nowrap">
            {language === 'en' ? 'Computational Biology' : 'Hesaplamalı Biyoloji'}
          </span>
        </a>

        {/* Right: Navigation Links & Action Controls - STRICTLY SINGLE LINE */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-7 shrink-0 flex-nowrap whitespace-nowrap">
          <nav className="flex items-center space-x-4 xl:space-x-5 text-[13px] font-medium tracking-tight flex-nowrap whitespace-nowrap">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-stone-600 hover:text-stone-950 transition-colors whitespace-nowrap"
              >
                {item.label[language]}
              </a>
            ))}
          </nav>

          <span className="h-3.5 w-px bg-stone-300 shrink-0" aria-hidden="true" />

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="font-mono text-xs text-stone-600 hover:text-stone-950 transition-colors cursor-pointer px-2 py-0.5 rounded border border-stone-200 hover:border-stone-400 bg-white shadow-2xs shrink-0 whitespace-nowrap"
            title={language === 'en' ? 'Türkçe diline geç' : 'Switch to English'}
            aria-label="Toggle language"
          >
            <span className={language === 'en' ? 'font-bold text-stone-950' : 'opacity-60'}>EN</span>
            <span className="mx-1 opacity-40">/</span>
            <span className={language === 'tr' ? 'font-bold text-stone-950' : 'opacity-60'}>TR</span>
          </button>

          {/* CV Direct Download Pill */}
          <a
            href={language === 'en' ? 'cv/Burak_Bulut_Master_CV_EN.pdf' : 'cv/Burak_Bulut_Master_CV_TR.pdf'}
            download={language === 'en' ? 'Burak_Bulut_Master_CV_EN.pdf' : 'Burak_Bulut_Master_CV_TR.pdf'}
            className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded bg-stone-900 hover:bg-stone-800 text-stone-50 transition-colors cursor-pointer shadow-2xs shrink-0 whitespace-nowrap"
          >
            <FileText size={12} strokeWidth={1.5} />
            <span className="whitespace-nowrap">{language === 'en' ? 'CV (PDF)' : 'Özgeçmiş'}</span>
          </a>
        </div>

        {/* Mobile controls (triggers on screens below lg) */}
        <div className="flex lg:hidden items-center space-x-2 shrink-0">
          <button
            onClick={toggleLanguage}
            className="font-mono text-xs px-2 py-1 rounded border border-stone-300 text-stone-800 bg-white shrink-0 whitespace-nowrap"
          >
            {language === 'en' ? 'TR' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded border border-stone-300 text-stone-800 bg-white shrink-0"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#FAF9F5] px-6 py-4 space-y-3 shadow-md">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 hover:text-stone-950 py-1"
            >
              {item.label[language]}
            </a>
          ))}
          <div className="pt-2.5 border-t border-stone-200 flex gap-2">
            <a
              href="cv/Burak_Bulut_Master_CV_EN.pdf"
              download="Burak_Bulut_Master_CV_EN.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-stone-900 text-stone-50 whitespace-nowrap"
            >
              <FileText size={13} strokeWidth={1.5} />
              <span>CV (EN)</span>
            </a>
            <a
              href="cv/Burak_Bulut_Master_CV_TR.pdf"
              download="Burak_Bulut_Master_CV_TR.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border border-stone-300 text-stone-800 bg-white whitespace-nowrap"
            >
              <FileText size={13} strokeWidth={1.5} />
              <span>CV (TR)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
