"use client";

import { useIntlayer } from 'next-intlayer';
import Link from 'next/link';
import Image from 'next/image';

import {
  Lightbulb, 
  HeartIcon,
  ImagePlay,
  Globe,
  Gift,
  HeartPlus,
} from 'lucide-react';

import ContentLayout from './ContentLayout';
import { Card, CardContent } from './ui/card';
import Quote from './Custom/Quote';

const ProjectSection = () => {
  const id = "project";
  const sectionKey = "project";
  const content = useIntlayer(`${sectionKey}-section`);

  // Icon mappings for real-world cases
  const getCaseIcon = (index) => {
    const icons = [HeartIcon, ImagePlay, Globe, Gift];
    const IconComponent = icons[index] || Lightbulb;
    return IconComponent;
  };

  return (
    <ContentLayout sectionKey={sectionKey} id={id} icon={Lightbulb} iconColor="text-amber-600"
    backgroundColor="bg-amber-50"
    accentColor="from-amber-50 to-yellow-50">
      {/* Project Steps section */}
      {content.items && (
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {content.items.map((example, index) => {
            const IconComponent = getCaseIcon(index);
            const title = example.title;
            const content = example.subtitle;
            
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="grid grid-cols-6 gap-4 whitespace-pre-line relative sm:static">
                    <div className="sm:col-span-1 flex items-center justify-center w-24 h-24 -z-10 opacity-35 sm:opacity-100 sm:w-12 sm:h-12 rounded-full bg-amber-100 absolute top-[-50px] left-[-60px] overflow-clip sm:static">
                      <IconComponent className="text-amber-600" size={24} />
                    </div>
                    <div className='col-span-6'>
                      <h3 className="text-xl font-bold text-amber-900 mb-3">
                        {title}
                      </h3>
                      <p className="text-gray-800 leading-relaxed">
                        {content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
      
      {/* Project message section */}
      {content.message && <div className='max-w-5xl mx-auto mt-5 text-center flex flex-col lg:flex-row items-center gap-6'>
        <h3 className='lg:-mt-10 text-2xl sm:text-3xl lg:text-3xl'>{content.message.title}</h3>
        <Quote text={content.message.quote.value} />
      </div>
      }

      {/* Project note section */}
      <div className='max-w-5xl mx-auto my-4 flex flex-col justify-center items-center gap-4'>
         <Link href={content.leader.href.value}>
          <div className='group flex flex-col justify-center items-center gap-4'>
            <Image 
              className='size-[120px] sm:size-[120px] rounded-full border-solid border-1 border-black/10 shadow-md'
              src={content.leader.image.src.value}
              title={`${content.leader.name.value}: ${content.leader.title.value}`}
              alt={`${content.leader.name.value}: ${content.leader.title.value}`}
              width={content.leader.image.size.value}
              height={content.leader.image.size.value}
              priority={false}
            />
            <div className='flex flex-col items-center gap-2'>
              <p className='text-center text-xl sm:text-2xl text-emerald-800 underline underline-offset-4 group-hover:no-underline'>
                {content.leader.name}
              </p>
              <p className='text-center text-md sm:text-lg text-emerald-800'><em>{content.leader.title}</em></p>
            </div>
          </div>
        </Link>
        <p className='text-left text-xl sm:text-2xl text-gray-800'>{content.note}</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Link className='flex flex-row gap-1 justify-center items-center mt-4 text-lg underline underline-offset-2 hover:no-underline' href={content.sponsorship.href.value}><HeartPlus size={16} /> {content.sponsorship.title}</Link>
      </div>
    </ContentLayout>
  );
};

export default ProjectSection;