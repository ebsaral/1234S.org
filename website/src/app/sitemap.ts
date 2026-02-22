import { getMultilingualUrls } from 'intlayer';
import type { MetadataRoute } from 'next';

const url = 'https://www.1234s.org';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url,
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url) },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/philosophy',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/philosophy') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/maneviyat',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/philosophy') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/spirituality',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/philosophy') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/mission',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/mission') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/blog',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/blog') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/blog/the-scamming-case-of-big-tech-companies',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/blog/the-scamming-case-of-big-tech-companies') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/blog/some-feelings-cannot-be-bought',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/blog/some-feelings-cannot-be-bought') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/misyon',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/mission') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/service',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/service') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/hizmet',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/service') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/contact',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/contact') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/iletisim',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/contact') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
];

export default sitemap;
