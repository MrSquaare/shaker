import angular from "@analogjs/astro-angular";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    angular(),
    react(),
    svelte(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("iconify-icon"),
        },
      },
    }),
    tailwind(),
  ],
});
