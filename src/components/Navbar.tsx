'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems, siteMetadata } from '@/data/translations';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-stone-200/90 bg-[#FAF9F5]/90 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto h-full px-6 sm:px-12 flex items-center justify-between">
        {/* Left: Academic Identity */}
        <a
          href="#"
          className="flex items-center space-x-3 group"
          aria-label="Burak Bulut, Ph.D. — Home"
        >
          <span className="font-serif text-xl font-medium tracking-tight text-stone-950 group-hover:text-emerald-900 transition-colors">
            {siteMetadata.name}
          </span>
          <span className="text-stone-300 font-mono text-sm">·</span>
          <span className="font-mono text-xs sm:text-sm text-stone-500 tracking-tight hidden sm:inline">
            {language === 'en' ? 'Bioinformatics' : 'Biyoenformatik'}
          </span>
        </a>

        {/* Right: Navigation Links & Language Switcher */}
        <div className="hidden md:flex items-center space-x-7">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-stone-600 hover:text-stone-950 transition-colors text-sm font-medium tracking-tight"
              >
                {item.label[language]}
              </a>
            ))}
          </nav>

          <span className="h-4 w-px bg-stone-300" aria-hidden="true" />

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="font-mono text-xs sm:text-sm text-stone-600 hover:text-stone-950 transition-colors cursor-pointer px-2 py-1 rounded border border-stone-200 hover:border-stone-400 bg-white shadow-2xs"
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
            className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded bg-stone-900 hover:bg-stone-800 text-stone-50 transition-colors cursor-pointer"
          >
            <FileText size={13} strokeWidth={1.5} />
            <span>{language === 'en' ? 'CV (PDF)' : 'Özgeçmiş'}</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-2.5">
          <button
            onClick={toggleLanguage}
            className="font-mono text-xs px-2.5 py-1 rounded border border-stone-300 text-stone-800 bg-white"
          >
            {language === 'en' ? 'TR' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded border border-stone-300 text-stone-800 bg-white"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FAF9F5] px-6 py-5 space-y-3.5 shadow-md">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-800 hover:text-stone-950 py-1"
            >
              {item.label[language]}
            </a>
          ))}
          <div className="pt-3 border-t border-stone-200 flex gap-2">
            <a
              href="cv/Burak_Bulut_Master_CV_EN.pdf"
              download="Burak_Bulut_Master_CV_EN.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded bg-stone-900 text-stone-50"
            >
              <FileText size={14} strokeWidth={1.5} />
              <span>CV (EN)</span>
            </a>
            <a
              href="cv/Burak_Bulut_Master_CV_TR.pdf"
              download="Burak_Bulut_Master_CV_TR.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded border border-stone-300 text-stone-800 bg-white"
            >
              <FileText size={14} strokeWidth={1.5} />
              <span>CV (TR)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
