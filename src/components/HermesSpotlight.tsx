'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Cpu,
  Database,
  FileCode2,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { PythonIcon, LinuxIcon, PipelineIcon } from '@/components/icons/BrandIcons';

export default function HermesSpotlight() {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: <ShieldCheck size={20} strokeWidth={1.5} className="text-emerald-800" />,
      tag: 'CONFIDENTIALITY & LOCAL INFERENCE',
      title: {
        en: '100% Private Local LLM Engine',
        tr: '100% Gizli Yerel LLM Çıkarım Motoru',
      },
      description: {
        en: 'Eliminates cloud data leakage for sensitive cohort genomics by running high-parameter local models (Qwen 32B/35B) via Ollama and vLLM on on-premise workstation hardware.',
        tr: 'Hassas kohort genomik verilerinin buluta sızmasını tamamen engellemek amacıyla kurum içi iş istasyonlarında Ollama ve vLLM üzerinden yüksek parametreli yerel modeller (Qwen 32B/35B) çalıştırır.',
      },
    },
    {
      icon: <Database size={20} strokeWidth={1.5} className="text-emerald-800" />,
      tag: 'PERSISTENCE ARCHITECTURE',
      title: {
        en: 'Holographic Memory & Fact Store',
        tr: 'Holografik Bellek & Olay Veritabanı',
      },
      description: {
        en: 'Implements dual-tier persistent state: an atomic SQLite fact store for durable domain facts and pipeline checkpoints, combined with vector retrieval for long-horizon task continuity.',
        tr: 'Kalıcı durum yönetimi için çift katmanlı mimari: Dayanıklı alan bilgileri ve boru hattı kontrol noktaları için atomik SQLite olay deposu ve uzun soluklu görev sürekliliği için vektör geri çağırma.',
      },
    },
    {
      icon: <Workflow size={20} strokeWidth={1.5} className="text-emerald-800" />,
      tag: 'AUTONOMOUS EXECUTION & HEALING',
      title: {
        en: 'Kanban Dispatch & Crash Recovery',
        tr: 'Kanban Görev Dağıtımı & Hata Kurtarma',
      },
      description: {
        en: 'Asynchronous process manager that computes computational ETAs, detects silent tool failures (e.g. GATK ApplyBQSR hangs), validates file integrity, and self-heals or alerts without spamming.',
        tr: 'İşlem sürelerini (ETA) hesaplayan, sessiz araç çökmelerini (örn. GATK ApplyBQSR kilitlenmeleri) yakalayan, dosya bütünlüğünü doğrulayan ve kullanıcıyı boğmadan kendi kendini düzelten asenkron süreç yöneticisi.',
      },
    },
    {
      icon: <FileCode2 size={20} strokeWidth={1.5} className="text-emerald-800" />,
      tag: 'SCIENTIFIC SYNTHESIS',
      title: {
        en: 'Programmatic Obsidian Lab Notebook (ELN)',
        tr: 'Programatik Obsidian Laboratuvar Defteri',
      },
      description: {
        en: 'Autonomously documents every single pipeline stage into an Obsidian Electronic Lab Notebook with objectives, exact QC metric tables from raw logs (no hallucination), and cross-linked wikilinks.',
        tr: 'Her boru hattı aşamasını hedefler, ham loglardan çıkarılan kesin kalite kontrol metrik tabloları (halüsinasyonsuz) ve çift yönlü wikilink bağlantılarıyla otomatik olarak Obsidian elektronik laboratuvar defterine kaydeder.',
      },
    },
  ];

  const milestones = [
    {
      metric: '4.58M+ Variants',
      label: {
        en: 'BaP Mutation Accumulation (PRJEB89420)',
        tr: 'BaP Mutasyon Birikim Hattı (PRJEB89420)',
      },
      desc: {
        en: '13-stage GATK4 variant discovery and accuMUlate mutation rate modeling.',
        tr: '13 aşamalı GATK4 varyant keşfi ve accuMUlate mutasyon oranı modellemesi.',
      },
    },
    {
      metric: '58 Samples',
      label: {
        en: 'Temperature RNA-Seq Gradient (PRJEB89193)',
        tr: 'Sıcaklık RNA-Seq Gradyanı (PRJEB89193)',
      },
      desc: {
        en: 'HISAT2, featureCounts, DESeq2 and limma modeling over 13,818 genes.',
        tr: '13.818 gen üzerinde HISAT2, featureCounts, DESeq2 ve limma modellemesi.',
      },
    },
    {
      metric: '66 Cohort Lines',
      label: {
        en: 'BANE Pipeline GT_analysis',
        tr: 'BANE Boru Hattı GT_analysis',
      },
      desc: {
        en: '42-stage GATK4 best-practices pipeline with two-pass deduplication.',
        tr: 'Çift geçişli deduplikasyon ile 42 aşamalı GATK4 en iyi uygulama boru hattı.',
      },
    },
    {
      metric: 'Zero Hallucination',
      label: {
        en: 'Log-Grounded Telemetry',
        tr: 'Log Tabanlı Telemetri',
      },
      desc: {
        en: 'Verification evidence DB storing exact read counts, Ti/Tv ratios, and depths.',
        tr: 'Kesin okuma sayıları, Ti/Tv oranları ve derinlikleri saklayan doğrulama veritabanı.',
      },
    },
  ];

  return (
    <section id="hermes" className="py-20 sm:py-24 border-t border-stone-200/90 bg-[#F5F3EC]/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 font-mono text-xs uppercase tracking-wider">
            <Sparkles size={13} className="text-emerald-700" />
            <span>
              {language === 'en'
                ? '01 / PREMIER INNOVATION · AUTONOMOUS AI BIO-AGENT'
                : '01 / ÖNE ÇIKAN İNOVASYON · OTONOM YAPAY ZEKA BİYO-AJANI'}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-950">
            Hermes: Autonomous Bioinformatics AI Agent Framework
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-stone-700 max-w-4xl leading-relaxed">
            {language === 'en'
              ? 'An autonomous computational research agent engineered for private, multi-stage NGS pipelines, verifiable telemetry, and programmatic scientific note synthesis using local LLMs.'
              : 'Yerel LLM’ler kullanarak gizli, çok aşamalı NGS boru hatları, doğrulanabilir telemetri ve programatik bilimsel sentez için geliştirilmiş otonom hesaplamalı araştırma ajanı.'}
          </p>
        </div>

        {/* Narrative Motivation */}
        <div className="p-6 sm:p-8 rounded-lg bg-white border border-stone-200/90 shadow-2xs mb-10 space-y-4 text-base sm:text-[17px] leading-[1.8] text-stone-700 font-sans">
          <p>
            {language === 'en' ? (
              <>
                High-throughput genomics and transcriptomics pipelines (such as <strong>WGS variant discovery with GATK4</strong> and <strong>RNA-Seq differential expression</strong>) require days of cluster execution, strict quality thresholds, and complex troubleshooting. Crucially, <strong>sensitive research cohort sequencing data cannot be uploaded to commercial cloud AI APIs</strong> due to strict confidentiality and privacy standards.
              </>
            ) : (
              <>
                Yüksek verimli genomik ve transkriptomik boru hatları (örneğin <strong>GATK4 ile WGS varyant keşfi</strong> ve <strong>RNA-Seq diferansiyel ekspresyonu</strong>), günlerce süren küme çalıştırmaları, katı kalite eşikleri ve karmaşık hata ayıklama gerektirir. En önemlisi, <strong>hassas kohort dizileme verileri kurumsal gizlilik nedeniyle ticari bulut yapay zeka API’lerine aktarılamaz</strong>.
              </>
            )}
          </p>
          <p>
            {language === 'en' ? (
              <>
                To solve this, I designed and deployed <strong>Hermes</strong>: an end-to-end autonomous agent running directly on high-performance local hardware. Hermes pairs a <strong>quantized local LLM (Qwen 32B/35B)</strong> with a <strong>two-tier holographic memory store</strong>, a <strong>Kanban dispatch daemon</strong>, and an automated <strong>Obsidian Electronic Lab Notebook (ELN) generator</strong> that extracts exact metrics directly from pipeline logs rather than hallucinating.
              </>
            ) : (
              <>
                Bu sorunu çözmek için doğrudan yüksek performanslı yerel donanım üzerinde çalışan <strong>Hermes</strong> sistemini tasarladım ve hayata geçirdim. Hermes; <strong>yerel bir açık kaynaklı LLM’i (Qwen 32B/35B)</strong>, <strong>çift katmanlı holografik bellek deposunu</strong>, bir <strong>Kanban görev dağıtım servisini</strong> ve halüsinasyon görmek yerine doğrudan ham loglardan kesin metrikleri çıkaran otomatik bir <strong>Obsidian Elektronik Laboratuvar Defteri (ELN)</strong> motorunu bir araya getirir.
              </>
            )}
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-white border border-stone-200/90 shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded bg-stone-100 border border-stone-200">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-stone-950">
                  {pillar.title[language]}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-stone-600 font-sans">
                  {pillar.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Biological Milestones Executed by Hermes */}
        <div className="space-y-4 mb-10">
          <h4 className="font-mono text-xs uppercase tracking-wider text-stone-500 font-semibold">
            {language === 'en'
              ? 'Real Multi-Omics Research Executed Autonomously by Hermes'
              : 'Hermes Tarafından Otonom Olarak Yürütülen Gerçek Biyolojik Analizler'}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-white border border-stone-200/90 space-y-1.5 shadow-2xs"
              >
                <div className="font-mono text-xl font-semibold text-emerald-900">
                  {m.metric}
                </div>
                <div className="font-sans text-xs font-semibold text-stone-900 leading-snug">
                  {m.label[language]}
                </div>
                <div className="font-sans text-xs text-stone-600 leading-relaxed">
                  {m.desc[language]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Bar */}
        <div className="p-4 rounded-lg bg-white border border-stone-200/90 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-700">
          <span className="font-semibold text-stone-950">
            {language === 'en' ? 'Core Architecture Stack:' : 'Temel Mimari Teknolojileri:'}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Qwen 32B/35B Local LLM',
              'Ollama & vLLM',
              'Holographic Memory (fact_store)',
              'SQLite Telemetry DB',
              'Kanban Task Dispatcher',
              'Obsidian ELN Integration',
              'GATK4 & SLURM Pipelines',
              'Python AsyncIO',
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-stone-100 border border-stone-200 text-stone-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
