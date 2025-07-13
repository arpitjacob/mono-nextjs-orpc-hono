import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./api/**/*.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  tsconfig: "./tsconfig.json",
  outDir: "./dist",
});
