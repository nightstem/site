import { cn } from '@nightstem/utils';

import { SECTION_IDS } from '@/constants';
import { INFO_CARDS } from './constants';

const Information = () => (
  <section
    id={SECTION_IDS.INFO}
    className={cn(
      'border-t border-foreground/10 gradient-info',
      'min-h-dvh scroll-mt-(--navbar-height) landing-section-pad',
      'flex flex-col justify-center',
    )}
  >
    <div
      className={cn(
        'landing-container',
        'grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))]',
        'items-center gap-[clamp(28px,4vw,64px)]',
      )}
    >
      <div className="flex flex-col gap-4">
        <span className="font-mono text-xs tracking-[0.08em] text-foreground/60">
          INFORMATION
        </span>

        <h2
          className={cn(
            'font-semibold text-pretty',
            'text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.2] tracking-[-0.02em]',
          )}
        >
          <span className="text-emphasis">Built</span> after hours
        </h2>

        <p className="max-w-[52ch] text-sm leading-[1.6] text-foreground/70">
          Nightstem is the studio of Jhonny Vargas Arias — a front-end engineer
          with a UX focus, comfortable from small quiet tools to large products.
        </p>
      </div>

      <div
        className={cn(
          'grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))]',
          'gap-[clamp(14px,1.5vw,20px)]',
        )}
      >
        {INFO_CARDS.map(({ title, body, isMono }) => (
          <div
            key={title}
            className={cn(
              'flex flex-col gap-2.5 p-[clamp(20px,2vw,26px)]',
              'rounded-lg border border-foreground/10 bg-surface-card',
            )}
          >
            <h3 className="text-sm font-semibold">{title}</h3>
            <span
              className={cn(
                'text-[0.8125rem] leading-[1.6] text-foreground/70',
                isMono && 'font-mono',
              )}
            >
              {body}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Information;
