import { getAllPosts } from '@/app/lib/posts';
import { Locales, LocalesValues, type IntlayerConfig } from 'intlayer';
import { nextjsRewrite } from 'intlayer/routing';
import { availableLocales, defaultLocale } from './helpers';

const rewrites: { [key: string]: Record<LocalesValues, string> } = {};

getAllPosts().forEach((post) => {
  const key = `/[locale]/blog/${post.metadata.slug}`;

  if (post.metadata.locale == Locales.ENGLISH) {
    if (key in rewrites) {
      rewrites[key][Locales.ENGLISH] = `/[locale]/blog/${post.metadata.name}`;
    } else {
      rewrites[key] = {
        [Locales.ENGLISH]: `/[locale]/blog/${post.metadata.name}`,
        [Locales.TURKISH]: ``,
      };
    }
  }

  if (post.metadata.locale == Locales.TURKISH) {
    if (key in rewrites) {
      rewrites[key][Locales.TURKISH] = `/[locale]/blog/${post.metadata.name}`;
    } else {
      rewrites[key] = {
        [Locales.TURKISH]: `/[locale]/blog/${post.metadata.name}`,
        [Locales.ENGLISH]: ``,
      };
    }
  }
});

export const blogPostRewrite = rewrites;

const config: IntlayerConfig = {
  internationalization: {
    locales: availableLocales,
    defaultLocale: defaultLocale,
  },
  content: {
    contentDir: ['contents'],
  },
  routing: {
    mode: 'prefix-all',
    rewrite: nextjsRewrite({
      '/[locale]/contact': {
        en: '/[locale]/contact',
        tr: '/[locale]/iletisim',
      },
      '/[locale]/mission': {
        en: '/[locale]/mission',
        tr: '/[locale]/misyon',
      },
      '/[locale]/philosophy': {
        en: '/[locale]/spirituality',
        tr: '/[locale]/maneviyat',
      },
      ...blogPostRewrite,
      // Removed posts
      '/[locale]/blog/challenges-levels-rewards-and-punishments': {
        en: '/[locale]/blog/how-to-play-in-nature',
        tr: '/[locale]/blog/dogada-nasil-oynamaliyiz',
      },
      '/[locale]/blog/zorluklar-seviyeler-oduller-ve-cezalar': {
        en: '/[locale]/blog/how-to-play-in-nature',
        tr: '/[locale]/blog/dogada-nasil-oynamaliyiz',
      },
      '/[locale]/blog/the-scamming-case-of-big-tech-companies': {
        en: '/[locale]/blog/the-rape-case-of-big-tech-companies',
        tr: '/[locale]/blog/buyuk-teknoloji-sirketlerinin-tecavuz-vakasi',
      },
      '/[locale]/blog/buyuk-teknoloji-sirketlerinin-dolandiricilik-vakasi': {
        en: '/[locale]/blog/the-rape-case-of-big-tech-companies',
        tr: '/[locale]/blog/buyuk-teknoloji-sirketlerinin-tecavuz-vakasi',
      },
    }),
  },
  log: {
    mode: 'verbose',
  },
  dictionary: {
    importMode: 'dynamic',
  },
};

export default config;
