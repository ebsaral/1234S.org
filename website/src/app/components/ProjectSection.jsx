"use client";

import { useIntlayer } from 'next-intlayer';
import Image from 'next/image';

import ContentLayout from './ContentLayout';
import { Card, CardContent } from './ui/card';
import Quote from './Custom/Quote';

import {
  Lightbulb, 
  HeartIcon,
  ImagePlay,
  Globe,
  Gift,
  FileHeart
} from 'lucide-react';
import Link from 'next/link';

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
                    <div className='col-span-5'>
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
      
      {/* Project Message section */}
      {content.message && <div className='max-w-5xl mx-auto mt-5 text-center flex flex-col lg:flex-row items-center gap-6'>
        <h3 className='lg:-mt-10 text-2xl sm:text-3xl lg:text-3xl'>{content.message.title}</h3>
        <Quote text={content.message.quote.value} />
      </div>
      }

      {/* Project information section */}
      <div className='max-w-5xl mx-auto my-4 flex flex-row gap-4'>
        <div className='sm:col-span-1 mt-2'>
          <FileHeart className='text-gray-800' size={50} />
        </div>
        <p className='text-left text-xl sm:text-2xl text-gray-800 mb-6'>{content.contact.note}</p>
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        {content.contact && <Card>
          <CardContent className="p-8 text-center">
            <div className='flex flex-col gap-2'>
              {/* Image */}
              <div className='flex justify-center caret-transparent'>
                <Image 
                  className='size-[120px] sm:size-[120px] rounded-full'
                  src={content.contact.leader.image.src.value}
                  title={content.contact.leader.image.description.value}
                  alt={content.contact.leader.image.description.value}
                  width={content.contact.leader.image.size.value}
                  height={content.contact.leader.image.size.value}
                  priority={false}
                />
              </div>
              <div className='flex flex-col gap-2 text-xl'>
                <div className='flex flex-col text-center items-center gap-2'>
                  <Link className='underline underline-offset-2 hover:no-underline' href={content.contact.leader.href.value}>{content.contact.leader.text}</Link>
                  <div className='text-sm text-gray-800'>{content.contact.leader.description}</div>
                </div>
              
                <Link className='text-sm underline underline-offset-2 hover:no-underline' href={content.contact.resume.href.value}>{content.contact.resume.text}</Link>
              </div>
            </div>
          </CardContent>
        </Card>}
        {content.status && <Card>
          <CardContent className="p-8 text-center">
              <h3 className='mb-2 text-xl font-bold'>{content.status.title}</h3>
              <ul className='list-disc px-2 text-left'>
                {content.status.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
          </CardContent>
        </Card>}
      </div>
    </ContentLayout>
  );
};

export default ProjectSection;