'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { navItems, siteMetadata } from '@/data/translations';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-stone-200/80 dark:border-stone-800/80 bg-[#FAF9F5]/90 dark:bg-[#0C0C0B]/90 backdrop-blur-md transition-colors">
      <div className="max-w-5xl mx-auto h-full px-6 sm:px-10 flex items-center justify-between">
        {/* Left: Academic Identity */}
        <a
          href="#"
          className="flex items-center space-x-2.5 group"
          aria-label="Burak Bulut, Ph.D. — Home"
        >
          <span className="font-serif text-lg font-medium tracking-tight text-stone-950 dark:text-stone-100 group-hover:text-emerald-900 dark:group-hover:text-emerald-400 transition-colors">
            {siteMetadata.name}
          </span>
          <span className="text-stone-300 dark:text-stone-700 font-mono text-xs">·</span>
          <span className="font-mono text-xs text-stone-500 tracking-tight hidden sm:inline">
            {language === 'en' ? 'Bioinformatics' : 'Biyoenformatik'}
          </span>
        </a>

        {/* Right: Navigation & Action Controls */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-5 text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 transition-colors text-[13px] font-medium"
              >
                {item.label[language]}
              </a>
            ))}
          </nav>

          <span className="h-3.5 w-px bg-stone-300 dark:bg-stone-700" aria-hidden="true" />

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="font-mono text-xs text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 transition-colors cursor-pointer px-1 py-0.5 rounded"
            title={language === 'en' ? 'Switch to Türkçe' : 'Switch to English'}
            aria-label="Toggle language"
          >
            <span className={language === 'en' ? 'font-bold text-stone-950 dark:text-stone-100' : 'opacity-60'}>EN</span>
            <span className="mx-1 opacity-40">/</span>
            <span className={language === 'tr' ? 'font-bold text-stone-950 dark:text-stone-100' : 'opacity-60'}>TR</span>
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors cursor-pointer"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun size={16} strokeWidth={1.5} />
            ) : (
              <Moon size={16} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="font-mono text-xs px-2 py-1 rounded border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300"
          >
            {language === 'en' ? 'TR' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 dark:border-stone-800 bg-[#FAF9F5] dark:bg-[#0C0C0B] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-100 py-1"
            >
              {item.label[language]}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex gap-2">
            <a
              href="cv/Burak_Bulut_Master_CV_EN.pdf"
              download="Burak_Bulut_Master_CV_EN.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900"
            >
              <FileText size={13} strokeWidth={1.5} />
              <span>CV (EN)</span>
            </a>
            <a
              href="cv/Burak_Bulut_Master_CV_TR.pdf"
              download="Burak_Bulut_Master_CV_TR.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300"
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
