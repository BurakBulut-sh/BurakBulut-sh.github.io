import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Burak Bulut, Ph.D. | Bioinformatics Scientist & Computational Biologist',
  description:
    'Official portfolio and academic CV of Burak Bulut, Ph.D. — Bioinformatics Scientist & Computational Biologist specializing in WGS, RNA-Seq, Snakemake/SLURM HPC pipelines, and AI bio-agents.',
  keywords: [
    'Burak Bulut',
    'Bioinformatics Scientist',
    'Computational Biologist',
    'Ph.D.',
    'WGS',
    'RNA-Seq',
    'Snakemake',
    'SLURM',
    'GATK',
    'HPC',
    'AI Bioinformatics',
    'Genomics',
  ],
  authors: [{ name: 'Burak Bulut, Ph.D.', url: 'https://burakbulut-sh.github.io' }],
  openGraph: {
    title: 'Burak Bulut, Ph.D. | Bioinformatics Scientist & Computational Biologist',
    description:
      'Genomics, transcriptomics, HPC pipeline engineering, and AI bioinformatics workflows.',
    url: 'https://burakbulut-sh.github.io',
    siteName: 'Burak Bulut Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F5] dark:bg-[#0C0C0B] text-[#141413] dark:text-[#F5F4F0] font-sans transition-colors duration-200 selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-950 dark:selection:text-emerald-200">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
