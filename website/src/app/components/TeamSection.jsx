"use client";

import { useIntlayer } from 'next-intlayer';
import Image from 'next/image';

import {
  Flower
} from 'lucide-react';

import ContentLayout from './ContentLayout';
import { Card, CardContent } from './ui/card';
import Description from './Custom/Description';

const TeamSection = () => {
  const id = "team";
  const sectionKey = "team";
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <ContentLayout 
      sectionKey={sectionKey} id={id} icon={Flower} iconColor="text-rose-600"
      backgroundColor="bg-rose-500"
      accentColor="from-rose-500 to-yellow-50"
      className="pb-10"
      descriptionClassName={"text-center"}
      descriptionColor={"text-gray-900"}
    >
      <div className='max-w-5xl mx-auto flex flex-col sm:flex-row sm:px-20 justify-center items-center gap-4'>
        {content.members && content.members.map((member, index) => (
          <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-0 p-6 flex flex-col justify-center items-center gap-4">
            <div className=" border-rose-200 text-rose-800 text-xs font-bold px-5 py-2 rounded bg-rose-100 min-w-44">{member.title}</div>
            <CardContent className='group flex flex-col justify-center items-center gap-4'>
              <Image 
                className='size-[120px] sm:size-[120px] rounded-full border-solid border-1 border-black/10 shadow-md transition-transform duration-300 hover:scale-110'
                src={member.image.src.value}
                alt={`${member.name.value}: ${member.title.value}`}
                width={member.image.size.value}
                height={member.image.size.value}
                priority={false}
              />
              <div className='flex flex-col items-center gap-4'>
                <p className='text-center text-xl sm:text-3xl'>
                  {member.name}
                </p>
                <p className='text-center text-sm sm:text-md'><em>{member.profession}</em></p> 
                <div className="flex flex-col items-center justify-center gap-1  border-purple-200 text-purple-800 text-xs px-5 py-2 rounded bg-purple-100 min-w-44">
                  <div className="text-sm font-bold">{member.experience.badge}</div>
                  <div>{member.experience.title}</div>
                </div>
              </div>
            </CardContent>
            <CardContent className='flex flex-col justify-center items-center gap-4 pt-0'>
              <Description size="text-sm sm:text-md" text={member.description.value} />
              <p className='text-center text-sm sm:text-md'>{member.links[0].name}: <a className="underline underline-offset-2 hover:no-underline" href={member.links[0].href.value}>{member.links[0].href}</a></p> 
            </CardContent>
          </Card>
        ))}
      </div>


    </ContentLayout>
  );
};

export default TeamSection;