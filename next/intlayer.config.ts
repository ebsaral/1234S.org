import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.TURKISH,
    ]
  },
  middleware: {
    prefixDefault: false,
  },
  log: {
    mode: "verbose"
  }
};

export default config;