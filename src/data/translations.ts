import {
  CompetencyCategory,
  ExperienceItem,
  ProjectItem,
  PublicationItem,
  EducationItem,
} from '@/types';

export const siteMetadata = {
  name: 'Burak Bulut, Ph.D.',
  title: {
    en: 'Bioinformatics Scientist & Computational Biologist',
    tr: 'Biyoenformatik Bilimcisi & Hesaplamalı Biyolog',
  },
  location: 'Wiesbaden, Germany',
  email: 'burak.buluut@outlook.com',
  linkedin: 'https://www.linkedin.com/in/burak-bulut-2765a934a',
  github: 'https://github.com/BurakBulut-sh',
  scholar: 'https://scholar.google.com/citations?user=FEsH8RAAAAAJ&hl=en',
  dissertation: 'https://openscience.ub.uni-mainz.de/items/6da17349-cbd0-445d-aed8-746095f729f1',
};

export const navItems = [
  { id: 'about', label: { en: 'About', tr: 'Hakkımda' } },
  { id: 'experience', label: { en: 'Experience', tr: 'Deneyim' } },
  { id: 'projects', label: { en: 'Projects & AI', tr: 'Projeler & AI' } },
  { id: 'competencies', label: { en: 'Skills', tr: 'Yetkinlikler' } },
  { id: 'publications', label: { en: 'Publications', tr: 'Yayınlar' } },
  { id: 'education', label: { en: 'Education', tr: 'Eğitim' } },
  { id: 'contact', label: { en: 'Contact', tr: 'İletişim' } },
];

export const heroContent = {
  badge: {
    en: 'Bioinformatics Scientist & Computational Biologist',
    tr: 'Biyoenformatik Bilimcisi & Hesaplamalı Biyolog',
  },
  title: 'Burak Bulut, Ph.D.',
  summary: {
    en: 'Bioinformatics Scientist and Computational Biologist (Ph.D.) with 6+ years of experience in genomics, transcriptomics, NGS data analysis, and workflow automation across research environments. Proven track record in designing multi-year studies, engineering reproducible bioinformatics pipelines (Snakemake, Docker, SLURM) on Linux/HPC clusters, and leading scientific coordination including DFG grant proposal development. Author of 7 scientific publications (6 peer-reviewed articles, 1 preprint; 4 first-author), combining strong wet-lab experimental grounding with computational prototyping in Python/R, local LLM fine-tuning, and RAG-enabled analysis workflows.',
    tr: 'Genomik, transkriptomik, NGS veri analizi ve iş akışı otomasyonu alanlarında araştırma ortamlarında 6 yılı aşkın deneyime sahip Biyoenformatik Bilimcisi ve Hesaplamalı Biyolog (Doktora). Çok yıllı çalışmalar tasarlama, Linux/HPC kümelerinde tekrarlanabilir biyoenformatik boru hatları (Snakemake, Docker, SLURM) geliştirme ve DFG hibe projesi teklif hazırlığı dahil olmak üzere bilimsel koordinasyona liderlik etme konusunda kanıtlanmış başarı geçmişi. Güçlü ıslak laboratuvar deneysel temellerini Python/R hesaplamalı prototipleme, yerel LLM ince ayarı ve RAG destekli analiz iş akışlarıyla birleştiren 7 bilimsel yayının (6 hakemli makale, 1 ön baskı; 4 birinci isim) yazarı.',
  },
  stats: [
    { value: '6+', label: { en: 'Years Experience', tr: 'Yıl Deneyim' } },
    { value: '7', label: { en: 'Scientific Publications', tr: 'Bilimsel Yayın' } },
    { value: '4', label: { en: 'First-Author Papers', tr: 'Birinci İsim Makale' } },
    { value: 'HPC', label: { en: 'SLURM & Snakemake', tr: 'SLURM & Snakemake' } },
  ],
  buttons: {
    downloadCvEn: { en: 'Download CV (EN)', tr: 'CV İndir (İngilizce)' },
    downloadCvTr: { en: 'Download CV (TR)', tr: 'CV İndir (Türkçe)' },
    viewProjects: { en: 'View Projects', tr: 'Projeleri İncele' },
    contactMe: { en: 'Get in Touch', tr: 'İletişime Geç' },
  },
};

