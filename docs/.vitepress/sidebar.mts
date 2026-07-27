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

/** 快应用 -> 用于匹配侧栏分组标题（目录已无序号前缀） */
function segmentTitle(seg: string) {
  return seg.replace(/^\d+\./, "");
}

/**
 * Teek 侧栏通常只生成顶级目录 key（如 /多端/），嵌套栏目在 items 里。
 * 按文件相对路径下钻，尽量只保留当前小栏目。
 */
function narrowToLeaf(
  mapped: DefaultTheme.SidebarItem[] | DefaultTheme.SidebarItem,
  fileDir: string,
  dirPrefix: string
): DefaultTheme.SidebarItem[] | DefaultTheme.SidebarItem {
  const remaining =
    fileDir === dirPrefix ? "" : fileDir.slice(dirPrefix.length + 1);
  if (!remaining) return mapped;

  const segments = remaining.split("/").filter(Boolean);
  let nodes: DefaultTheme.SidebarItem[] = Array.isArray(mapped)
    ? mapped
    : mapped.items || [mapped];

  // Teek 常包一层 text:"" 的根节点，先展开
  if (
    nodes.length === 1 &&
    (!nodes[0].text || nodes[0].text === "") &&
    nodes[0].items?.length
  ) {
    nodes = nodes[0].items;
  }

  let leaf: DefaultTheme.SidebarItem | undefined;
  for (const seg of segments) {
    const title = segmentTitle(seg);
    const hit = nodes.find(
      (item) => item.text === title || item.text === seg
    );
    if (!hit) break;
    leaf = hit;
    nodes = hit.items || [];
  }

  if (leaf?.items?.length) {
    return [{ text: leaf.text, collapsed: false, items: leaf.items }];
  }
  return mapped;
}

/**
 * Teek/VitePress 在 permalink 都是 /pages/xxx 时，rewrites 侧栏会互相覆盖成最后一组。
 * 按文件路径生成侧栏后，把每个永久链接挂到对应目录（优先最深目录，并尽量收窄到小栏目）。
 */
export function fixPermalinkSidebar(
  data: DefaultTheme.SidebarMulti | DefaultTheme.SidebarItem[]
): DefaultTheme.SidebarMulti | DefaultTheme.SidebarItem[] {
  if (Array.isArray(data)) return mapItems(data);

  const result: DefaultTheme.SidebarMulti = {};
  const permalinkBest = new Map<
    string,
    {
      depth: number;
      mapped: DefaultTheme.SidebarItem[] | DefaultTheme.SidebarItem;
    }
  >();

  for (const [key, value] of Object.entries(data)) {
    const mapped = mapSidebarValue(value);
    result[key] = mapped;

    const dirPrefix = key.replace(/^\//, "").replace(/\/$/, "");
    const depth = dirPrefix ? dirPrefix.split("/").length : 0;

    for (const [file, permalink] of Object.entries(fileToPermalink)) {
      const fileDir = file.includes("/")
        ? file.slice(0, file.lastIndexOf("/"))
        : "";
      const matched =
        fileDir === dirPrefix || fileDir.startsWith(dirPrefix + "/");
      if (!matched) continue;

      const narrowed = narrowToLeaf(mapped, fileDir, dirPrefix);
      const prev = permalinkBest.get(permalink);
      // 更深的目录 key 优先；同深度时以收窄后的为准
      if (!prev || depth >= prev.depth) {
        permalinkBest.set(permalink, { depth, mapped: narrowed });
      }
    }
  }

  for (const [permalink, { mapped }] of permalinkBest) {
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
