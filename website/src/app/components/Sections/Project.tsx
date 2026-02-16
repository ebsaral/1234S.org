'use client';

import { MarkdownProvider, useIntlayer } from 'next-intlayer';

import { Gift, Globe, HeartIcon, ImagePlay, Lightbulb, TreeDeciduous } from 'lucide-react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent } from '../ui/card';

const Project = () => {
  const id = 'project';
  const sectionKey = 'project';
  const content = useIntlayer(`${sectionKey}-section`);

  const getCaseIcon = (index: number) => {
    const icons = [HeartIcon, ImagePlay, Globe, Gift];
    const IconComponent = icons[index] || Lightbulb;
    return IconComponent;
  };

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <section id={id} className='relative max-w-screen mx-auto overflow-hidden bg-white px-6'>
        <div className='max-w-5xl mx-auto'>
          <div className='relative mx-auto  mb-6 pb-1 rounded-2xl text-center'>
            <div
              className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 transition-all duration-300 hover:scale-110`}
            >
              <TreeDeciduous className='text-emerald-700' size={40} />
            </div>

            <h2
              className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-emerald-700 leading-tight overflow-ellipsis`}
            >
              {content.title}
            </h2>

            {content.message && (
              <div className='max-w-4xl mx-auto mt-16 text-center flex flex-col lg:flex-row items-center gap-6'>
                <div className='text-xl sm:text-3xl lg:text-3xl'>{content.message.title}</div>

                <div className='text-lg sm:text-xl lg:text-2xl bg-emerald-700 text-white py-4 px-8 rounded-xl'>
                  {content.message.description}
                </div>
              </div>
            )}
          </div>
        </div>

        <article className='prose-custom-all max-w-4xl mx-auto my-12 text-left'>{content.explanation}</article>

        <div className='max-w-5xl mx-auto relative top-0 flex flex-col items-center justify-start'>
          {content.items && (
            <div className='grid md:grid-cols-2 gap-10 mb-12 mx-auto'>
              {content.items.map((example, index) => {
                const IconComponent = getCaseIcon(index);
                const title = example.title;
                const content = example.subtitle;

                return (
                  <Card key={index} className='group bg-purple-100/50 backdrop-blur-sm shadow-xl border-0'>
                    <CardContent className='p-8 flex flex-col sm:items-center gap-4 whitespace-pre-line'>
                      <div className='sm:hidden sm:col-span-1 flex items-center justify-center w-24 h-24 -z-10 sm:opacity-100 sm:w-12 sm:h-12 rounded-full bg-purple-100/90 sm:bg-emerald-900/90 absolute top-[-10px] left-[-10px] overflow-clip sm:static'>
                        <IconComponent className='text-emerald-900 sm:text-white' size={24} />
                      </div>
                      <div className='hidden sm:visible sm:flex items-center justify-center opacity-100 w-12 h-12 rounded-full bg-emerald-900/90 group-hover:scale-110 transition-all duration-300'>
                        <IconComponent className='text-white' size={24} />
                      </div>
                      <div className='col-span-6'>
                        <h3 className='text-left sm:text-center text-xl font-bold text-emerald-900 mt-6 sm:mt-3 mb-5 sm:mb-5'>
                          {title}
                        </h3>
                        <article className='custom-prose-all'>{content}</article>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
        <article className='custom-prose-all project-support max-w-5xl mx-auto text-center items-center mt-8 mb-16'>
          {content.support}
        </article>
      </section>
    </MarkdownProvider>
  );
};

export default Project;
