'use client';

import Image from 'next/image';

import { getAge } from '../lib/utils';
import CustomMarkdownLink from './Custom/CustomMarkdownLink';
import Description from './Custom/Description';
import { Card, CardContent } from './ui/card';

import { MarkdownProvider } from 'react-intlayer';
import Markdown from 'react-markdown';
import { Tooltip } from 'react-tooltip';
import remarkAttrs from 'remark-attrs';
import remarkGfm from 'remark-gfm';

import { FileBadge, Globe } from 'lucide-react';

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

  const components = {
    a: CustomMarkdownLink,
  };

  return (
    <MarkdownProvider
      renderMarkdown={(markdown) => (
        <Markdown remarkPlugins={[remarkGfm, remarkAttrs]} components={components}>
          {markdown}
        </Markdown>
      )}
    >
      <Card
        className={`bg-white/90 backdrop-blur-sm shadow-xl border-0 flex flex-col justify-start items-center py-6 ${hasDescription && 'col-span-1 md:col-span-2'}`}
      >
        <Tooltip id='tooltip' className='max-w-80' />
        <div
          className={`grid ${hasDescription ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} items-start justify-center mt-2`}
        >
          <CardContent className='group flex flex-col items-center justify-between gap-4'>
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
            <div className='flex flex-col items-center gap-2'>
              <p className='text-center text-md sm:text-lg'>{member.name}</p>
              {member.profession && (
                <em>
                  <Description size='text-sm sm:text-md text-center' text={member.profession.value} />
                </em>
              )}
              {member.experience && (
                <div className='flex flex-col items-center justify-center gap-1  border-emerald-200 text-emerald-800 text-xs mt-2 px-5 py-3 rounded bg-emerald-400/10 min-w-44'>
                  <div className='font-bold'>{member.experience.badge}</div>
                  <div>{member.experience.title}</div>
                </div>
              )}
              {member.links && (
                <div className='inline-flex gap-4 items-center justify-center text-center text-sm sm:text-md font-thin [&>a]:text-gray-800'>
                  {member.links[0] && (
                    <a
                      className='p-1 inline-flex items-center justify-center hover:text-gray-900'
                      href={member.links[0].href.value}
                      title={member.links[0].text.value}
                    >
                      <Globe />
                    </a>
                  )}
                  {member.links[1] && (
                    <a
                      className='p-1 inline-flex items-center justify-center hover:text-gray-900'
                      href={member.links[1].href.value}
                      title={member.links[1].text.value}
                    >
                      <FileBadge />
                    </a>
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
    </MarkdownProvider>
  );
};

export default TeamMember;
