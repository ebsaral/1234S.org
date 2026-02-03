'use client';
import { useMenu } from '@/app/hooks/useMenu';
import { Lightbulb } from 'lucide-react';
import { useIntlayer } from 'next-intlayer';
import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useScrollEffects';
import { Card, CardContent } from '../ui/card';

const EndingSection = ({ id }: { id: string }) => {
  const content = useIntlayer('ending-section');
  const ref = useRef(null);
  const { setActiveMenu } = useMenu();
  const [isIntersecting] = useIntersectionObserver(ref);

  useEffect(() => {
    if (isIntersecting) {
      setActiveMenu({ root: 'philosophy' });
    }
  }, [isIntersecting]);

  return (
    <section id={id} ref={ref} className='-mt-10 mb-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden'>
      <div className='group max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8'>
        <Card className='stars-box text-center bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white border-0 shadow-2xl max-w-4xl mx-auto'>
          <div className='stars' />

          <CardContent className='group px-12 pt-2 pb-8'>
            <div className='relative -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full w-12 h-12 group-hover:bg-yellow-500  group-hover:scale-110 duration-300 transition-all'>
              <span className='font-bold text-2xl cursor-default'>
                <Lightbulb className='text-gray-900 group-hover:text-white' size={28} />
              </span>
            </div>

            <blockquote className='text-md sm:text-lg lg:text-xl font-light leading-relaxed py-4'>
              {content.statement}
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EndingSection;
