// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mmdio1605.github.io',
  base: '/my-landing-page/',

  vite: {
    plugins: [tailwindcss()]
  }
});
