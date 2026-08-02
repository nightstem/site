import { cn } from '@nightstem/utils';

import LinkButton from '@/components/ui/LinkButton';
import { CONTACT_MAILTO } from '@/constants';

const Contact = () => (
  <main
    className={cn(
      'screen-section bg-background px-[clamp(20px,5vw,64px)]',
      'flex flex-col items-start justify-center',
    )}
  >
    <div className="landing-container flex flex-col gap-6">
      <span className="font-mono text-xs tracking-[0.08em] text-foreground/60">
        CONTACT
      </span>

      <h1
        className={cn(
          'font-semibold text-pretty',
          'text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.2] tracking-[-0.02em]',
        )}
      >
        Say <span className="text-primary-500">hello</span>
      </h1>

      <p className="measure-tight text-base text-foreground/70">
        A proper contact page is on its way. Until then, the inbox is always
        open.
      </p>

      <div className="mt-2">
        <LinkButton
          linkComponent="a"
          href={CONTACT_MAILTO}
          variant="solid"
          color="primary"
        >
          Send us an email
        </LinkButton>
      </div>
    </div>
  </main>
);

export default Contact;
