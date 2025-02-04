import { defineConfig } from 'vite';
import chokidar from 'chokidar';

export default defineConfig({
  server: {
    watch: {
      usePolling: true, // Switch to polling if necessary
      interval: 100, // Adjust polling interval if using polling
    },
  },
  optimizeDeps: {
    exclude: ['chokidar'], // Prevent Vite from bundling chokidar
  },
});