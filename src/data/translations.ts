import {
  CompetencyCategory,
  ExperienceItem,
  ProjectItem,
  PublicationItem,
  EducationItem,
  MentalModelContent,
  AgentBlueprintNode,
} from '@/types';

export const siteMetadata = {
  name: 'Burak Bulut, Ph.D.',
  title: {
    en: 'Computational Scientist · Systems & Applied AI Builder',
    tr: 'Hesaplamalı Bilim İnsanı · Sistem & Uygulamalı Yapay Zeka Geliştirici',
  },
  location: 'Wiesbaden, Germany · Istanbul, Türkiye',
  email: 'burak.buluut@outlook.com',
  linkedin: 'https://www.linkedin.com/in/burak-bulut-2765a934a',
  github: 'https://github.com/BurakBulut-sh',
  scholar: 'https://scholar.google.com/citations?user=FEsH8RAAAAAJ&hl=en',
  dissertation: 'https://openscience.ub.uni-mainz.de/items/6da17349-cbd0-445d-aed8-746095f729f1',
};

export const navItems = [
  { id: 'about', label: { en: 'About', tr: 'Hakkımda' } },
  { id: 'mindset', label: { en: 'Mindset', tr: 'Yaklaşım' } },
  { id: 'experience', label: { en: 'Experience', tr: 'Deneyim' } },
  { id: 'projects', label: { en: 'Projects & AI', tr: 'Projeler & AI' } },
  { id: 'competencies', label: { en: 'Skills', tr: 'Yetkinlikler' } },
  { id: 'publications', label: { en: 'Publications', tr: 'Yayınlar' } },
  { id: 'education', label: { en: 'Education', tr: 'Eğitim' } },
  { id: 'contact', label: { en: 'Contact', tr: 'İletişim' } },
];

export const heroContent = {
  badge: {
    en: 'Computational Scientist · Systems & Applied AI Builder',
    tr: 'Hesaplamalı Bilim İnsanı · Sistem & Uygulamalı Yapay Zeka Geliştirici',
  },
  title: 'Burak Bulut, Ph.D.',
  tagline: {
    en: 'Turning complex biological and high-dimensional data into reliable workflows, lean software, and domain-aware AI systems.',
    tr: 'Karmaşık biyolojik ve çok boyutlu verileri güvenilir iş akışlarına, yalın yazılımlara ve alan bilgisine sahip yapay zeka sistemlerine dönüştürüyorum.',
  },
  summary: {
    en: 'I work at the intersection of life sciences, data engineering, and applied AI. While my Ph.D. rooted me in evolutionary genomics, the most valuable capability it gave me is knowing how to learn rapidly, frame ambiguous problems, and engineer solutions from the ground up. Over the past 6+ years, I have bridged experimental design with large-scale computation by automating end-to-end data pipelines, building desktop and CLI tools born from real workflow bottlenecks, and shaping local language models into practical, privacy-preserving research agents. I thrive on stepping into unfamiliar challenges and translating complex technical concepts across disciplines.',
    tr: 'Yaşam bilimleri, veri mühendisliği ve uygulamalı yapay zekanın kesişiminde çalışıyorum. Doktoram bana genomik ve evrimsel biyoloji alanında derin bir uzmanlık kazandırsa da, bu süreçte edindiğim en değerli yetkinlik \'nasıl öğrenileceğini\' bilmek, belirsiz problemleri yapılandırmak ve hayal ettiğim çözümleri bir mühendis gibi sıfırdan inşa edebilmek oldu. Son 6 yılı aşkın sürede deneysel araştırmalar ile büyük ölçekli hesaplamalı sistemler arasında köprü kurdum; uçtan uca veri iş akışlarını otomatize ettim, günlük araştırma darboğazlarını çözen pratik yazılımlar geliştirdim ve yerel yapay zeka modellerini kurum içi çalışan otonom ajanlara dönüştürdüm. Yeni meydan okumalarla karşılaşmayı ve karmaşık sistemleri farklı disiplinlerden insanların anlayabileceği yalın bir dile çevirmeyi seviyorum.',
  },
  stats: [
    {
      value: { en: '6+ Years', tr: '6+ Yıl' },
      label: { en: 'End-to-End R&D & Data Engineering', tr: 'Uçtan Uca Ar-Ge & Veri Mühendisliği' },
    },
    {
      value: { en: '7 Papers', tr: '7 Yayın' },
      label: { en: '6 Peer-Reviewed · 4 First-Author', tr: '6 Hakemli Makale · 4 Birinci İsim' },
    },
    {
      value: { en: 'Systems & CLI', tr: 'Sistem & CLI' },
      label: { en: 'Custom Open-Source Tools & Pipelines', tr: 'Özgün Açık Kaynak Araçlar & İş Akışları' },
    },
    {
      value: { en: 'Applied AI', tr: 'Uygulamalı AI' },
      label: { en: 'On-Premise LLM Agents & Tool Design', tr: 'Yerel LLM Ajanları & Mimari Tasarım' },
    },
  ],
  buttons: {
    downloadCvEn: { en: 'Download CV (EN)', tr: 'CV İndir (İngilizce)' },
    downloadCvTr: { en: 'Download CV (TR)', tr: 'CV İndir (Türkçe)' },
    viewProjects: { en: 'View Projects', tr: 'Projeleri İncele' },
    contactMe: { en: 'Get in Touch', tr: 'İletişime Geç' },
  },
};

