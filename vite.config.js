import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // abre un reporte interactivo al hacer build
    ViteImageOptimizer({
      // Configuración para c/ formato
      jpg: {
        quality: 80, // calidad de compresión
        progressive: true, // carga progresiva
      },
      png: {
        quality: 80,
        compressionLevel: 8, // nivel de compresión (0-9)
      },
      gif: {
        optimizationLevel: 3, // nivel de optimización (0-3)
        interlaced: false,
      },
      svg: {
        multipass: true, // múltiples pasadas para optimizar
        plugins: [
          { name: 'removeViewBox', active: false }, // mantiene el viewBox
          { name: 'removeDimensions', active: true },
          { name: 'sortAttrs', active: true },
        ],
      },
      /* Configuración p/ optimizar WebP. */
      webp: {
        quality: 80,
      },
      // Se puede: configurar jpg, png, etc., si es necesario
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  build: {
    minify: 'esbuild', // rápido y eficiente; puedes usar 'terser' si quieres compresión máxima
    terserOptions: {
      compress: {
        drop_console: true,   // elimina console.log en producción
        drop_debugger: true,  // elimina debugger
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          bootstrap: ['react-bootstrap'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});