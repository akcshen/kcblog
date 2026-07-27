/**
 * 读取 docs 下所有 md 文件
 */
const fs = require("fs");
const path = require("path");

const docsRoot = path.join(__dirname, "..", "..", "docs");
const IGNORE_DIRS = new Set([".vitepress", ".vuepress", "node_modules", "public"]);

function readFileList(dir = docsRoot, filesList = []) {
  if (!fs.existsSync(dir)) return filesList;
  const files = fs.readdirSync(dir);
  files.forEach((item) => {
    const filePath = path.join(dir, item);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (IGNORE_DIRS.has(item)) return;
      readFileList(filePath, filesList);
      return;
    }
    if (item.toLowerCase().endsWith(".md")) {
      filesList.push({
        name: path.basename(item, ".md"),
        filePath,
      });
    }
  });
  return filesList;
}

module.exports = readFileList;
