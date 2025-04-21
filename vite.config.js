import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio_3d/',
  plugins: [
    react(),
    viteCompression(),
    visualizer({ open: true })
  ],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          threejs: ['three', 'three-stdlib'],
          vendor: ['react', 'react-dom'],
          lottie: ['lottie-web'] // Isole lottie dans son propre chunk
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'three',
      'three-stdlib',
      'lottie-web' // Force l'inclusion dans le pré-bundling
    ],
    exclude: ['three-stdlib/libs/lottie.js'] // Exclut le fichier problématique
  }
});