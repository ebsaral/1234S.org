'use client';

import { RefObject, useEffect, useRef, useState } from 'react';

export const useScrollEffects = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollDirection };
};

export const useIntersectionObserver = (ref: RefObject<HTMLDivElement | null>, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        {
          threshold: [0, 0.2, 0.3, 0.5, 1],
          rootMargin: '-80px',
          ...options,
        },
      );

      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }
  }, [ref, options]);

  return [isIntersecting];
};
