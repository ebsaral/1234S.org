'use client';

import EndingSection from '@/app/components/Sections/EndingSection';
import { FAQ } from '@/app/components/Sections/FAQ';
import { Health } from '@/app/components/Sections/Health';
import Hero from '@/app/components/Sections/Hero';
import { Interconnectedness } from '@/app/components/Sections/Interconnectedness';
import Intro from '@/app/components/Sections/Intro';
import { Justice } from '@/app/components/Sections/Justice';
import { useMenu } from '@/app/hooks/useMenu';
import { useIntlayer } from 'next-intlayer';
import { useEffect } from 'react';
import LastUpdate from '../Custom/LastUpdate';
import Title from '../Custom/Title';

const Philosophy = () => {
  const content = useIntlayer('philosophy-page-metadata');
  const navigation = useIntlayer('navigation');
  const { setActiveMenu } = useMenu();
  useEffect(() => {
    setActiveMenu({ root: 'philosophy' });
  }, []);
  return (
    <main>
      <Title title={content.title.value} />
      <Hero />
      <Intro id={navigation.intro.hash.value} />
      <Interconnectedness id={navigation.interconnectedness.hash.value} />
      <Justice id={navigation.justice.hash.value} />
      <Health id={navigation.health.hash.value} />
      <EndingSection id='ending' />
      <FAQ id={navigation.faq.hash.value} />
      <LastUpdate className='max-w-4xl mx-auto px-6 mb-16 text-gray-800 text-center' date={new Date('2026-02-16')} />
    </main>
  );
};

export default Philosophy;
