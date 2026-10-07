import fs from "fs";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    base: "./",
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [
      react(),
      {
        name: "copy-404",
        closeBundle() {
          const indexPath = path.resolve(__dirname, "dist", "index.html");
          const notFoundPath = path.resolve(__dirname, "dist", "404.html");
          if (fs.existsSync(indexPath)) {
            fs.copyFileSync(indexPath, notFoundPath);
          }
        },
      },
    ],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
