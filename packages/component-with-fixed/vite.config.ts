import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Counter",
      fileName: "counter",
    },
    rollupOptions: {
      external: /^react|react-dom$/,
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
      output: [
        {
          format: "esm",
          dir: "dist",
          exports: "named",
          entryFileNames: "[name].mjs",
          chunkFileNames: "[name].mjs",
          preserveModules: true, // 保留模块结构
          preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
        },
        {
          format: "cjs",
          dir: "dist",
          exports: "named",
          entryFileNames: "[name].cjs",
          chunkFileNames: "[name].cjs",
          preserveModules: true, // 保留模块结构
          preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
        },
      ],
    },
  },
});
