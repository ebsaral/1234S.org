'use client';

import EndingSection from '@/app/components/Sections/EndingSection';
import HealthSection from '@/app/components/Sections/HealthSection';
import Hero from '@/app/components/Sections/Hero';
import Interconnectedness from '@/app/components/Sections/Interconnectedness';
import Intro from '@/app/components/Sections/Intro';
import JusticeSection from '@/app/components/Sections/JusticeSection';
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
      <JusticeSection />
      <HealthSection />
      <EndingSection id='ending' />
    </main>
  );
};

export default Philosophy;
