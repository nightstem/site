import { it, expect, describe } from 'vitest';
import { axe } from 'vitest-axe';
import { render, screen } from '@testing-library/react';

import Projects from '@/screens/Homepage/sections/Projects/Projects';
import { REPOS } from '@/screens/Homepage/sections/Projects/constants';
import { PILL_THEME } from '@/screens/Homepage/sections/Projects/themes';

describe(Projects, () => {
  it('matches the snapshot', () => {
    const { container } = render(<Projects />);

    expect(container).toMatchSnapshot();
  });

  it('does not have accessibility violations', async () => {
    const { container } = render(<Projects />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });

  it('renders a linked card per repo', () => {
    render(<Projects />);

    REPOS.forEach(({ name, href }) => {
      const heading = screen.getByRole('heading', { level: 3, name });

      expect(heading.closest('a')).toHaveAttribute('href', href);
    });
  });

  it('styles the status pill by repo status', () => {
    render(<Projects />);

    REPOS.forEach(({ status }) => {
      const [pillClassName] = PILL_THEME[status].split(' ');

      screen.getAllByText(status).forEach((pill) => {
        expect(pill).toHaveClass(pillClassName);
      });
    });
  });

  it('opens every repo link in a new tab', () => {
    render(<Projects />);

    screen.getAllByRole('link').forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('merges a custom className onto the section', () => {
    render(<Projects className="flex-1" />);

    expect(document.getElementById('ns-projects')).toHaveClass('flex-1');
  });
});
