'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useIntlayer } from 'next-intlayer';
import { useEffect } from 'react';
import Title from '../Custom/Title';
import Project from '../Sections/Project';
import Story from '../Sections/Story';

const Mission = () => {
  const content = useIntlayer('mission-page-metadata');
  const { setActiveMenu } = useMenu();
  useEffect(() => {
    setActiveMenu({ root: 'mission' });
  }, []);

  return (
    <main>
      <Title title={content.title.value} />
      <Story />
      <Project />
    </main>
  );
};

export default Mission;
