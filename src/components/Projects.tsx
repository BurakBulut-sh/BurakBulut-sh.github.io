'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/translations';
import { ArrowUpRight } from 'lucide-react';
import {
  PythonIcon,
  RIcon,
  DockerIcon,
  PipelineIcon,
} from '@/components/icons/BrandIcons';

export default function Projects() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'cli' | 'ai' | 'pipeline'>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const getTechIcon = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes('python')) return <PythonIcon size={12} className="text-stone-500" />;
    if (lower === 'r' || lower.includes('deseq2') || lower.includes('limma')) return <RIcon size={12} className="text-stone-500" />;
    if (lower.includes('docker')) return <DockerIcon size={12} className="text-stone-500" />;
    if (lower.includes('snakemake') || lower.includes('pipeline') || lower.includes('gatk') || lower.includes('slurm')) {
      return <PipelineIcon size={12} className="text-stone-500" />;
    }
    return null;
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'cli':
        return 'CLI TOOL · HPC/SLURM';
      case 'ai':
        return 'AI AGENT · LOCAL RAG';
      case 'pipeline':
        return 'NGS WORKFLOW · HPC';
      default:
        return 'SOFTWARE';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 dark:text-emerald-400">
              02 / {language === 'en' ? 'SOFTWARE & NGS PIPELINES' : 'YAZILIM & NGS BORU HATLARI'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950 dark:text-stone-100">
              {language === 'en' ? 'Open-Source Tools & Workflows' : 'Açık Kaynak Araçlar & İş Akışları'}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-md border border-stone-200/80 dark:border-stone-800/80 bg-stone-100/50 dark:bg-stone-900/50">
            {[
              { id: 'all', label: { en: 'All', tr: 'Tümü' } },
              { id: 'cli', label: { en: 'CLI Tools & Apps', tr: 'CLI Araçları' } },
              { id: 'ai', label: { en: 'AI & Agents', tr: 'Yapay Zeka' } },
              { id: 'pipeline', label: { en: 'Genomics Pipelines', tr: 'Boru Hatları' } },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`font-mono text-xs px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white dark:bg-stone-800 text-stone-950 dark:text-stone-100 shadow-xs font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-200'
                }`}
              >
                {tab.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-[#141413] border border-stone-200/90 dark:border-stone-800/90 rounded-lg p-6 flex flex-col justify-between transition-colors hover:border-stone-400 dark:hover:border-stone-600"
            >
              {/* Card Top: Monospace label & link */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    {getCategoryBadge(project.category)}
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors inline-flex items-center gap-1 font-mono text-[11px]"
                      title="View GitHub Repository"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight size={13} strokeWidth={1.5} />
                    </a>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl font-medium text-stone-950 dark:text-stone-100 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-relaxed text-stone-600 dark:text-stone-400 mt-2 font-sans">
                  {project.description[language]}
                </p>

                {/* Engineering Metric */}
                {project.metrics && (
                  <div className="mt-3.5 inline-block font-mono text-xs text-emerald-800 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/40">
                    {project.metrics[language]}
                  </div>
                )}
              </div>

              {/* Card Bottom: Tech Stack */}
              <div className="border-t border-stone-100 dark:border-stone-800/80 pt-4 mt-5 flex flex-wrap items-center gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded bg-stone-100/70 dark:bg-stone-900/70 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-800/80"
                  >
                    {getTechIcon(tech)}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
