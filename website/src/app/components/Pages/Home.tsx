'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useEffect } from 'react';
import { useIntlayer } from 'react-intlayer';
import { MarkdownRenderer } from 'react-intlayer/markdown';

import AnimatedLogo from '../Custom/AnimatedLogo';
import MarkdownProvider from '../Custom/MarkdownProvider';
import Title from '../Custom/Title';
import Research from '../Sections/Research';
import Team from '../Sections/Team';
import Testimonials from '../Sections/Testimonials';

const Home = () => {
  const metadata = useIntlayer('page-metadata');
  const content = useIntlayer('home-page');

  const { setActiveMenu } = useMenu();

  useEffect(() => {
    setActiveMenu({ root: 'home' });
  }, []);

  return (
    <MarkdownProvider>
      <main>
        <Title title={metadata.title.value} />
        <div className='stars-box text-center text-white pt-20 pb-10 px-8 sm:px-10 lg:px-12'>
          <div className='stars' />
          <AnimatedLogo />
          <article className='max-w-4xl mx-auto my-10 text-base text-left leading-relaxed home-intro'>
            <MarkdownRenderer>{content.intro.value}</MarkdownRenderer>
          </article>

          <Research />
        </div>
        <Testimonials />
        <Team />
      </main>
    </MarkdownProvider>
  );
};

export default Home;
