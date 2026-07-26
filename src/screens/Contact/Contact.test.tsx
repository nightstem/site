import { it, expect, describe } from 'vitest';
import { axe } from 'vitest-axe';
import { render, screen } from '@testing-library/react';

import Contact from '@/screens/Contact/Contact';
import { CONTACT_MAILTO } from '@/constants';

describe(Contact, () => {
  it('matches the snapshot', () => {
    const { container } = render(<Contact />);

    expect(container).toMatchSnapshot();
  });

  it('does not have accessibility violations', async () => {
    const { container } = render(<Contact />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });

  it('links the CTA to the contact email', () => {
    render(<Contact />);

    expect(
      screen.getByRole('link', { name: 'Send us an email' }),
    ).toHaveAttribute('href', CONTACT_MAILTO);
  });
});
