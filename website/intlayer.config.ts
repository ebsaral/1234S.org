import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.GERMAN,
      Locales.TURKISH,
    ],
    defaultLocale: Locales.ENGLISH
  },
  content: {
    contentDir: ["contents"],
  },
  middleware: {
    prefixDefault: true,
  },
  editor: {
    /**
     * Required
     * The URL of the application.
     * This is the URL targeted by the visual editor.
     */
    applicationURL: process.env.INTLAYER_APPLICATION_URL,
    /**
     * Optional
     * Default as `8000`.
     * The port of the editor server.
     */
    port: Number(process.env.INTLAYER_PORT || 8000),
    /**
     * Optional
     * Default as "http://localhost:8000"
     * The URL of the editor server.
     */
    editorURL: process.env.INTLAYER_EDITOR_URL,
    /**
     * Optional
     * Default as `true`. If `false`, the editor is inactive and cannot be accessed.
     * Can be used to disable the editor for specific environments for security reason, such as production.
     */
    enabled: Boolean(process.env.INTLAYER_ENABLED || "true")
  },
  log: {
    mode: "verbose"
  },
  build: {
    importMode: "dynamic",
  },
};

export default config;