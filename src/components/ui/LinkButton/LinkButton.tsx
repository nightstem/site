import Link from 'next/link';
import {
  LinkButton as BaseLinkButton,
  type LinkButtonProps,
} from '@nightstem/ui';

export type { LinkButtonProps };

/**
 * Site-level wrapper around `@nightstem/ui`'s `LinkButton`.
 * Defaults `linkComponent` to Next.js `Link` so internal navigation
 * works without passing the prop at every call site.
 *
 * For plain anchors (external links, page reloads) override with:
 * `<LinkButton linkComponent="a" href="..." />`
 */
const LinkButton = ({ linkComponent = Link, ...props }: LinkButtonProps) => (
  <BaseLinkButton linkComponent={linkComponent} {...props} />
);

export default LinkButton;
