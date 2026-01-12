"use client";

import Image from 'next/image';

import { Card, CardContent } from './ui/card';
import Description from './Custom/Description';
import JoinLink from './Custom/JoinLink';

const TeamMember = ({member}) => {
  const hasDescription = member.description && member.links;
  return (
    <Card className={`bg-white/90 backdrop-blur-sm shadow-xl border-0 p-6 flex flex-col justify-center items-center gap-4 ${hasDescription && "col-span-1 md:col-span-2"}`}>
      
      {member.title && <div className=" border-rose-200 text-center text-rose-800 text-xs font-bold px-5 py-2 rounded bg-rose-100 min-w-44">{member.title}</div>}

      <div className={`grid ${hasDescription?"grid-cols-1 md:grid-cols-2":"grid-cols-1"} items-start`}>
      <CardContent className='group flex flex-col justify-center items-center gap-4'>
        <Image 
          className='size-[120px] sm:size-[120px] rounded-full border-solid border-1 border-black/10 shadow-md transition-transform duration-300 hover:scale-110'
          src={member.image.src.value}
          alt={`${member.name.value}: ${member.title?.value}`}
          width={member.image.size.value}
          height={member.image.size.value}
          priority={false}
        />
        <div className='flex flex-col items-center gap-4'>
          <p className='text-center text-xl sm:text-3xl'>
            {member.name}
          </p>
          <em><Description size="text-sm sm:text-md text-center" text={member.profession.value} /></em>
          {member.experience && <div className="flex flex-col items-center justify-center gap-1  border-emerald-200 text-emerald-800 text-xs px-5 py-2 rounded bg-emerald-400/10 min-w-44">
            <div className="text-sm font-bold">{member.experience.badge}</div>
            <div>{member.experience.title}</div>
          </div>}
          {member.join && <JoinLink />}
        </div>
      </CardContent>

      {hasDescription && <CardContent className='flex flex-col justify-center items-center gap-4 pt-0'>
        {member.description && <Description size="text-sm sm:text-md" text={member.description.value} />}
        {member.links && <p className='text-center text-sm sm:text-md'>{member.links[0].name}: <a className="underline underline-offset-2 hover:no-underline" href={member.links[0].href.value}>{member.links[0].href}</a></p>} 
      </CardContent>}
      </div>
    </Card>
  );
};

export default TeamMember;