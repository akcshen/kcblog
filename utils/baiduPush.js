/**
 * 生成百度链接推送文件。
 * 站点已关闭 Teek permalink 重写，线上路由就是 docs 下的文件路径。
 * frontmatter.permalink（/pages/xxx）目前会 404，不能再优先推送。
 * sitemap: false / robots noindex 的页面不推送。
 */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const readFileList = require("./modules/readFileList");

const urlsRoot = path.join(__dirname, "..", "urls.txt");
const docsRoot = path.join(__dirname, "..", "docs");
const DOMAIN = process.argv[2];

if (!DOMAIN) {
  console.error(
    "请指定域名参数，例：node utils/baiduPush.js https://kcshen.cn"
  );
  process.exit(1);
}

function normalizePath(urlPath) {
  if (!urlPath) return "";
  let p = urlPath.startsWith("/") ? urlPath : `/${urlPath}`;
  p = p.replace(/\/+/g, "/");
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

function routeFromFile(filePath) {
  const rel = path.relative(docsRoot, filePath).replace(/\\/g, "/");
  let url = "/" + rel.replace(/\.md$/i, "");
  if (url.endsWith("/index")) url = url.slice(0, -"/index".length) || "/";
  return normalizePath(url);
}

function isNoindex(data) {
  if (data.sitemap === false) return true;
  if (!Array.isArray(data.head)) return false;
  return data.head.some((entry) => {
    if (!Array.isArray(entry) || entry[0] !== "meta") return false;
    const attrs = entry[1] || {};
    return (
      attrs.name === "robots" &&
      typeof attrs.content === "string" &&
      /noindex/i.test(attrs.content)
    );
  });
}

async function main() {
  const domain = DOMAIN.replace(/\/$/, "");
  const urls = new Set([domain + "/"]);
  const files = readFileList();

  files.forEach((file) => {
    const { data } = matter(fs.readFileSync(file.filePath, "utf8"));
    if (isNoindex(data)) return;
    const livePath = routeFromFile(file.filePath);
    if (!livePath) return;
    const link = `${domain}${livePath === "/" ? "/" : livePath}`;
    urls.add(link);
  });

  const list = Array.from(urls);
  fs.writeFileSync(urlsRoot, list.join("\r\n") + "\r\n", "utf8");
  list.forEach((link) => console.log(link));
  console.log(`已写入 ${list.length} 条 URL -> urls.txt`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
