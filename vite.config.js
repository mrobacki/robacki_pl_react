import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // dzięki temu @use '@/styles/mixins' zadziała w SCSS
        additionalData: ``,
        // opcjonalnie ułatwia @use 'styles/...'
        includePaths: ["src"],
      },
    },
  },
});
