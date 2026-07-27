import type { DefaultTheme } from "vitepress";
import { createRewrites } from "vitepress-theme-teek/config";

const { __create__: _unused, ...permalinkRewrites } = createRewrites({
  srcDir: "docs",
});

/** 文件路径 -> 永久链接路径（无首尾多余斜杠规则统一） */
const fileToPermalink = Object.fromEntries(
  Object.entries(permalinkRewrites).map(([file, dest]) => [
    file.replace(/\\/g, "/"),
    "/" + String(dest).replace(/\.md$/i, "").replace(/\/index$/i, ""),
  ])
);

function toPermalinkLink(link?: string): string | undefined {
  if (!link) return link;
  const normalized = link.replace(/\\/g, "/");
  const asFile = normalized.replace(/^\//, "").replace(/\.html$/, "") + ".md";
  const asFileNoSlash = normalized.replace(/^\//, "") + ".md";
  return (
    fileToPermalink[asFile] ||
    fileToPermalink[asFileNoSlash] ||
    fileToPermalink[normalized.replace(/^\//, "")] ||
    link
  );
}

function mapItems(
  items: DefaultTheme.SidebarItem[] = []
): DefaultTheme.SidebarItem[] {
  return items.map((item) => {
    const next: DefaultTheme.SidebarItem = { ...item };
    if (next.link) next.link = toPermalinkLink(next.link);
    if (next.items) next.items = mapItems(next.items);
    return next;
  });
}

function mapSidebarValue(
  value: DefaultTheme.SidebarItem[] | DefaultTheme.SidebarItem
): DefaultTheme.SidebarItem[] | DefaultTheme.SidebarItem {
  if (Array.isArray(value)) return mapItems(value);
  return {
    ...value,
    link: toPermalinkLink(value.link),
    items: value.items ? mapItems(value.items) : value.items,
  };
}

/**
 * Teek/VitePress 在 permalink 都是 /pages/xxx 时，rewrites 侧栏会互相覆盖成最后一组。
 * 按文件路径生成侧栏后，把每个永久链接挂到对应「一级栏目」整棵树
 *（例如读 AI 文章时侧栏展示「更多」下全部子栏目，而不只当前小分类）。
 */
export function fixPermalinkSidebar(
  data: DefaultTheme.SidebarMulti | DefaultTheme.SidebarItem[]
): DefaultTheme.SidebarMulti | DefaultTheme.SidebarItem[] {
  if (Array.isArray(data)) return mapItems(data);

  const result: DefaultTheme.SidebarMulti = {};
  const permalinkBest = new Map<
    string,
    DefaultTheme.SidebarItem[] | DefaultTheme.SidebarItem
  >();

  for (const [key, value] of Object.entries(data)) {
    const mapped = mapSidebarValue(value);
    result[key] = mapped;

    const dirPrefix = key.replace(/^\//, "").replace(/\/$/, "");
    const depth = dirPrefix ? dirPrefix.split("/").length : 0;
    // 只挂一级栏目（如 /更多/），深度越小展示越多兄弟分类
    if (depth !== 1) continue;

    for (const [file, permalink] of Object.entries(fileToPermalink)) {
      const fileDir = file.includes("/")
        ? file.slice(0, file.lastIndexOf("/"))
        : "";
      const matched =
        fileDir === dirPrefix || fileDir.startsWith(dirPrefix + "/");
      if (!matched || permalinkBest.has(permalink)) continue;
      permalinkBest.set(permalink, mapped);
    }
  }

  for (const [permalink, mapped] of permalinkBest) {
    result[permalink] = mapped;
    if (!permalink.endsWith("/")) result[permalink + "/"] = mapped;
  }

  return result;
}

export function getPermalinkRewrites() {
  return permalinkRewrites;
}

export function getFileToPermalink() {
  return fileToPermalink;
}
