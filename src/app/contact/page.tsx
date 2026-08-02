import type { Metadata } from 'next';

import { Contact } from '@/screens/Contact';

export const metadata: Metadata = {
  title: 'Contact — Nightstem',
  description: 'Get in touch with Nightstem.',
};

export default function ContactPage() {
  return <Contact />;
}
