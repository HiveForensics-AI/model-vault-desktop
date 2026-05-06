import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite configuration for the Model Vault desktop application. This config
// enables React support, TypeScript, and resolves paths for cleaner
// imports. If you decide to extend the project with additional aliases
// or plugins (e.g. for Tauri), append them here.

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
});