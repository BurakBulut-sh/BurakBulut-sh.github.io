'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { publicationsData } from '@/data/translations';
import { ArrowUpRight, Search } from 'lucide-react';
import ScientificText from '@/components/common/ScientificText';

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
            <span className="font-semibold text-stone-950 underline decoration-emerald-600/60 underline-offset-4">
              {author}
            </span>
          ) : (
            <span className="text-stone-600">{author}</span>
          )}
          {index < authors.length - 1 && <span className="text-stone-400">, </span>}
        </React.Fragment>
      );
    });
  };

  return (
    <section id="publications" className="py-14 sm:py-18 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="space-y-1 mb-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 font-semibold block">
            04 / {language === 'en' ? 'PUBLICATIONS' : 'YAYINLAR'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950">
            {language === 'en' ? 'Peer-Reviewed Articles & Preprints' : 'Hakemli Makaleler & Ön Baskılar'}
          </h2>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200/60">
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
                className={`font-mono text-xs px-2.5 py-1 rounded transition-colors cursor-pointer whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-stone-900 text-stone-50 font-semibold'
                    : 'text-stone-600 hover:text-stone-950 bg-stone-100/70 border border-stone-200/80'
                }`}
              >
                {tab.label[language]}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
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
              className="w-full pl-8 pr-3 py-1.5 rounded-md border border-stone-200/90 bg-white text-xs font-mono text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 shadow-2xs"
            />
          </div>
        </div>

        {/* Grouped Publication List by Year */}
        <div className="space-y-10">
          {years.length === 0 ? (
            <p className="font-mono text-xs text-stone-500 py-6 text-center">
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
                  <div className="md:col-span-2 lg:col-span-1">
                    <span className="font-mono text-xl font-semibold text-stone-400 block sticky top-24">
                      {year}
                    </span>
                  </div>

                  {/* Right Column: Papers in that Year (Spanning wider to take fewer lines) */}
                  <div className="md:col-span-10 lg:col-span-11 divide-y divide-stone-200/60">
                    {pubsInYear.map((pub) => (
                      <article key={pub.id} className="py-5 first:pt-0 last:pb-0 space-y-2">
                        {/* Title with Species in Italics */}
                        <h3 className="font-serif text-lg font-medium text-stone-950 leading-snug">
                          <ScientificText>{pub.title}</ScientificText>
                        </h3>

                        {/* Authors & Journal line */}
                        <div className="text-xs leading-relaxed space-y-1">
                          <p>{renderAuthorList(pub.authors)}</p>
                          <div className="flex flex-wrap items-center gap-2 pt-0.5">
                            <span className="font-serif italic text-stone-800">
                              {pub.journal}
                            </span>
                            {pub.details && (
                              <span className="font-mono text-stone-500">
                                {pub.details}
                              </span>
                            )}
                            {pub.isFirstAuthor && (
                              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                                {language === 'en' ? 'First Author' : 'Birinci İsim'}
                              </span>
                            )}
                            {pub.type === 'preprint' && (
                              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                                Preprint
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Abstract summary with Scientific Italics */}
                        {pub.abstractSummary && (
                          <p className="text-[13px] leading-relaxed text-stone-600 font-sans">
                            <ScientificText>{pub.abstractSummary[language]}</ScientificText>
                          </p>
                        )}

                        {/* DOI Action */}
                        <div className="pt-0.5">
                          <a
                            href={pub.doiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded border border-stone-200 hover:border-stone-900 text-stone-700 hover:text-stone-950 bg-white transition-colors shadow-2xs whitespace-nowrap"
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
