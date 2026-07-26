import { axe } from 'vitest-axe';
import { expect, describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';

import BaseLayout from '@/components/layout/BaseLayout/BaseLayout';

describe(BaseLayout, () => {
  it('composes the navbar and its children', () => {
    render(
      <BaseLayout>
        <p>Page content</p>
      </BaseLayout>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Page content')).toBeInTheDocument();
  });

  it('does not have accessibility violations', async () => {
    const { container } = render(<BaseLayout />);
    const result = await act(() => axe(container));

    expect(result).toHaveNoViolations();
  });
});
