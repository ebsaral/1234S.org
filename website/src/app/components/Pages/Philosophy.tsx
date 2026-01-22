'use client';

import EndingSection from '@/app/components/Sections/EndingSection';
import { Health } from '@/app/components/Sections/Health';
import Hero from '@/app/components/Sections/Hero';
import { Interconnectedness } from '@/app/components/Sections/Interconnectedness';
import Intro from '@/app/components/Sections/Intro';
import { Justice } from '@/app/components/Sections/Justice';
import { useIntlayer } from 'next-intlayer';
import Title from '../Custom/Title';

const Philosophy = () => {
  const content = useIntlayer('philosophy-page-metadata');
  return (
    <main>
      <Title title={content.title.value} />
      <Hero />
      <Intro />
      <Interconnectedness />
      <Justice />
      <Health />
      <EndingSection id='ending' />
    </main>
  );
};

export default Philosophy;
