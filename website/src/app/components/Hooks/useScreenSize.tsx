'use client';
import { useEffect, useState } from 'react';

export enum ScreenSize {
  'z' = '',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
  '2xl' = '2xl',
}

const widthToSize = (width: number) => {
  if (width >= 1536) return ScreenSize['2xl'];
  else if (width >= 1280) return ScreenSize.xl;
  else if (width >= 1024) return ScreenSize.lg;
  else if (width >= 768) return ScreenSize.md;
  else return ScreenSize.sm;
};

export default function useScreenSize() {
  const [screenSize, setScreen] = useState<ScreenSize>(ScreenSize.z);

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;
      setScreen(widthToSize(width));
    };
    window.addEventListener('resize', updateScreen);
    updateScreen();
    return () => window.removeEventListener('resize', updateScreen);
  }, []);

  return screenSize;
}
