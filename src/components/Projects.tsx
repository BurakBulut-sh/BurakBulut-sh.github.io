'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  toolsProjectsData,
  pipelineProjectsData,
  agentBlueprintNodes,
  agentHeroStory,
} from '@/data/translations';
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  FileCode2,
  Activity,
  Terminal,
  Layers,
  GitBranch,
} from 'lucide-react';
import {
  PythonIcon,
  RIcon,
  DockerIcon,
  PipelineIcon,
} from '@/components/icons/BrandIcons';
import ScientificText from '@/components/common/ScientificText';
import { ProjectItem } from '@/types';

export default function Projects() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'cli' | 'ai' | 'pipeline'>('all');
  const [activeBlueprintNode, setActiveBlueprintNode] = useState<string>('node-2'); // Node 02 default selected!

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

  const selectedNodeData =
    agentBlueprintNodes.find((n) => n.id === activeBlueprintNode) || agentBlueprintNodes[1];

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'node-1':
        return <Activity size={14} className="text-stone-700" />;
      case 'node-2':
        return <FileCode2 size={14} className="text-emerald-800" />;
      case 'node-3':
        return <Cpu size={14} className="text-stone-700" />;
      case 'node-4':
        return <Terminal size={14} className="text-stone-700" />;
      default:
        return <CheckCircle2 size={14} className="text-stone-700" />;
    }
  };

  const renderProjectCard = (project: ProjectItem) => (
    <article
      key={project.id}
      className="p-5 rounded-lg border border-stone-200/90 bg-white hover:border-stone-400 transition-all flex flex-col justify-between shadow-2xs group"
    >
      <div className="space-y-3">
        {/* Header: Category Badge & GitHub/External Link */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-wider text-stone-500 uppercase font-semibold">
            {project.categoryLabel[language]}
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-900 transition-colors p-1"
              aria-label={`${project.title} GitHub repository`}
            >
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-medium text-stone-950 tracking-tight group-hover:text-emerald-900 transition-colors">
          <ScientificText>{project.title}</ScientificText>
        </h3>

        {/* Description */}
        <p className="font-sans text-[13px] leading-relaxed text-stone-600">
          <ScientificText>{project.description[language]}</ScientificText>
        </p>

        {/* Origin Note: Why I Built This */}
        {project.originNote && (
          <div className="border-l-2 border-stone-300 pl-3 py-1 bg-stone-50/50 rounded-r">
            <p className="font-serif italic text-stone-700 text-[12.5px] leading-relaxed">
              <ScientificText>{project.originNote[language]}</ScientificText>
            </p>
          </div>
        )}
      </div>

      {/* Footer: Metrics & Tech Stack */}
      <div className="pt-4 mt-3 border-t border-stone-150 space-y-2.5">
        {project.metrics && (
          <div className="font-mono text-[11px] text-emerald-900 font-medium">
            {project.metrics[language]}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 font-mono text-[10.5px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200/70"
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  return (
    <section id="projects" className="relative border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 border-x border-stone-200/80 relative py-12 sm:py-16">
        {/* Blueprint Grid Crosshairs */}
        <span className="absolute -top-[7px] -left-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>
        <span className="absolute -top-[7px] -right-[5px] text-stone-400 font-mono text-xs select-none leading-none">
          +
        </span>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-800 font-semibold block">
              03 / {language === 'en' ? 'SOFTWARE, AI & PIPELINES' : 'YAZILIM, YAPAY ZEKA & BORU HATLARI'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-stone-950">
              {language === 'en' ? 'Custom Tools, Workflows & Local AI' : 'Özgün Araçlar, İş Akışları & Yerel AI'}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-md border border-stone-200/80 bg-stone-100/60">
            {[
              { id: 'all', label: { en: 'All Systems', tr: 'Tüm Sistemler' } },
              { id: 'cli', label: { en: 'Tools & Apps', tr: 'Araçlar & Uygulamalar' } },
              { id: 'ai', label: { en: 'Applied AI', tr: 'Uygulamalı AI' } },
              { id: 'pipeline', label: { en: 'NGS Pipelines', tr: 'NGS Boru Hatları' } },
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
          <div className="mb-12 p-6 sm:p-7 rounded-lg bg-stone-50/70 border border-stone-200/90 shadow-2xs space-y-5">
            {/* Lead Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/70 pb-3">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70">
                <Sparkles size={11} className="text-emerald-700" />
                <span>
                  {language === 'en'
                    ? 'FEATURED ARCHITECTURE · AUTONOMOUS BIO-AGENT'
                    : 'ÖNE ÇIKAN MİMARİ · OTONOM BİYO-AJAN'}
                </span>
              </div>
              <span className="font-mono text-xs text-stone-500">
                {language === 'en' ? 'Local Model: Qwen 3.6 35B A3B · 16 GB VRAM' : 'Yerel Model: Qwen 3.6 35B A3B · 16 GB VRAM'}
              </span>
            </div>

            {/* Title & Spot */}
            <div className="space-y-1.5">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-950 tracking-tight">
                {language === 'en'
                  ? 'Autonomous LLM-Based Bioinformatics Agent'
                  : 'Otonom LLM Tabanlı Biyoenformatik Ajanı'}
              </h3>
              <p className="font-serif italic text-[14.5px] sm:text-[15px] text-stone-700 leading-relaxed">
                <ScientificText>{agentHeroStory.spot[language]}</ScientificText>
              </p>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-stone-600 font-sans">
              <ScientificText>{agentHeroStory.narrative[language]}</ScientificText>
            </p>

            {/* INTERACTIVE BLUEPRINT SYSTEM SCHEMA (4 NODES) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                  {language === 'en' ? 'Interactive Blueprint Flow (Click a Node):' : 'İnteraktif Sistem Akışı (Aşamaya Tıklayın):'}
                </span>
                <span className="font-mono text-[11px] text-emerald-800 font-medium">
                  {language === 'en' ? 'Selected: Node ' + selectedNodeData.nodeNumber : 'Seçili: Düğüm ' + selectedNodeData.nodeNumber}
                </span>
              </div>

              {/* 4 Clickable Nodes Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                {agentBlueprintNodes.map((node) => {
                  const isSelected = node.id === activeBlueprintNode;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveBlueprintNode(node.id)}
                      className={`text-left p-3 rounded border transition-all cursor-pointer relative ${
                        isSelected
                          ? 'bg-white border-emerald-700 shadow-sm ring-1 ring-emerald-700/30'
                          : 'bg-stone-100/80 border-stone-200/80 hover:bg-white hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`font-mono text-[10px] font-semibold ${
                            isSelected ? 'text-emerald-800' : 'text-stone-500'
                          }`}
                        >
                          Node {node.nodeNumber}
                        </span>
                        {getNodeIcon(node.id)}
                      </div>
                      <div className="font-sans text-xs font-semibold text-stone-900 leading-snug line-clamp-1">
                        {node.title[language]}
                      </div>
                      <div className="font-mono text-[10px] text-stone-500 mt-0.5 line-clamp-1">
                        {node.subtitle[language]}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Takeaway Panel for Selected Node */}
              <div className="p-4 rounded-md border border-stone-200 bg-white shadow-2xs space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70">
                    {selectedNodeData.badge[language]}
                  </span>
                  <span className="font-serif font-medium text-sm text-stone-900">
                    {selectedNodeData.title[language]}: {selectedNodeData.subtitle[language]}
                  </span>
                </div>
                <p className="font-sans text-[13.5px] leading-relaxed text-stone-700">
                  <ScientificText>{selectedNodeData.takeaway[language]}</ScientificText>
                </p>
              </div>
            </div>

            {/* Proof-of-Concept Benchmark & Tech Chips */}
            <div className="border-t border-stone-200/80 pt-3 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-700">
                <span className="font-semibold text-stone-900">
                  {language === 'en' ? 'Proof of Concept:' : 'Kavram Kanıtı:'}
                </span>
                <span className="text-emerald-900 font-medium">
                  {language === 'en'
                    ? 'Raw FASTQ -> Multi-Stage SNP Discovery & GATK4 Benchmark'
                    : 'Ham FASTQ -> Çok Aşamalı SNP Keşfi ve GATK4 Doğrulaması'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  'Local Qwen 3.6 35B A3B',
                  '16GB VRAM',
                  'Skill Files',
                  'Self-Healing CLI',
                  'Zero Data Leakage',
                ].map((chip) => (
                  <span
                    key={chip}
                    className="font-mono text-[10.5px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION GROUP 1: OPEN-SOURCE TOOLS & DESKTOP APPS */}
        {(filter === 'all' || filter === 'cli') && (
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-2 pb-2 border-b border-stone-200/70">
              <Layers size={15} className="text-emerald-800" />
              <h3 className="font-serif text-lg font-medium text-stone-950">
                {language === 'en'
                  ? 'Open-Source Developer Tools & Desktop Applications'
                  : 'Açık Kaynak Geliştirici Araçları & Masaüstü Uygulamaları'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {toolsProjectsData.map(renderProjectCard)}
            </div>
          </div>
        )}

        {/* SECTION GROUP 2: NGS GENOMIC & TRANSCRIPTOMIC PIPELINES */}
        {(filter === 'all' || filter === 'pipeline') && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-stone-200/70">
              <GitBranch size={15} className="text-emerald-800" />
              <h3 className="font-serif text-lg font-medium text-stone-950">
                {language === 'en'
                  ? 'End-to-End NGS Genomic & Transcriptomic Pipelines'
                  : 'Uçtan Uca NGS Genomik & Transkriptomik Boru Hatları'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pipelineProjectsData.map(renderProjectCard)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
