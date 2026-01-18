'use client';

import { useIntlayer } from 'next-intlayer';

import FormattedText from '@/app/components/Custom/FormattedText';
import {
  Activity,
  CheckCircle,
  Cloud,
  FerrisWheel,
  Flower,
  Frown,
  LoaderPinwheel,
  Scale,
  ScanHeart,
  Smile,
  Sun,
  XCircle,
} from 'lucide-react';
import TeamMember from '../TeamMember';

const Team = () => {
  const id = 'team';
  const sectionKey = 'team';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <section id={id} className='relative max-w-screen mx-auto overflow-hidden bg-rose-500'>
      <div className={`absolute inset-0 bg-gradient-to-br from-rose-500 to-yellow-50 opacity-80'}`} />

      <div className='max-w-4xl mx-auto px-4'>
        <div className='relative mx-auto my-16 pb-1 rounded-2xl text-center'>
          <div
            className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 transition-all duration-300 hover:scale-110`}
          >
            <Flower className='text-rose-600' size={40} />
          </div>

          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight overflow-ellipsis`}
          >
            {content.title}
          </h2>

          <FormattedText
            className='max-w-4xl mx-auto px-6 sm:px-10 py-0 text-center leading-relaxed text-md sm:text-lg md:text-xl text-black'
            text={content.description.value}
          />
        </div>
      </div>

      {content.members && content.members.length && (
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 px-8 sm:px-20 justify-stretch items-top gap-4 z-10 relative'>
          {content.members.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      )}

      <div className='sea -mt-48 sm:-mt-36 z-0'>
        <div className='wave back' />
        <div className='wave' />
      </div>
    </section>
  );
};

export default Team;
