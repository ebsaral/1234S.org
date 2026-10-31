'use client';

import { useIntlayer } from 'next-intlayer';

import Link from 'next/link';
import CustomFlower from '../Custom/CustomFlower';
import TeamMember from '../TeamMember';
import VideoModalPlayer from '../Custom/VideoModalPlayer';

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

      <div
        id='join'
        className='max-w-2xl mx-auto px-8 sm:px-8 mt-10 text-center text-gray-700 leading-relaxed flex flex-col items-center justify-center'
      >
        <div className='max-w-2xl font-bold text-lg sm:text-xl text-left sm:text-center'>{content.cofounder.title}</div>
        <div className='max-w-lg mt-4 text-sm sm:text-base text-left'>{content.cofounder.description}</div>
        <Link
          href={content.cofounder.href.value}
          className='relative z-10 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-lg font-semibold text-blue-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-purple-100 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 active:translate-y-0 active:scale-95 w-fit mt-6'
        >
          <div className='max-w-4xl mx-auto text-center'>{content.cofounder.label}</div>
        </Link>
      </div>

      <div className='mt-8'>
        <VideoModalPlayer
          videoSrc='https://youtube.com/shorts/-lVOTM2TiFE'
          title='YouTube Video'
          thumbnailSrc='/images/ebs-video-thumbnail-ai.png'
        />
      </div>

      <div className='sea -mt-24 z-0'>
        <div className='wave back' />
        <div className='wave' />
      </div>
    </section>
  );
};

export default Team;
