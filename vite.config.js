// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Ensures a browser-like environment is used
  },
  base:"/learn-git-actions/"
});
