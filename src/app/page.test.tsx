import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Page from '@/app/page';

vi.mock('@/screens/Homepage', () => ({
  Homepage: vi.fn(() => (
    <div data-testid="homepage-component">Homepage Component</div>
  )),
}));

describe(Page, () => {
  it('renders the Homepage screen', () => {
    render(<Page />);

    expect(screen.getByTestId('homepage-component')).toBeInTheDocument();
  });
});
