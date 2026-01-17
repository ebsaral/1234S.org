'use client';

import { DictionaryRegistry } from '@intlayer/types';
import { LocalesValues } from 'intlayer';
import { useIntlayer } from 'next-intlayer';

const Head = ({ dict, locale }: { dict: keyof DictionaryRegistry; locale: LocalesValues }) => {
  const content = useIntlayer(dict, locale);
  if ('title' in content) {
    document.title = (content as any).title.value;
  }
  return <></>;
};

export default Head;
