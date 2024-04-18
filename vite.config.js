import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/crypto': 'http://localhost:8080', // Forward requests starting with /api to your backend server
    },
    hmr: {
      overlay: false,
    },
  },
  define: {
    // Define a global variable to access NODE_ENV in your code
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});
