const path = require("path");
const os = require("os");
const fs = require("fs");

// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다
// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다
// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4나 mov는 video로, png나 aae는 image로, 중복되어 앞에 e가 붙은 파일은 duplicated로

// console.log(process.argv[2]);
const folder = process.argv[2];
const workingDir = path.join(
  os.homedir(),
  "Desktop/DreamCoding/Node.js/script-challenge/photo",
  folder
);

console.log(workingDir);

if (!folder || !fs.existsSync(workingDir)) {
  console.error("Please enter folder name in Pictures");
  return;
}
console.log(workingDir);
