import { defineConfig } from 'vite'

export default defineConfig({
    base: '/file-to-base-64/',
    server: {
        port: 7777,
        open: true,
        strictPort: true,
    },
    preview: {
        port: 8080
    },
})
