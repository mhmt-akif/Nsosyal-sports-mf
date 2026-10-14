import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'nscore',
      filename: 'remoteEntry.js',
      // Host'un (nsosyal) yükleyebileceği modüller
      exposes: {
        './App': './src/exposes/App.ts',
      },
      // React host ile ortak kullanılır; sayfada tek bir React kopyası olmalı
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
  server: {
    port: 3001,
    strictPort: true,
    origin: 'http://localhost:3001',
    cors: true,
  },
  preview: {
    port: 3001,
    strictPort: true,
    cors: true,
  },
  build: {
    target: 'esnext',
  },
})
