'use client';
import { useEffect, useState } from 'react';

const useHash = () => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    const readHash = () => {
      setHash(window.location.hash.replace('#', ''));
    };

    // on first load
    readHash();

    // when hash changes
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, []);

  return { hash, setHash };
};

export default useHash;
