'use client';

import { Atom, BookOpenCheck, Cctv, Focus, Globe, ScanEye } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';

import FormattedText from '../Custom/FormattedText';

const Interconnectedness = () => {
  const id = 'interconnectedness';
  const sectionKey = 'interconnectedness';
  const content = useIntlayer(`${sectionKey}-section`);

  function getExperimentStepIcon(index: number): import('react').ReactNode {
    const size = 36;
    if (index == 0) {
      return <Cctv size={size} />;
    }
    if (index == 1) {
      return <Focus size={size} />;
    }
    if (index == 2) {
      return <BookOpenCheck size={size} />;
    }
    if (index == 3) {
      return <ScanEye size={size} />;
    }
  }

  return (
    <section className='relative max-w-screen mx-auto overflow-hidden'>
      {/* Decorative Elements */}
      <div className='-z-10 absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent' />

      <div className='moving-bg'></div>
      <div className='moving-bg moving-bg2'></div>
      <div className='moving-bg moving-bg3'></div>

      <div className='max-w-4xl mx-auto px-4'>
        <div className='mx-auto my-32 bg-white/80 rounded-2xl text-center'>
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 text-blue-600 transition-all duration-300 hover:scale-110`}
          >
            <Globe size={40} />
          </div>

          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight overflow-ellipsis`}
          >
            {content.title}
          </h2>
          <p className='text-xl sm:text-2xl lg:text-3xl font-bold italic text-gray-900 leading-tight whitespace-pre-line'>
            {content.subtitle}
          </p>

          <div className='relative'>
            <div className='absolute top-3 left-7 text-7xl text-emerald-600'>“</div>
            <FormattedText
              className='max-w-4xl m-10 px-8 sm:px-12 py-10 text-center text-lg sm:text-xl lg:text-2xl bg-white rounded-3xl'
              text={content.quote.value}
            />
            <div className='absolute -bottom-5 right-7 text-7xl text-emerald-600'>”</div>
          </div>

          <FormattedText
            className='max-w-4xl mx-auto px-6 sm:px-10 py-0 sm:py-5 text-left leading-relaxed text-md sm:text-lg md:text-xl text-black'
            text={content.description.value}
          />

          <div className='mt-16 mb-6 -ml-6 mr-6 rounded-xl bg-card text-card-foreground bg-gradient-to-br from-white to-gray-100 border-0 shadow-xl'>
            <div className='flex flex-col'>
              <div className='relative -top-8 left-1/2 p-8 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all'>
                <span className='font-bold text-2xl cursor-default animate-spin-slow'>
                  <Atom className='text-blue-600' size={40} />
                </span>
              </div>
              <h3 className='px-6 text-xl sm:text-2xl md:text-3xl text-left font-bold text-blue-900 mb-4 flex items-center gap-3'>
                {content.experiment.title}
              </h3>
              <p className='px-6 text-md sm:text-lg md:text-xl text-left  text-gray-900 mb-4 flex items-center gap-3'>
                {content.experiment.subtitle}
              </p>
            </div>

            <div className='p-6 text-left grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-10 text-sm sm:text-md md:text-lg'>
              {content.experiment.steps.map((step, index) => (
                <div>
                  <div className='relative -left-5 -top-2 flex flex-row items-center justify-start gap-1'>
                    <div className='relative -top-2 -right-3 text-right font-bold text-5xl text-purple-400/40'>
                      {index + 1}
                    </div>
                    <div className='relative -left-1'>{getExperimentStepIcon(index)}</div>
                    <div className='font-bold text-left text-lg sm:text-xl md:text-2xl'>{step.title}</div>
                  </div>
                  <div>{step.description}</div>
                </div>
              ))}
            </div>

            <p className='p-6 pt-4 text-md sm:text-lg md:text-xl text-blue-800 leading-relaxed  text-left'>
              {content.experiment.description}
            </p>
          </div>

          <FormattedText
            className='max-w-4xl mx-auto px-6 sm:px-10 py-8 text-left leading-relaxed text-md sm:text-lg md:text-xl text-black'
            text={content.paragraph1.value}
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='-z-10 absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
    </section>
  );
};

export default Interconnectedness;
