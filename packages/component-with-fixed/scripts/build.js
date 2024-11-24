import * as fs from "fs-extra";
import * as path from "path";
import { config } from "../vite.config.js";
import { build, defineConfig} from "vite";
const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig; 

  // 全量打包
  // await build(defineConfig(config as UserConfig) as InlineConfig);
  // await build()

  const baseOutDir ='./dist-test';



  const srcDir ="./src/"
  // path.resolve(__dirname, "./src/");
  const componentsDir = fs.readdirSync(srcDir).filter((name) => {
    // 只要目录不要文件，且里面包含index.ts
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.jsx");
  });
  // forEach中异步执行有问题 改为for-of
  for (let name of componentsDir) {
    const outDir = path.resolve(baseOutDir, name);
    console.log(name,'name123')
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name),
        name, // 导出模块名
        fileName: `index`,
        formats: [`es`, `umd`],
      },
      outDir,
    };
    Object.assign(config.build, custom);
    await build(defineConfig(custom));

  }
};

buildAll();
