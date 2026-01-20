'use client';

import { MarkdownProvider, useIntlayer } from 'next-intlayer';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Sun, TreePine } from 'lucide-react';
import { useEffect, useRef } from 'react';
const Statement = () => {
  const sectionKey = 'justice';
  const content = useIntlayer(`${sectionKey}-section`);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const D = 2000; // duration for forward motion
    const start = performance.now();

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let raf = 0;

    const frame = (now: number) => {
      // ping-pong timeline: 0 → 1 → 0 smoothly
      const raw = (now - start) / D;
      const t = 1 - Math.abs((raw % 2) - 1);

      let a: number, p: number, c1: string, c2: string, pos: 0 | 1;

      if (t <= 0.15) {
        a = 135;
        p = 20;
        c1 = '#c7d9ff';
        c2 = '#fff';
        pos = 0;
      } else if (t <= 0.5) {
        const k = (t - 0.15) / (0.5 - 0.15);
        a = lerp(135, 90, k);
        p = lerp(20, 25, k);
        c1 = '#c7d9ff';
        c2 = '#fff';
        pos = 0;
      } else if (t <= 0.55) {
        a = 90;
        p = 25;
        c1 = '#fff';
        c2 = '#c7d9ff';
        pos = 1;
      } else {
        const k = (t - 0.55) / (1 - 0.55);
        a = lerp(90, 135, k);
        p = lerp(25, 20, k);
        c1 = '#fff';
        c2 = '#c7d9ff';
        pos = 1;
      }

      el.style.setProperty('--a', `${a}deg`);
      el.style.setProperty('--p', `${p}%`);
      el.style.setProperty('--c1', c1);
      el.style.setProperty('--c2', c2);

      el.style.backgroundPosition = pos === 0 ? `0 0, var(--s) var(--s)` : `var(--s) 0, 0 var(--s)`;

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <MarkdownProvider renderMarkdown={(markdown) => <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}>
      <section ref={ref} className='mx-auto w-full bg-square py-12 px-6'>
        <article className='relative prose-custom-all max-w-4xl mx-auto py-6 px-24 bg-green-100/90 rounded-2xl'>
          {/* Background Icon */}
          <Sun
            className='
          absolute
          -top-28 -left-24
          w-40 h-40
          text-yellow-400
          opacity-60
          translate-x-1/4 translate-y-1/4
          pointer-events-none
          select-none
        '
          />
          <TreePine
            className='
          absolute
          -bottom-4 -right-6
          w-40 h-40
          text-green-700
          opacity-60
          translate-x-1/4 translate-y-1/4
          pointer-events-none
          select-none
        '
          />
          <div className='relative z-10 text-center'>{content.statement}</div>
        </article>
      </section>
    </MarkdownProvider>
  );
};

export default Statement;
