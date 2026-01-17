'use client';

import { useIntlayer } from 'next-intlayer';
import Title from '../Custom/Title';
import SupportOptionsSection from '../Sections/SupportOptionsSection';
import SupportTopicsSection from '../Sections/SupportTopicsSection';

const Support = () => {
  const content = useIntlayer('support-page-metadata');

  return (
    <main>
      <Title title={content.title.value} />
      <SupportTopicsSection />
      <SupportOptionsSection />
    </main>
  );
};

export default Support;
