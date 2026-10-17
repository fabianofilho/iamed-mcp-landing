import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://iamed.cc/mcps/iamed
// site + base geram canonical e OG absolutos corretos e prefixam os assets.
export default defineConfig({
  site: "https://iamed.cc",
  base: "/mcps/iamed",
  output: "static",
  integrations: [tailwind()],
});
