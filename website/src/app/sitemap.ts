import { getMultilingualUrls } from "intlayer";
import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: "https://1234s.org",
    lastModified: new Date(),
    alternates: {
      languages: { ...getMultilingualUrls("https://1234s.org") },
    },
    priority: 1,
    changeFrequency: "hourly"
  }
];

export default sitemap;