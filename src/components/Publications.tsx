'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { publicationsData } from '@/data/translations';
import {
  BookOpen,
  Search,
  ExternalLink,
  Award,
  FileText,
  Copy,
  Check,
} from 'lucide-react';

export default function Publications() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'journal' | 'preprint' | 'firstAuthor'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPublications = publicationsData.filter((pub) => {
    // Filter match
    if (filter === 'journal' && pub.type !== 'journal') return false;
    if (filter === 'preprint' && pub.type !== 'preprint') return false;
    if (filter === 'firstAuthor' && !pub.isFirstAuthor) return false;

    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const inTitle = pub.title.toLowerCase().includes(q);
      const inJournal = pub.journal.toLowerCase().includes(q);
      const inAuthors = pub.authors.join(' ').toLowerCase().includes(q);
      const inAbstract = pub.abstractSummary
        ? pub.abstractSummary[language].toLowerCase().includes(q)
        : false;
      return inTitle || inJournal || inAuthors || inAbstract;
    }

    return true;
  });

  const copyCitation = (pub: (typeof publicationsData)[0]) => {
    const citation = `${pub.authors.join(', ')} (${pub.year}). ${pub.title}. ${pub.journal}${
      pub.details ? `, ${pub.details}` : ''
    }. DOI: ${pub.doi}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="publications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
            <BookOpen className="w-4 h-4" />
            <span>
              {language === 'en' ? 'Scientific Impact' : 'Bilimsel Etki'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'en'
              ? 'Publications & Preprints'
              : 'Yayınlar & Ön Baskılar'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {language === 'en'
              ? '7 scientific publications across evolutionary genetics, stress transcriptomics, and computational biology (4 first-author).'
              : 'Evrimsel genetik, stres transkriptomiği ve hesaplamalı biyoloji alanlarında 7 bilimsel yayın (4 birinci isim).'}
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="max-w-4xl mx-auto space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {language === 'en' ? 'All (7)' : 'Tümü (7)'}
              </button>
              <button
                onClick={() => setFilter('journal')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === 'journal'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {language === 'en' ? 'Peer-Reviewed (6)' : 'Hakemli Dergi (6)'}
              </button>
              <button
                onClick={() => setFilter('firstAuthor')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === 'firstAuthor'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {language === 'en' ? 'First-Author (4)' : 'Birinci İsim (4)'}
              </button>
              <button
                onClick={() => setFilter('preprint')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === 'preprint'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {language === 'en' ? 'Preprint (1)' : 'Ön Baskı (1)'}
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search publications...' : 'Yayınlarda ara...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-blue-400/50 dark:hover:border-cyan-500/40 transition-all space-y-3"
            >
              {/* Badges and Year */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                    <FileText className="w-3 h-3 text-blue-500" />
                    <span>{pub.journal}</span>
                  </span>

                  {pub.isFirstAuthor && (
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-xs font-semibold bg-blue-50 dark:bg-cyan-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-800/60">
                      <Award className="w-3 h-3" />
                      <span>{language === 'en' ? 'First Author' : 'Birinci İsim'}</span>
                    </span>
                  )}
                </div>

                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {pub.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {pub.title}
              </h3>

              {/* Authors List with Bulut, B. highlighted */}
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pub.authors.map((author, aIdx) => {
                  const isUser =
                    author.includes('Bulut, B.') ||
                    author.includes('Bulut B.') ||
                    author.includes('Bulut');
                  return (
                    <React.Fragment key={aIdx}>
                      {isUser ? (
                        <strong className="text-blue-600 dark:text-cyan-400 font-extrabold underline decoration-blue-500/50 underline-offset-2">
                          {author}
                        </strong>
                      ) : (
                        <span>{author}</span>
                      )}
                      {aIdx < pub.authors.length - 1 && ', '}
                    </React.Fragment>
                  );
                })}
                {pub.details && <span className="text-slate-400"> • {pub.details}</span>}
              </div>

              {/* Abstract Context */}
              {pub.abstractSummary && (
                <p className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800/60 leading-relaxed italic">
                  &ldquo;{pub.abstractSummary[language]}&rdquo;
                </p>
              )}

              {/* Action Buttons: Direct DOI link and Citation Copy */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-900">
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-cyan-400 hover:bg-blue-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <span>DOI: {pub.doi}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => copyCitation(pub)}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                  title="Copy Citation text"
                >
                  {copiedId === pub.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">
                        {language === 'en' ? 'Copied' : 'Kopyalandı'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Cite' : 'Alıntıla'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}

          {filteredPublications.length === 0 && (
            <div className="text-center py-12 text-sm text-slate-500">
              {language === 'en'
                ? 'No publications match your search filter.'
                : 'Arama kriterlerinize uygun yayın bulunamadı.'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
