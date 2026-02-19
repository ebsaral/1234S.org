'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useIntlayer } from 'next-intlayer';
import { useEffect } from 'react';
import Title from '../Custom/Title';
import ServiceSection from '../Sections/Service';

const Service = () => {
  const content = useIntlayer('service-page-metadata');
  const { setActiveMenu } = useMenu();
  useEffect(() => {
    setActiveMenu({ root: 'support' });
  }, []);
  return (
    <main>
      <Title title={content.title.value} />
      <ServiceSection />
    </main>
  );
};

export default Service;
