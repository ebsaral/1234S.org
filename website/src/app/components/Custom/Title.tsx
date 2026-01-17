'use client';

import { useEffect } from 'react';

const Title = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <></>;
};

export default Title;
