import type { NextConfig } from 'next';
import { withIntlayer } from 'next-intlayer/server';
import { blogPostRewrite } from './intlayer.config';

// Edge case handling: /en/blog/turkish-slug -> /tr/blog/turkish-slug
const blogPostRedirects = Object.keys(blogPostRewrite).map((key) => {
  return {
    source: blogPostRewrite[key].tr.replace('[locale]', 'en'),
    destination: blogPostRewrite[key].tr.replace('[locale]', 'tr'),
    permanent: false,
  };
});

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...blogPostRedirects,
      {
        source: '/maneviyat',
        destination: '/tr/philosophy',
        permanent: false,
      },
      {
        source: '/spirituality',
        destination: '/en/philosophy',
        permanent: false,
      },
      {
        source: '/sss',
        destination: '/tr/philosophy#faq',
        permanent: false,
      },
      {
        source: '/faq',
        destination: '/en/philosophy#faq',
        permanent: false,
      },
      {
        source: '/mission',
        destination: '/en/mission',
        permanent: false,
      },
      {
        source: '/misyon',
        destination: '/tr/mission',
        permanent: false,
      },
      {
        source: '/iletisim',
        destination: '/tr/contact',
        permanent: false,
      },
    ];
  },
};

export default withIntlayer(nextConfig);