export const competencyCategories: CompetencyCategory[] = [
  {
    id: 'genomics',
    title: { en: 'NGS & Genomics', tr: 'NGS & Genomik' },
    skills: [
      {
        name: 'Whole-Genome Sequencing (WGS)',
        description: {
          en: 'High-throughput cohort mapping, quality control, and depth coverage optimization.',
          tr: 'Yüksek verimli kohort haritalama, kalite kontrolü ve derinlik kapsama optimizasyonu.',
        },
        tags: ['WGS', 'Illumina', 'FastQC', 'MultiQC'],
        highlight: true,
      },
      {
        name: 'Variant & SNP Discovery',
        description: {
          en: 'GATK4 HaplotypeCaller gVCF pipelines, joint cohort genotyping, and strict hard-filtering.',
          tr: 'GATK4 HaplotypeCaller gVCF boru hatları, ortak kohort genotipleme ve sıkı filtreleme.',
        },
        tags: ['GATK4', 'BWA-MEM', 'Picard', 'SAMtools', 'bcftools'],
        highlight: true,
      },
      {
        name: 'Transcriptomics (RNA-Seq)',
        description: {
          en: 'Splice-aware alignment, featureCounts quantification, and DESeq2/limma differential expression.',
          tr: 'Splicing duyarlı hizalama, featureCounts sayımı ve DESeq2/limma diferansiyel ekspresyonu.',
        },
        tags: ['HISAT2', 'featureCounts', 'DESeq2', 'limma', 'Bioconductor'],
        highlight: true,
      },
      {
        name: 'de novo Mutation Rate Modeling',
        description: {
          en: 'Multi-generational mutation accumulation lines, accuMUlate caller, and Bayesian Poisson rate tests.',
          tr: 'Çok nesilli mutasyon birikim hatları, accuMUlate çağırıcı ve Bayesci Poisson oran testleri.',
        },
        tags: ['accuMUlate', 'Bayesian Statistics', 'Evolutionary Genomics'],
      },
    ],
  },
  {
    id: 'programming',
    title: { en: 'Programming & Pipelines', tr: 'Programlama & Boru Hatları' },
    skills: [
      {
        name: 'Python',
        description: {
          en: 'Scientific computing, data manipulation, CLI tool architecture, and genomic parser engineering.',
          tr: 'Bilimsel hesaplama, veri işleme, CLI araç mimarisi ve genomik ayrıştırıcı geliştirme.',
        },
        tags: ['NumPy', 'Pandas', 'Typer', 'Pydantic', 'PySAM'],
        highlight: true,
      },
      {
        name: 'R & Bioconductor',
        description: {
          en: 'Statistical modeling, differential expression, metaRNASeq, and publication-grade visualizations.',
          tr: 'İstatistiksel modelleme, diferansiyel ifade, metaRNASeq ve yayın kalitesinde görselleştirme.',
        },
        tags: ['tidyverse', 'ggplot2', 'DESeq2', 'biomaRt', 'pathview'],
        highlight: true,
      },
      {
        name: 'Workflow Orchestration',
        description: {
          en: 'Automated, reproducible, and containerized computational pipeline development.',
          tr: 'Otomatikleştirilmiş, tekrarlanabilir ve konteynerize edilmiş hesaplamalı boru hatları.',
        },
        tags: ['Snakemake', 'Nextflow', 'Docker', 'Git', 'CI/CD'],
        highlight: true,
      },
      {
        name: 'Bash / Linux Shell Scripting',
        description: {
          en: 'Robust shell automation, sed/awk parsing, and complex process monitoring wrappers.',
          tr: 'Güçlü kabuk otomasyonu, sed/awk işleme ve karmaşık süreç izleme betikleri.',
        },
        tags: ['Bash', 'Unix/Linux', 'AWK', 'POSIX Shell'],
      },
    ],
  },
  {
    id: 'hpc',
    title: { en: 'HPC & Infrastructure', tr: 'HPC & Altyapı' },
    skills: [
      {
        name: 'SLURM Workload Manager',
        description: {
          en: 'Large-scale job arrays, multi-threaded task management, dependency chains, and resource profiling.',
          tr: 'Büyük ölçekli iş dizileri, çok iş parçacıklı görev yönetimi ve kaynak profil çıkarma.',
        },
        tags: ['SLURM', 'Job Arrays', 'HPC Cluster', 'Resource Allocation'],
        highlight: true,
      },
      {
        name: 'Linux Server Administration',
        description: {
          en: 'Environment modules, high-throughput storage management, and cluster permissions.',
          tr: 'Ortam modülleri, yüksek verimli depolama yönetimi ve küme yetkilendirmesi.',
        },
        tags: ['Ubuntu', 'Debian', 'Storage Optimization', 'Bash'],
      },
      {
        name: 'Containerization & Cloud',
        description: {
          en: 'Reproducible research images, multi-stage Docker builds, and basic cloud provisioning.',
          tr: 'Tekrarlanabilir araştırma imajları, çok aşamalı Docker derlemeleri ve temel bulut yönetimi.',
        },
        tags: ['Docker', 'Docker Compose', 'AWS (Basic)'],
      },
    ],
  },
  {
    id: 'ai',
    title: { en: 'AI & Data Science', tr: 'Yapay Zeka & Veri Bilimi' },
    skills: [
      {
        name: 'AI-Assisted Bioinformatics Prototyping',
        description: {
          en: 'Agentic tool-use loops, QC telemetry reasoning, and automated genomic report synthesis.',
          tr: 'Ajanik araç kullanım döngüleri, kalite kontrol telemetrisi ve otomatik raporlama.',
        },
        tags: ['AI Agents', 'Tool Orchestration', 'LLM Bio Workflows'],
        highlight: true,
      },
      {
        name: 'Local LLMs & Fine-Tuning',
        description: {
          en: 'Running private on-premise models for life sciences data without external leakage.',
          tr: 'Dışa sızıntı olmadan yaşam bilimleri verileri için yerel kurum içi modeller çalıştırma.',
        },
        tags: ['Ollama', 'vLLM', 'HuggingFace', 'Model Quantization'],
      },
      {
        name: 'RAG Systems & Vector Databases',
        description: {
          en: 'Retrieval-Augmented Generation over domain-specific scientific literature and clinical studies.',
          tr: 'Alana özgü bilimsel literatür ve klinik çalışmalar üzerinde RAG mimarileri.',
        },
        tags: ['RAG', 'Vector Embeddings', 'Knowledge Retrieval', 'Prompt Engineering'],
      },
    ],
  },
  {
    id: 'wetlab',
    title: { en: 'Databases & Wet-Lab', tr: 'Veritabanları & Islak Lab' },
    skills: [
      {
        name: 'Bioinformatics Databases & Ontologies',
        description: {
          en: 'NCBI, Ensembl Plants, KEGG Pathways, UniProt, Gene Ontology (GO), and SRA curation.',
          tr: 'NCBI, Ensembl Plants, KEGG Pathways, UniProt, Gene Ontology (GO) ve SRA kürasyonu.',
        },
        tags: ['NCBI', 'Ensembl', 'KEGG', 'UniProt', 'biomaRt'],
      },
      {
        name: 'Molecular Biology & Microscopy',
        description: {
          en: 'DNA/RNA Extraction, PCR, in vivo ROS quantification, and confocal/fluorescence microscopy.',
          tr: 'DNA/RNA ekstraksiyonu, PCR, in vivo ROS ölçümü ve floresan mikroskobi.',
        },
        tags: ['DNA/RNA Extraction', 'in vivo ROS', 'Fluorescence Microscopy', 'PCR'],
      },
    ],
  },
  {
    id: 'languages',
    title: { en: 'Languages', tr: 'Diller' },
    skills: [
      {
        name: 'English',
        description: {
          en: 'Fluent / Full Professional Proficiency in academic writing, presentation, and international collaboration.',
          tr: 'Akademik yazım, sunum ve uluslararası iş birliklerinde tam profesyonel yetkinlik.',
        },
        tags: ['C1/C2', 'Scientific Publications', 'International Research'],
      },
      {
        name: 'Turkish',
        description: {
          en: 'Native speaker.',
          tr: 'Ana dil.',
        },
        tags: ['Native'],
      },
      {
        name: 'German',
        description: {
          en: 'A2 – Basic Working Proficiency.',
          tr: 'A2 – Temel çalışma yetkinliği.',
        },
        tags: ['A2'],
      },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'independent',
    role: {
      en: 'Independent Researcher & AI/Bioinformatics Developer',
      tr: 'Bağımsız Araştırmacı & Yapay Zeka / Biyoenformatik Geliştirici',
    },
    institution: {
      en: 'Independent Research Initiative',
      tr: 'Bağımsız Araştırma İnisiyatifi',
    },
    location: {
      en: 'Wiesbaden / Frankfurt Rhine-Main, Germany',
      tr: 'Wiesbaden / Frankfurt Ren-Main, Almanya',
    },
    period: {
      en: 'Jul 2025 – Present',
      tr: 'Tem 2025 – Günümüz',
    },
    badge: {
      en: 'Current Role',
      tr: 'Mevcut Pozisyon',
    },
    responsibilities: {
      en: [
        {
          title: 'Grant & Scientific Coordination',
          description:
            'Led the end-to-end development of a Deutsche Forschungsgemeinschaft (DFG) research grant proposal, taking primary responsibility for experimental planning, scientific coordination, and technical framing.',
        },
        {
          title: 'AI-Enabled Bioinformatics Prototyping',
          description:
            'Architected prototype agentic and RAG-enabled bioinformatics workflows utilizing local LLM fine-tuning and structured prompt engineering for automated QC reasoning, tool orchestration, and biological interpretation.',
        },
        {
          title: 'Doctoral Completion & Publishing',
          description:
            'Finalized doctoral dissertation and spearheaded multiple first-author and collaborative peer-reviewed publications across evolutionary genomics and stress transcriptomics.',
        },
      ],
      tr: [
        {
          title: 'Hibe & Bilimsel Koordinasyon',
          description:
            'Deneysel planlama, bilimsel koordinasyon ve teknik çerçevenin oluşturulmasında birincil sorumluluğu üstlenerek bir Alman Araştırma Vakfı (DFG) araştırma hibe teklifinin uçtan uca geliştirilmesine liderlik ettim.',
        },
        {
          title: 'Yapay Zeka Destekli Biyoenformatik Prototipleme',
          description:
            'Otomatik kalite kontrol değerlendirmesi, araç orkestrasyonu ve biyolojik veri yorumlaması amacıyla yerel LLM ince ayarı ve yapılandırılmış istem mühendisliği kullanarak prototip ajan ve RAG tabanlı biyoenformatik iş akışları tasarladım.',
        },
        {
          title: 'Doktora Tamamlama & Yayın Faaliyetleri',
          description:
            'Doktora tezimi sonuçlandırdım ve evrimsel genomik ile stres transkriptomiği alanlarında çok sayıda birinci isim ve ortak yazarlı hakemli yayına imza attım.',
        },
      ],
    },
  },
  {
    id: 'senckenberg',
    role: {
      en: 'Computational Biologist | NGS Data Scientist',
      tr: 'Hesaplamalı Biyolog | NGS Veri Bilimcisi',
    },
    institution: {
      en: 'Senckenberg Biodiversity and Climate Research Centre (SBiK-F)',
      tr: 'Senckenberg Biyoçeşitlilik ve İklim Araştırma Merkezi (SBiK-F)',
    },
    location: {
      en: 'Frankfurt am Main, Germany',
      tr: 'Frankfurt am Main, Almanya',
    },
    period: {
      en: 'Jul 2022 – Jul 2025',
      tr: 'Tem 2022 – Tem 2025',
    },
    badge: {
      en: '3 Years',
      tr: '3 Yıl',
    },
    responsibilities: {
      en: [
        {
          title: 'Pipeline Engineering & Automation',
          description:
            'Engineered, automated, and maintained scalable end-to-end WGS and RNA-Seq pipelines using Snakemake, Python, and Bash (integrating BWA-MEM, Picard, SAMtools, GATK, and DESeq2) on Linux/SLURM HPC clusters.',
        },
        {
          title: 'Large-Scale Multi-Omics Analysis',
          description:
            'Processed and analyzed high-throughput genomic and transcriptomic datasets to quantify germline mutation frequencies, characterize cryptic genetic variation, and evaluate transcriptomic responses to environmental stressors.',
        },
        {
          title: 'Experimental & Study Design',
          description:
            'Designed and executed complex, multi-year multigenerational mutation accumulation and ecotoxicological exposure experiments, integrating wet-lab assays (in vivo ROS measurement, fluorescence microscopy) with computational evaluations.',
        },
        {
          title: 'Statistical Modeling & Reporting',
          description:
            'Performed rigorous statistical evaluations and generated publication-grade visualizations and actionable technical reports using R (tidyverse, ggplot2) and Python for interdisciplinary teams.',
        },
        {
          title: 'Teaching & Mentorship',
          description:
            'Taught molecular ecology coursework over 3 academic years, trained researchers in Unix/HPC bioinformatics workflows, and supervised a B.Sc. thesis project to successful completion.',
        },
      ],
      tr: [
        {
          title: 'Boru Hattı Mühendisliği & Otomasyon',
          description:
            'Linux/SLURM HPC kümelerinde Snakemake, Python ve Bash (BWA-MEM, Picard, SAMtools, GATK ve DESeq2 entegrasyonuyla) kullanarak ölçeklenebilir, uçtan uca WGS ve RNA-Seq boru hatları geliştirdim ve otomatiğe bağladım.',
        },
        {
          title: 'Büyük Ölçekli Çoklu-Omik Analizi',
          description:
            'Germline mutasyon sıklıklarını belirlemek, kriptik genetik varyasyonu karakterize etmek ve çevresel stresörlere karşı transkriptomik yanıtları değerlendirmek amacıyla yüksek verimli genomik ve transkriptomik veri setlerini işledim ve analiz ettim.',
        },
        {
          title: 'Deneysel & Çalışma Tasarımı',
          description:
            'Islak laboratuvar tahlillerini (in vivo ROS ölçümü, floresan mikroskobi) hesaplamalı değerlendirmelerle entegre ederek karmaşık, çok yıllı nesiller arası mutasyon birikimi ve ekotoksikolojik maruziyet deneyleri tasarladım ve yürüttüm.',
        },
        {
          title: 'İstatistiksel Modelleme & Raporlama',
          description:
            'Disiplinler arası ekipler için R (tidyverse, ggplot2) ve Python kullanarak titiz istatistiksel değerlendirmeler gerçekleştirdim, yayın kalitesinde görselleştirmeler ve eyleme dönüştürülebilir teknik raporlar ürettim.',
        },
        {
          title: 'Eğitim & Mentorluk',
          description:
            '3 akademik yıl boyunca moleküler ekoloji dersleri verdim, araştırmacılara Unix/HPC biyoenformatik iş akışları konusunda eğitim sağladım ve bir lisans tez projesinin başarıyla tamamlanmasını denetledim.',
        },
      ],
    },
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'samplesheriff',
    title: 'SampleSheriff',
    category: 'cli',
    categoryLabel: {
      en: 'CLI Tools & Apps',
      tr: 'CLI Araçları & Uygulamalar',
    },
    description: {
      en: 'A fast, strict, nf-core–style sample sheet and metadata validator for bioinformatics pipelines. Features streaming parsing, FASTQ pairing checks, BAM/VCF header validation, and rich terminal/JSON diagnostics.',
      tr: 'Biyoenformatik boru hatları için hızlı, katı, nf-core tarzı örnek tablosu ve üstveri doğrulama aracı. Akış tabanlı ayrıştırma, FASTQ eşleşme kontrolleri, BAM/VCF başlık doğrulaması ve zengin terminal/JSON tanıları sunar.',
    },
    techStack: ['Python', 'Typer', 'Pydantic', 'PySAM', 'Rich', 'CI/CD'],
    githubUrl: 'https://github.com/BurakBulut-sh/samplesheriff',
    featured: true,
    metrics: {
      en: '112 Unit Tests • 100% Pass Rate',
      tr: '112 Birim Test • %100 Başarı Oranı',
    },
  },
  {
    id: 'pipewatch',
    title: 'PipeWatch',
    category: 'cli',
    categoryLabel: {
      en: 'CLI Tools & Apps',
      tr: 'CLI Araçları & Uygulamalar',
    },
    description: {
      en: 'Pipeline observability and resource telemetry for SLURM and HPC bioinformatics workflows. Wraps arbitrary Bash commands with zero dependencies, captures peak memory via /usr/bin/time -v, and outputs interactive HTML reports.',
      tr: 'SLURM ve HPC biyoenformatik iş akışları için boru hattı gözlemlenebilirliği ve kaynak telemetrisi. Sıfır bağımlılıkla Bash komutlarını sarmalar, /usr/bin/time -v ile tepe bellek kullanımını kaydeder ve interaktif HTML raporları üretir.',
    },
    techStack: ['Python', 'Bash', 'SLURM', 'HPC', 'Jinja2', 'Click'],
    githubUrl: 'https://github.com/BurakBulut-sh/pipewatch',
    featured: true,
    metrics: {
      en: 'SLURM Telemetry • HTML Dashboards',
      tr: 'SLURM Telemetrisi • HTML Paneller',
    },
  },
  {
    id: 'hermes',
    title: 'Hermes AI Bio-Agent Prototype',
    category: 'ai',
    categoryLabel: {
      en: 'AI & Agents',
      tr: 'Yapay Zeka & Ajanlar',
    },
    description: {
      en: 'Autonomous bioinformatics AI agent framework featuring local LLM reasoning, Kanban dispatch queues, verification evidence SQLite databases, tool invocation, and automated quality control interpretation.',
      tr: 'Yerel LLM akıl yürütme, Kanban görev kuyrukları, SQLite doğrulama kanıt veritabanları, araç çağırma ve otomatik kalite kontrol yorumlaması sunan otonom biyoenformatik yapay zeka ajan mimarisi.',
    },
    techStack: ['Local LLMs', 'RAG', 'Agentic Workflows', 'SQLite', 'Python'],
    featured: true,
    metrics: {
      en: 'Local RAG • QC Verification Evidence DB',
      tr: 'Yerel RAG • QC Doğrulama Kanıt Veritabanı',
    },
  },
  {
    id: 'bioreader',
    title: 'BioReader',
    category: 'cli',
    categoryLabel: {
      en: 'CLI Tools & Apps',
      tr: 'CLI Araçları & Uygulamalar',
    },
    description: {
      en: 'Intelligent desktop scientific literature reader application designed specifically for computational biologists and life scientists. Features inline KaTeX rendering, TipTap rich text, Cytoscape network views, and local SQLite dictionary search.',
      tr: 'Hesaplamalı biyologlar ve yaşam bilimcileri için özel olarak tasarlanmış masaüstü bilimsel makale okuma uygulaması. Satır içi KaTeX formülleri, TipTap zengin metin düzenleme, Cytoscape ağ görünümleri ve yerel SQLite sözlük araması sunar.',
    },
    techStack: ['Electron', 'React', 'Vite', 'Better-SQLite3', 'KaTeX', 'Cytoscape'],
    featured: false,
    metrics: {
      en: 'Cross-platform Electron & React Desktop App',
      tr: 'Çok platformlu Electron & React Masaüstü Uygulaması',
    },
  },
  {
    id: 'snp-analysis',
    title: 'SNP-analysis / WGS Mutation Pipeline',
    category: 'pipeline',
    categoryLabel: {
      en: 'NGS Pipelines',
      tr: 'NGS Boru Hatları',
    },
    description: {
      en: 'High-throughput Whole-Genome Sequencing variant discovery pipeline. Integrates Trimmomatic, PEAR merging, BWA-MEM mapping, Picard deduplication, GATK4 HaplotypeCaller gVCF array, and Bayesian Poisson rate ratio tests in R.',
      tr: 'Yüksek verimli Tüm Genom Dizileme (WGS) varyant keşif boru hattı. Trimmomatic, PEAR birleştirme, BWA-MEM haritalama, Picard deduplikasyonu, GATK4 HaplotypeCaller gVCF dizisi ve R dilinde Bayesci Poisson oran testlerini entegre eder.',
    },
    techStack: ['GATK4', 'BWA-MEM', 'SLURM Array', 'SAMtools', 'R BayesianFirstAid'],
    githubUrl: 'https://github.com/BurakBulut-sh/SNP-analysis',
    featured: true,
    metrics: {
      en: 'Published in Evolution Letters & Molecular Ecology (2026)',
      tr: 'Evolution Letters & Molecular Ecology (2026) Yayınları',
    },
  },
  {
    id: 'transcriptome-study',
    title: 'Transcriptome-Study Pipeline',
    category: 'pipeline',
    categoryLabel: {
      en: 'NGS Pipelines',
      tr: 'NGS Boru Hatları',
    },
    description: {
      en: 'RNA-Seq processing and statistical modeling of oxidative stress across temperature gradients in Chironomus riparius. Includes HISAT2 spliced alignment, featureCounts, DESeq2 prefiltering, and Limma contrast modeling.',
      tr: 'Chironomus riparius modelinde sıcaklık gradyanları boyunca oksidatif stresin RNA-Seq işleme ve istatistiksel modellemesi. HISAT2 hizalaması, featureCounts, DESeq2 ön filtrelemesi ve Limma kontrast modellemesini içerir.',
    },
    techStack: ['RNA-Seq', 'HISAT2', 'DESeq2', 'Limma', 'SLURM', 'R'],
    githubUrl: 'https://github.com/BurakBulut-sh/Transcriptome-Study',
    featured: false,
    metrics: {
      en: 'Published in Ecology & Evolution and Env. Pollution (2025)',
      tr: 'Ecology & Evolution ve Env. Pollution (2025) Yayınları',
    },
  },
  {
    id: 'meta-transcriptome',
    title: 'Meta-Transcriptome-Analysis',
    category: 'pipeline',
    categoryLabel: {
      en: 'NGS Pipelines',
      tr: 'NGS Boru Hatları',
    },
    description: {
      en: 'End-to-end RNA-Seq meta-analysis and KEGG pathway mapping in Beta vulgaris. Implements multi-factor GLM DESeq2, Fisher combined probability tests, biomaRt functional annotations, and Pathview pathway overlays.',
      tr: 'Beta vulgaris türünde uçtan uca RNA-Seq meta-analizi ve KEGG yolak haritalaması. Çok faktörlü GLM DESeq2, Fisher birleşik olasılık testleri, biomaRt fonksiyonel açıklamaları ve Pathview yolak bindirmelerini uygular.',
    },
    techStack: ['R', 'metaRNASeq', 'DESeq2', 'biomaRt', 'Pathview', 'HISAT2'],
    githubUrl: 'https://github.com/BurakBulut-sh/Meta-Transcriptome-Analysis',
    featured: false,
    metrics: {
      en: 'Published in Tropical Plant Biology (2023)',
      tr: 'Tropical Plant Biology (2023) Yayını',
    },
  },
];

export const publicationsData: PublicationItem[] = [
  {
    id: 'pub-1',
    type: 'journal',
    isFirstAuthor: true,
    title:
      'Developmental speed and chronological time exert opposing effects on the spontaneous mutation rate in Chironomus riparius',
    authors: ['Bulut, B.', 'Pfenninger, M.'],
    journal: 'Evolution Letters',
    year: 2026,
    details: '10(3), 283–293',
    doi: '10.1093/evlett/qrag010',
    doiUrl: 'https://doi.org/10.1093/evlett/qrag010',
    abstractSummary: {
      en: 'Demonstrated via multi-generational WGS mutation accumulation lines that developmental acceleration increases spontaneous mutation rates per unit of chronological time while reducing generational mutation burden.',
      tr: 'Çok nesilli WGS mutasyon birikim hatları aracılığıyla gelişimsel hızlanmanın kronolojik zaman birimi başına kendiliğinden oluşan mutasyon oranlarını artırdığını, nesil başına mutasyon yükünü ise azalttığını kanıtladı.',
    },
  },
  {
    id: 'pub-2',
    type: 'journal',
    isFirstAuthor: false,
    title:
      'Divergent Thermal Reaction Norms of the Spontaneous Mutation Rate Among Populations of Chironomus riparius',
    authors: ['Pfenninger, M.', 'Nieto-Blazquez, M. E.', 'Bulut, B.'],
    journal: 'Molecular Ecology',
    year: 2026,
    details: '35(15), e70503',
    doi: '10.1111/mec.70503',
    doiUrl: 'https://doi.org/10.1111/mec.70503',
    abstractSummary: {
      en: 'Uncovered population-specific divergence in thermal reaction norms of spontaneous mutations, showing evolutionary plasticity of germline fidelity across geographic temperature clines.',
      tr: 'Spontan mutasyonların termal reaksiyon normlarında popülasyona özgü farklılaşmayı ortaya çıkararak coğrafi sıcaklık gradyanları boyunca germline sadakatinin evrimsel plastisitesini gösterdi.',
    },
  },
  {
    id: 'pub-3',
    type: 'journal',
    isFirstAuthor: true,
    title:
      'Dissecting Oxidative Stress and Organismic Response to a Temperature Gradient in the Midge Chironomus riparius',
    authors: [
      'Bulut, B.',
      'Geiss, M.',
      'Bernard, M.',
      'Doria, H. B.',
      'Feldmeyer, B.',
      'Pfenninger, M.',
    ],
    journal: 'Ecology and Evolution',
    year: 2025,
    details: '15(12), e72625',
    doi: '10.1002/ece3.72625',
    doiUrl: 'https://doi.org/10.1002/ece3.72625',
    abstractSummary: {
      en: 'Combined in vivo ROS fluorometry with high-throughput RNA-Seq to uncover transcriptional non-linearities and antioxidant regulatory tipping points under heat stress.',
      tr: 'Sıcaklık stresi altında transkriptomik doğrusal olmama durumlarını ve antioksidan düzenleyici kırılma noktalarını ortaya çıkarmak için in vivo ROS florometrisini yüksek verimli RNA-Seq ile birleştirdi.',
    },
  },
  {
    id: 'pub-4',
    type: 'journal',
    isFirstAuthor: false,
    title:
      "Transcriptomics predicts artificial light at night's (ALAN) negative fitness effects and altered gene expression patterns in the midge Chironomus riparius (Diptera: Chironomidae)",
    authors: [
      'Eberhardt, L.',
      'Doria, H. B.',
      'Bulut, B.',
      'Feldmeyer, B.',
      'Pfenninger, M.',
    ],
    journal: 'Environmental Pollution',
    year: 2025,
    details: '369, 125827',
    doi: '10.1016/j.envpol.2025.125827',
    doiUrl: 'https://doi.org/10.1016/j.envpol.2025.125827',
    abstractSummary: {
      en: 'Discovered significant fitness impairments and pervasive circadian gene expression shifts induced by artificial nocturnal illumination using whole-organism RNA-Seq.',
      tr: 'Tüm organizma RNA-Seq yöntemi kullanılarak yapay gece aydınlatmasının neden olduğu belirgin uyum kayıplarını ve yaygın sirkadiyen gen ekspresyonu kaymalarını tespit etti.',
    },
  },
  {
    id: 'pub-5',
    type: 'journal',
    isFirstAuthor: true,
    title:
      'A multigenerational study can detect the evolutionary response to BaP exposure in the non-biting freshwater midge Chironomus riparius',
    authors: [
      'Bulut, B.',
      'Rigano, L.',
      'Doria, H. B.',
      'Gemüth, G.',
      'Pfenninger, M.',
    ],
    journal: 'Chemosphere',
    year: 2024,
    details: '358, 142242',
    doi: '10.1016/j.chemosphere.2024.142242',
    doiUrl: 'https://doi.org/10.1016/j.chemosphere.2024.142242',
    abstractSummary: {
      en: 'Tracked microevolutionary adaptations and genomic selection signatures across chronic multi-generational benzo[a]pyrene (BaP) exposures in aquatic insect populations.',
      tr: 'Sucul böcek popülasyonlarında kronik çok nesilli benzo[a]piren (BaP) maruziyetleri boyunca mikroevrimsel adaptasyonları ve genomik seçilim izlerini izledi.',
    },
  },
  {
    id: 'pub-6',
    type: 'journal',
    isFirstAuthor: true,
    title:
      'Meta Analysis of Sugar Beet (Beta vulgaris L.) Transcriptome Profiles Under Different Biotic and Abiotic Stress Conditions',
    authors: [
      'Bulut, B.',
      'Gürel, S.',
      'Ünüvar, Ö. C.',
      'Gürel, E.',
      'Şahin, Y.',
      'Çabuk, U.',
      'Ünlü, E. S.',
    ],
    journal: 'Tropical Plant Biology',
    year: 2023,
    details: '16(3), 199–207',
    doi: '10.1007/s12042-023-09344-y',
    doiUrl: 'https://doi.org/10.1007/s12042-023-09344-y',
    abstractSummary: {
      en: 'Synthesized independent RNA-Seq datasets to identify a robust core regulatory network of defense genes commonly activated across fungal infection, salt, and drought stress in sugar beet.',
      tr: 'Şeker pancarında mantar enfeksiyonu, tuz ve kuraklık stresi boyunca ortak olarak aktive olan savunma genlerinin çekirdek düzenleyici ağını belirlemek için bağımsız RNA-Seq veri setlerini birleştirdi.',
    },
  },
  {
    id: 'pub-7',
    type: 'preprint',
    isFirstAuthor: false,
    title:
      'Pervasive and dynamic release of Cryptic Genetic Variation in Chironomus riparius: Rethinking adaptation in fluctuating environments',
    authors: [
      'Pfenninger, M.',
      'Nieto-Blazquez, M. E.',
      'Schell, T.',
      'Geiss, M.',
      'Bulut, B.',
      'Eberhardt, L.',
      'Feldmeyer, B.',
    ],
    journal: 'bioRxiv',
    year: 2025,
    details: 'Preprint',
    doi: '10.1101/2025.07.01.661462',
    doiUrl: 'https://doi.org/10.1101/2025.07.01.661462',
    abstractSummary: {
      en: 'Quantified dynamic buffering and sudden unmasking of cryptic genetic variation under rapid climate fluctuations using high-depth cohort sequencing.',
      tr: 'Yüksek derinlikli kohort dizileme ile hızlı iklim dalgalanmaları altında kriptik genetik varyasyonun dinamik tamponlanmasını ve ani salınımını nicelendirdi.',
    },
  },
];

export const educationData: EducationItem[] = [
  {
    degree: {
      en: 'Ph.D. in Molecular Ecology & Bioinformatics',
      tr: 'Moleküler Ekoloji & Biyoenformatik Doktora Derecesi (Ph.D.)',
    },
    field: {
      en: 'Germline Mutation Dynamics & Evolutionary Genomics',
      tr: 'Germline Mutasyon Dinamikleri & Evrimsel Genomik',
    },
    institution: {
      en: 'Johannes Gutenberg University Mainz & Senckenberg Biodiversity and Climate Research Centre (SBiK-F), Germany',
      tr: 'Johannes Gutenberg Üniversitesi Mainz & Senckenberg Biyoçeşitlilik ve İklim Araştırma Merkezi (SBiK-F), Almanya',
    },
    period: '2022 – 2026',
    details: {
      en: 'Dissertation: "Deconstructing the proximate drivers of the germline mutation rate in Chironomus riparius". Focused on multi-generational WGS mutation accumulation lines, high-throughput variant calling, and in vivo reactive oxygen species (ROS) assays.',
      tr: 'Doktora Tezi: "Deconstructing the proximate drivers of the germline mutation rate in Chironomus riparius". Çok nesilli WGS mutasyon birikim hatları, yüksek verimli varyant tespiti ve in vivo reaktif oksijen türleri (ROS) analizlerine odaklandı.',
    },
    link: {
      label: 'OpenScience Mainz Repository',
      url: 'https://openscience.ub.uni-mainz.de/items/6da17349-cbd0-445d-aed8-746095f729f1',
    },
  },
  {
    degree: {
      en: 'M.Sc. in Biology (Specialization: Bioinformatics)',
      tr: 'Biyoloji Yüksek Lisansı (Uzmanlık: Biyoenformatik) (M.Sc.)',
    },
    field: {
      en: 'Computational Transcriptomics & Stress Biology',
      tr: 'Hesaplamalı Transkriptomik & Stres Biyolojisi',
    },
    institution: {
      en: 'Bolu Abant İzzet Baysal University, Turkey',
      tr: 'Bolu Abant İzzet Baysal Üniversitesi, Türkiye',
    },
    period: '2019 – 2022',
    details: {
      en: 'Thesis: "Meta-analysis of RNA-Seq data for sugar beet (Beta vulgaris L.) under biotic and abiotic stresses". Developed automated metaRNASeq workflows and biomaRt functional annotation pipelines.',
      tr: 'Yüksek Lisans Tezi: "Meta-analysis of RNA-Seq data for sugar beet (Beta vulgaris L.) under biotic and abiotic stresses". Otomatik metaRNASeq iş akışları ve biomaRt fonksiyonel açıklama boru hatları geliştirdi.',
    },
  },
  {
    degree: {
      en: 'B.Sc. in Biology',
      tr: 'Biyoloji Lisans Derecesi (B.Sc.)',
    },
    field: {
      en: 'Biological Sciences & Genetics',
      tr: 'Biyolojik Bilimler & Genetik',
    },
    institution: {
      en: 'Bolu Abant İzzet Baysal University, Turkey',
      tr: 'Bolu Abant İzzet Baysal Üniversitesi, Türkiye',
    },
    period: '2015 – 2019',
    details: {
      en: 'Strong curriculum foundation across molecular biology, genetics, biochemistry, and computational methods.',
      tr: 'Moleküler biyoloji, genetik, biyokimya ve hesaplamalı yöntemler alanlarında güçlü müfredat temeli.',
    },
  },
];
