import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Burak Bulut, Ph.D. | Bioinformatics Scientist & Computational Biologist',
  description:
    'Official portfolio and interactive CV of Burak Bulut, Ph.D. — Bioinformatics Scientist & Computational Biologist specializing in WGS, RNA-Seq, Snakemake/SLURM HPC pipelines, and AI bio-agents.',
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
