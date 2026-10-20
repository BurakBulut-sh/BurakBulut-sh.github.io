'use client';

import React from 'react';
import { siteMetadata } from '@/data/translations';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/80 py-8 transition-colors bg-[#FAF9F5]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
        <div>
          © 2026 {siteMetadata.name} · {siteMetadata.location}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-950 transition-colors"
          >
            GitHub
          </a>
          <span className="text-stone-300">·</span>
          <a
            href={siteMetadata.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-950 transition-colors"
          >
            Google Scholar
          </a>
          <span className="text-stone-300">·</span>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-950 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-stone-300">·</span>
          <a
            href={`mailto:${siteMetadata.email}`}
            className="hover:text-stone-950 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
