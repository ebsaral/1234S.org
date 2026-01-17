import type { MetadataRoute } from 'next';
import { getMultilingualUrls } from 'intlayer';

const getAllMultilingualUrls = (urls: string[]) =>
  urls.flatMap((url) => Object.values(getMultilingualUrls(url)) as string[]);

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: ['/'],
    disallow: getAllMultilingualUrls([]),
  },
  host: 'https://1234s.org',
  sitemap: `https://1234s.org/sitemap.xml`,
});

export default robots;
