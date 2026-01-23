'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useIntlayer } from 'next-intlayer';
import { useEffect } from 'react';
import Title from '../Custom/Title';
import ProjectSection from '../Sections/ProjectSection';
import StorySection from '../Sections/StorySection';

const Mission = () => {
  const content = useIntlayer('mission-page-metadata');
  const { setActiveMenu } = useMenu();
  useEffect(() => {
    setActiveMenu({ root: 'mission' });
  }, []);

  return (
    <main>
      <Title title={content.title.value} />
      <StorySection />
      <ProjectSection />
    </main>
  );
};

export default Mission;
