'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';

import { LuFileBadge, LuGlobe } from 'react-icons/lu';
import { getAge } from '../lib/utils';
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
      className={`bg-white/90 backdrop-blur-sm shadow-xl border-0 flex flex-col justify-start items-center pt-6 pb-3 px-4 ${hasDescription && 'col-span-1 md:col-span-2'}`}
    >
      <Tooltip id='tooltip' className='max-w-80' />
      <div
        className={`grid ${hasDescription ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} items-start justify-center mt-2`}
      >
        <CardContent className='group flex flex-col items-center justify-between gap-6'>
          <Link
            className={`rounded-full ${member.spin ? 'shadow-lg shadow-rose-500/60' : 'shadow-lg shadow-gray-500/60'} transition-all duration-300`}
            href={member.image.src.value}
            alt={`${member.name.value}: ${member.title?.value}`}
            title={imageTitle()}
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
          </Link>
          <div className='flex flex-col items-center gap-1'>
            <p className='text-center text-md sm:text-lg'>{member.name}</p>
            {member.profession && (
              <em>
                <Description size='text-sm sm:text-md text-center' text={member.profession.value} />
              </em>
            )}
            {member.links && (
              <div className='inline-flex gap-4 items-center justify-center text-center text-sm sm:text-md font-thin [&>a]:text-gray-800'>
                {member.links[0] && (
                  <Link
                    className='p-2 inline-flex items-center justify-center hover:text-purple-900'
                    href={member.links[0].href.value}
                    title={member.links[0].text.value}
                  >
                    <LuGlobe size={20} />
                  </Link>
                )}
                {member.links[1] && (
                  <Link
                    className='p-2 inline-flex items-center justify-center hover:text-purple-900'
                    href={member.links[1].href.value}
                    title={member.links[1].text.value}
                  >
                    <LuFileBadge size={20} />
                  </Link>
                )}
              </div>
            )}
          </div>
        </CardContent>

        <CardContent className='flex flex-col justify-center items-center gap-4 pt-0'>
          {member.description && (
            <div className='flex flex-col gap-4 text-sm sm:text-md text-gray-800 leading-relaxed text-left'>
              {member.description}
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default TeamMember;
