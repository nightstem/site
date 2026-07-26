import userEvent from '@testing-library/user-event';
import { usePathname } from 'next/navigation';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { act, render, screen } from '@testing-library/react';

import Navbar from '@/components/layout/Navbar/Navbar';
import { NAV_LINKS } from '@/components/layout/Navbar/constants';
import { SECTION_IDS } from '@/constants';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

type ObserverCallback = (entries: Partial<IntersectionObserverEntry>[]) => void;

const observerCallbacks: ObserverCallback[] = [];

const stubIntersectionObserver = () => {
  observerCallbacks.length = 0;

  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback: ObserverCallback) {
        observerCallbacks.push(callback);
      }
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    },
  );
};

const renderWithSections = () => {
  const sections = document.createElement('div');
  sections.innerHTML = Object.values(SECTION_IDS)
    .map((id) => `<section id="${id}"></section>`)
    .join('');
  document.body.appendChild(sections);

  return render(<Navbar />);
};

const intersect = (id: string) =>
  act(() => {
    observerCallbacks.forEach((callback) =>
      callback([
        { isIntersecting: true, target: { id } as Element },
      ] as IntersectionObserverEntry[]),
    );
  });

describe(Navbar, () => {
  beforeEach(() => {
    vi.mocked(usePathname).mockReturnValue('/');
    stubIntersectionObserver();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('matches the snapshot', () => {
    const { container } = render(<Navbar />);

    expect(container).toMatchSnapshot();
  });

  it('does not have accessibility violations', async () => {
    const { container } = render(<Navbar />);
    const result = await act(() => axe(container));

    expect(result).toHaveNoViolations();
  });

  it('renders every nav link with its href', () => {
    render(<Navbar />);

    NAV_LINKS.forEach(({ label, href }) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        href,
      );
    });
  });

  it('marks the section in view as current while scrolling', () => {
    renderWithSections();

    intersect(SECTION_IDS.INFO);

    expect(screen.getByRole('link', { name: 'Information' })).toHaveAttribute(
      'aria-current',
      'true',
    );

    intersect(SECTION_IDS.PROJECTS);

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'aria-current',
      'true',
    );
    expect(
      screen.getByRole('link', { name: 'Information' }),
    ).not.toHaveAttribute('aria-current');
  });

  it('marks Contact as the current page on the contact route', () => {
    vi.mocked(usePathname).mockReturnValue('/contact');

    render(<Navbar />);

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('toggles the mobile menu with the hamburger button', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole('button', { name: 'Open menu' });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAccessibleName('Close menu');

    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    const menu = document.getElementById('nav-menu');

    expect(menu).toBeInTheDocument();

    const [homeLink] = screen.getAllByRole('link', { name: 'Home' });
    await user.click(homeLink);

    expect(document.getElementById('nav-menu')).not.toBeInTheDocument();
  });

  it('closes the mobile menu on Escape', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole('button', { name: 'Open menu' }));

    expect(document.getElementById('nav-menu')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(document.getElementById('nav-menu')).not.toBeInTheDocument();
  });

  it('sets --navbar-height CSS custom property on mount', () => {
    const mockClientHeight = 64;

    Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
      configurable: true,
      value: mockClientHeight,
    });

    render(<Navbar />);

    const navbarHeight =
      document.documentElement.style.getPropertyValue('--navbar-height');

    expect(navbarHeight).toBe(`${mockClientHeight}px`);
  });
});
