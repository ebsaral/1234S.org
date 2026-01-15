"use client";

import { useIntlayer } from 'next-intlayer';
import {SocialIcon} from "react-social-icons";
import { BellElectric} from 'lucide-react';

import BankAccountButton from '../Custom/Buttons/BankAccountButton';

import {
  Handshake,
} from 'lucide-react';

import ContentLayout from '../ContentLayout';
import JoinLink from '../Custom/Buttons/JoinLink';

const SupportOptionsSection = () => {
  const id = "support-options";
  const sectionKey = "support-options";
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
      </div>
      
      <div className='max-w-2xl mx-auto flex items-center justify-center my-5'><BellElectric /></div>
      
      <div className={`max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-5`}> 
        <JoinLink className='p-4 min-w-52'/>
        <BankAccountButton className='p-4 min-w-52' label={content.bankAccount.label.value} href={content.bankAccount.href.value} />
      </div>

      <div className="max-w-5xl flex flex-col items-center mx-auto mt-10 gap-4">
        <div className='flex items-center justify-center gap-4'>
        {content.contact.map((props, index) => (
          <SocialIcon key={index} title={props.label.value} target="_blank" className="transition-all duration-300 transform hover:scale-110" url={props.url.value} />
        ))}
        </div>
        <div className='text-center'><em>{content.contactLabel}</em></div>
      </div>
    </ContentLayout>
  );
};

export default SupportOptionsSection;