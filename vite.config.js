import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5050', // Forward requests starting with /api to your backend server
    },
    hmr: {
      overlay: false,
    },
  },
});
