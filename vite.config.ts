import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'vite';
import {resolve} from 'node:path';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      external: ['docx', 'jspdf', 'lucide', 'papaparse', 'react', 'react-dom/client'],
      input: {
        home: resolve(process.cwd(), 'index.html'),
        app: resolve(process.cwd(), 'app/index.html'),
      },
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
