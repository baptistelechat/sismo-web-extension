import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";

function generateManifest() {
  const manifest = readJsonFile("src/manifest.json");
  const pkg = readJsonFile("package.json");
  return {
    name: "Sismo",
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Déterminer le navigateur cible à partir des arguments de ligne de commande
  // Par défaut, on cible Chrome
  const browser = process.env.BROWSER || 'chrome';
  
  return {
  plugins: [
    react(),
    tailwindcss(),
    webExtension({
      manifest: generateManifest,
      browser: browser,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
