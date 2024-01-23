import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://belajar-astro-haniffaisal12.netlify.app",
  integrations: [preact()]
});