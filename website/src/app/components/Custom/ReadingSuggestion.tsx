import { ReactNode } from 'react';
import { FcReading } from 'react-icons/fc';
import { MarkdownRenderer } from 'react-intlayer/markdown';
import { Tooltip } from 'react-tooltip';

export default function ReadingSuggestion({ className, content }: { className?: string; content: string | ReactNode }) {
  return (
    <div
      className={`relative prose-custom-all flex flex-row gap-6 items-center max-w-xl px-6 sm:px-10 bg-purple-200/50 p-4 rounded-2xl mx-4 sm:mx-auto ${className}`}
    >
      {/* Tooltip */}
      <Tooltip
        id='tooltip'
        className='!bg-gray-900 !text-gray-50 font-medium p-2 rounded-md shadow-lg max-w-xs !opacity-100 z-20'
      />
      <div className='flex items-center justify-center w-16 h-16 aspect-square p-2 bg-emerald-200 rounded-full'>
        <FcReading className='w-full h-full' />
      </div>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </div>
  );
}
