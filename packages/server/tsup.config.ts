import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/server.ts", "cli/index.ts"],
  splitting: true,
  dts: true,
  sourcemap: true,
  format: ["esm"],
  outDir: "dist",
  clean: !options.watch,
  platform: "node",
  replaceNodeEnv: true,
  target: "es2022",
  treeshake: true,
  skipNodeModulesBundle: true,
}));
