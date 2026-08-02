import { cn } from '@nightstem/utils';

import LinkButton from '@/components/ui/LinkButton';
import { CONTACT_ROUTE, SECTION_IDS } from '@/constants';

const Hero = () => (
  <section
    id={SECTION_IDS.HOME}
    className={cn(
      'relative overflow-hidden bg-background',
      'screen-section-min scroll-mt-(--navbar-height) landing-section-pad',
      'flex flex-col justify-center',
    )}
  >
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 opacity-45',
        'bg-[url(/backgrounds/4b-scattered-neutral.webp)]',
        'bg-size-[clamp(640px,80vw,1100px)_auto]',
      )}
    />

    <div className="relative landing-container">
      <div className="flex max-w-180 flex-col gap-6">
        <span className="font-mono text-xs tracking-[0.08em] text-foreground/60">
          SOFTWARE STUDIO
        </span>

        <h1
          className={cn(
            'max-w-[15ch] font-bold text-pretty',
            'text-[clamp(2.6rem,6vw,4.2rem)] leading-[1.15] tracking-tight',
          )}
        >
          <span className="text-primary-500">Quiet software</span>
          <br />
          grows at night
        </h1>

        <p className="measure-tight text-base text-foreground/70">
          A studio for focused software, built after hours. Small systems,
          crafted interfaces, and tools that grow slowly.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-3">
          <LinkButton
            linkComponent="a"
            href={`#${SECTION_IDS.PROJECTS}`}
            variant="solid"
            color="primary"
          >
            View projects
          </LinkButton>
          <LinkButton href={CONTACT_ROUTE} variant="text" color="neutral">
            Contact →
          </LinkButton>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
