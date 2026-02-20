'use client';

import { useIntlayer } from 'next-intlayer';
import BlueButton from './BlueButton';

const ContactLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const content = useIntlayer('team-section');

  return <BlueButton text={content.contact.value} href='/contact' {...props} />;
};
export default ContactLink;
