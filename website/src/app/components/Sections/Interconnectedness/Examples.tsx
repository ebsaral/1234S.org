'use client';

import { Atom } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';

const Examples = ({ className = '' }: { className?: string }) => {
  const content = useIntlayer('interconnectedness-section');

  return (
    <article
      className={`prose-custom-all p-4 pb-0 rounded-xl bg-card text-card-foreground bg-gradient-to-br from-white to-gray-100 border-0 shadow-xl ${className}`}
    >
      <div className='flex flex-col'>
        <div className='relative -top-12 left-1/2 p-8 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all'>
          <span className='font-bold text-2xl cursor-default animate-spin-slow'>
            <Atom className='text-purple-900' size={32} />
          </span>
        </div>

        <h3 className='px-6 font-bold text-purple-900 -mt-4 mb-4'>{content.examples.title}</h3>
        <p className='px-6 text-left  text-gray-900 mb-4'>{content.examples.subtitle}</p>
      </div>

      <div className='p-6 text-left grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10'>
        {content.examples.items.map((item, index) => (
          <div key={index}>
            <h4 className='relative -left-5 -top-2 flex flex-row items-center justify-start gap-1'>
              <div className='relative -right-3 text-right font-bold text-5xl text-blue-200/90'>{index + 1}</div>
              <div className='z-10 font-bold text-left'>{item.title}</div>
            </h4>
            <p>{item.description}</p>
          </div>
        ))}
        <div className='pl-0 sm:pl-6 flex flex-col items-center justify-start leading-relaxed text-left font-bold'>
          <p className='text-2xl sm:text-3xl text-center mx-0 my-5 text-gray-600'>...</p>
          <p className='text-purple-800'>{content.examples.description}</p>
        </div>
      </div>
    </article>
  );
};

export default Examples;
