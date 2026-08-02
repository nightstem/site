import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ContactPage, { metadata } from '@/app/contact/page';

vi.mock('@/screens/Contact', () => ({
  Contact: vi.fn(() => (
    <div data-testid="contact-component">Contact Component</div>
  )),
}));

describe(ContactPage, () => {
  it('renders the Contact screen', () => {
    render(<ContactPage />);

    expect(screen.getByTestId('contact-component')).toBeInTheDocument();
  });

  it('exports page metadata', () => {
    expect(metadata).toStrictEqual({
      title: 'Contact — Nightstem',
      description: 'Get in touch with Nightstem.',
    });
  });
});
