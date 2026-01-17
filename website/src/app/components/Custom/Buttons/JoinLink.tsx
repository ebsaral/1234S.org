'use client';

import { useIntlayer } from 'next-intlayer';
import BlueButton from './BlueButton';

const JoinLink = ({ className }: { className?: string }) => {
  const content = useIntlayer('team-section');

  return <BlueButton className={className} text={content.join.value} href='/membership' />;
};
export default JoinLink;
