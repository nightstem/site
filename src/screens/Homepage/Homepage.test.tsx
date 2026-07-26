import { axe } from 'vitest-axe';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Homepage from '@/screens/Homepage/Homepage';
import { SECTION_IDS } from '@/constants';

describe(Homepage, () => {
  it('composes the landing sections and the footer', () => {
    render(<Homepage />);

    Object.values(SECTION_IDS).forEach((id) => {
      expect(document.getElementById(id)).toBeInTheDocument();
    });

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('does not have accessibility violations', async () => {
    const { container } = render(<Homepage />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
