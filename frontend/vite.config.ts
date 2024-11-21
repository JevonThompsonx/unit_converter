import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react(), tailwindcss(),
  VitePWA({
    registerType: 'autoUpdate', // Automatically updates the service worker
    manifest: {
      name: 'Unit Converter',
      short_name: 'UnitConvert',
      description: 'A react app for basic unit conversion',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#1F2937',
      icons: [
        {
          src: '/icons/web-app-manifest-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/web-app-manifest-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/icons/favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        }
      ],
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: ({ request }) =>
            request.destination === 'image', // Cache images
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
            },
          },
        },
        {
          urlPattern: ({ url }) =>
            url.pathname.startsWith('/api/'), // Cache API responses
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            networkTimeoutSeconds: 10, // Fallback to cache after 10s
          },
        },
      ],
    },
  })]
})
