"use client";

import { useIntlayer } from 'next-intlayer';
import {SocialIcon} from "react-social-icons";

import {
  Handshake,
  BellElectric 
} from 'lucide-react';

import ContentLayout from './ContentLayout';

const SupportInfoSection = () => {
  const id = "support-info";
  const sectionKey = "support-info";
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <ContentLayout 
      sectionKey={sectionKey} id={id} icon={Handshake } iconColor="text-amber-600"
      backgroundColor="bg-amber-500"
      accentColor="from-amber-500 to-yellow-50"
      className="pb-10"
      descriptionClassName={"text-center"}
      descriptionColor={"text-gray-900"}
    >    
      <div className='max-w-5xl mx-auto flex flex-col gap-4 mt-20 sm:px-20'>
        {content.items.map((item, index) => {
          return (
            <div 
              key={index} 
              className={`px-5 py-2 rounded text-center text-gray-800 bg-purple-100 transition-all duration-300 transform hover:scale-110`}
            >
              {item.title}
            </div>
          )
        })}
        <div className={`flex flex-col items-center justify-center gap-2 mt-5 px-5 py-2 rounded text-center text-white bg-red-600 transition-all duration-300 transform hover:scale-110`}>
          <div className='flex items-center justify-center gap-2'><BellElectric /> <b>{content.soon}</b></div>
          {content.bankAccountInfo}
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex justify-center items-center gap-4 p-10">
        {content.contact.map((props, index) => (
          <SocialIcon key={index} title={props.label.value} target="_blank" className="transition-all duration-300 transform hover:scale-110" url={props.url.value} />
        ))}
      </div>
    </ContentLayout>
  );
};

export default SupportInfoSection;