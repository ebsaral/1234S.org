'use client';

import { useIntlayer } from 'next-intlayer';

import CustomFlower from '../Custom/CustomFlower';
import TeamMember from '../TeamMember';

const Team = () => {
  const id = 'team';
  const sectionKey = 'team';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <section id={id} className='relative max-w-screen mx-auto overflow-hidden bg-gray-500'>
      <div className={`absolute inset-0 bg-gradient-to-b from-gray-100 to-blue-400 opacity-80'}`} />

      <div className='max-w-4xl mx-auto px-4'>
        <div className='relative mx-auto my-16 pb-1 rounded-2xl text-center'>
          <div
            className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 shadow-lg my-8 transition-all duration-300 hover:scale-110 hover:bg-white/100`}
          >
            <CustomFlower />
          </div>

          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900  leading-tight overflow-ellipsis`}>
            {content.title}
          </h2>
        </div>
      </div>

      {content.members && content.members.length && (
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 px-8 sm:px-20 justify-stretch items-top gap-4 z-10 relative'>
          {content.members.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      )}

      <div className='sea -mt-28 sm:-mt-28 z-0'>
        <div className='wave back' />
        <div className='wave' />
      </div>
    </section>
  );
};

export default Team;
