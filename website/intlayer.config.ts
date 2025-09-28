import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.TURKISH,
      Locales.FRENCH,
      Locales.GERMAN
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
    enabled: Boolean(process.env.INTLAYER_ENABLED || "true"),
    /**
     * Required
     *
     * Client ID and client secret are required to enable the editor.
     * They allow the identify the user who is editing the content.
     * They can be obtained by creating a new client in the Intlayer Dashboard - Projects (https://intlayer.org/dashboard/projects).
     * clientId: process.env.INTLAYER_CLIENT_ID,
     * clientSecret: process.env.INTLAYER_CLIENT_SECRET,
     */
    clientId: process.env.INTLAYER_CLIENT_ID,
    clientSecret: process.env.INTLAYER_CLIENT_SECRET,
  },
  log: {
    mode: "verbose"
  },
  build: {
    importMode: "dynamic",
  },
};

export default config;