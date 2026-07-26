import { cn } from '@nightstem/utils';

import { GITHUB_ORG_URL, SECTION_IDS } from '@/constants';
import { REPOS } from './constants';
import { PILL_THEME } from './themes';

export type ProjectsProps = {
  className?: string;
};

const Projects = ({ className }: ProjectsProps) => (
  <section
    id={SECTION_IDS.PROJECTS}
    className={cn(
      'border-t border-foreground/10 gradient-projects',
      'scroll-mt-(--navbar-height) landing-section-pad',
      'flex flex-col justify-center',
      className,
    )}
  >
    <div className="landing-container">
      <div
        className={cn(
          'mb-[clamp(28px,4vh,48px)] gap-4',
          'flex flex-wrap items-end justify-between',
        )}
      >
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.08em] text-foreground/60">
            PROJECTS
          </span>

          <h2
            className={cn(
              'font-semibold',
              'text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.2] tracking-[-0.02em]',
            )}
          >
            <span className="text-primary-500">Quiet work</span>, open source
          </h2>
        </div>

        <a
          href={GITHUB_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'font-mono text-sm text-foreground/60',
            'transition-colors duration-200 ease-out hover:text-foreground',
            'rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
          )}
        >
          github.com/nightstem ↗
        </a>
      </div>

      <div
        className={cn(
          'grid grid-cols-[repeat(auto-fill,minmax(min(360px,100%),1fr))]',
          'gap-3.5',
        )}
      >
        {REPOS.map(({ name, href, status, description, meta }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex flex-col gap-2 px-5.5 py-4.5',
              'rounded-lg border border-foreground/10 bg-surface-card',
              'transition-colors duration-200 ease-out hover:border-primary-500/40',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-mono text-sm font-normal">{name}</h3>
              <span
                className={cn(
                  'rounded-full border px-2 py-0.5 font-mono text-[0.6875rem]',
                  PILL_THEME[status],
                )}
              >
                {status}
              </span>
            </div>

            <span className="text-[0.8125rem] leading-normal text-foreground/70">
              {description}
            </span>

            <span className="mt-1 font-mono text-[0.6875rem] text-foreground/60">
              {meta}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
