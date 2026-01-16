import { useIntlayer } from 'next-intlayer/server';

import { 
  Brain,
  Globe
} from 'lucide-react';

import FormattedText from '../Custom/FormattedText';
import { LocalesValues } from 'intlayer';

const Interconnectedness = ({locale}: {locale: LocalesValues}) => {
  const id = "interconnectedness";
  const sectionKey = "interconnectedness";
  const content = useIntlayer(`${sectionKey}-section`, locale);

  return (
    <section
      className="relative max-w-screen mx-auto overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="-z-10 absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="moving-bg"></div>
      <div className="moving-bg moving-bg2"></div>
      <div className="moving-bg moving-bg3"></div>

      <div className='max-w-4xl mx-auto px-4'>
        <div className='mx-auto my-32 bg-white/80 rounded-2xl text-center'>

          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 text-blue-600 transition-all duration-300 hover:scale-110`}>
            <Globe size={40} />
          </div>
          
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight overflow-ellipsis`}>
            {content.title}
          </h2>
          <p className='text-xl sm:text-2xl lg:text-3xl font-bold italic text-gray-900 leading-tight whitespace-pre-line'>{content.subtitle}</p>

          <div className='relative'>
            <div className='absolute top-3 left-7 text-7xl text-emerald-600'>“</div>
            <FormattedText className='max-w-4xl m-10 px-8 sm:px-12 py-10 text-center text-lg sm:text-xl lg:text-2xl bg-white rounded-3xl' text={content.quote.value} />
            <div className='absolute -bottom-5 right-7 text-7xl text-emerald-600'>”</div>
          </div>

          <FormattedText className='max-w-4xl mx-auto px-6 sm:px-10 py-0 sm:py-5 text-left leading-relaxed text-md sm:text-lg md:text-xl text-black' text={content.description.value} />

          <div className="mt-16 mb-6 -ml-6 mr-6 rounded-xl bg-card text-card-foreground bg-gradient-to-br from-white to-gray-100 border-0 shadow-xl">
            <div className="flex flex-col">
              <div className='relative -top-8 left-1/2 p-8 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all'>
                <span className='font-bold text-2xl cursor-default'><Brain className="text-blue-600" size={40} /></span>
              </div>
              <h3 className="px-6 text-lg sm:text-xl md:text-2xl text-left font-bold text-blue-900 mb-4 flex items-center gap-3">
                {content.experiment.title}
              </h3>
            </div>
            <p className="p-10 pt-0 text-md sm:text-lg md:text-xl text-blue-800 leading-relaxed  text-left">
              {content.experiment.description}
            </p>
          </div>

          <FormattedText className='max-w-4xl mx-auto px-6 sm:px-10 py-8 text-left leading-relaxed text-md sm:text-lg md:text-xl text-black' text={content.paragraph1.value} />
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="-z-10 absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Interconnectedness;