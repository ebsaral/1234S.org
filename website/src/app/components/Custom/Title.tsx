'use client';

import { DictionaryRegistry } from '@intlayer/types';
import { useIntlayer } from 'next-intlayer';

const Title = ({ dict }: { dict: keyof DictionaryRegistry }) => {
  const content = useIntlayer(dict);
  if ('title' in content) {
    document.title = content.title.value;
  }
  return <></>;
};

export default Title;
