import '@testing-library/jest-dom/vitest';
import 'vitest-axe/extend-expect';

import * as matchers from 'vitest-axe/matchers';
import { expect, vi } from 'vitest';

expect.extend(matchers);

// jsdom does not implement IntersectionObserver; tests that need to drive
// the callback can override this stub with vi.stubGlobal.
vi.stubGlobal(
  'IntersectionObserver',
  class {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  },
);
