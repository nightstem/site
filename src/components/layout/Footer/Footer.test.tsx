import { it, expect, describe } from 'vitest';
import { axe } from 'vitest-axe';
import { render, screen } from '@testing-library/react';

import Footer from '@/components/layout/Footer/Footer';
import { GITHUB_ORG_URL, NPM_ORG_URL } from '@/constants';

describe(Footer, () => {
  it('matches the snapshot', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });

  it('does not have accessibility violations', async () => {
    const { container } = render(<Footer />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });

  it('links to the GitHub and npm orgs with accessible names', () => {
    render(<Footer />);

    expect(
      screen.getByRole('link', { name: 'Nightstem on GitHub' }),
    ).toHaveAttribute('href', GITHUB_ORG_URL);
    expect(
      screen.getByRole('link', { name: 'Nightstem on npm' }),
    ).toHaveAttribute('href', NPM_ORG_URL);
  });

  it('opens the external links in a new tab', () => {
    render(<Footer />);

    screen.getAllByRole('link').forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
