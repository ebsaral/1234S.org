import { ArrowBigRight, CircleDashed, CircleDot, CircleDotDashed } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { MarkdownProvider, useIntlayer } from 'react-intlayer';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Consequences = ({ className = '' }: { className?: string }) => {
  const content = useIntlayer(`justice-section`);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let dragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const updateEdges = () => {
      const max = el.scrollWidth - el.clientWidth;
    };

    updateEdges();

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      el.setPointerCapture(e.pointerId);
      startX = e.clientX;
      scrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = scrollLeft - (e.clientX - startX);
      updateEdges();
    };

    const onPointerUp = () => {
      dragging = false;
      el.style.cursor = 'grab';
    };

    const onScroll = () => updateEdges();

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('mouseleave', onPointerUp);
    el.addEventListener('scroll', onScroll);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('mouseleave', onPointerUp);
      el.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <MarkdownProvider renderMarkdown={(md) => <Markdown remarkPlugins={[remarkGfm]}>{md}</Markdown>}>
      <div className='flex flex-col items-left gap-0'>
        <div className='text-base px-5 mb-5 text-left'>{content.consequences.title}</div>
        <div ref={ref} className='consequences'>
          <div className='header row '>
            <div className='text-blue-600'>
              <CircleDot className='icon ' />
              <span>{content.consequences.labels.source}</span>
            </div>
            <div className='text-red-600'>
              <CircleDotDashed className='icon ' />
              <span>{content.consequences.labels.means}</span>
            </div>
            <div className='text-red-700'>
              <CircleDashed className='icon ' />
              <span>{content.consequences.labels.result}</span>
            </div>
          </div>

          {content.consequences.items.map((item, index) => {
            return (
              <div key={index} className='row row-item'>
                <div className=''>
                  <span>{item.source}</span>
                </div>
                <div className=''>
                  <ArrowBigRight className='icon' />
                  <span>{item.means}</span>
                </div>
                <div className=''>
                  <ArrowBigRight className='icon' />
                  <span>{item.result}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className='text-base px-5 my-5 text-left'>{content.consequences.note}</div>
      </div>
    </MarkdownProvider>
  );
};

export default Consequences;
