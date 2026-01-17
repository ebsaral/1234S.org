import { DictionaryRegistry } from '@intlayer/types';
import { LocalesValues } from 'intlayer';
import { useIntlayer } from 'next-intlayer/server';
import NextHead from 'next/head';

const Head = ({ key, locale }: { key: keyof DictionaryRegistry; locale: LocalesValues }) => {
  const content = useIntlayer(key, locale);
  return <NextHead>{'title' in content && <title>{(content as any).title}</title>}</NextHead>;
};

export default Head;
