import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  base: '/fwamp/',
  plugins: [
    ViteImageOptimizer({
      jpg: { quality: 75 },
      png: { quality: 80 },
    }),
  ],
})
