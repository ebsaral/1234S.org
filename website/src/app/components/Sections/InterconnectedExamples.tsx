'use client';

import { Atom } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';

const InterconnectedExamples = ({ className = '' }: { className?: string }) => {
  const content = useIntlayer('interconnectedness-section');

  return (
    <div
      className={`p-4 pb-0 rounded-xl bg-card text-card-foreground bg-gradient-to-br from-white to-gray-100 border-0 shadow-xl ${className}`}
    >
      <div className='flex flex-col'>
        <div className='relative -top-12 left-1/2 p-8 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all'>
          <span className='font-bold text-2xl cursor-default animate-spin-slow'>
            <Atom className='text-purple-900' size={32} />
          </span>
        </div>

        <h3 className='px-6 text-xl sm:text-2xl md:text-3xl text-left font-bold text-purple-900 mb-4 flex items-center gap-3'>
          {content.examples.title}
        </h3>
        <p className='px-6 text-md sm:text-lg md:text-xl text-left  text-gray-900 mb-4 flex items-center gap-3'>
          {content.examples.subtitle}
        </p>
      </div>

      <div className='my-6 p-6 text-left grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-10 text-sm sm:text-md md:text-lg'>
        {content.examples.items.map((item, index) => (
          <div key={index}>
            <div className='relative -left-5 -top-2 flex flex-row items-center justify-start gap-1'>
              <div className='relative -top-[10px] -right-3 text-right font-bold text-5xl text-blue-200/90'>
                {index + 1}
              </div>
              <div className='z-10 font-bold text-left text-lg sm:text-xl md:text-2xl'>{item.title}</div>
            </div>
            <div>{item.description}</div>
          </div>
        ))}
        <div className='p-6 pt-0 text-purple-800 leading-relaxed text-left'>{content.examples.description}</div>
      </div>
    </div>
  );
};

export default InterconnectedExamples;
