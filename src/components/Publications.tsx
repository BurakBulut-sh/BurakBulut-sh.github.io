'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { publicationsData } from '@/data/translations';
import { ArrowUpRight, Search, FileText } from 'lucide-react';

export default function Publications() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'journal' | 'preprint' | 'firstAuthor'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPubs = publicationsData.filter((pub) => {
    if (filter === 'journal' && pub.type !== 'journal') return false;
    if (filter === 'preprint' && pub.type !== 'preprint') return false;
    if (filter === 'firstAuthor' && !pub.isFirstAuthor) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = pub.title.toLowerCase().includes(q);
      const matchJournal = pub.journal.toLowerCase().includes(q);
      const matchAuthors = pub.authors.some((a) => a.toLowerCase().includes(q));
      if (!matchTitle && !matchJournal && !matchAuthors) return false;
    }

    return true;
  });

  // Group by year descending
  const years = Array.from(new Set(filteredPubs.map((p) => p.year))).sort((a, b) => b - a);

  const renderAuthorList = (authors: string[]) => {
    return authors.map((author, index) => {
      const isMe = author.toLowerCase().includes('bulut');
      return (
        <React.Fragment key={index}>
          {isMe ? (
            <span className="font-semibold text-stone-950 dark:text-stone-100 underline decoration-emerald-600/60 dark:decoration-emerald-400/60 underline-offset-4">
              {author}
            </span>
          ) : (
            <span className="text-stone-600 dark:text-stone-400">{author}</span>
          )}
          {index < authors.length - 1 && <span className="text-stone-400">, </span>}
        </React.Fragment>
      );
    });
  };

  return (
    <section id="publications" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 dark:text-emerald-400">
            04 / {language === 'en' ? 'PUBLICATIONS' : 'YAYINLAR'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950 dark:text-stone-100">
            {language === 'en' ? 'Peer-Reviewed Articles & Preprints' : 'Hakemli Makaleler & Ön Baskılar'}
          </h2>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-stone-200/60 dark:border-stone-800/60">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: { en: 'All (7)', tr: 'Tümü (7)' } },
              { id: 'journal', label: { en: 'Peer-Reviewed (6)', tr: 'Hakemli (6)' } },
              { id: 'preprint', label: { en: 'Preprints (1)', tr: 'Ön Baskı (1)' } },
              { id: 'firstAuthor', label: { en: 'First-Author (4)', tr: 'Birinci İsim (4)' } },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`font-mono text-xs px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filter === tab.id
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-200 bg-stone-100/70 dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800/80'
                }`}
              >
                {tab.label[language]}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[220px]">
            <Search
              size={14}
              strokeWidth={1.5}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'en' ? 'Filter by title, journal...' : 'Başlık veya dergi filtrele...'}
              className="w-full pl-8 pr-3 py-1.5 rounded-md border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-stone-900/80 text-xs font-mono text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 dark:focus:border-stone-600"
            />
          </div>
        </div>

        {/* Grouped Publication List by Year */}
        <div className="space-y-12">
          {years.length === 0 ? (
            <p className="font-mono text-xs text-stone-500 py-8 text-center">
              {language === 'en' ? 'No publications match your criteria.' : 'Kriterlere uygun yayın bulunamadı.'}
            </p>
          ) : (
            years.map((year) => {
              const pubsInYear = filteredPubs.filter((p) => p.year === year);
              return (
                <div
                  key={year}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
                >
                  {/* Left Column: Year Indicator */}
                  <div className="md:col-span-2">
                    <span className="font-mono text-xl font-semibold text-stone-400 dark:text-stone-600 block sticky top-24">
                      {year}
                    </span>
                  </div>

                  {/* Right Column: Papers in that Year */}
                  <div className="md:col-span-10 divide-y divide-stone-200/60 dark:divide-stone-800/60">
                    {pubsInYear.map((pub) => (
                      <article key={pub.id} className="py-5 first:pt-0 last:pb-0 space-y-2.5">
                        {/* Title */}
                        <h3 className="font-serif text-lg font-medium text-stone-950 dark:text-stone-100 leading-snug">
                          {pub.title}
                        </h3>

                        {/* Authors & Journal line */}
                        <div className="text-xs leading-relaxed space-y-1">
                          <p>{renderAuthorList(pub.authors)}</p>
                          <div className="flex flex-wrap items-center gap-2 pt-0.5">
                            <span className="font-serif italic text-stone-800 dark:text-stone-200">
                              {pub.journal}
                            </span>
                            {pub.details && (
                              <span className="font-mono text-stone-500">
                                {pub.details}
                              </span>
                            )}
                            {pub.isFirstAuthor && (
                              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                                {language === 'en' ? 'First Author' : 'Birinci İsim'}
                              </span>
                            )}
                            {pub.type === 'preprint' && (
                              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700">
                                Preprint
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Abstract summary */}
                        {pub.abstractSummary && (
                          <p className="text-[13px] leading-relaxed text-stone-600 dark:text-stone-400 font-sans">
                            {pub.abstractSummary[language]}
                          </p>
                        )}

                        {/* DOI Action */}
                        <div className="pt-1">
                          <a
                            href={pub.doiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded border border-stone-200 dark:border-stone-800 hover:border-stone-900 dark:hover:border-stone-100 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
                            title={`Open DOI: ${pub.doi}`}
                          >
                            <span>DOI: {pub.doi}</span>
                            <ArrowUpRight size={12} strokeWidth={1.5} />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
