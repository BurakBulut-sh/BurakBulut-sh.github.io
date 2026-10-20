'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/translations';
import { FolderGit2, ExternalLink, Sparkles, Terminal, Cpu, Dna } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

export default function Projects() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'cli' | 'ai' | 'pipeline'>('all');

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cli':
        return <Terminal className="w-3.5 h-3.5 text-blue-500" />;
      case 'ai':
        return <Cpu className="w-3.5 h-3.5 text-purple-500" />;
      case 'pipeline':
        return <Dna className="w-3.5 h-3.5 text-cyan-500" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
            <FolderGit2 className="w-4 h-4" />
            <span>
              {language === 'en' ? 'Open Source & Research Software' : 'Açık Kaynak & Araştırma Yazılımları'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'en'
              ? 'Featured Projects & Pipelines'
              : 'Öne Çıkan Projeler & Boru Hatları'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {language === 'en'
              ? 'Validated bioinformatics tools, autonomous agent frameworks, and high-throughput genomic pipelines.'
              : 'Test edilmiş biyoenformatik araçları, otonom ajan çerçeveleri ve yüksek verimli genomik boru hatları.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {language === 'en' ? 'All Software (7)' : 'Tüm Yazılımlar (7)'}
          </button>
          <button
            onClick={() => setFilter('cli')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === 'cli'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {language === 'en' ? 'CLI Tools & Apps (3)' : 'CLI Araçları & Uygulamalar (3)'}
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === 'ai'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {language === 'en' ? 'AI & Bio-Agents (1)' : 'Yapay Zeka & Ajanlar (1)'}
          </button>
          <button
            onClick={() => setFilter('pipeline')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === 'pipeline'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {language === 'en' ? 'NGS Pipelines (3)' : 'NGS Boru Hatları (3)'}
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-blue-400/50 dark:hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Category & Featured Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                    {getCategoryIcon(project.category)}
                    <span>{project.categoryLabel[language]}</span>
                  </span>

                  {project.featured && (
                    <span className="inline-flex items-center space-x-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-cyan-950/50 text-blue-600 dark:text-cyan-400 border border-blue-200 dark:border-cyan-800/50">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description[language]}
                </p>

                {/* Performance or Publication Metric */}
                {project.metrics && (
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs font-medium text-blue-700 dark:text-cyan-300">
                    {project.metrics[language]}
                  </div>
                )}
              </div>

              {/* Footer: Tech Stack & Links */}
              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-900 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
