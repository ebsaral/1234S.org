import { ReactNode } from 'react';
import { FcInfo } from 'react-icons/fc';
import { MarkdownRenderer } from 'react-intlayer/markdown';
import { Tooltip } from 'react-tooltip';

export default function ExampleBox({
  className,
  title,
  content,
}: {
  className?: string;
  title: string;
  content: string;
}) {
  return (
    <div
      className={`relative prose-custom-all flex flex-row gap-6 items-start max-w-xl px-6 sm:px-10 bg-purple-200/50 p-4 rounded-2xl mx-4 sm:mx-auto ${className}`}
    >
      {/* Tooltip */}
      <Tooltip
        id='tooltip'
        className='!bg-gray-900 !text-gray-50 font-medium p-2 rounded-md shadow-lg max-w-xs !opacity-100 z-20'
      />
      <div className='absolute -left-2 -top-2 flex items-center justify-center w-10 h-10 aspect-square p-2 bg-emerald-200 rounded-full'>
        <FcInfo className='w-full h-full' />
      </div>
      <div className='mt-5 font-semibold'>{title}:</div>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </div>
  );
}
