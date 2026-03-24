'use client';

import { LuBookOpenCheck, LuCctv, LuDraftingCompass, LuFocus, LuScanEye } from 'react-icons/lu';
import { useIntlayer } from 'react-intlayer';

const Experiment = ({ className = '' }: { className?: string }) => {
  const content = useIntlayer('interconnectedness-section');
  function getExperimentStepIcon(index: number): import('react').ReactNode {
    const size = 32;
    if (index == 0) {
      return <LuCctv size={size} />;
    }
    if (index == 1) {
      return <LuFocus size={size} />;
    }
    if (index == 2) {
      return <LuBookOpenCheck size={size} />;
    }
    if (index == 3) {
      return <LuScanEye size={size} />;
    }
  }
  return (
    <article
      className={`prose-custom-all p-4 rounded-xl bg-card text-card-foreground bg-gradient-to-br from-white to-gray-100 border-0 shadow-xl ${className}`}
    >
      <div className='flex flex-col'>
        <div className='relative -top-12 left-1/2 p-8 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all'>
          <span className='font-bold text-2xl cursor-default animate-spin-slow'>
            <LuDraftingCompass className='text-purple-900' size={32} />
          </span>
        </div>
        <h3 className='px-6 text-left text-purple-900 -mt-4'>
          <b>{content.experiment.title}</b>
        </h3>
        <p className='px-6 text-left  text-gray-900 '>{content.experiment.subtitle}</p>
      </div>

      <div className='mt-0 p-6 text-left grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10'>
        {content.experiment.steps.map((step, index) => (
          <div key={index}>
            <h4 className='flex flex-row items-center justify-start gap-1 mt-0'>
              <span className='relative z-10 left-2'>{getExperimentStepIcon(index)}</span>
              <span className='z-0 relative -top-1 -left-12 text-right font-bold text-5xl text-purple-200/90'>
                <b>{index + 1}</b>
              </span>{' '}
              <span className='relative -left-5'>
                <b>{step.title}</b>
              </span>
            </h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <p className='p-6 pt-0 text-purple-800 leading-relaxed text-left font-medium'>{content.experiment.description}</p>
      <p className='p-6 pt-0 text-purple-800 leading-relaxed text-left font-semibold'>{content.experiment.note}</p>
    </article>
  );
};

export default Experiment;
