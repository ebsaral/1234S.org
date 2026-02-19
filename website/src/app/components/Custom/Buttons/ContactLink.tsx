'use client';

import { useIntlayer } from 'next-intlayer';
import BlueButton from './BlueButton';

const ContactLink = ({ className }: { className?: string }) => {
  const content = useIntlayer('team-section');

  return <BlueButton className={className} text={content.contact.value} href='/contact' />;
};
export default ContactLink;
