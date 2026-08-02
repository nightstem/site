import type { RepoStatus } from './types';

/** Green is reserved for live repos; alpha stays neutral */
export const PILL_THEME: Record<RepoStatus, string> = {
  alpha: 'text-foreground/60 border-foreground/20',
  live: 'text-primary-500 border-primary-500/40',
};
