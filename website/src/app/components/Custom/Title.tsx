'use client';

import { DictionaryRegistry } from '@intlayer/types';
import { LocalesValues } from 'intlayer';
import { useIntlayer } from 'next-intlayer';

const Title = ({ dict, locale }: { dict: keyof DictionaryRegistry; locale: LocalesValues }) => {
  const content = useIntlayer(dict, locale);
  if ('title' in content) {
    document.title = content.title.value;
  }
  return <></>;
};

export default Title;
