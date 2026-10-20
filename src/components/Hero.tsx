'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteMetadata } from '@/data/translations';
import { FileText, Mail, ArrowUpRight } from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  ScholarIcon,
} from '@/components/icons/BrandIcons';
import ScientificText from '@/components/common/ScientificText';

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section id="about" className="pt-12 pb-12 sm:pt-16 sm:pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="space-y-6">
          {/* Status line */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-stone-200/90 bg-stone-100/70 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs text-stone-700">
              {language === 'en'
                ? 'Bioinformatics Scientist & Computational Biologist · Wiesbaden, Germany'
                : 'Biyoenformatik Bilimcisi & Hesaplamalı Biyolog · Wiesbaden, Almanya'}
            </span>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-2.5">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-950 leading-tight">
              Burak Bulut, Ph.D.
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-stone-600 leading-relaxed max-w-5xl">
              {language === 'en'
                ? 'Engineering reproducible multi-omics workflows, high-throughput genomic analyses, and autonomous AI-assisted biological systems.'
                : 'Tekrarlanabilir multi-omiks iş akışları, yüksek verimli genomik analizler ve otonom yapay zeka destekli biyolojik sistemler geliştirme.'}
            </p>
          </div>

          {/* Academic Bio Paragraphs - Widened to occupy horizontal space and make page shorter */}
          <div className="space-y-3.5 text-[15px] leading-[1.7] text-stone-600 font-sans max-w-6xl">
            <p>
              <ScientificText>
                {language === 'en'
                  ? 'Bioinformatics Scientist and Computational Biologist (Ph.D.) with 6+ years of specialized experience in genomics, transcriptomics, NGS data analysis, and workflow automation across research environments. Proven track record in designing multi-year computational studies, engineering reproducible bioinformatics pipelines (Snakemake, Docker, SLURM) on Linux/HPC clusters, and leading scientific coordination including DFG grant proposal development.'
                  : 'Genomik, transkriptomik, NGS veri analizi ve iş akışı otomasyonu alanlarında araştırma ortamlarında 6 yılı aşkın uzmanlık deneyimine sahip Biyoenformatik Bilimcisi ve Hesaplamalı Biyolog (Doktora). Çok yıllı hesaplamalı çalışmalar tasarlama, Linux/HPC kümelerinde tekrarlanabilir biyoenformatik boru hatları (Snakemake, Docker, SLURM) geliştirme ve DFG hibe projesi teklif hazırlığı dahil bilimsel koordinasyona liderlik etme konusunda kanıtlanmış başarı geçmişi.'}
              </ScientificText>
            </p>
            <p>
              <ScientificText>
                {language === 'en'
                  ? 'Author of 7 scientific publications (6 peer-reviewed articles, 1 preprint; 4 first-author), combining rigorous wet-lab experimental grounding with computational prototyping in Python and R, local LLM fine-tuning, and autonomous agentic research workflows.'
                  : 'Titiz ıslak laboratuvar deneysel temellerini Python ve R hesaplamalı prototipleme, yerel LLM ince ayarı ve otonom yapay zeka ajan iş akışlarıyla birleştiren 7 bilimsel yayının (6 hakemli makale, 1 ön baskı; 4 birinci isim) yazarı.'}
              </ScientificText>
            </p>
          </div>

          {/* Highlights Ribbon - Full width */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-5 border-y border-stone-200/80 my-6">
            <div className="space-y-1">
              <div className="font-mono text-xl font-semibold text-stone-950">6+ Years</div>
              <div className="font-mono text-xs text-stone-500">
                {language === 'en' ? 'Genomics & NGS Experience' : 'Genomik & NGS Deneyimi'}
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-xl font-semibold text-stone-950">7 Papers</div>
              <div className="font-mono text-xs text-stone-500">
                {language === 'en' ? '6 Peer-Reviewed, 4 First-Author' : '6 Hakemli, 4 Birinci İsim'}
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-xl font-semibold text-stone-950">HPC & Pipelines</div>
              <div className="font-mono text-xs text-stone-500">Snakemake, Docker, SLURM</div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-xl font-semibold text-stone-950">AI in Biology</div>
              <div className="font-mono text-xs text-stone-500">
                {language === 'en' ? 'Hermes Agent & Local LLMs' : 'Hermes Ajanı & Yerel LLM'}
              </div>
            </div>
          </div>

          {/* Actions & Verified Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            {/* CV Download Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="cv/Burak_Bulut_Master_CV_EN.pdf"
                download="Burak_Bulut_Master_CV_EN.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-50 text-sm font-medium transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
              >
                <FileText size={15} strokeWidth={1.5} />
                <span>{language === 'en' ? 'Download CV (EN)' : 'Özgeçmiş İndir (EN)'}</span>
              </a>

              <a
                href="cv/Burak_Bulut_Master_CV_TR.pdf"
                download="Burak_Bulut_Master_CV_TR.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-stone-300 hover:border-stone-400 bg-white text-stone-800 text-sm font-medium transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
              >
                <FileText size={15} strokeWidth={1.5} />
                <span>{language === 'en' ? 'Download CV (TR)' : 'Özgeçmiş İndir (TR)'}</span>
              </a>
            </div>

            {/* Academic & Professional Profiles */}
            <div className="flex items-center gap-2 text-stone-600">
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-stone-200 hover:border-stone-400 hover:text-stone-950 bg-white transition-colors"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={siteMetadata.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-stone-200 hover:border-stone-400 hover:text-stone-950 bg-white transition-colors"
                title="Google Scholar Profile"
                aria-label="Google Scholar"
              >
                <ScholarIcon size={16} />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-stone-200 hover:border-stone-400 hover:text-stone-950 bg-white transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="p-2 rounded-md border border-stone-200 hover:border-stone-400 hover:text-stone-950 bg-white transition-colors"
                title="Email Burak Bulut"
                aria-label="Email"
              >
                <Mail size={16} strokeWidth={1.5} />
              </a>
              <a
                href={siteMetadata.dissertation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-2 rounded-md border border-stone-200 hover:border-stone-400 hover:text-stone-950 bg-white transition-colors whitespace-nowrap"
                title="Ph.D. Dissertation at OpenScience Mainz"
              >
                <span>Ph.D. Thesis</span>
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
