"use client";

import { useIntlayer } from 'next-intlayer';

import {
  Flower
} from 'lucide-react';

import ContentLayout from '../ContentLayout';
import TeamMember from '../TeamMember';

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
      {content.members && content.members.length && <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 sm:px-20 justify-stretch items-top gap-4'>
          {content.members.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
      </div>}
      <div className='text-center mt-10'>{content.total.label}: <span className='font-bold text-lg'>{content.total.count}</span></div>
    </ContentLayout>
  );
};

export default TeamSection;