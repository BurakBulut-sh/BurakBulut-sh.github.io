'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { publicationsData } from '@/data/translations';
import { ArrowUpRight, Search } from 'lucide-react';

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
            <span className="font-semibold text-stone-950 underline decoration-emerald-700 underline-offset-4">
              {author}
            </span>
          ) : (
            <span className="text-stone-700">{author}</span>
          )}
          {index < authors.length - 1 && <span className="text-stone-400">, </span>}
        </React.Fragment>
      );
    });
  };

  return (
    <section id="publications" className="py-20 sm:py-24 border-t border-stone-200/90">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-900 font-semibold block">
            05 / {language === 'en' ? 'PUBLICATIONS' : 'YAYINLAR'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-950">
            {language === 'en' ? 'Peer-Reviewed Articles & Preprints' : 'Hakemli Makaleler & Ön Baskılar'}
          </h2>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 mb-12 pb-5 border-b border-stone-200">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: { en: 'All (7)', tr: 'Tümü (7)' } },
              { id: 'journal', label: { en: 'Peer-Reviewed (6)', tr: 'Hakemli (6)' } },
              { id: 'preprint', label: { en: 'Preprints (1)', tr: 'Ön Baskı (1)' } },
              { id: 'firstAuthor', label: { en: 'First-Author (4)', tr: 'Birinci İsim (4)' } },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`font-mono text-xs sm:text-sm px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  filter === tab.id
                    ? 'bg-stone-900 text-stone-50 font-semibold'
                    : 'text-stone-700 hover:text-stone-950 bg-white border border-stone-200 shadow-2xs'
                }`}
              >
                {tab.label[language]}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[260px]">
            <Search
              size={16}
              strokeWidth={1.5}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'en' ? 'Filter by title, journal...' : 'Başlık veya dergi ara...'}
              className="w-full pl-9 pr-3.5 py-2 rounded-md border border-stone-300 bg-white text-xs sm:text-sm font-mono text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Grouped Publication List by Year */}
        <div className="space-y-14">
          {years.length === 0 ? (
            <p className="font-mono text-sm text-stone-500 py-8 text-center">
              {language === 'en' ? 'No publications match your criteria.' : 'Kriterlere uygun yayın bulunamadı.'}
            </p>
          ) : (
            years.map((year) => {
              const pubsInYear = filteredPubs.filter((p) => p.year === year);
              return (
                <div
                  key={year}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
                >
                  {/* Left Column: Year Indicator */}
                  <div className="md:col-span-2">
                    <span className="font-mono text-2xl font-semibold text-stone-400 block sticky top-24">
                      {year}
                    </span>
                  </div>

                  {/* Right Column: Papers in that Year */}
                  <div className="md:col-span-10 divide-y divide-stone-200">
                    {pubsInYear.map((pub) => (
                      <article key={pub.id} className="py-7 first:pt-0 last:pb-0 space-y-3">
                        {/* Title */}
                        <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-950 leading-snug">
                          {pub.title}
                        </h3>

                        {/* Authors & Journal line */}
                        <div className="text-sm sm:text-[15px] leading-relaxed space-y-1.5">
                          <p>{renderAuthorList(pub.authors)}</p>
                          <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                            <span className="font-serif italic text-stone-900 font-medium">
                              {pub.journal}
                            </span>
                            {pub.details && (
                              <span className="font-mono text-xs sm:text-sm text-stone-500">
                                {pub.details}
                              </span>
                            )}
                            {pub.isFirstAuthor && (
                              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                                {language === 'en' ? 'First Author' : 'Birinci İsim'}
                              </span>
                            )}
                            {pub.type === 'preprint' && (
                              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                                Preprint
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Abstract summary */}
                        {pub.abstractSummary && (
                          <p className="text-[15px] sm:text-base leading-[1.75] text-stone-700 font-sans">
                            {pub.abstractSummary[language]}
                          </p>
                        )}

                        {/* DOI Action */}
                        <div className="pt-1.5">
                          <a
                            href={pub.doiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm px-3 py-1.5 rounded border border-stone-300 hover:border-stone-900 text-stone-800 hover:text-stone-950 bg-white transition-colors shadow-2xs"
                            title={`Open DOI: ${pub.doi}`}
                          >
                            <span>DOI: {pub.doi}</span>
                            <ArrowUpRight size={14} strokeWidth={1.5} />
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
