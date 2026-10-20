'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { navItems, siteMetadata } from '@/data/translations';
import { Dna, Sun, Moon, Globe, Menu, X, FileDown } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-md shadow-slate-200/50 dark:shadow-slate-950/50 border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="flex items-center space-x-2.5 group"
            aria-label="Burak Bulut Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
              <Dna className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight block">
                {siteMetadata.name}
              </span>
              <span className="text-xs font-medium text-blue-600 dark:text-cyan-400 block -mt-0.5">
                {language === 'en' ? 'Computational Biologist' : 'Hesaplamalı Biyolog'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-colors"
              >
                {item.label[language]}
              </a>
            ))}
          </div>

          {/* Controls: Language Switcher, Theme Toggle, CV Button */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
              title={language === 'en' ? 'Türkçe diline geç' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'TR' : 'EN'}</span>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
              aria-label="Toggle Dark/Light Mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
            </button>

            {/* CV Download Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm hover:shadow-md hover:from-blue-500 hover:to-cyan-500 transition-all cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'CV PDF' : 'Özgeçmiş'}</span>
              </button>

              {cvDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setCvDropdownOpen(false)}
                >
                  <a
                    href="cv/Burak_Bulut_Master_CV_EN.pdf"
                    download="Burak_Bulut_CV_EN.pdf"
                    className="block px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400"
                    onClick={() => setCvDropdownOpen(false)}
                  >
                    📄 English Master CV (PDF)
                  </a>
                  <a
                    href="cv/Burak_Bulut_Master_CV_TR.pdf"
                    download="Burak_Bulut_CV_TR.pdf"
                    className="block px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400"
                    onClick={() => setCvDropdownOpen(false)}
                  >
                    📄 Türkçe Master CV (PDF)
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              {language === 'en' ? 'TR' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-cyan-400"
            >
              {item.label[language]}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-2">
            <a
              href="cv/Burak_Bulut_Master_CV_EN.pdf"
              download
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-lg text-sm font-semibold bg-blue-600 text-white"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (English PDF)</span>
            </a>
            <a
              href="cv/Burak_Bulut_Master_CV_TR.pdf"
              download
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-lg text-sm font-semibold bg-slate-800 text-white"
            >
              <FileDown className="w-4 h-4" />
              <span>Özgeçmiş İndir (Türkçe PDF)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
