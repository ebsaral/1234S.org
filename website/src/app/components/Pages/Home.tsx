'use client';

import { useIntlayer } from 'next-intlayer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BlueButton from '../Custom/Buttons/BlueButton';
import SupportLink from '../Custom/Buttons/SupportLink';
import FormattedText from '../Custom/FormattedText';
import Title from '../Custom/Title';
import useScreenSize, { ScreenSize } from '../Hooks/useScreenSize';
import TeamSection from '../Sections/TeamSection';

const Home = () => {
  const metadata = useIntlayer('page-metadata');
  const content = useIntlayer('home-page');
  const screenSize = useScreenSize();

  const [logoSize, setLogoSize] = useState(0);
  const MAX_SIZE = 260;
  const MID_SIZE = 220;
  const MIN_SIZE = 180;
  const IMG_MARGIN = 40;

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
    <main>
      <Title title={metadata.title.value} />
      <div className='stars-box text-center text-white pt-20 pb-10 px-8 sm:px-10 lg:px-12'>
        <div className='stars' />
        {/* Logo */}
        <div
          className={`relative flex items-center justify-center caret-transparent`}
          style={{ minHeight: MAX_SIZE + IMG_MARGIN }}
        >
          {screenSize != ScreenSize.z && (
            <Image
              className='m-10 rounded-full animate-zoom-spin'
              src='/logos/logo-bg-white.png'
              title={content.title.value}
              alt={content.title.value + ' Logo'}
              priority={false}
              width={logoSize}
              height={logoSize}
            />
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
        <h1 className='max-w-3xl mx-auto text-left sm:text-center text-gray-100 text-3xl sm:text-5xl tracking-wide font-semibold my-10'>
          {content.title}
        </h1>
        <div className='max-w-4xl mx-auto mt-6 text-left text-gray-200 text-base sm:text-lg whitespace-pre-line'>
          <FormattedText text={content.intro.value} />
        </div>

        {screenSize != ScreenSize.z && screenSize == ScreenSize.sm && (
          <div className='text-right mt-12 -mb-10'>
            <BlueButton className='' text={content.readMore.text.value} href={content.readMore.href.value} />
          </div>
        )}

        <hr className='my-20 w-full rotate-6 sm:rotate-2 md:rotate-0'></hr>

        <h2 className='my-10 text-left sm:text-center text-2xl sm:text-3xl font-bold text-amber-200'>
          {content.projects.title}
        </h2>
        <FormattedText
          className='mx-auto max-w-3xl text-left sm:text-center text-gray-100'
          text={content.projects.description.value}
        />

        <div className='mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {content.projects.items.map((item, index) => (
            <div
              key={index}
              className='bg-gray-700 rounded-lg p-6 text-left hover:scale-105 transition-transform duration-300'
            >
              <h3 className='text-lg sm:text-xl font-semibold mb-4 text-amber-200'>{item.title}</h3>
              <p className='text-base sm:text-md text-gray-200 whitespace-pre-line'>{item.subtitle}</p>
            </div>
          ))}
        </div>

        <SupportLink className='max-w-max mx-auto md:hidden mt-10  text-xl' />
      </div>
      <TeamSection />
    </main>
  );
};

export default Home;
