'use client';

import { useIntlayer } from 'next-intlayer';
import Title from '../Custom/Title';
import ProjectSection from '../Sections/ProjectSection';
import StorySection from '../Sections/StorySection';

const Mission = () => {
  const content = useIntlayer('mission-page-metadata');

  return (
    <main>
      <Title title={content.title.value} />
      <StorySection />
      <ProjectSection />
    </main>
  );
};

export default Mission;
