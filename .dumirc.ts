import { defineConfig } from "dumi";
import style from "./docs/siteIndexStyle";
import path from "path";

let base: string | undefined;
let publicPath: string | undefined;

if (process.env.PREVIEW !== "1") {
  base = "/perfect-design/";
  publicPath = "/perfect-design/";
}

export default defineConfig({
  base,
  publicPath,
  title: "Perfect Design", // 站点名称
  outputPath: "docs-dist", // 输出文件夹
  resolve: {
    docDirs: [
      "docs",
      "/packages/component-with-fixed/src",
      "/packages/loading-with-cache/src",
    ],
    atomDirs: [
      { type: "component", dir: "/packages/component-with-fixed/src" },
      { type: "component1", dir: "/packages/loading-with-cache/src" },
    ],
    codeBlockMode: "passive",
  },
  alias: {
    perfectD: path.join(__dirname, "packages/perfect-design/src"),
  },
  themeConfig: {
    name: "Perfect D",
    carrier: "dumi", // 设备状态栏左侧的文本内容
    hd: true,
    rtl: true,
    footer:
      "Copyright © 2022-2022 Perfect Design. All Rights Reserved. Perfect Design 版权所有. 苏ICP备2022018069号",
    nav: [
      {
        title: "指南",
        link: "/guide",
      },
      {
        title: "loading",
        link: "/loading",
      },
      {
        title: "组件",
        link: "/components/button1",
      },
    ],
  },
  styles: [style],
});