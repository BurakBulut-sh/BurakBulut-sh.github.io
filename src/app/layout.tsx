import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Burak Bulut, Ph.D. | Computational Scientist · Systems & Applied AI Builder',
  description:
    'Official portfolio and academic CV of Burak Bulut, Ph.D., Computational Scientist and Systems Builder specializing in WGS, RNA-Seq, HPC pipelines, and autonomous AI bio-agents.',
  keywords: [
    'Burak Bulut',
    'Bioinformatics Scientist',
    'Computational Biologist',
    'Ph.D.',
    'AI Agent',
    'Qwen 3.6 35B A3B',
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
    title: 'Burak Bulut, Ph.D. | Computational Scientist · Systems & Applied AI Builder',
    description:
      'Genomics, transcriptomics, HPC pipeline engineering, and autonomous AI bioinformatics agent workflows.',
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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#FAF9F5] text-[#141413] font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 text-base leading-relaxed">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
