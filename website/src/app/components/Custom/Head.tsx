'use client';

import { DictionaryRegistry } from '@intlayer/types';
import { LocalesValues } from 'intlayer';
import { useIntlayer } from 'next-intlayer';
import NextHead from 'next/head';

const Head = ({ dict, locale }: { dict: keyof DictionaryRegistry; locale: LocalesValues }) => {
  const content = useIntlayer(dict, locale);
  return <NextHead>{'title' in content && <title>{(content as any).title}</title>}</NextHead>;
};

export default Head;
