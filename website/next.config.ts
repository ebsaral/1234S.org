import type { NextConfig } from 'next';
import { withIntlayer } from 'next-intlayer/server';

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
        source: '/misyon',
        destination: '/tr/mission',
        permanent: false,
      },
      {
        source: '/hizmet',
        destination: '/tr/service',
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
