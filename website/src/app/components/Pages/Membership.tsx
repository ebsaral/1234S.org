'use client';

import MembershipSection from '@/app/components/Sections/MembershipSection';
import { useIntlayer } from 'next-intlayer';
import Title from '../Custom/Title';

const Membership = () => {
  const content = useIntlayer('membership-page-metadata');

  return (
    <main>
      <Title title={content.title.value} />
      <MembershipSection />
    </main>
  );
};

export default Membership;
