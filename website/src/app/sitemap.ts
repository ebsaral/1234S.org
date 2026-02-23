import fs from 'fs';
import { getMultilingualUrls } from 'intlayer';
import type { MetadataRoute } from 'next';
import path from 'path';

const BASE_URL = 'https://www.1234s.org';

const STATIC_PATHS = ['/', '/philosophy', '/mission', '/blog', '/service', '/contact'];

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), 'src/contents/Blog');

  const files = fs.readdirSync(blogDir);

  // Remove locale suffix (.en.md / .tr.md)
  const slugs = new Set(files.map((file) => file.replace(/\.(en|tr)\.md$/, '')));

  return Array.from(slugs);
}

const sitemap = (): MetadataRoute.Sitemap => {
  const now = new Date();

  const blogSlugs = getBlogSlugs();
  const blogPaths = blogSlugs.map((slug) => `/blog/${slug}`);

  const allPaths = [...STATIC_PATHS, ...blogPaths];

  const data: MetadataRoute.Sitemap = allPaths.flatMap((path) => {
    const multilingual = getMultilingualUrls(`${BASE_URL}${path}`);

    return Object.entries(multilingual).map(([_, url]) => ({
      url,
      lastModified: now,
      alternates: {
        languages: {
          'x-default': multilingual.tr,
          ...multilingual,
        },
      },
      priority: path === '/' ? 1.0 : path === '/service' ? 0.9 : path.startsWith('/blog/') ? 0.6 : 0.8,
      changeFrequency: path === '/' ? 'daily' : path.startsWith('/blog/') ? 'monthly' : 'weekly',
    }));
  });

  // console.dir(data, { depth: null, color: true });

  return data;
};

export default sitemap;
