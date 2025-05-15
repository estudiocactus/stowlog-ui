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
  sourcemap: true,
  clean: true,
  external: ["@heroui/system-rsc", "@react-types/shared"],
});
