import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../src/web/assets/dist',
    rollupOptions: {
      input: {
        'admin-bar': './admin-bar.ts',
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    port: 3300,
  },
})
