'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useIntlayer } from 'next-intlayer';
import { useEffect } from 'react';
import Title from '../Custom/Title';
import MembershipSection from '../Sections/Membership';

const Membership = () => {
  const content = useIntlayer('membership-page-metadata');
  const { setActiveMenu } = useMenu();
  useEffect(() => {
    setActiveMenu({ root: 'membership' });
  }, []);
  return (
    <main>
      <Title title={content.title.value} />
      <MembershipSection />
    </main>
  );
};

export default Membership;
