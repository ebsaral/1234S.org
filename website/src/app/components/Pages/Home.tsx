'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { MarkdownProvider, useIntlayer } from 'next-intlayer';
import { useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import AnimatedLogo from '../Custom/AnimatedLogo';
import Title from '../Custom/Title';
import Research from '../Sections/Research';
import Team from '../Sections/Team';

const Home = () => {
  const metadata = useIntlayer('page-metadata');
  const content = useIntlayer('home-page');

  const { setActiveMenu } = useMenu();

  useEffect(() => {
    setActiveMenu({ root: 'home' });
  }, []);

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <main>
        <Title title={metadata.title.value} />
        <div className='stars-box text-center text-white pt-20 pb-10 px-8 sm:px-10 lg:px-12'>
          <div className='stars' />
          <AnimatedLogo />
          <article className='max-w-4xl mx-auto my-10 text-base sm:text-lg text-left leading-relaxed home-intro'>
            {content.intro}
          </article>

          <Research />
        </div>
        <Team />
      </main>
    </MarkdownProvider>
  );
};

export default Home;
