import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import contentCollections from "@content-collections/vite";
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  plugins: [
    contentCollections(),
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 75,
        
      },
      jpg: {
        quality: 75,
      },
      webp: {
        lossless: false,
        quality: 80,
      },
      avif: {
        lossless: false,
        quality: 70,
      },
    }),
  ],
})

export default config
