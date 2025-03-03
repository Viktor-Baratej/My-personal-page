import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // або '/'
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
