'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useEffect } from 'react';
import { useIntlayer } from 'react-intlayer';
import MarkdownProvider from '../Custom/MarkdownProvider';
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
    <MarkdownProvider>
      <main>
        <Title title={content.title.value} />
        <Story />
        <Project />
      </main>
    </MarkdownProvider>
  );
};

export default Mission;
