import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind(), react({ include: ['**/react/*'], experimentalReactChildren: true })],
  image: {
    domains: ["astro.build"]
  }
});