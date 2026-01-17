import { useEffect, useState } from 'react';

export enum ScreenSize {
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
  '2xl' = '2xl',
}

export default function useScreenSize() {
  const [screenSize, setScreen] = useState<ScreenSize>(ScreenSize.sm);

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;

      if (width >= 1536) setScreen(ScreenSize['2xl']);
      else if (width >= 1280) setScreen(ScreenSize.xl);
      else if (width >= 1024) setScreen(ScreenSize.lg);
      else if (width >= 768) setScreen(ScreenSize.md);
      else setScreen(ScreenSize.sm);
    };

    updateScreen(); // run once on mount
    window.addEventListener('resize', updateScreen);
    return () => window.removeEventListener('resize', updateScreen);
  }, []);

  return screenSize;
}
