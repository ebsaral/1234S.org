'use client';

import { BookOpenCheck, Cctv, DraftingCompass, Focus, ScanEye } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';

const Experiment = ({ className = '' }: { className?: string }) => {
  const content = useIntlayer('interconnectedness-section');
  function getExperimentStepIcon(index: number): import('react').ReactNode {
    const size = 32;
    if (index == 0) {
      return <Cctv size={size} />;
    }
    if (index == 1) {
      return <Focus size={size} />;
    }
    if (index == 2) {
      return <BookOpenCheck size={size} />;
    }
    if (index == 3) {
      return <ScanEye size={size} />;
    }
  }
  return (
    <div
      className={`p-4 rounded-xl bg-card text-card-foreground bg-gradient-to-br from-white to-gray-100 border-0 shadow-xl ${className}`}
    >
      <div className='flex flex-col'>
        <div className='relative -top-12 left-1/2 p-8 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all'>
          <span className='font-bold text-2xl cursor-default animate-spin-slow'>
            <DraftingCompass className='text-blue-900' size={32} />
          </span>
        </div>
        <h3 className='px-6 text-xl sm:text-2xl md:text-3xl text-left font-bold text-blue-900 mb-4 flex items-center gap-3'>
          {content.experiment.title}
        </h3>
        <p className='px-6 text-md sm:text-lg md:text-xl text-left  text-gray-900 mb-4 flex items-center gap-3'>
          {content.experiment.subtitle}
        </p>
      </div>

      <div className='my-6 p-6 text-left grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-10 text-sm sm:text-md md:text-lg'>
        {content.experiment.steps.map((step, index) => (
          <div key={index}>
            <div className='relative -left-5 -top-2 flex flex-row items-center justify-start gap-1'>
              <div className='relative -top-2 -right-3 text-right font-bold text-5xl text-purple-200/90'>
                {index + 1}
              </div>
              <div className='relative -top-1 -left-1'>{getExperimentStepIcon(index)}</div>
              <div className='font-bold text-left text-lg sm:text-xl md:text-2xl'>{step.title}</div>
            </div>
            <div>{step.description}</div>
          </div>
        ))}
      </div>

      <p className='p-6 pt-0 text-md sm:text-lg md:text-xl text-blue-800 leading-relaxed text-left'>
        {content.experiment.description}
      </p>
    </div>
  );
};

export default Experiment;
