import { it, expect, describe } from 'vitest';
import { axe } from 'vitest-axe';
import { render, screen } from '@testing-library/react';

import Information from '@/screens/Homepage/sections/Information/Information';
import { INFO_CARDS } from '@/screens/Homepage/sections/Information/constants';

describe(Information, () => {
  it('matches the snapshot', () => {
    const { container } = render(<Information />);

    expect(container).toMatchSnapshot();
  });

  it('does not have accessibility violations', async () => {
    const { container } = render(<Information />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });

  it('renders a card per capability', () => {
    render(<Information />);

    INFO_CARDS.forEach(({ title }) => {
      expect(
        screen.getByRole('heading', { level: 3, name: title }),
      ).toBeInTheDocument();
    });
  });
});
