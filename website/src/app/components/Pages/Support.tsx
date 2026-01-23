'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useIntlayer } from 'next-intlayer';
import { useEffect } from 'react';
import Title from '../Custom/Title';
import SupportOptionsSection from '../Sections/SupportOptionsSection';
import SupportTopicsSection from '../Sections/SupportTopicsSection';

const Support = () => {
  const content = useIntlayer('support-page-metadata');
  const { setActiveMenu } = useMenu();
  useEffect(() => {
    setActiveMenu({ root: 'support' });
  }, []);
  return (
    <main>
      <Title title={content.title.value} />
      <SupportTopicsSection />
      <SupportOptionsSection />
    </main>
  );
};

export default Support;
