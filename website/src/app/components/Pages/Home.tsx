'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useEffect } from 'react';
import { useIntlayer } from 'react-intlayer';
import { MarkdownRenderer } from 'react-intlayer/markdown';

import AnimatedLogo from '../Custom/AnimatedLogo';
import MarkdownProvider from '../Custom/MarkdownProvider';
import Title from '../Custom/Title';
import Action from '../Sections/Action';
import Project from '../Sections/Project';
import Research from '../Sections/Research';
import Story from '../Sections/Story';
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
        <div className='stars-box text-center text-white pt-20'>
          <div className='stars' />
          <AnimatedLogo />

          <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold leading-tight overflow-ellipsis text-white px-6'>
            {content.title}
          </h1>

          <article className='max-w-5xl mx-auto mt-12 mb-28 text-base text-center leading-relaxed home-intro !px-6 sm:!px-6 md:!px-6 lg:!px-16'>
            <MarkdownRenderer>{content.description.value}</MarkdownRenderer>
          </article>

          <Story />
          <Research />
          <Project />

          <Action />
        </div>
        <Testimonials />
        <Team />
      </main>
    </MarkdownProvider>
  );
};

export default Home;
