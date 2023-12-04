import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
    emptyOutDir: true,
    manifest: true,
    outDir: '../src/assetbundles/dist',
    rollupOptions: {
      input: {
        'admin-bar': './admin-bar.ts',
      },
    },
  },
  server: {
    port: 3300,
  },
})
