'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

import { cn } from '@nightstem/utils';

import { SECTION_IDS } from '@/constants';
import { NAV_LINKS } from './constants';
import { Logo, LOGO_MODES, LOGO_SIZES } from '@nightstem/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkClassName = (isActive: boolean) =>
  cn(
    'rounded-sm text-sm transition-colors duration-200 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
    isActive
      ? 'text-primary-500 hover:text-primary-400'
      : 'text-foreground/60 hover:text-foreground',
  );

const Navbar = () => {
  const navbarRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    /* v8 ignore next -- @preserve */
    if (!navbarRef.current) return;
    document.documentElement.style.setProperty(
      '--navbar-height',
      `${navbarRef.current.clientHeight}px`,
    );
  }, []);

  useEffect(() => {
    const sections = Object.values(SECTION_IDS)
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      setActiveSection(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        // The BaseLayout scroll container the navbar is sticky inside
        root: navbarRef.current?.parentElement,
        // A section becomes active when it crosses the viewport's read line
        rootMargin: '-40% 0px -55% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((open) => !open), []);

  const renderLinks = (itemClassName: string) =>
    NAV_LINKS.map(({ label, href, sectionId }) => {
      const isActive = sectionId
        ? activeSection === sectionId
        : pathname === href;
      // Section links are plain anchors: the browser's fragment navigation
      // replaces the hash reliably, where next/link can corrupt it
      // (e.g. /#ns-home#ns-projects) on same-page hash changes.
      const LinkComponent = sectionId ? 'a' : Link;

      return (
        <li key={label}>
          <LinkComponent
            href={href}
            aria-current={isActive ? (sectionId ? 'true' : 'page') : undefined}
            onClick={closeMenu}
            className={cn(itemClassName, linkClassName(isActive))}
          >
            {label}
          </LinkComponent>
        </li>
      );
    });

  return (
    <nav
      ref={navbarRef}
      className={cn(
        'sticky top-0 z-10',
        'border-b border-foreground/10 bg-dark/80 backdrop-blur-sm',
        'px-[clamp(20px,5vw,64px)] py-3.5',
      )}
    >
      <div
        className={cn(
          'landing-container',
          'flex flex-wrap items-center justify-between gap-3',
        )}
      >
        <Link href="/">
          <Logo mode={LOGO_MODES.HORIZONTAL} size={LOGO_SIZES.SM} />
        </Link>

        <ol className="hidden items-center gap-[clamp(4px,1.5vw,20px)] md:flex">
          {renderLinks('px-2 py-2.5')}
        </ol>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
          className={cn(
            'flex size-11 items-center justify-center md:hidden',
            'rounded-md text-foreground/60 transition-colors duration-200 ease-out hover:text-foreground',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
          )}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <ol id="nav-menu" className="flex flex-col pt-2 pb-1 md:hidden">
          {renderLinks('block px-2 py-2.5')}
        </ol>
      )}
    </nav>
  );
};

export default Navbar;
