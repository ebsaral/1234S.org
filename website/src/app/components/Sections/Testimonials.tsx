'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useIntlayer } from 'react-intlayer';

export default function Testimonials() {
  const sectionKey = 'testimonials';
  const content = useIntlayer(`${sectionKey}-section`);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const hasMounted = useRef(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideSec = 5;

  const slideNext = () => {
    setActiveIndex((prev) => (prev + 1) % content.items.length);
  };
  const slidePrev = () => {
    setActiveIndex((prev) => (prev - 1 + content.items.length) % content.items.length);
  };

  // Auto-slide
  useEffect(() => {
    if (isHovered) return;

    autoSlideRef.current = setTimeout(slideNext, slideSec * 1000);

    return () => {
      if (autoSlideRef.current) clearTimeout(autoSlideRef.current);
    };
  }, [activeIndex, isHovered]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return; // skip scroll on initial render
    }

    const container = containerRef.current;
    if (!container) return;
    const activeItem = container.children[activeIndex] as HTMLElement;
    activeItem?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') slideNext();
      if (e.key === 'ArrowLeft') slidePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section className='relative w-full pt-20 pb-10 px-4 bg-gradient-to-br from-indigo-100 via-white to-emerald-100'>
      {/* Glow background */}
      <div className='absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400' />

      <div className='relative max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12'>{content.title}</h2>
        {/* Timeline Progress */}{' '}
        <div className='relative h-1 bg-gray-200 rounded-full mb-10 overflow-hidden'>
          {' '}
          <motion.div
            key={activeIndex}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: slideSec, ease: 'linear' }}
            className='absolute left-0 top-0 h-full bg-indigo-500'
          />{' '}
        </div>
        {/* Cards container */}
        <div
          ref={containerRef}
          className='flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 py-4'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {content.items.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={i}
                onClick={() => setActiveIndex(i)}
                animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.5 }}
                transition={{ duration: 0.4 }}
                className={`cursor-pointer flex-shrink-0 snap-center w-[85%] sm:w-[55%] lg:w-[30%] z-10`}
              >
                <div
                  className={`relative h-full p-8 rounded-3xl border backdrop-blur-xl transition-all ${
                    isActive
                      ? 'bg-white/90 border-indigo-300 shadow-2xl ring-2 ring-indigo-400'
                      : 'bg-white/60 border-white/40'
                  }`}
                >
                  {/* Glow */}
                  <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 opacity-10 blur-xl' />

                  <p className='text-lg text-gray-700 mb-6 leading-relaxed'>“{item.text}”</p>
                  <div className='font-semibold text-indigo-600'>{item.name}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Controls */}
        <div className='mt-10 flex justify-center gap-4'>
          <button onClick={slidePrev} className='bg-white/80 hover:bg-white shadow px-4 py-2 rounded-lg'>
            ← {content.prev}
          </button>
          <button onClick={slideNext} className='bg-white/80 hover:bg-white shadow px-4 py-2 rounded-lg'>
            {content.next} →
          </button>
        </div>
      </div>
    </section>
  );
}
