'use client';

import { useIntlayer } from 'next-intlayer';
import Title from '../Custom/Title';
import MembershipSection from '../Sections/Membership';

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
