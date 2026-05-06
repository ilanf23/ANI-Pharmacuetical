import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        aboutV1: resolve(__dirname, 'about-v1.html'),
        aboutV2: resolve(__dirname, 'about-v2.html'),
        executiveTeam: resolve(__dirname, 'executive-team.html'),
        purposeValues: resolve(__dirname, 'purpose-values.html'),
        quality: resolve(__dirname, 'quality.html'),
        capabilities: resolve(__dirname, 'capabilities.html'),
        locations: resolve(__dirname, 'locations.html'),
        board: resolve(__dirname, 'board.html'),
        products: resolve(__dirname, 'products.html'),
        careers: resolve(__dirname, 'careers.html'),
        benefits: resolve(__dirname, 'benefits.html'),
        contact: resolve(__dirname, 'contact.html'),
        investors: resolve(__dirname, 'investors.html'),
        investorsWebcam: resolve(__dirname, 'investors-webcam.html'),
        investorsPodcasts: resolve(__dirname, 'investors-podcasts.html'),
        investorsFiles: resolve(__dirname, 'investors-files.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        accessibility: resolve(__dirname, 'accessibility.html'),
      },
    },
  },
});
