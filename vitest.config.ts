import { UserConfigExport, defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: { provider: "istanbul" },
  },
} as UserConfigExport);
