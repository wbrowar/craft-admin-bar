import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../src/web/assets/dist',
    rollupOptions: {
      input: {
        'admin-bar': './admin-bar.ts',
        'admin-bar-builder': './admin-bar-builder.ts',
      },
    },
  },
  server: {
    port: 3300,
  },
})
