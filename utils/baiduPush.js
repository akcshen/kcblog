/**
 * 生成百度链接推送文件
 * 1) frontmatter.permalink
 * 2) Teek createRewrites 真实路由
 * 3) 去序号路径推导（兜底）
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

function pathFromFile(filePath) {
  const rel = path.relative(docsRoot, filePath).replace(/\\/g, "/");
  const withoutExt = rel.replace(/\.md$/i, "");
  const segments = withoutExt.split("/").map((seg) => seg.replace(/^\d+\./, ""));
  let url = "/" + segments.join("/");
  if (url.endsWith("/index")) url = url.slice(0, -"/index".length) || "/";
  return normalizePath(url);
}

function buildRewriteMap(rewrites) {
  const map = {};
  for (const [file, dest] of Object.entries(rewrites || {})) {
    if (file === "__create__") continue;
    const key = String(file).replace(/\\/g, "/");
    const destPath =
      "/" +
      String(dest)
        .replace(/\.md$/i, "")
        .replace(/\/index$/i, "");
    map[key] = normalizePath(destPath);
  }
  return map;
}

async function main() {
  const domain = DOMAIN.replace(/\/$/, "");
  const urls = new Set([domain + "/"]);

  let rewriteMap = {};
  try {
    const { createRewrites } = await import("vitepress-theme-teek/config");
    const raw = createRewrites({ srcDir: "docs" });
    const { __create__, ...rewrites } = raw;
    rewriteMap = buildRewriteMap(rewrites);
  } catch (err) {
    console.warn("未能加载 Teek rewrites，将回退去序号路径：", err.message);
  }

  const files = readFileList();

  files.forEach((file) => {
    const rel = path.relative(docsRoot, file.filePath).replace(/\\/g, "/");
    const { data } = matter(fs.readFileSync(file.filePath, "utf8"));
    const permalink = data.permalink
      ? normalizePath(data.permalink)
      : rewriteMap[rel] || pathFromFile(file.filePath);
    if (!permalink) return;
    const link = `${domain}${permalink === "/" ? "/" : permalink}`;
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
