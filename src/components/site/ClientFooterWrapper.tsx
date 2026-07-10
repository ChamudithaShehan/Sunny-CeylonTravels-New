'use client';

import { usePathname } from 'next/navigation';
import { Newsletter, CTA } from '@/components/site/NewsletterAndCTA';

export function ClientFooterWrapper() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  return (
    <>
      <Newsletter />
      {!isContactPage && <CTA />}
    </>
  );
}
