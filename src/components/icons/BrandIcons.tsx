import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export function GithubIcon({ className = 'w-4 h-4', size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = 'w-4 h-4', size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ScholarIcon({ className = 'w-4 h-4', size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export function PythonIcon({ className = 'w-3.5 h-3.5', size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.8v.826H3.852S0 5.79 0 11.936c0 6.148 3.377 5.922 3.377 5.922h2.013v-2.82s-.11-3.378 3.315-3.378h5.698s3.19.052 3.19-3.084V3.084S18.066 0 11.914 0zm-1.74 1.834a.972.972 0 1 1 0 1.944.972.972 0 0 1 0-1.944zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.8v-.826h8.154S24 18.21 24 12.064c0-6.148-3.377-5.922-3.377-5.922h-2.013v2.82s.11 3.378-3.315 3.378H9.6s-3.19-.052-3.19 3.084v5.494S5.934 24 12.086 24zm1.74-1.834a.972.972 0 1 1 0-1.944.972.972 0 0 1 0 1.944z" />
    </svg>
  );
}

export function RIcon({ className = 'w-3.5 h-3.5', size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 4.298 0 9.6c0 4.094 3.238 7.57 7.784 8.972l-1.934 5.428h4.22l1.624-4.8c.102.002.204.004.306.004 6.627 0 12-4.298 12-9.6S18.627 0 12 0zm1.73 4.8c2.61 0 4.5 1.543 4.5 3.943 0 2.228-1.68 3.829-4.2 3.886l3.54 4.571h-3.48l-2.82-3.771h-1.35v3.771H7.5V4.8h6.23zm-1.83 2.143h-2.1v3.429h2.1c1.29 0 2.19-.629 2.19-1.715 0-1.085-.9-1.714-2.19-1.714z" />
    </svg>
  );
}

export function DockerIcon({ className = 'w-3.5 h-3.5', size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185M23.957 11.5c-.328-1.528-1.637-2.617-2.986-2.617-.432 0-.85.112-1.228.324-.31-1.077-1.253-1.847-2.39-1.847h-1.396a.186.186 0 00-.186.186v5.43c0 .102.084.185.186.185h6.634c.832 0 1.554-.53 1.802-1.314.07-.22.106-.448.106-.68a2.53 2.53 0 00-.542-1.667zM1.01 13.568c.28 3.52 3.013 7.844 8.784 7.844 7.24 0 11.236-4.52 11.758-8.232H.99c.006.13.013.259.02.388z" />
    </svg>
  );
}

export function LinuxIcon({ className = 'w-3.5 h-3.5', size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.003 0c-2.45 0-4.42 2.37-4.42 5.29 0 .86.18 1.68.51 2.4-1.23.99-2.09 2.53-2.09 4.31 0 1.25.42 2.39 1.13 3.32-.23.63-.4 1.3-.49 2-.51.48-1.08 1.13-1.08 1.96 0 1.56 2.05 2.72 5.09 2.72.76 0 1.48-.07 2.15-.2.67.13 1.39.2 2.15.2 3.04 0 5.09-1.16 5.09-2.72 0-.83-.57-1.48-1.08-1.96-.09-.7-.26-1.37-.49-2 .71-.93 1.13-2.07 1.13-3.32 0-1.78-.86-3.32-2.09-4.31.33-.72.51-1.54.51-2.4C16.423 2.37 14.453 0 12.003 0z" />
    </svg>
  );
}

export function GitIcon({ className = 'w-3.5 h-3.5', size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

export function PipelineIcon({ className = 'w-3.5 h-3.5', size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="3" width="6" height="6" rx="1" />
      <rect x="16" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M5 9v3a2 2 0 0 0 2 2h5" />
      <path d="M19 9v3a2 2 0 0 1-2 2h-5" />
      <line x1="12" y1="14" x2="12" y2="15" />
    </svg>
  );
}
