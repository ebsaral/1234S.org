import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';

export const ParallaxSection = ({ 
  children, 
  className = '', 
  parallaxOffset = 0.5,
  scaleOnScroll = false 
}) => {
  const sectionRef = useRef(null);
  const [transform, setTransform] = useState('');
  const { themeClasses } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -parallaxOffset;
      
      let transformString = `translate3d(0, ${rate}px, 0)`;
      
      if (scaleOnScroll) {
        const scale = Math.max(0.8, Math.min(1.2, 1 + (rect.top * 0.0005)));
        transformString += ` scale(${scale})`;
      }
      
      setTransform(transformString);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxOffset, scaleOnScroll]);

  return (
    <div
      ref={sectionRef}
      className={`relative ${className}`}
      style={{ transform }}
    >
      {children}
    </div>
  );
};