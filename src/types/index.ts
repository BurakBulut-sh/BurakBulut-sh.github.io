export type Language = 'en' | 'tr';

export interface CompetencyCategory {
  id: string;
  title: {
    en: string;
    tr: string;
  };
  skills: {
    name: string;
    description: {
      en: string;
      tr: string;
    };
    tags: string[];
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: {
    en: string;
    tr: string;
  };
  institution: {
    en: string;
    tr: string;
  };
  location: {
    en: string;
    tr: string;
  };
  period: {
    en: string;
    tr: string;
  };
  badge: {
    en: string;
    tr: string;
  };
  coreImpact?: {
    en: string;
    tr: string;
  };
  responsibilities: {
    en: {
      title: string;
      description: string;
    }[];
    tr: {
      title: string;
      description: string;
    }[];
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'cli' | 'ai' | 'pipeline';
  categoryLabel: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  originNote?: {
    en: string;
    tr: string;
  };
  techStack: string[];
  githubUrl?: string;
  docsUrl?: string;
  featured?: boolean;
  metrics?: {
    en: string;
    tr: string;
  };
}

export interface PublicationItem {
  id: string;
  type: 'journal' | 'preprint';
  isFirstAuthor: boolean;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  details?: string;
  doi: string;
  doiUrl: string;
  abstractSummary?: {
    en: string;
    tr: string;
  };
}

export interface EducationItem {
  degree: {
    en: string;
    tr: string;
  };
  field: {
    en: string;
    tr: string;
  };
  institution: {
    en: string;
    tr: string;
  };
  period: string;
  details?: {
    en: string;
    tr: string;
  };
  link?: {
    label: string;
    url: string;
  };
}

export interface MentalModelPillar {
  id: string;
  number: string;
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
}

export interface MentalModelContent {
  sectionNumber: string;
  title: {
    en: string;
    tr: string;
  };
  subtitle: {
    en: string;
    tr: string;
  };
  pillars: MentalModelPillar[];
  offScreenRhythm: {
    label: {
      en: string;
      tr: string;
    };
    text: {
      en: string;
      tr: string;
    };
  };
}

export interface AgentBlueprintNode {
  id: string;
  nodeNumber: string;
  title: {
    en: string;
    tr: string;
  };
  subtitle: {
    en: string;
    tr: string;
  };
  badge: {
    en: string;
    tr: string;
  };
  takeaway: {
    en: string;
    tr: string;
  };
}
