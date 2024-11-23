const simpleGit = require("simple-git");
const path = require("path");
const fs = require("fs");
const os = require("os");
const fsExtra = require("fs-extra");
const ejs = require("ejs");

async function createDir(targetDir) {
  if (fsExtra.existsSync(targetDir)) {
    // 是否为强制创建？
      await fsExtra.remove(targetDir);
  }
  fsExtra.mkdirsSync(targetDir);
}

async function copyFile(targetDir, templateDir, rawHtml, componentName) {
  const rawContent = await ejs.renderFile(
    path.resolve(templateDir, "demo.ejs"),
    { rawHtml },
    { async: true }
  );
  fsExtra.writeFileSync(path.join(targetDir, "/demo.tsx"), rawContent);

  const mdContent = await ejs.renderFile(
    path.resolve(templateDir, "index.ejs"),
    { componentName },
    { async: true }
  );
  fsExtra.writeFileSync(path.join(targetDir, "/index.md"), mdContent);

  const indexContent = await ejs.renderFile(
    path.resolve(templateDir, "index.tsx"),
  );
  fsExtra.writeFileSync(path.join(targetDir, "/index.tsx"), indexContent);
}

module.exports = async function modifyGit({ componentName, rawHtml }) {
  // 创建一个临时目录来克隆仓库
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "repo-"));
  console.log(tempDir, "tempDir");
  // 克隆仓库到临时目录
  simpleGit().clone(
    "git@github.com:huabuyu05100510/pnpm-monorepo.git",
    tempDir,
    (err) => {
      if (err) {
        console.error("克隆仓库失败", err);
        return;
      }

      // 进入仓库目录
      const templateDir = `${tempDir}/packages/component-with-fixed/templates`;
      const srcDir = `${tempDir}/packages/component-with-fixed/src`;
      const targetDir = `${srcDir}/${componentName}`;
      process.chdir(srcDir);
      createDir(targetDir);
      copyFile(targetDir, templateDir, rawHtml, componentName)
    //   fs.writeFileSync(path.join(targetAir, "/index.tsx"), html);
      //创建文件
      // 修改文件或代码
    //   fs.writeFileSync("your-file.js", 'console.log("Hello, World!");');

      // 添加所有更改到暂存区
      simpleGit().add(".", (addErr) => {
        if (addErr) {
          console.error("添加更改失败", addErr);
          return;
        }

        // 提交更改
        simpleGit().commit(`skeleton ${componentName}推送成功`, (commitErr) => {
          if (commitErr) {
            console.error("提交更改失败", commitErr);
            return;
          }

          // 推送更改到远程仓库
          simpleGit().push("origin", "main", (pushErr) => {
            if (pushErr) {
              console.error("推送更改失败", pushErr);
              return;
            }

            console.log(`skeleton ${componentName}推送远程仓库`);
          });
        });
      });
    }
  );
};
