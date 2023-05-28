import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  splitting: true,
  dts: true,
  sourcemap: true,
  format: ["esm"],
  outDir: "dist",
  clean: !options.watch,
  // minify: !options.watch,
  platform: "browser",
  replaceNodeEnv: true,
  target: "esnext",
  treeshake: true,
  skipNodeModulesBundle: true,
}));
