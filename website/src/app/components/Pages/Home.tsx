'use client';

import { MarkdownProvider, useIntlayer } from 'next-intlayer';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useScreenSize, { ScreenSize } from '../../hooks/useScreenSize';
import BlueButton from '../Custom/Buttons/BlueButton';
import SupportLink from '../Custom/Buttons/SupportLink';
import Title from '../Custom/Title';
import Team from '../Sections/Team';

const Home = () => {
  const metadata = useIntlayer('page-metadata');
  const content = useIntlayer('home-page');
  const screenSize = useScreenSize();

  const [logoSize, setLogoSize] = useState(0);
  const MAX_SIZE = 260;
  const MID_SIZE = 220;
  const MIN_SIZE = 180;
  const IMG_MARGIN = 40;

  const [svg, setSvg] = useState('');

  useEffect(() => {
    fetch(content.logo.href.value)
      .then((r) => r.text())
      .then(setSvg);
  }, []);

  useEffect(() => {
    if (screenSize == ScreenSize.sm) {
      setLogoSize(MIN_SIZE);
    } else if (screenSize == ScreenSize.md) {
      setLogoSize(MID_SIZE);
    } else if (screenSize == ScreenSize.lg) {
      setLogoSize(MID_SIZE);
    } else if (screenSize == ScreenSize.xl) {
      setLogoSize(MAX_SIZE);
    } else if (screenSize == ScreenSize['2xl']) {
      setLogoSize(MAX_SIZE);
    } else {
      setLogoSize(0);
    }
  }, [screenSize]);

  const getOrbitOnCircleAnimation = () => {
    if (screenSize == ScreenSize.sm) {
      return 'animate-orbitOnCircle1';
    } else if (screenSize == ScreenSize.md || screenSize == ScreenSize.lg) {
      return 'animate-orbitOnCircle2';
    } else if (screenSize == ScreenSize.xl || screenSize == ScreenSize['2xl']) {
      return 'animate-orbitOnCircle3';
    }
    return 'animate-orbitOnCircle3';
  };

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <main>
        <Title title={metadata.title.value} />
        <div className='stars-box text-center text-white pt-20 pb-10 px-8 sm:px-10 lg:px-12'>
          <div className='stars' />
          {/* Logo */}
          <div
            className={`relative inline-flex items-center justify-center caret-transparent`}
            style={{ minHeight: MAX_SIZE + IMG_MARGIN }}
          >
            <div className='absolute inset-0 rounded-full bg-blue-950 blur-3xl opacity-60 animate-[pulse_3s_ease-in-out_infinite] p-50' />
            {screenSize != ScreenSize.z && (
              <div className='m-10 intro-zoom-breathe relative' style={{ width: logoSize, height: logoSize }}>
                {/* glow behind */}
                <div
                  className='absolute inset-0 glow-pulse pointer-events-none'
                  dangerouslySetInnerHTML={{ __html: svg }}
                />

                {/* clean svg on top */}
                <div className='relative z-10' dangerouslySetInnerHTML={{ __html: svg }} />
              </div>
            )}

            {/* Orbit container */}
            <div className='absolute inset-0 flex items-center justify-center'>
              {/* Dot 1 */}
              <span className='absolute w-3 h-3 rounded-full bg-cyan-400 blur-sm animate-orbitSlow animate-glow' />
              <span className='absolute w-2 h-2 rounded-full bg-blue-500 blur-sm animate-orbitMid animate-glow' />
              <span className='absolute w-4 h-4 rounded-full bg-orange-400 blur-sm animate-orbitFast animate-glow' />
              <span className='absolute w-2 h-2 rounded-full bg-yellow-400 blur-sm animate-orbitSlow animate-glow' />
              <span
                className='
        absolute w-2.5 h-2.5 rounded-full bg-green-400 blur-sm
        animate-orbitMid animate-glow
        [animation-delay:-2s]
      '
              />
              <span
                className={`
        absolute w-2 h-2 rounded-full bg-indigo-400 blur-sm
        ${getOrbitOnCircleAnimation()} animate-glow
        [animation-delay:-1s]
      `}
              />
            </div>
          </div>
          <article className='home-intro max-w-4xl mx-auto flex flex-col items-start sm:items-center justify-stretch my-10 gap-10'>
            {content.title}
            {content.intro}
          </article>

          {screenSize != ScreenSize.z && screenSize == ScreenSize.sm && (
            <div className='text-right mt-12 -mb-10'>
              <BlueButton className='' text={content.readMore.text.value} href={content.readMore.href.value} />
            </div>
          )}

          <hr className='my-20 w-full rotate-6 sm:rotate-2 md:rotate-0'></hr>

          <article className='max-w-5xl mx-auto w-full home-research'>
            <div className='max-w-4xl mx-auto flex flex-col gap-10'>
              {content.projects.title}
              {content.projects.description}
            </div>

            <div className='max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {content.projects.items.map((item, index) => (
                <div
                  key={index}
                  className='item flex flex-col gap-6 bg-gray-700 rounded-lg p-6 text-left hover:scale-105 transition-transform duration-300'
                >
                  {item.title}
                  {item.subtitle}
                </div>
              ))}
            </div>
          </article>
          <SupportLink className='max-w-max mx-auto md:hidden mt-10  text-xl' />
        </div>
        <Team />
      </main>
    </MarkdownProvider>
  );
};

export default Home;
