'use client';

import useHash from '@/app/hooks/useHash';
import { useMenu } from '@/app/hooks/useMenu';
import { useIntersectionObserver } from '@/app/hooks/useScrollEffects';
import { CircleQuestionMark, Sparkles } from 'lucide-react';
import { MarkdownProvider, useIntlayer } from 'next-intlayer';
import { useEffect, useRef, useState } from 'react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Intro = ({ id }: { id?: string }) => {
  const content = useIntlayer('intro-section');
  const articleRef = useRef<HTMLElement>(null);
  const leftH3Ref = useRef<HTMLHeadingElement>(null);
  const rightH3Ref = useRef<HTMLHeadingElement>(null);
  const [path, setPath] = useState('');
  const [knots, setKnots] = useState<{ x: number; y: number }[]>([]);
  const [thin, setThin] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const [setRef, isIntersecting] = useIntersectionObserver();
  const { setActiveMenu } = useMenu();
  const { setHash } = useHash();

  useEffect(() => {
    if (setRef) {
      setRef(ref);
    }
    if (isIntersecting) {
      if (id) {
        setHash(id);
      }
      setActiveMenu({ root: 'philosophy', child: id });
    }
  }, [isIntersecting]);

  const updatePath = (scrollY = 0) => {
    if (!articleRef.current || !leftH3Ref.current || !rightH3Ref.current) return;

    const c = articleRef.current.getBoundingClientRect();
    const a = leftH3Ref.current.getBoundingClientRect();
    const b = rightH3Ref.current.getBoundingClientRect();

    // Detect stacked vs side-by-side by geometry
    const isStacked = Math.abs(a.left - b.left) < 40;

    let x1: number, y1: number, x2: number, y2: number;
    let c1x: number, c1y: number, c2x: number, c2y: number;

    const sway = Math.sin(scrollY * 0.01) * 18;

    if (isStacked) {
      // ---- STACKED: rope runs vertically and curves LEFT ----
      const inset = 8; // closer to h3 box

      x1 = a.left - c.left - 10 + inset;
      y1 = a.top + a.height / 2 - c.top;

      x2 = b.left - c.left - 10 + inset;
      y2 = b.top + b.height / 2 - c.top;

      // hide rope if too close
      if (Math.abs(y2 - y1) < 60) {
        setPath('');
        setKnots([]);
        return;
      }

      const midY = (y1 + y2) / 2;

      // curve to LEFT side
      c1x = x1 - 26 + sway * 0.25;
      c1y = midY - 50;

      c2x = x2 - 26 - sway * 0.25;
      c2y = midY + 50;

      setThin(true);
    } else {
      // ---- SIDE BY SIDE: rope between cards ----
      x1 = a.right - c.left - 1;
      y1 = a.top + a.height / 2 - c.top;

      x2 = b.left - c.left;
      y2 = b.top + b.height / 2 - c.top;

      const midX = (x1 + x2) / 2;

      c1x = midX - 90;
      c1y = y1 + sway;

      c2x = midX + 90;
      c2y = y2 - sway;

      setThin(false);
    }

    // knots slightly pulled toward boxes
    const knotInset = isStacked ? 2 : 0;

    setKnots([
      { x: x1 + (isStacked ? knotInset : 0), y: y1 },
      { x: x2 + (isStacked ? knotInset : 0), y: y2 },
    ]);

    setPath(`M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`);
  };

  useEffect(() => {
    updatePath(window.scrollY);

    const onScroll = () => updatePath(window.scrollY);
    const onResize = () => updatePath(window.scrollY);

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <section id={id} ref={ref} className='relative max-w-screen mx-auto overflow-hidden'>
        {/* Introduction */}
        <div className='mt-32 full-w-mx flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 via-red-200 to-green-200 rounded-2xl py-4'>
          <span className='relative -top-10 flex items-center justify-center bg-gray-900 rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all text-white font-bold cursor-default'>
            <CircleQuestionMark size={48} />
          </span>
          <article className='prose-custom-all max-w-3xl mx-6 text-gray-900'>{content.paragraph1}</article>

          <article
            ref={articleRef}
            className='relative prose-custom-all max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 items-stretch justify-center text-gray-900 text-wrap'
          >
            {/* Rope + knots */}
            <svg className='absolute inset-0 w-full h-full pointer-events-none'>
              {/* shadow */}
              <path
                d={path}
                fill='none'
                stroke='rgba(0,0,0,0.25)'
                strokeWidth={thin ? 3 : 5}
                strokeLinecap='round'
                transform='translate(1,2)'
              />

              {/* rope */}
              <path d={path} fill='none' stroke='#5b5b5b' strokeWidth={thin ? 2.5 : 4} strokeLinecap='round' />

              {/* knots */}
              {knots.map((k, i) => (
                <circle
                  key={i}
                  cx={k.x}
                  cy={k.y}
                  r={thin ? 3 : 4}
                  fill='#5b5b5b'
                  stroke='rgba(0,0,0,0.25)'
                  strokeWidth='1'
                />
              ))}
            </svg>

            <div className='flex flex-col items-start justify-start text-left sm:text-center px-10 text-wrap'>
              <h3
                ref={leftH3Ref}
                className='relative max-w-max -left-2 sm:left-0 p-3 bg-black/80 text-gray-100 rounded-md'
              >
                <em>{content.logical.title}</em>
              </h3>
              <p className='text-left'>{content.logical.description}</p>
            </div>

            <div className='flex flex-col items-start justify-start text-left sm:text-center px-10 text-wrap'>
              <h3
                ref={rightH3Ref}
                className='max-w-max relative -left-2 sm:left-0 p-3 bg-black/80 text-gray-100 rounded-md'
              >
                <em>{content.spirituality.title}</em>
              </h3>
              <p className='text-left'>{content.spirituality.description}</p>
            </div>
          </article>
        </div>

        <div className='max-w-5xl mx-auto mt-8 flex flex-col gap-4 items-center justify-center'>
          {/* Description */}
          <article className='prose-custom-all max-w-3xl mx-6'>{content.paragraph2}</article>

          {/* Insight */}
          <div className='mt-10 mx-4 sm:mx-16 lg:mx-20'>
            <div className='stars-box rounded-xl gap-5'>
              <div className='stars' />

              <div className='relative -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full w-12 h-12 hover:scale-110 duration-300 transition-all'>
                <span className='font-bold text-2xl cursor-default'>
                  <Sparkles size={28} />
                </span>
              </div>

              <blockquote className='max-w-4xl mx-auto pb-16 pt-12 px-6 sm:px-8 lg:px-10 text-center text-md sm:text-lg lg:text-xl font-normal whitespace-pre-line text-gray-100'>
                {content.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </MarkdownProvider>
  );
};

export default Intro;
