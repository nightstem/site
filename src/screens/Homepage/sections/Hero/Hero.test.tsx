import { it, expect, describe } from 'vitest';
import { axe } from 'vitest-axe';
import { render, screen } from '@testing-library/react';

import Hero from '@/screens/Homepage/sections/Hero/Hero';
import { CONTACT_ROUTE, SECTION_IDS } from '@/constants';

describe(Hero, () => {
  it('matches the snapshot', () => {
    const { container } = render(<Hero />);

    expect(container).toMatchSnapshot();
  });

  it('does not have accessibility violations', async () => {
    const { container } = render(<Hero />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });

  it('renders the headline', () => {
    render(<Hero />);

    expect(
      screen.getByRole('heading', { level: 1, name: /quiet software/i }),
    ).toBeInTheDocument();
  });

  it('links the CTAs to the projects section and contact page', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: 'View projects' })).toHaveAttribute(
      'href',
      `#${SECTION_IDS.PROJECTS}`,
    );
    expect(screen.getByRole('link', { name: 'Contact →' })).toHaveAttribute(
      'href',
      CONTACT_ROUTE,
    );
  });
});
