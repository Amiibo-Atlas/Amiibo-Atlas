// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  define: {
    'process.env': process.env // This exposes your environment variables on the client side
  }
});

console.log('Environment Variables:', import.meta.env);
