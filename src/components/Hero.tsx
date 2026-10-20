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

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section id="about" className="pt-20 pb-18 sm:pt-24 sm:pb-22">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="space-y-8 max-w-5xl">
          {/* Status line */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-stone-200/90 bg-stone-100/70 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs sm:text-sm text-stone-700 font-medium">
              {language === 'en'
                ? 'Bioinformatics Scientist & Computational Biologist · Wiesbaden, Germany'
                : 'Biyoenformatik Bilimcisi & Hesaplamalı Biyolog · Wiesbaden, Almanya'}
            </span>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-stone-950 leading-[1.08]">
              Burak Bulut, Ph.D.
            </h1>
            <p className="font-serif italic text-2xl sm:text-3xl text-stone-700 leading-snug">
              {language === 'en'
                ? 'Engineering reproducible multi-omics workflows, high-throughput genomic analyses, and autonomous AI-assisted biological systems.'
                : 'Tekrarlanabilir multi-omiks iş akışları, yüksek verimli genomik analizler ve otonom yapay zeka destekli biyolojik sistemler geliştirme.'}
            </p>
          </div>

          {/* Academic Bio Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg leading-[1.8] text-stone-700 font-sans">
            <p>
              {language === 'en'
                ? 'Bioinformatics Scientist and Computational Biologist (Ph.D.) with 6+ years of dedicated research experience in genomics, transcriptomics, NGS data analysis, and workflow automation. Proven track record in orchestrating multi-year computational studies, engineering reproducible bioinformatics pipelines (Snakemake, Docker, SLURM) across Linux/HPC clusters, and leading scientific coordination including DFG grant proposal development.'
                : 'Genomik, transkriptomik, NGS veri analizi ve iş akışı otomasyonu alanlarında 6 yılı aşkın araştırmacı uzmanlığına sahip Biyoenformatik Bilimcisi ve Hesaplamalı Biyolog (Doktora). Çok yıllı hesaplamalı çalışmalar tasarlama, Linux/HPC kümelerinde tekrarlanabilir biyoenformatik boru hatları (Snakemake, Docker, SLURM) geliştirme ve DFG hibe projesi teklif hazırlığı dahil bilimsel koordinasyona liderlik etme konusunda kanıtlanmış başarı geçmişi.'}
            </p>
            <p>
              {language === 'en'
                ? 'Author of 7 scientific publications (6 peer-reviewed articles, 1 preprint; 4 first-author), bridging rigorous wet-lab experimental grounding with computational prototyping in Python/R, private local LLM fine-tuning, and autonomous agentic research workflows.'
                : 'Titiz ıslak laboratuvar deneysel temellerini Python/R hesaplamalı prototipleme, yerel gizli LLM ince ayarı ve otonom yapay zeka ajan iş akışlarıyla birleştiren 7 bilimsel yayının (6 hakemli makale, 1 ön baskı; 4 birinci isim) yazarı.'}
            </p>
          </div>

          {/* Highlights Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-stone-200/90 my-10">
            <div className="space-y-1">
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-stone-950">6+ Years</div>
              <div className="font-mono text-xs sm:text-sm text-stone-600">
                {language === 'en' ? 'Genomics & NGS Experience' : 'Genomik & NGS Deneyimi'}
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-stone-950">7 Papers</div>
              <div className="font-mono text-xs sm:text-sm text-stone-600">
                {language === 'en' ? '6 Peer-Reviewed, 4 First-Author' : '6 Hakemli, 4 Birinci İsim'}
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-stone-950">HPC & Snakemake</div>
              <div className="font-mono text-xs sm:text-sm text-stone-600">SLURM, Docker, Clusters</div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-stone-950">Hermes AI Agent</div>
              <div className="font-mono text-xs sm:text-sm text-stone-600">
                {language === 'en' ? 'Local LLMs & Holographic Memory' : 'Yerel LLM & Holografik Bellek'}
              </div>
            </div>
          </div>

          {/* Actions & Profiles */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">
            {/* CV Download Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="cv/Burak_Bulut_Master_CV_EN.pdf"
                download="Burak_Bulut_Master_CV_EN.pdf"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-50 text-sm font-medium transition-colors cursor-pointer shadow-xs"
              >
                <FileText size={16} strokeWidth={1.5} />
                <span>{language === 'en' ? 'Download CV (EN)' : 'Özgeçmiş İndir (EN)'}</span>
              </a>

              <a
                href="cv/Burak_Bulut_Master_CV_TR.pdf"
                download="Burak_Bulut_Master_CV_TR.pdf"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-md border border-stone-300 hover:border-stone-500 bg-white text-stone-900 text-sm font-medium transition-colors cursor-pointer shadow-2xs"
              >
                <FileText size={16} strokeWidth={1.5} />
                <span>{language === 'en' ? 'Download CV (TR)' : 'Özgeçmiş İndir (TR)'}</span>
              </a>
            </div>

            {/* Academic & Professional Profiles */}
            <div className="flex items-center gap-2.5 text-stone-700">
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-stone-200 hover:border-stone-400 hover:text-stone-950 bg-white transition-colors"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={siteMetadata.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-stone-200 hover:border-stone-400 hover:text-stone-950 bg-white transition-colors"
                title="Google Scholar Profile"
                aria-label="Google Scholar"
              >
                <ScholarIcon size={18} />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-stone-200 hover:border-stone-400 hover:text-stone-950 bg-white transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="p-2.5 rounded-md border border-stone-200 hover:border-stone-400 hover:text-stone-950 bg-white transition-colors"
                title="Email Burak Bulut"
                aria-label="Email"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
              <a
                href={siteMetadata.dissertation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm px-3 py-2.5 rounded-md border border-stone-200 hover:border-stone-400 hover:text-stone-950 bg-white transition-colors"
                title="Ph.D. Dissertation at OpenScience Mainz"
              >
                <span>Ph.D. Thesis</span>
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
