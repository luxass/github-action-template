import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm"],
  clean: true,
  dts: false,
  treeshake: true,
  bundle: true,
  noExternal: [
    "@actions/core",
  ],
  skipNodeModulesBundle: false,
  outExtension: () => ({
    js: ".js",
  }),
});
