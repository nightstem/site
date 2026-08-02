import { CONTACT_ROUTE, SECTION_IDS } from '@/constants';

export const NAV_LINKS = [
  {
    label: 'Home',
    href: `/#${SECTION_IDS.HOME}`,
    sectionId: SECTION_IDS.HOME,
  },
  {
    label: 'Information',
    href: `/#${SECTION_IDS.INFO}`,
    sectionId: SECTION_IDS.INFO,
  },
  {
    label: 'Projects',
    href: `/#${SECTION_IDS.PROJECTS}`,
    sectionId: SECTION_IDS.PROJECTS,
  },
  { label: 'Contact', href: CONTACT_ROUTE, sectionId: null },
] as const;
