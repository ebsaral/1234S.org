'use client';

import Image from 'next/image';

import { getAge } from '../lib/utils';
import JoinLink from './Custom/Buttons/JoinLink';
import Description from './Custom/Description';
import { Card, CardContent } from './ui/card';

const TeamMember = ({ member, index = 0 }) => {
  const hasDescription = index === 0;

  const imageTitle = () => {
    if (member.spin) {
      return '';
    }

    if (member.birthday) {
      const age = getAge(member.birthday.year.value, member.birthday.month.value, member.birthday.day.value);

      return `${member.name.value} (${age})`;
    }

    return member.name.value;
  };
  return (
    <Card
      className={`bg-white/90 backdrop-blur-sm shadow-xl border-0 flex flex-col justify-start items-center pt-2 ${hasDescription && 'col-span-1 md:col-span-2'}`}
    >
      <div
        className={`grid ${hasDescription ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} items-start justify-center mt-2`}
      >
        <CardContent className='group flex flex-col items-center justify-between gap-4'>
          {member.title ? (
            <div className=' border-gray-200 text-center text-gray-800 text-xs font-bold px-5 py-2 rounded bg-gray-100 min-w-44'>
              {member.title}
            </div>
          ) : (
            <div className='sm:py-4'></div>
          )}
          <div
            className={`rounded-full ${member.spin ? 'shadow-lg shadow-rose-500/60' : 'shadow-lg shadow-gray-500/60'} transition-all duration-300`}
          >
            <Image
              className={`size-[120px] sm:size-[120px] rounded-full ${member.spin ? 'animate-spin hover:animate-spin-slow hover:scale-105' : 'hover:scale-105 transition-transform duration-300'}`}
              src={member.image.src.value}
              alt={`${member.name.value}: ${member.title?.value}`}
              title={imageTitle()}
              width={member.image.size.value}
              height={member.image.size.value}
              priority={false}
            />
          </div>
          <div className='flex flex-col items-center gap-1'>
            <p className='text-center text-md sm:text-lg'>{member.name}</p>
            {member.profession && (
              <em>
                <Description size='text-sm sm:text-md text-center' text={member.profession.value} />
              </em>
            )}
            {member.experience && (
              <div className='flex flex-col items-center justify-center gap-1  border-emerald-200 text-emerald-800 text-xs mt-2 px-5 py-2 rounded bg-emerald-400/10 min-w-44'>
                <div className='font-bold'>{member.experience.badge}</div>
                <div>{member.experience.title}</div>
              </div>
            )}
            {member.join && <JoinLink className='mt-12' />}
          </div>
        </CardContent>

        <CardContent className='flex flex-col justify-center items-center gap-4 pt-0'>
          {member.description && <Description size='text-sm sm:text-md' text={member.description.value} />}
          {member.links && (
            <p className='text-center text-sm sm:text-md'>
              {member.links[0].name}:{' '}
              <a className='underline underline-offset-2 hover:no-underline' href={member.links[0].href.value}>
                {member.links[0].href}
              </a>
            </p>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default TeamMember;
