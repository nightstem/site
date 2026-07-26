import type { Repo } from './types';

/** Placeholder repos — swap for real data when decided */
export const REPOS: Repo[] = [
  {
    name: 'design-system',
    href: 'https://github.com/nightstem/design-system',
    status: 'alpha',
    description:
      'Tokens, UI primitives, and the foundations behind everything Nightstem ships.',
    meta: 'TypeScript ↗',
  },
  {
    name: 'site',
    href: 'https://github.com/nightstem/site',
    status: 'live',
    description:
      "nightstem.com — the studio's marketing site. Calm, dark, and fast.",
    meta: 'Next.js ↗',
  },
];
