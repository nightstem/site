import { ReactNode } from 'react';

import Navbar from '@/components/layout/Navbar';

export type BaseLayoutProps = {
  children?: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <div className="h-dvh w-dvw overflow-y-auto motion-safe:scroll-smooth">
    <Navbar />
    {children}
  </div>
);

export default BaseLayout;
