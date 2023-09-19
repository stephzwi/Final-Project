import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      // Specify the entry point for your application
      input: "src/App.jsx",
    },
  },
});
