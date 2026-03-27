'use client';

import { useIntlayer } from 'next-intlayer';
import { LuSun, LuTreePine } from 'react-icons/lu';

const Statement = ({ className }: { className?: string }) => {
  const sectionKey = 'justice';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <section className={`relative mx-auto py-12 px-6 ${className}`}>
      {/* fractal background */}
      <div className='absolute inset-0 bg-effect opacity-70' />

      <article className='relative z-10 prose-custom-all max-w-4xl mx-auto py-4 px-14 bg-green-100/90 rounded-2xl text-center text-lg sm:text-xl'>
        {/* Background Icon */}
        <LuSun
          className='
          absolute
          -top-[120px] -left-24
          z-20
          w-36 h-36
          text-yellow-400
          opacity-80
          translate-x-1/4 translate-y-1/4
          pointer-events-none
          select-none
        '
        />
        <LuTreePine
          className='
          absolute
          -bottom-[25px] right-[4px]
          w-28 h-28
          text-green-700
          opacity-80
          translate-x-1/4 translate-y-1/4
          pointer-events-none
          select-none
        '
        />
        {content.statement}
      </article>
    </section>
  );
};

export default Statement;
