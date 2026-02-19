'use client';

import { useMenu } from '@/app/hooks/useMenu';
import { useIntlayer } from 'next-intlayer';
import { useEffect } from 'react';
import Title from '../Custom/Title';
import ContactSection from '../Sections/Contact';

const Contact = () => {
  const content = useIntlayer('contact-page-metadata');
  const { setActiveMenu } = useMenu();
  useEffect(() => {
    setActiveMenu({ root: 'contact' });
  }, []);
  return (
    <main>
      <Title title={content.title.value} />
      <ContactSection />
    </main>
  );
};

export default Contact;
