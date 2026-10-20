import React from 'react';

interface ScientificTextProps {
  children: string;
  className?: string;
}

/**
 * Automatically formats species names and Latin biological terms in italics:
 * - Chironomus riparius
 * - Beta vulgaris L. / Beta vulgaris
 * - in vivo
 * - in silico
 * - de novo
 */
export function formatScientificString(text: string): React.ReactNode {
  if (!text) return text;

  // Regex pattern matching the scientific terms
  const pattern = /(Chironomus riparius|Beta vulgaris L\.|Beta vulgaris|in vivo|in silico|de novo|Chironomidae)/g;

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    if (part === 'Beta vulgaris L.') {
      return (
        <span key={index}>
          <em className="italic">Beta vulgaris</em> L.
        </span>
      );
    }
    if (
      part === 'Chironomus riparius' ||
      part === 'Beta vulgaris' ||
      part === 'in vivo' ||
      part === 'in silico' ||
      part === 'de novo' ||
      part === 'Chironomidae'
    ) {
      return (
        <em key={index} className="italic">
          {part}
        </em>
      );
    }
    return part;
  });
}

export default function ScientificText({ children, className = '' }: ScientificTextProps) {
  return <span className={className}>{formatScientificString(children)}</span>;
}
