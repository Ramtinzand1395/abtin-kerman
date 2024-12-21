import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Use the correct literal type
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.png"], // Correct file names
      manifest: {
        name: "KermanAtari",
        short_name: "KermanAtari",
        description: "Online shop for plastations games and consols",
        icons: [
          {
            src: "./atari-seeklogo.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "./icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "./icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "./icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "./icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#181818",
        background_color: "#e8eac2",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // Increase limit to 4 MiB
      },
    }),
  ],
});
