'use client';

import { useIntlayer } from 'next-intlayer';

import Link from 'next/link';
import CustomFlower from '../Custom/CustomFlower';
import TeamMember from '../TeamMember';

const Team = () => {
  const id = 'team';
  const sectionKey = 'team';
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <section
      id={id}
      className='relative max-w-screen mx-auto overflow-hidden bg-gradient-to-b from-gray-50 to-gray-200'
    >
      <div className='max-w-4xl mx-auto px-4'>
        <div className='relative mx-auto mt-8 mb-12 pb-1 rounded-2xl text-center'>
          <CustomFlower />

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

      <div className='relative z-10 flex items-center justify-center max-w-4xl mx-auto mt-10'>
        <Link
          href={content.cofounder.href.value}
          className={`text-center font-medium p-4 b-1 border-gray-900 text-gray-100 bg-gray-800 hover:bg-gray-900 ring-1 ring-gray-200 ring-offset-1 rounded-lg transition-all duration-200 ease-in-out`}
        >
          {content.cofounder.label}
        </Link>
      </div>

      <div className='sea -mt-24 z-0'>
        <div className='wave back' />
        <div className='wave' />
      </div>
    </section>
  );
};

export default Team;
