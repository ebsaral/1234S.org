import { getMultilingualUrls } from "intlayer";
import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: "https://1234s.org",
    alternates: {
      languages: { ...getMultilingualUrls("https://1234s.org") },
    },
  }
];

export default sitemap;