export const mentalModelContent: MentalModelContent = {
  sectionNumber: '01',
  title: {
    en: 'MINDSET & APPROACH',
    tr: 'YAKLAŞIM & FELSEFE',
  },
  subtitle: {
    en: 'How I Learn, Engineer & Collaborate',
    tr: 'Nasıl Öğrenir, Geliştirir ve Çalışırım?',
  },
  pillars: [
    {
      id: 'visual-first',
      number: '01',
      title: {
        en: 'Visual Decomposition & Fast Prototyping',
        tr: 'Görsel Sadeleştirme & Hızlı Prototipleme',
      },
      description: {
        en: 'I have a strong visual-spatial memory. When entering an unfamiliar domain, I first strip the problem down to its core visual structure and mental map, then immediately get my hands dirty with a working prototype before scaling into edge cases.',
        tr: 'Güçlü bir görsel hafızam var. Bilmediğim yeni bir alana girdiğimde, problemi önce zihnimde görselleştirip en temel kavramlarına sadeleştirir; ardından küçük bir prototiple ellerimi kirleterek pratik detaylara inerim.',
      },
    },
    {
      id: 'shaping-ai',
      number: '02',
      title: {
        en: 'Shaping AI with Domain Boundaries',
        tr: 'Yapay Zekayı Alan Bilgisiyle Şekillendirmek',
      },
      description: {
        en: 'AI will reshape every corner of research within the next few years. We don\'t need massive compute to build foundation models from scratch; what matters is how we guide, constrain, and orchestrate existing models so they truly understand our data\'s limits.',
        tr: 'Yapay zeka önümüzdeki birkaç yıl içinde araştırmanın her noktasına adapte olacak. Sıfırdan devasa modeller üretecek kaynağımız olmayabilir; ancak üretilen modelleri elimizdeki kaynaklarla nasıl şekillendirdiğimiz ve verimizin sınırlarını onlara nasıl öğrettiğimiz yarının teknolojisini belirleyecek.',
      },
    },
    {
      id: 'adaptive-execution',
      number: '03',
      title: {
        en: 'Adaptive Execution & Plain-Language Bridge',
        tr: 'Çevik Karar Alma & Disiplinlerarası İletişim',
      },
      description: {
        en: 'When urgency calls, I trust my instincts and experience to act decisively; when time allows, I step back to examine the root cause from the outside. Across disciplines, I never hide behind code, and instead explain what we are trying to achieve using clear, relatable analogies.',
        tr: 'Hızlı aksiyon gerektiğinde deneyimime güvenip karar alır, zamanımız olduğunda ise olaya dışarıdan bakıp kök nedeni analiz ederim. Kod bilmeyen uzmanlarla çalışırken satırların arkasına saklanmam; ne yapmaya çalıştığımızı onların dünyasından yalın örneklerle anlatırım.',
      },
    },
  ],
  offScreenRhythm: {
    label: {
      en: 'BEYOND THE TERMINAL',
      tr: 'EKRAN DIŞINDA RİTMİM',
    },
    text: {
      en: 'An early riser who loves starting before everyone else in the quiet morning hours and resting with a clear mind once the work is done. Off-screen, I am a dedicated music listener and a cinephile who enjoys watching, discussing, and writing personal essays on cinema.',
      tr: 'Sabah herkesten önce uyanıp sessizlikte çalışmaya başlamayı ve işini bitirdiğinde zihni rahat dinlenmeyi seven biriyim. Ekran dışında ise iyi bir müzik dinleyicisi ve filmler üzerine düşünüp kendi kendine yazılar yazmaktan keyif alan sıkı bir sinefilim.',
    },
  },
};

