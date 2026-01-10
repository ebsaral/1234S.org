import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

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
      }
    ]
  },
};

export default withIntlayer(nextConfig);