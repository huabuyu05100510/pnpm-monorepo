const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');
const os = require('os');
 
module.exports=async function modifyGit(){
     
// 创建一个临时目录来克隆仓库
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'repo-'));
console.log(tempDir,'tempDir')
// 克隆仓库到临时目录
simpleGit().clone('git@github.com:huabuyu05100510/pnpm-monorepo.git', tempDir, (err) => {
  if (err) {
    console.error('克隆仓库失败', err);
    return;
  }
 
  // 进入仓库目录


  process.chdir(`${tempDir}/packages/component-with-fixed/src`);
 
  // 修改文件或代码
  fs.writeFileSync('your-file.js', 'console.log("Hello, World!");');
 
  // 添加所有更改到暂存区
  simpleGit().add('.', (addErr) => {
    if (addErr) {
      console.error('添加更改失败', addErr);
      return;
    }
 
    // 提交更改
    simpleGit().commit('修改了文件', (commitErr) => {
      if (commitErr) {
        console.error('提交更改失败', commitErr);
        return;
      }
 
      // 推送更改到远程仓库
      simpleGit().push('origin', 'main', (pushErr) => {
        if (pushErr) {
          console.error('推送更改失败', pushErr);
          return;
        }
 
        console.log('更改已推送到远程仓库');
      });
    });
  });
});
}