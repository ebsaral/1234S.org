import { forwardRef, useEffect, useRef, useState } from 'react';
import FormattedText from '../../Custom/FormattedText';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
  onOpened: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  question: string;
  answer: string;
  panelId: string;
  buttonId: string;
  buttonRef: (el: HTMLButtonElement | null) => void;
};

const AccordionItem = forwardRef<HTMLDivElement, Props>(function AccordionItem(
  { isOpen, onToggle, onOpened, onKeyDown, question, answer, panelId, buttonId, buttonRef },
  ref,
) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (innerRef.current) {
      setHeight(isOpen ? `${innerRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div ref={ref} className='scroll-mt-28'>
      <div
        className={`rounded-2xl border transition-all ${
          isOpen ? 'border-indigo-500/40 shadow-[0_0_30px_-12px_rgba(99,102,241,0.5)] mr-4 sm:mr-0' : 'border-white/10'
        } bg-white/5 backdrop-blur`}
      >
        <h3>
          <button
            ref={buttonRef}
            id={buttonId}
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={onToggle}
            onKeyDown={onKeyDown}
            className='flex w-full items-center justify-between gap-4 px-4 sm:px-6 py-4 text-left text-base sm:text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl'
          >
            <span>{question}</span>
            <span className={`text-2xl leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
        </h3>

        <div
          id={panelId}
          role='region'
          aria-labelledby={buttonId}
          style={{ maxHeight: height }}
          onTransitionEnd={() => {
            if (isOpen) onOpened();
          }}
          className='overflow-hidden transition-[max-height] duration-500 ease-in-out'
        >
          <div
            ref={innerRef}
            className={`px-4 sm:px-6 pb-5 text-sm sm:text-base text-gray-800 transition-all duration-300 ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <FormattedText text={answer} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default AccordionItem;
