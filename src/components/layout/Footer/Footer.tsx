import { cn } from '@nightstem/utils';

import { GITHUB_ORG_URL, NPM_ORG_URL } from '@/constants';
import { Logo, LOGO_MODES, LOGO_SIZES } from '@nightstem/ui';

const iconLinkClassName = cn(
  'flex items-center justify-center rounded-md text-foreground/60',
  'transition-colors duration-200 ease-out hover:text-foreground',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
);

const Footer = () => (
  <footer className="border-t border-foreground/10 px-[clamp(20px,5vw,64px)] py-5">
    <div
      className={cn(
        'landing-container',
        'flex flex-wrap items-center justify-between gap-3',
      )}
    >
      <div className="flex items-center gap-4">
        <Logo mode={LOGO_MODES.ICON} size={LOGO_SIZES.BODY} />
        <span className="font-mono text-xs text-foreground/60">
          © 2026 Nightstem
        </span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={GITHUB_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nightstem on GitHub"
          className={cn(iconLinkClassName, 'size-11')}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
        </a>
        <a
          href={NPM_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nightstem on npm"
          className={cn(
            iconLinkClassName,
            'h-11 px-2.5 font-mono text-xs font-semibold',
          )}
        >
          npm
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
