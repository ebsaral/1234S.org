import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
   async redirects() {
    return [
      {
        source: '/maneviyat',
        destination: '/spirituality',
        permanent: false,
        has: [{ type: 'cookie', key: 'INTLAYER_LOCALE', value: 'en' }],
      },
      {
        source: '/spirituality',
        destination: '/maneviyat',
        permanent: false,
        has: [{ type: 'cookie', key: 'INTLAYER_LOCALE', value: 'tr' }],
      }
    ]
  },
};

export default withIntlayer(nextConfig);