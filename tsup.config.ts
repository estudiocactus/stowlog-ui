import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/components/nextui/index.ts",
    "src/components/shadcn/index.ts",
    "src/config/index.ts",
    "src/components/icons/lucide/index.ts",
  ],
  format: ["esm", "cjs"],
  dts: true, // Generate TypeScript declaration files
  sourcemap: true,
  clean: true,
});
