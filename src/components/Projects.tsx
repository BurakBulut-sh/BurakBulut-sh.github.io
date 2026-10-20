'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/translations';
import {
  ArrowUpRight,
  ShieldCheck,
  Database,
  Workflow,
  FileCode2,
  Sparkles,
  Cpu,
} from 'lucide-react';
import {
  PythonIcon,
  RIcon,
  DockerIcon,
  PipelineIcon,
} from '@/components/icons/BrandIcons';

export default function Projects() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'cli' | 'ai' | 'pipeline'>('all');

  const otherProjects = projectsData.filter((p) => {
    if (p.id === 'hermes') return false; // Showcased prominently as the lead architecture
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

  const hermesPillars = [
    {
      icon: <ShieldCheck size={16} strokeWidth={1.5} className="text-emerald-800" />,
      title: { en: '100% Private Local LLMs', tr: '100% Gizli Yerel LLM' },
      desc: {
        en: 'Zero cloud data leakage for sensitive cohort genomes. Powered by local Qwen 32B/35B via Ollama & vLLM.',
        tr: 'Hassas kohort verileri için sıfır bulut sızıntısı. Ollama ve vLLM ile yerel Qwen 32B/35B çalıştırır.',
      },
    },
    {
      icon: <Database size={16} strokeWidth={1.5} className="text-emerald-800" />,
      title: { en: 'Holographic Fact Store', tr: 'Holografik Olay Deposu' },
      desc: {
        en: 'Dual-tier state: SQLite atomic fact store for durable domain facts and vector context continuity.',
        tr: 'Çift katmanlı hafıza: Dayanıklı alan bilgileri ve vektörel bağlam sürekliliği için SQLite olay deposu.',
      },
    },
    {
      icon: <Workflow size={16} strokeWidth={1.5} className="text-emerald-800" />,
      title: { en: 'Kanban Queue & Self-Healing', tr: 'Kanban Dağıtımı & Kurtarma' },
      desc: {
        en: 'Asynchronous task daemon that computes ETAs, detects silent tool failures (e.g. GATK hangs), and auto-recovers.',
        tr: 'İşlem süresi (ETA) hesaplayan, sessiz araç çökmelerini yakalayan ve kendini düzelten asenkron servis.',
      },
    },
    {
      icon: <FileCode2 size={16} strokeWidth={1.5} className="text-emerald-800" />,
      title: { en: 'Obsidian Lab Notebook (ELN)', tr: 'Programatik Obsidian ELN' },
      desc: {
        en: 'Programmatically documents all pipeline stages into Obsidian with exact QC tables from raw logs (zero hallucination).',
        tr: 'Tüm aşamaları ham loglardan çıkarılan kesin QC tabloları (halüsinasyonsuz) ile Obsidian kasasına kaydeder.',
      },
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 font-semibold block">
              02 / {language === 'en' ? 'SOFTWARE & NGS PIPELINES' : 'YAZILIM & NGS BORU HATLARI'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950">
              {language === 'en' ? 'Open-Source Tools & Workflows' : 'Açık Kaynak Araçlar & İş Akışları'}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-md border border-stone-200/80 bg-stone-100/50">
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
                    ? 'bg-white text-stone-950 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {tab.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED LEAD ARCHITECTURE: HERMES AI BIO-AGENT */}
        {(filter === 'all' || filter === 'ai') && (
          <div className="mb-8 p-6 sm:p-7 rounded-lg bg-white border border-stone-200/90 shadow-2xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-150 pb-3">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70">
                <Sparkles size={11} className="text-emerald-700" />
                <span>
                  {language === 'en'
                    ? 'FEATURED INNOVATION · AUTONOMOUS AI BIO-AGENT'
                    : 'ÖNE ÇIKAN İNOVASYON · OTONOM YAPAY ZEKA BİYO-AJANI'}
                </span>
              </div>
              <span className="font-mono text-xs text-stone-500">
                {language === 'en' ? 'Local Workstation Hardware' : 'Kurum İçi İş İstasyonu'}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-950 tracking-tight">
                Hermes: Autonomous Bioinformatics AI Agent Framework
              </h3>
              <p className="font-serif italic text-[15px] sm:text-base text-stone-600 leading-relaxed">
                {language === 'en'
                  ? 'An autonomous computational research agent engineered for private, multi-stage NGS pipelines, verifiable telemetry, and programmatic scientific note synthesis using local LLMs.'
                  : 'Yerel LLM’ler kullanarak gizli, çok aşamalı NGS boru hatları, doğrulanabilir telemetri ve programatik bilimsel sentez için geliştirilmiş otonom hesaplamalı araştırma ajanı.'}
              </p>
            </div>

            <p className="text-[14px] leading-relaxed text-stone-700 font-sans">
              {language === 'en'
                ? 'Sensitive research cohort genomes cannot be uploaded to commercial cloud AI APIs due to strict confidentiality standards. Hermes eliminates this barrier by running quantized local open-weight models (Qwen 32B/35B via Ollama/vLLM) directly on on-premise hardware, orchestrating long-horizon GATK4 variant calling and RNA-Seq analysis with verified data integrity.'
                : 'Hassas kohort dizileme verileri kurumsal gizlilik nedeniyle ticari bulut yapay zeka API’lerine aktarılamaz. Hermes, kurum içi donanım üzerinde açık kaynaklı yerel modelleri (Qwen 32B/35B via Ollama/vLLM) çalıştırarak ve doğrulanmış veri bütünlüğü ile uzun soluklu GATK4 varyant analizi ve RNA-Seq iş akışlarını otonom yöneterek bu engeli ortadan kaldırır.'}
            </p>

            {/* 4 Pillars Grid inside Featured Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {hermesPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded bg-stone-50/80 border border-stone-200/80 space-y-1"
                >
                  <div className="flex items-center gap-1.5 font-sans text-xs font-semibold text-stone-900">
                    {pillar.icon}
                    <span>{pillar.title[language]}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pillar.desc[language]}
                  </p>
                </div>
              ))}
            </div>

            {/* Real Milestones Box */}
            <div className="p-3 rounded border border-stone-200/70 bg-stone-50/50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-700">
              <span className="font-semibold text-stone-900">
                {language === 'en' ? 'Verified Campaigns:' : 'Doğrulanmış Başarılar:'}
              </span>
              <span className="text-emerald-900 font-medium">BaP MA (4.58M+ Variants)</span>
              <span className="text-stone-300">·</span>
              <span className="text-emerald-900 font-medium">RNA-Seq (58 Samples, 13,818 Genes)</span>
              <span className="text-stone-300">·</span>
              <span className="text-emerald-900 font-medium">BANE Pipeline (66 Cohort Lines)</span>
            </div>

            {/* Tech Stack Footer */}
            <div className="border-t border-stone-150 pt-3 flex flex-wrap items-center gap-1.5">
              {[
                'Qwen 32B Local LLM',
                'Ollama / vLLM',
                'Holographic Memory',
                'Obsidian ELN API',
                'SQLite Telemetry',
                'GATK4 & SLURM',
                'Python AsyncIO',
              ].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Regular Tools Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {otherProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-stone-200/90 rounded-lg p-6 flex flex-col justify-between transition-colors hover:border-stone-400 shadow-2xs"
            >
              {/* Card Top: Monospace label & link */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 font-medium">
                    {getCategoryBadge(project.category)}
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-stone-900 transition-colors inline-flex items-center gap-1 font-mono text-[11px]"
                      title="View GitHub Repository"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight size={13} strokeWidth={1.5} />
                    </a>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl font-medium text-stone-950 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-relaxed text-stone-600 mt-2 font-sans">
                  {project.description[language]}
                </p>

                {/* Engineering Metric */}
                {project.metrics && (
                  <div className="mt-3.5 inline-block font-mono text-xs text-emerald-800 bg-emerald-50/60 px-2 py-0.5 rounded border border-emerald-200/60 font-medium">
                    {project.metrics[language]}
                  </div>
                )}
              </div>

              {/* Card Bottom: Tech Stack */}
              <div className="border-t border-stone-100 pt-4 mt-5 flex flex-wrap items-center gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded bg-stone-100/70 text-stone-700 border border-stone-200/80"
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
