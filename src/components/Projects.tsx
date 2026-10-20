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
    if (lower.includes('python')) return <PythonIcon size={14} className="text-stone-500" />;
    if (lower === 'r' || lower.includes('deseq2') || lower.includes('limma')) return <RIcon size={14} className="text-stone-500" />;
    if (lower.includes('docker')) return <DockerIcon size={14} className="text-stone-500" />;
    if (lower.includes('snakemake') || lower.includes('pipeline') || lower.includes('gatk') || lower.includes('slurm')) {
      return <PipelineIcon size={14} className="text-stone-500" />;
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
    <section id="projects" className="py-20 sm:py-24 border-t border-stone-200/90">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-900 font-semibold block">
              03 / {language === 'en' ? 'SOFTWARE & NGS PIPELINES' : 'YAZILIM & NGS BORU HATLARI'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-950">
              {language === 'en' ? 'Open-Source Tools & Workflows' : 'Açık Kaynak Araçlar & İş Akışları'}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-md border border-stone-200/90 bg-stone-100/70">
            {[
              { id: 'all', label: { en: 'All Projects', tr: 'Tüm Projeler' } },
              { id: 'cli', label: { en: 'CLI Tools & Apps', tr: 'CLI Araçları' } },
              { id: 'ai', label: { en: 'AI & Agents', tr: 'Yapay Zeka' } },
              { id: 'pipeline', label: { en: 'Genomics Pipelines', tr: 'Boru Hatları' } },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`font-mono text-xs sm:text-sm px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white text-stone-950 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {tab.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-stone-200/90 rounded-lg p-7 sm:p-8 flex flex-col justify-between transition-colors hover:border-stone-400 shadow-2xs"
            >
              {/* Card Top: Monospace label & link */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-stone-500 font-medium">
                    {getCategoryBadge(project.category)}
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-stone-950 transition-colors inline-flex items-center gap-1 font-mono text-xs font-medium"
                      title="View GitHub Repository"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </a>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl font-medium text-stone-950 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] sm:text-base leading-[1.7] text-stone-700 mt-3 font-sans">
                  {project.description[language]}
                </p>

                {/* Engineering Metric */}
                {project.metrics && (
                  <div className="mt-4 inline-block font-mono text-xs sm:text-sm text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-medium">
                    {project.metrics[language]}
                  </div>
                )}
              </div>

              {/* Card Bottom: Tech Stack */}
              <div className="border-t border-stone-150 pt-5 mt-6 flex flex-wrap items-center gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded bg-stone-100 text-stone-700 border border-stone-200"
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
