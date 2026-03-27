'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useEffect } from 'react';

export default function ClientMenuSetter({ root }: { root: string }) {
  const { setActiveMenu } = useMenu();

  useEffect(() => {
    setActiveMenu({ root });
  }, []);

  return null;
}
