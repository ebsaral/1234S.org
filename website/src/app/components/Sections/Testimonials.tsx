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
    if (!activeItem) return;

    // Calculate center scroll position
    const containerRect = container.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    const offset = itemRect.left - containerRect.left - (containerRect.width / 2 - itemRect.width / 2);
    container.scrollBy({ left: offset, behavior: 'smooth' });
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
                  className={`relative h-full p-8 rounded-3xl border backdrop-blur-xl transition-all flex flex-col ${
                    isActive
                      ? 'bg-white/90 border-indigo-300 shadow-2xl ring-2 ring-indigo-400'
                      : 'bg-white/60 border-white/40'
                  }`}
                >
                  {/* Content wrapper */}
                  <div className='flex flex-col justify-between h-full'>
                    {/* Centered quote */}
                    <div className='flex-1 flex items-center justify-center text-center'>
                      <p className='text-lg text-gray-700 leading-relaxed max-w-md'>“{item.text}”</p>
                    </div>

                    {/* Bottom name */}
                    <div className='pt-6 text-center'>
                      <div className='font-semibold text-indigo-600'>{item.name}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Slider Dots */}
        <div className='flex justify-center gap-3 mt-4'>
          {content.items.map((_, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${isActive ? 'bg-indigo-600' : 'bg-gray-400/60'}`}
              />
            );
          })}
        </div>
        {/* Controls */}
        <div className='mt-4 flex justify-center gap-4'>
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
