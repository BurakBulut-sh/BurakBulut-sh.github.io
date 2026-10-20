'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/translations';
import {
  ArrowUpRight,
  ShieldCheck,
  Workflow,
  Sparkles,
  Layers,
  TrendingUp,
} from 'lucide-react';
import {
  PythonIcon,
  RIcon,
  DockerIcon,
  PipelineIcon,
} from '@/components/icons/BrandIcons';
import ScientificText from '@/components/common/ScientificText';

export default function Projects() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'cli' | 'ai' | 'pipeline'>('all');

  const otherProjects = projectsData.filter((p) => {
    if (p.id === 'bio-agent' || p.id === 'hermes') return false; // Showcased prominently as the lead architecture
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

  const agentPillars = [
    {
      icon: <ShieldCheck size={16} strokeWidth={1.5} className="text-emerald-800" />,
      title: { en: '16 GB VRAM Local Inference', tr: '16 GB VRAM Kurum İçi Çalıştırma' },
      desc: {
        en: 'Runs a high-parameter open-weights model (Qwen-3.6-35B) locally within a 16 GB GPU budget, ensuring zero cloud data leakage for sensitive cohort genomes.',
        tr: 'Hassas kohort verilerinin buluta sızmasını engellemek için 16 GB GPU bütçesinde yerel açık kaynaklı bir model (Qwen-3.6-35B) çalıştırır.',
      },
    },
    {
      icon: <Layers size={16} strokeWidth={1.5} className="text-emerald-800" />,
      title: { en: 'Modular Skill-Based Workflow', tr: 'Modüler Yetenek Tabanlı Mimari' },
      desc: {
        en: 'A decoupled tool engine where the agent autonomously chains specialized bioinformatics skills (read QC, alignment, variant discovery, expression quantification) based on incoming data.',
        tr: 'Ajanın uzmanlaşmış biyoenformatik yeteneklerini (kalite kontrol, hizalama, varyant keşfi, ekspresyon analizi) dinamik araç çağrılarıyla otonom zincirlediği modüler yapı.',
      },
    },
    {
      icon: <Workflow size={16} strokeWidth={1.5} className="text-emerald-800" />,
      title: { en: 'Raw Genomic Ingestion to Output', tr: 'Ham Veriden Doğrulanmış Çıktıya' },
      desc: {
        en: 'Ingests raw FASTQ files, autonomously plans multi-stage pipelines, validates intermediate data integrity, executes bio-CLIs, and delivers verified biological deliverables.',
        tr: 'Ham FASTQ dosyalarını alır, çok aşamalı iş akışlarını otonom planlar, ara aşama veri bütünlüğünü doğrular ve doğrulanmış biyolojik çıktılar üretir.',
      },
    },
    {
      icon: <TrendingUp size={16} strokeWidth={1.5} className="text-emerald-800" />,
      title: { en: 'Extensibility & Future Scaling', tr: 'Genişletilebilirlik & Gelecek Vizyonu' },
      desc: {
        en: 'While initial benchmarks proved successful on complex SNP calling, the architecture is designed as a generalized foundation ready to scale into multi-agent collaboration and single-cell omics.',
        tr: 'İlk denemeler karmaşık SNP analizinde başarıyla test edilmiş olsa da, mimari gelecekte çoklu-ajan sistemleri ve tek-hücre omiks analizlerine kolayca uyarlanabilecek şekilde tasarlanmıştır.',
      },
    },
  ];

  return (
    <section id="projects" className="py-14 sm:py-18 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-7">
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
              { id: 'all', label: { en: 'All Tools', tr: 'Tüm Araçlar' } },
              { id: 'cli', label: { en: 'CLI Tools & Apps', tr: 'CLI Araçları' } },
              { id: 'ai', label: { en: 'AI & Agents', tr: 'Yapay Zeka' } },
              { id: 'pipeline', label: { en: 'Genomics Pipelines', tr: 'Boru Hatları' } },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`font-mono text-xs px-2.5 py-1 rounded transition-colors cursor-pointer whitespace-nowrap ${
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

        {/* FEATURED LEAD ARCHITECTURE: AUTONOMOUS LLM-BASED BIOINFORMATICS AGENT */}
        {(filter === 'all' || filter === 'ai') && (
          <div className="mb-7 p-6 sm:p-7 rounded-lg bg-white border border-stone-200/90 shadow-2xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-150 pb-2.5">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70">
                <Sparkles size={11} className="text-emerald-700" />
                <span>
                  {language === 'en'
                    ? 'FEATURED ARCHITECTURE · AUTONOMOUS LLM BIO-AGENT'
                    : 'ÖNE ÇIKAN MİMARİ · OTONOM LLM BİYO-AJANI'}
                </span>
              </div>
              <span className="font-mono text-xs text-stone-500">
                {language === 'en' ? 'Local Model: Qwen-3.6-35B · 16 GB VRAM' : 'Yerel Model: Qwen-3.6-35B · 16 GB VRAM'}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-950 tracking-tight">
                {language === 'en'
                  ? 'Autonomous LLM-Based Bioinformatics Agent'
                  : 'Otonom LLM Tabanlı Biyoenformatik Ajanı'}
              </h3>
              <p className="font-serif italic text-[15px] sm:text-base text-stone-600 leading-relaxed">
                <ScientificText>
                  {language === 'en'
                    ? 'An on-premise autonomous agent powered by a local 35B open-weights model on 16 GB VRAM, transforming raw genomic sequencing reads into verified biological outputs through a modular skill-based workflow architecture.'
                    : '16 GB VRAM üzerinde yerel 35B açık modelle çalışan, ham genomik dizileme verilerini modüler bir yetenek tabanlı iş akışı mimarisiyle doğrulanmış biyolojik çıktılara dönüştüren otonom yapay zeka ajanı.'}
                </ScientificText>
              </p>
            </div>

            <p className="text-[14px] leading-relaxed text-stone-700 font-sans">
              <ScientificText>
                {language === 'en'
                  ? 'Modern genomics requires orchestrating complex, multi-stage pipelines while handling sensitive cohort datasets that cannot be uploaded to commercial cloud AI APIs due to strict institutional confidentiality. To solve this, I engineered an autonomous agent running completely on-premise on standard workstation hardware (16 GB VRAM using a quantized Qwen-3.6-35B model). Rather than relying on rigid, pre-scripted pipelines, the agent operates through an extensible skill-based workflow engine: it ingests raw genomic reads (FASTQ), autonomously inspects quality telemetry, dynamically selects and invokes domain-specific bioinformatics tools, performs runtime error recovery, and synthesizes reproducible biological deliverables.'
                  : 'Modern genomik araştırmaları, kurumsal gizlilik nedeniyle ticari bulut yapay zeka API’lerine aktarılamayan hassas kohort verilerini işlerken karmaşık, çok adımlı iş akışlarının orkestrasyonunu gerektirir. Bu sorunu çözmek için standart iş istasyonu donanımında (16 GB VRAM) kuantize edilmiş yüksek parametreli bir model (Qwen-3.6-35B) kullanarak tamamen kurum içi çalışan otonom bir biyoenformatik ajanı geliştirdim. Statik betiklere bağımlı kalmak yerine ajan, yetenek tabanlı bir iş akışı sistemi kullanır: ham dizileme verilerini (FASTQ) alır, kalite kontrol telemetrisini inceler, alana özgü biyoenformatik araçları dinamik olarak seçip çalıştırır, çalışma anı hatalarını giderir ve doğrulanmış biyolojik sonuçlar üretir.'}
              </ScientificText>
            </p>

            {/* 4 Pillars Grid inside Featured Card - Compact 4-column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
              {agentPillars.map((pillar, idx) => (
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

            {/* Proof-of-Concept Benchmark & Scalability Note */}
            <div className="p-3 rounded border border-stone-200/70 bg-stone-50/50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-700">
              <span className="font-semibold text-stone-900">
                {language === 'en' ? 'Proof of Concept & Generalization:' : 'Kavram Kanıtı & Genişletilebilirlik:'}
              </span>
              <span className="text-emerald-900 font-medium">
                {language === 'en'
                  ? 'Initial Benchmark on Raw FASTQ -> Multi-Stage SNP Discovery & GATK4'
                  : 'Ham FASTQ -> Çok Aşamalı SNP Keşfi ve GATK4 Başlangıç Doğrulaması'}
              </span>
              <span className="text-stone-300">·</span>
              <span className="text-stone-600">
                {language === 'en'
                  ? 'Adaptable to Single-Cell, Transcriptomics & Multi-Agent Collaboration'
                  : 'Tek-Hücre, Transkriptomik ve Çoklu Ajan İş Birliklerine Uyarlanabilir'}
              </span>
            </div>

            {/* Tech Stack Footer */}
            <div className="border-t border-stone-150 pt-3 flex flex-wrap items-center gap-1.5">
              {[
                'Local Qwen-3.6-35B',
                '16 GB VRAM Optimization',
                'Skill-Based Workflow Architecture',
                'Raw Genomic Ingestion (FASTQ/BAM)',
                'Autonomous Tool Chaining',
                'Runtime Error Recovery',
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

        {/* Regular Tools Bento Grid - 3 Columns on large screens to make site shorter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-stone-200/90 rounded-lg p-5 sm:p-6 flex flex-col justify-between transition-colors hover:border-stone-400 shadow-2xs"
            >
              {/* Card Top: Monospace label & link */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 font-medium">
                    {getCategoryBadge(project.category)}
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-stone-950 transition-colors inline-flex items-center gap-1 font-mono text-[11px]"
                      title="View GitHub Repository"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight size={13} strokeWidth={1.5} />
                    </a>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-lg font-medium text-stone-950 tracking-tight">
                  <ScientificText>{project.title}</ScientificText>
                </h3>

                {/* Description */}
                <p className="text-[13.5px] leading-relaxed text-stone-600 mt-2 font-sans">
                  <ScientificText>{project.description[language]}</ScientificText>
                </p>

                {/* Engineering Metric */}
                {project.metrics && (
                  <div className="mt-3 inline-block font-mono text-xs text-emerald-800 bg-emerald-50/60 px-2 py-0.5 rounded border border-emerald-200/60 font-medium">
                    <ScientificText>{project.metrics[language]}</ScientificText>
                  </div>
                )}
              </div>

              {/* Card Bottom: Tech Stack */}
              <div className="border-t border-stone-100 pt-3.5 mt-4 flex flex-wrap items-center gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 font-mono text-[10.5px] px-2 py-0.5 rounded bg-stone-100/70 text-stone-700 border border-stone-200/80"
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
