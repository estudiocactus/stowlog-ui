import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/components/index.ts",
    "src/config/index.ts",
    "src/utils/index.ts",
    "src/index.ts",
  ],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true,
  splitting: false,
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "@heroui/react",
    "@heroui/system",
    "@heroui/system-rsc",
    "@react-types/shared",
    "use-sync-external-store",
    "use-sync-external-store/shim",
  ],
  noExternal: [],
});