export const experienceData: ExperienceItem[] = [
  {
    id: 'independent',
    role: {
      en: 'Applied AI & Bioinformatics Engineer (Independent R&D)',
      tr: 'Uygulamalı Yapay Zeka & Biyoenformatik Mühendisi (Bağımsız Ar-Ge)',
    },
    institution: {
      en: 'Self-Directed R&D & Grant Coordination',
      tr: 'Bağımsız Ar-Ge & Hibe Koordinasyonu',
    },
    location: {
      en: 'Wiesbaden, Germany · Istanbul, Türkiye',
      tr: 'Wiesbaden, Almanya · İstanbul, Türkiye',
    },
    period: {
      en: 'Jul 2025 – Present',
      tr: 'Tem 2025 – Günümüz',
    },
    badge: {
      en: 'Current Role',
      tr: 'Mevcut Pozisyon',
    },
    coreImpact: {
      en: 'Bridging the transition from doctoral research to industry-ready software engineering by building local AI agents, open-source developer tools, and leading national grant proposals.',
      tr: 'Doktora araştırmalarımı tamamlarken zamanımı yeni nesil teknolojilere yatırım yaparak değerlendirdiğim; uçtan uca yerel yapay zeka ajanları, açık kaynak yazılımlar ve ulusal Ar-Ge hibe projeleri geliştirdiğim aktif mühendislik dönemi.',
    },
    responsibilities: {
      en: [
        {
          title: 'End-to-End Local AI Agent Engineering',
          description:
            'Self-taught and engineered an on-premise bioinformatics AI agent running on consumer hardware (16 GB VRAM with Qwen 3.6 35B A3B). Solved the core challenge of teaching LLMs how to interpret biological data by designing modular, per-tool constraint and skill definitions rather than relying on fragile generic prompts.',
        },
        {
          title: 'R&D Project Leadership & DFG Grant Strategy',
          description:
            'Took primary responsibility for planning, technical framing, and cross-institutional coordination of a comprehensive research grant proposal for the German Research Foundation (DFG).',
        },
        {
          title: 'Custom Software & Doctoral Completion',
          description:
            'Defended doctoral dissertation and published first-author studies in top-tier journals (Evolution Letters, Molecular Ecology), while building practical desktop (BioReader) and CLI (PipeWatch, SampleSheriff) tools to solve everyday research bottlenecks.',
        },
      ],
      tr: [
        {
          title: 'Uçtan Uca Yerel Yapay Zeka Ajanı Geliştirme',
          description:
            'Kendi kendime öğrenerek 16 GB VRAM donanım sınırında tamamen yerel çalışan (Qwen 3.6 35B A3B modeliyle) otonom bir biyoenformatik AI ajanı geliştirdim. Modele sadece araçları çalıştırmayı değil, her aracın ürettiği veriyi nasıl doğru yorumlayacağını öğretmek için her araca özel sınır (constraint) ve yetenek dosyaları içeren modüler bir mimari kurguladım.',
        },
        {
          title: 'Ar-Ge Proje Liderliği & DFG Hibe Koordinasyonu',
          description:
            'Alman Araştırma Vakfı (DFG) için hazırlanan kapsamlı bir araştırma projesi başvurusunun deneysel planlamasını, teknik çerçevesini ve bilimsel koordinasyonunu uçtan uca yönettim.',
        },
        {
          title: 'Özgün Yazılım Geliştirme & Doktora Yayın Süreci',
          description:
            'Doktora tezimi tamamlayıp birinci isim makalelerimi (Evolution Letters, Molecular Ecology) yayınlarken, günlük araştırma ve veri analizi darboğazlarını ortadan kaldıran masaüstü (BioReader) ve komut satırı (PipeWatch, SampleSheriff) araçları geliştirdim.',
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
    coreImpact: {
      en: 'Owned the complete lifecycle of high-throughput biological data, from designing multi-year wet-lab experiments to architecting automated HPC pipelines and statistical models.',
      tr: 'Çok yıllı ıslak laboratuvar deneylerinin tasarımından, HPC kümelerinde otomatik veri iş akışlarının kurulmasına ve ileri istatistiksel modellemeye kadar veri yaşam döngüsünün tamamını yönettim.',
    },
    responsibilities: {
      en: [
        {
          title: 'Scalable Data Pipelines & HPC Automation',
          description:
            'Designed, automated, and maintained reproducible Whole-Genome (WGS) and RNA-Seq workflows using Snakemake, Python, and Bash across Linux/SLURM clusters, turning terabytes of raw sequencing reads into clean variant and expression matrices.',
        },
        {
          title: 'Statistical Modeling & Multi-Omics Integration',
          description:
            'Analyzed 200+ whole genomes and multi-condition transcriptomes using R (tidyverse, DESeq2, limma, Bayesian modeling) and Python to uncover how organisms respond and adapt to chemical, thermal, and environmental stress.',
        },
        {
          title: 'Bridging Wet-Lab & Computation',
          description:
            'Combined hands-on experimental execution (in vivo fluorescence imaging, ROS assays, DNA/RNA workflows) with computational analysis, ensuring that statistical models reflected real biological constraints.',
        },
        {
          title: 'Mentorship & Cross-Disciplinary Communication',
          description:
            'Taught molecular ecology courses over 3 academic years, trained wet-lab biologists in Unix/HPC workflows using plain-language examples, and supervised a B.Sc. thesis to completion.',
        },
      ],
      tr: [
        {
          title: 'Ölçeklenebilir Veri İş Akışları & HPC Otomasyonu',
          description:
            'Linux/SLURM yüksek başarımlı hesaplama kümelerinde Snakemake, Python ve Bash kullanarak ölçeklenebilir WGS ve RNA-Seq iş akışları (pipelines) kurdum; terabaytlarca ham dizileme verisini tekrarlanabilir şekilde temiz varyant ve gen anlatım matrislerine dönüştürdüm.',
        },
        {
          title: 'İstatistiksel Modelleme & Çoklu-Omik Entegrasyonu',
          description:
            'Organizma ve genomların kimyasal ve çevresel stres faktörlerine nasıl yanıt verdiğini ortaya çıkarmak için 200\'den fazla tüm genomu ve çok koşullu transkriptom verisini R (tidyverse, DESeq2, limma, Bayesci modeller) ve Python ile analiz ettim.',
        },
        {
          title: 'Islak Laboratuvar ve Hesaplamalı Sistem Köprüsü',
          description:
            'Laboratuvar tezgahındaki deneysel çalışmaları (in vivo floresans görüntüleme, ROS ölçümleri, DNA/RNA izolasyonu) doğrudan hesaplamalı analizlerle birleştirerek, kurulan istatistiksel modellerin biyolojik gerçeklikle tam uyumlu olmasını sağladım.',
        },
        {
          title: 'Mentorluk & Disiplinlerarası Eğitim',
          description:
            '3 akademik yıl boyunca moleküler ekoloji dersleri verdim, kodlama geçmişi olmayan araştırmacılara Unix/HPC iş akışlarını yalın örneklerle öğrettim ve bir lisans tez projesine danışmanlık yaptım.',
        },
      ],
    },
  },
];

export const agentBlueprintNodes: AgentBlueprintNode[] = [
  {
    id: 'node-1',
    nodeNumber: '01',
    title: { en: 'Raw Data & Telemetry', tr: 'Ham Veri & Telemetri' },
    subtitle: { en: 'FASTQ / Metadata Ingestion', tr: 'FASTQ / Üstveri Girişi' },
    badge: { en: 'Input Stage', tr: 'Giriş Aşaması' },
    takeaway: {
      en: 'Ingests paired-end FASTQ reads, reference genome assemblies, and batch sample sheets. Automatically assesses sequencing depth, phred scores, and initial telemetry before firing tools.',
      tr: 'Çift uçlu FASTQ okumalarını, referans genom dizilimlerini ve örnek tablolarını alır. Araçları tetiklemeden önce dizileme derinliğini, phred kalite skorlarını ve telemetriyi otonom analiz eder.',
    },
  },
  {
    id: 'node-2',
    nodeNumber: '02',
    title: { en: 'Constraint & Skill Files', tr: 'Kısıt & Yetenek Dosyaları' },
    subtitle: { en: 'The Crucial Innovation: Boundary Definitions', tr: 'Temel İnovasyon: Sınır & Yetenek Tanımları' },
    badge: { en: 'Core Innovation', tr: 'Temel İnovasyon' },
    takeaway: {
      en: 'The most challenging problem was not teaching the model how to execute tools, but teaching it how to truly interpret the biological data produced by those tools. Instead of compressing the entire field into a fragile prompt, I authored dedicated per-tool skill and boundary files to eliminate hallucinations.',
      tr: 'En zorlayıcı kısım modele araçları nasıl çalıştıracağını öğretmek değil, o araçlarla işlediği veriyi nasıl anlayacağını öğretmekti. LLM\'e bu özü tek seferde aktarmak yerine her araç için ayrı bir "skill" ve sınır (limit) dosyası tanımlayarak halüsinasyonları sıfırladım.',
    },
  },
  {
    id: 'node-3',
    nodeNumber: '03',
    title: { en: 'Local Qwen 3.6 35B A3B Reasoning', tr: 'Yerel Qwen 3.6 35B A3B Akıl Yürütme' },
    subtitle: { en: 'On-Premise 35B on 16GB VRAM', tr: '16GB VRAM Üzerinde Qwen 3.6 35B A3B' },
    badge: { en: 'Private Inference', tr: 'Yerel Çıkarım' },
    takeaway: {
      en: 'Leverages the quantized Qwen 3.6 35B A3B open-weights model locally within a strict 16 GB VRAM budget. Operates without exposing patient genomes or institutional IP to external cloud APIs, maintaining full privacy and zero egress costs.',
      tr: '16 GB VRAM donanım bütçesinde kuantize edilmiş yerel Qwen 3.6 35B A3B açık modelini çalıştırır. Hasta genomlarını ve kurumsal gizliliği buluta sızdırmadan, sıfır veri transferi maliyetiyle tam güvenlik sağlar.',
    },
  },
  {
    id: 'node-4',
    nodeNumber: '04',
    title: { en: 'Verified Biological Deliverables', tr: 'Doğrulanmış Biyolojik Çıktılar' },
    subtitle: { en: 'Self-Healing Execution & Reports', tr: 'Kendi Kendini Onaran Yürütme & Raporlama' },
    badge: { en: 'Delivery & Recovery', tr: 'Teslim & Kurtarma' },
    takeaway: {
      en: 'Executes verified bio-CLIs (GATK, BWA, SAMtools), catches silent run-time aborts, dynamically self-heals corrupted intermediate states, and synthesizes structured, reproducible biological reports.',
      tr: 'Doğrulanmış biyoenformatik araçlarını (GATK, BWA, SAMtools) çalıştırır, sessiz çalışma anı çökmelerini yakalar, bozuk ara durumları kendi kendine onarır ve tekrarlanabilir biyolojik raporlar üretir.',
    },
  },
];

export const agentHeroStory = {
  spot: {
    en: 'An on-premise AI agent running a 35B parameter model (Qwen 3.6 35B A3B) within a 16 GB VRAM budget, built by teaching the model not just how to call CLI tools, but how to understand the structure and limits of biological data.',
    tr: '16 GB VRAM donanım sınırında 35B parametreli yerel bir modelle (Qwen 3.6 35B A3B) çalışan; modele sadece komut çalıştırmayı değil, biyolojik verinin doğasını ve sınırlarını öğretmek üzere tasarlanmış otonom yapay zeka ajanı.',
  },
  narrative: {
    en: 'Sensitive genomic and clinical datasets cannot be sent to external cloud APIs. When I set out to build a fully local bioinformatics agent on a 16 GB VRAM workstation using a quantized Qwen 3.6 35B A3B model, I quickly realized that the hardest problem was not getting the LLM to execute terminal commands, but rather teaching the model how to truly understand the data those tools produce. Because you cannot compress the entire intuition of bioinformatics into a single system prompt, I engineered a modular architecture where every tool has its own dedicated skill file, reference schema, and strict operational boundaries.',
    tr: 'Hassas genomik ve klinik veriler gizlilik kuralları gereği ticari bulut yapay zeka servislerine yüklenemez. Standart bir 16 GB VRAM iş istasyonunda (kuantize edilmiş Qwen 3.6 35B A3B modeliyle) tamamen yerel bir ajan kurmaya başladığımda, beni en çok zorlayan kısım modele araçları (tools) nasıl kullanacağını öğretmek değil, bu araçlarla işlediği veriyi en iyi nasıl anlayabileceğini göstermek oldu. Biyoenformatiğin özünü tek bir genel komutla modele aktarmak mümkün olmadığı için; kullandığım her bir araç için ayrı bir referans, ayrı bir yetenek (skill) tanımı ve katı sınırlar içeren modüler bir dosya mimarisi geliştirdim.',
  },
};

export const toolsProjectsData: ProjectItem[] = [
  {
    id: 'bioreader',
    title: 'BioReader',
    category: 'cli',
    categoryLabel: {
      en: 'Desktop App & Knowledge Workspace',
      tr: 'Masaüstü Uygulaması & Not Alanı',
    },
    description: {
      en: 'A lightweight desktop scientific literature workspace built with Electron, React, and SQLite. Features visual structure highlighting, inline KaTeX math, Cytoscape concept mapping, and fast local indexing.',
      tr: 'Electron, React ve yerel SQLite ile geliştirilmiş yalın bir masaüstü bilimsel makale okuma ve not alma uygulaması. Görsel yapı vurgulama, satır içi KaTeX formülleri ve kavram haritalama özellikleri sunar.',
    },
    originNote: {
      en: 'Why I built it: Existing note-taking apps felt bloated with steep learning curves. Because I recall papers through visual and spatial memory, remembering where paragraphs and figures sit on the page, I built a lean reader tailored to how my brain actually processes literature.',
      tr: 'Neden geliştirdim: Piyasadaki okuma ve not alma araçları fazla karmaşık ve genel amaçlıydı. Okuduğum bilgileri, paragrafların ve şekillerin sırasını görsel hafızamda canlandırarak hatırladığım için, tam kendi düşünce sistemime uyan yalın bir çalışma alanı inşa ettim.',
    },
    techStack: ['Electron', 'React', 'Vite', 'Better-SQLite3', 'KaTeX', 'Cytoscape'],
    featured: true,
    metrics: {
      en: 'Tailored to Visual-Spatial Memory',
      tr: 'Görsel-Mekânsal Hafızaya Özel',
    },
  },
  {
    id: 'samplesheriff',
    title: 'SampleSheriff',
    category: 'cli',
    categoryLabel: {
      en: 'CLI Tool & Quality Control',
      tr: 'CLI Aracı & Kalite Kontrol',
    },
    description: {
      en: 'A fast, strict, nf-core-style sample sheet and metadata validator for bioinformatics pipelines. Features streaming parsing, FASTQ pairing checks, BAM/VCF header validation, and rich terminal/JSON diagnostics.',
      tr: 'Biyoenformatik iş akışları için hızlı ve katı bir örnek tablosu (sample sheet) ve üstveri doğrulama aracı. Akış tabanlı ayrıştırma, FASTQ eşleşme kontrolü ve BAM/VCF başlık doğrulaması sunar.',
    },
    originNote: {
      en: 'Why I built it: A single typo in a sample sheet should not silently ruin a multi-day cluster run. I built this to catch metadata and file-header mismatches in seconds before a pipeline even starts.',
      tr: 'Neden geliştirdim: Örnek tablosundaki küçük bir yazım hatasının günler süren bir analizi yarı yolda çökertmesini önlemek, veri hatalarını henüz analiz başlamadan saniyeler içinde yakalamak için yazdım.',
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
      en: 'CLI Tool & Telemetry',
      tr: 'CLI Aracı & Telemetri',
    },
    description: {
      en: 'Pipeline observability and resource telemetry for SLURM and HPC bioinformatics workflows. Wraps arbitrary Bash commands with zero dependencies, captures peak memory via /usr/bin/time -v, and outputs interactive HTML reports.',
      tr: 'SLURM ve HPC iş akışları için sıfır bağımlılıklı kaynak ve bellek izleme aracı. Bash komutlarını sarmalayarak tepe bellek tüketimini kaydeder ve anlaşılır HTML raporları üretir.',
    },
    originNote: {
      en: 'Why I built it: Digging through raw SLURM logs to find out why a step ran out of RAM was wasting hours. I wanted a zero-dependency wrapper that turns cluster telemetry into a clean visual report.',
      tr: 'Neden geliştirdim: Kümede çalışan bir adımın neden bellek sınırına takıldığını anlamak için ham log dosyalarında saatler kaybetmek yerine, kaynak tüketimini tek bakışta görselleştiren pratik bir araç ihtiyacından doğdu.',
    },
    techStack: ['Python', 'Bash', 'SLURM', 'HPC', 'Jinja2', 'Click'],
    githubUrl: 'https://github.com/BurakBulut-sh/pipewatch',
    featured: true,
    metrics: {
      en: 'SLURM Telemetry • HTML Dashboards',
      tr: 'SLURM Telemetrisi • HTML Paneller',
    },
  },
];

export const pipelineProjectsData: ProjectItem[] = [
  {
    id: 'snp-analysis',
    title: 'SNP-analysis / WGS Mutation Pipeline',
    category: 'pipeline',
    categoryLabel: {
      en: 'WGS Variant Discovery & Bayesian Modeling',
      tr: 'WGS Varyant Keşfi & Bayesci Modelleme',
    },
    description: {
      en: 'High-throughput Whole-Genome Sequencing variant discovery pipeline. Integrates Trimmomatic, PEAR merging, BWA-MEM mapping, Picard deduplication, GATK4 HaplotypeCaller gVCF array, and Bayesian Poisson rate ratio tests in R.',
      tr: 'Yüksek verimli Tüm Genom Dizileme (WGS) varyant ve mutasyon keşif iş akışı. Trimmomatic, PEAR, BWA-MEM, Picard, GATK4 HaplotypeCaller ve R tabanlı Bayesci istatistiksel modelleri entegre eder.',
    },
    originNote: {
      en: 'Core genomic workflow engineered during my Ph.D. to process 200+ genomes and detect rare de novo mutations with high statistical confidence.',
      tr: 'Doktoram süresince 200\'den fazla tüm genomu işlemek ve nadir mutasyonları yüksek istatistiksel güvenle tespit etmek için kurduğum temel analiz hattı.',
    },
    techStack: ['GATK4', 'BWA-MEM', 'SLURM Array', 'SAMtools', 'R BayesianFirstAid'],
    githubUrl: 'https://github.com/BurakBulut-sh/SNP-analysis',
    featured: true,
    metrics: {
      en: 'Evolution Letters & Molecular Ecology (2026)',
      tr: 'Evolution Letters & Molecular Ecology (2026)',
    },
  },
  {
    id: 'transcriptome-study',
    title: 'Transcriptome-Study Pipeline',
    category: 'pipeline',
    categoryLabel: {
      en: 'Differential Expression & Stress Modeling',
      tr: 'Diferansiyel Anlatım & Stres Modellemesi',
    },
    description: {
      en: 'RNA-Seq processing and statistical modeling of oxidative stress across temperature gradients in Chironomus riparius. Includes HISAT2 spliced alignment, featureCounts, DESeq2 prefiltering, and Limma contrast modeling.',
      tr: 'Sıcaklık ve çevresel stres gradyanları boyunca gen anlatımındaki kırılma noktalarını modelleyen RNA-Seq iş akışı (HISAT2, featureCounts, DESeq2 ve Limma).',
    },
    originNote: {
      en: 'Connects wet-lab physiological stress measurements directly with non-linear gene expression modeling.',
      tr: 'Laboratuvardaki fizyolojik stres ölçümlerini doğrusal olmayan gen anlatımı modelleriyle birleştiren transkriptomik iş akışı.',
    },
    techStack: ['RNA-Seq', 'HISAT2', 'DESeq2', 'Limma', 'SLURM', 'R'],
    githubUrl: 'https://github.com/BurakBulut-sh/Transcriptome-Study',
    featured: false,
    metrics: {
      en: 'Ecology & Evolution and Env. Pollution (2025)',
      tr: 'Ecology & Evolution ve Env. Pollution (2025)',
    },
  },
  {
    id: 'meta-transcriptome',
    title: 'Meta-Transcriptome-Analysis',
    category: 'pipeline',
    categoryLabel: {
      en: 'Cross-Study RNA-Seq Meta-Analysis',
      tr: 'Çok Çalışmalı RNA-Seq Meta-Analizi',
    },
    description: {
      en: 'End-to-end RNA-Seq meta-analysis and KEGG pathway mapping in Beta vulgaris. Implements multi-factor GLM DESeq2, Fisher combined probability tests, biomaRt functional annotations, and Pathview pathway overlays.',
      tr: 'Farklı çalışmalardan elde edilen ham RNA-Seq veri setlerini ortak bir istatistiksel çerçevede birleştiren ve KEGG yolak haritalaması yapan meta-analiz iş akışı.',
    },
    originNote: {
      en: 'My first end-to-end pipeline built during my M.Sc., designed to extract conserved biological signals across heterogeneous public datasets.',
      tr: 'Yüksek lisans döneminde geliştirdiğim, birbirinden bağımsız veri setlerindeki gürültüyü filtreleyip ortak biyolojik sinyalleri yakalayan ilk uçtan uca iş akışım.',
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

// Combined for backwards compatibility if needed
export const projectsData: ProjectItem[] = [...toolsProjectsData, ...pipelineProjectsData];

export const competencyCategories: CompetencyCategory[] = [
  {
    id: 'genomics',
    title: { en: 'NGS, Genomics & Databases', tr: 'NGS, Genomik & Veritabanları' },
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
        highlight: true,
      },
      {
        name: 'Bioinformatics Databases & Ontologies',
        description: {
          en: 'NCBI, Ensembl Plants, KEGG Pathways, UniProt, Gene Ontology (GO), and SRA curation.',
          tr: 'NCBI, Ensembl Plants, KEGG Pathways, UniProt, Gene Ontology (GO) ve SRA kürasyonu.',
        },
        tags: ['NCBI', 'Ensembl', 'KEGG', 'UniProt', 'biomaRt', 'SRA'],
        highlight: false,
      },
    ],
  },
  {
    id: 'programming',
    title: { en: 'Programming & Pipelines', tr: 'Programlama & Boru Hatları' },
    skills: [
      {
        name: 'Bash / Linux Shell Scripting',
        description: {
          en: 'Robust shell automation, sed/awk parsing, and complex process monitoring wrappers.',
          tr: 'Güçlü kabuk otomasyonu, sed/awk işleme ve karmaşık süreç izleme betikleri.',
        },
        tags: ['Bash', 'Unix/Linux', 'AWK', 'POSIX Shell'],
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
        name: 'Python',
        description: {
          en: 'Scientific computing, data manipulation, CLI tool architecture, and genomic parser engineering.',
          tr: 'Bilimsel hesaplama, veri işleme, CLI araç mimarisi ve genomik ayrıştırıcı geliştirme.',
        },
        tags: ['NumPy', 'Pandas', 'Typer', 'Pydantic', 'PySAM'],
        highlight: false,
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
    ],
  },
  {
    id: 'wetlab',
    title: { en: 'Wet-Lab & Molecular Biology', tr: 'Islak Laboratuvar & Moleküler Biyoloji' },
    skills: [
      {
        name: 'DNA & RNA Extraction & Quality Control',
        description: {
          en: 'Extraction from challenging non-model organisms, tissue homogenisation, Nanodrop/Qubit spectrophotometric quantification, and Bioanalyzer integrity analysis.',
          tr: 'Model olmayan zorlu organizmalardan DNA/RNA izolasyonu, doku homojenizasyonu, Qubit spektrofotometrik ölçüm ve Bioanalyzer jel bütünlük analizleri.',
        },
        tags: ['DNA/RNA Extraction', 'Qubit', 'Bioanalyzer', 'Quality Control'],
        highlight: false,
      },
      {
        name: 'in vivo ROS Fluorometry & Physiological Assays',
        description: {
          en: 'Real-time in vivo reactive oxygen species quantification, oxidative stress tipping-point fluorometry, and stress physiology assays across environmental gradients.',
          tr: 'Canlı dokuda gerçek zamanlı reaktif oksijen türleri (ROS) ölçümleri, oksidatif stres kırılma noktası florometrisi ve çevresel gradyanlarda fizyolojik tahliller.',
        },
        tags: ['in vivo ROS', 'Fluorometry', 'Oxidative Stress', 'Physiology'],
        highlight: true,
      },
      {
        name: 'Multigenerational Culturing & Ecotoxicological Exposure',
        description: {
          en: 'Long-term controlled temperature gradients, chemical stressor exposure (BaP, micro-pollutants), fitness tracking, and multi-generational mutation accumulation lines in aquatic models (Chironomus riparius).',
          tr: 'Kontrollü sıcaklık gradyanlarında uzun vadeli kültür yönetimi, kimyasal stresör (BaP) maruziyetleri, fitness takibi ve sucul böcek modellerinde (Chironomus riparius) çok nesilli mutasyon birikim hatları.',
        },
        tags: ['Mutation Accumulation', 'Ecotoxicology', 'Organism Culturing', 'Chironomus riparius'],
        highlight: true,
      },
      {
        name: 'Fluorescence & Confocal Microscopy',
        description: {
          en: 'Microscopic specimen imaging, histological visualization, cellular stress marker tracking, and fluorescent dye localization.',
          tr: 'Mikroskobik numune hazırlığı, histolojik görüntüleme, hücresel stres belirteçlerinin takibi ve floresan boya lokalizasyonu.',
        },
        tags: ['Fluorescence Microscopy', 'Confocal Imaging', 'Histology'],
        highlight: false,
      },
      {
        name: 'PCR, Gel Electrophoresis & Molecular Assays',
        description: {
          en: 'Target gene amplification, primer design, agarose gel electrophoresis, and downstream sequencing library prep validation.',
          tr: 'Hedef gen amplifikasyonu, primer tasarımı, agaroz jel elektroforezi ve yeni nesil dizileme kütüphane hazırlık kontrolleri.',
        },
        tags: ['PCR', 'Primer Design', 'Gel Electrophoresis', 'Library Prep'],
        highlight: false,
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
        name: 'Local LLMs',
        description: {
          en: 'Running private on-premise models (such as Qwen 3.6 35B A3B) for life sciences data without external leakage.',
          tr: 'Dışa sızıntı olmadan yaşam bilimleri verileri için yerel kurum içi modeller (Qwen 3.6 35B A3B vb.) çalıştırma.',
        },
        tags: ['Qwen 3.6 35B A3B', 'llama.cpp', 'HuggingFace', 'Hermes Agent'],
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
          en: 'A2 (Basic Working Proficiency).',
          tr: 'A2 (Temel çalışma yetkinliği).',
        },
        tags: ['A2'],
      },
    ],
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
      tr: 'Çok nesilli tüm genom dizileme (WGS) deneyleriyle, gelişim hızındaki artışın birim zamandaki mutasyon hızını artırırken nesil başına düşen toplam mutasyon yükünü azalttığını ortaya koydu.',
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
      tr: 'Farklı iklim bölgelerinden gelen popülasyonların sıcaklığa bağlı mutasyon hızlarında belirgin farklılıklar olduğunu göstererek, genom koruma mekanizmalarının yerel koşullara evrimsel olarak uyum sağlayabildiğini kanıtladı.',
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
      tr: 'Canlı dokuda reaktif oksijen türleri (ROS) ölçümleri ile yüksek verimli RNA-Seq analizlerini birleştirerek, sıcaklık stresi altındaki antioksidan savunma sisteminin kırılma noktalarını modelledi.',
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
      tr: 'Yapay gece aydınlatmasının (ışık kirliliğinin) organizmaların biyolojik saat (sirkadiyen) genlerini ve yaşamsal uyum başarısını nasıl bozduğunu tüm organizma transkriptomiği ile ortaya çıkardı.',
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
      tr: 'Toksik kimyasal (BaP) maruziyeti altındaki popülasyonları nesiller boyunca takip ederek, çevresel kirleticilere karşı gelişen hızlı evrimsel adaptasyon izlerini genom düzeyinde tespit etti.',
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
      tr: 'Bağımsız RNA-Seq çalışmalarını tek bir meta-analiz iş akışında birleştirerek; kuraklık, tuz ve hastalık stresine karşı bitkilerde ortak çalışan çekirdek savunma gen ağını tanımladı.',
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
      tr: 'Ani çevresel dalgalanmalar altında normalde sessiz kalan (kriptik) genetik çeşitliliğin nasıl açığa çıktığını ve hızlı adaptasyona nasıl zemin hazırladığını yüksek derinlikli kohort dizileme ile gösterdi.',
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

export const contactContent = {
  sectionNumber: '07',
  title: {
    en: 'CONTACT & COLLABORATION',
    tr: 'İLETİŞİM & İŞ BİRLİĞİ',
  },
  subtitle: {
    en: 'Let’s Connect',
    tr: 'İletişime Geçin',
  },
  collaboration: {
    en: 'I am actively exploring industry R&D roles (Bioinformatics, Data Engineering, Applied AI in Life Sciences) as well as ambitious postdoctoral fellowships where computation and AI meet real-world data challenges. Whether you have an open role, a tough dataset, or want to discuss local AI agents, I would love to connect.',
    tr: 'Yaşam bilimleri, veri mühendisliği ve uygulamalı yapay zekanın kesiştiği endüstriyel Ar-Ge pozisyonları ile yenilikçi doktora sonrası (post-doc) araştırma projelerine açığım. Ekibinizdeki bir pozisyon, çözülmesi gereken zorlu bir veri problemi veya yerel yapay zeka ajanları üzerine konuşmak için bana her zaman ulaşabilirsiniz.',
  },
  locationNote: {
    en: 'Based between Wiesbaden (Frankfurt Rhine-Main), Germany and Istanbul, Türkiye. Open to on-site, hybrid, and remote opportunities across Europe and beyond.',
    tr: 'Wiesbaden (Frankfurt Rhein-Main, Almanya) ve İstanbul arasında yerleşik. Avrupa genelinde ve uluslararası düzeyde yerinde, hibrit veya uzaktan çalışma modellerine uygun.',
  },
};
