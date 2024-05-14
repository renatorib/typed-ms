import { defineConfig } from "tsup";

export default defineConfig([
  {
    dts: true,
    format: ["esm", "cjs"],
    sourcemap: true,
    minify: true,
    clean: true,
    entry: ["src"],
    outDir: "dist",
    splitting: true,
    esbuildOptions: (options) => {
      options.banner = { js: '"use client";' };
      options.chunkNames = "__chunks/[hash]";
    },
  },
]);
