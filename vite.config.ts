import { defineConfig } from 'vite'
import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import react from '@vitejs/plugin-react'
import adonisjs from '@adonisjs/vite/client'
import tailwindcss from 'tailwindcss'
import autoPrefixer from 'autoprefixer'

export default defineConfig({
  plugins: [inertia({ ssr: { enabled: true, entrypoint: 'inertia/app/ssr.tsx' } }), react(), adonisjs({ entrypoints: ['inertia/app/app.tsx'], reload: ['resources/views/**/*.edge'] })],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoPrefixer()],
    },
  },

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia/`,
    },
  },
})
