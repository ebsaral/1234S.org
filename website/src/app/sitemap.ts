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
    url: url + '/mission',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/mission') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/support',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/support') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
  {
    url: url + '/bank-accounts',
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url + '/bank-accounts') },
    },
    priority: 1,
    changeFrequency: 'hourly',
  },
];

export default sitemap;
