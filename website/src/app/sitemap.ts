import { getMultilingualUrls } from "intlayer";
import type { MetadataRoute } from "next";

const url = "https://www.1234s.org";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url,
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls(url) },
    },
    priority: 1,
    changeFrequency: "hourly"
  },
  {
    url: url + "/spirituality",
    lastModified: new Date(),
    alternates: {
      languages: { en: '/spirituality', tr: "/maneviyat" },
    },
    priority: 1,
    changeFrequency: "hourly"
  },
];

export default sitemap;