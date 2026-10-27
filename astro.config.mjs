import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alexliwenhao.github.io',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
