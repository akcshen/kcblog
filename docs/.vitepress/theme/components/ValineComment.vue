<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, nextTick, ref, computed } from "vue";
import { useRoute, useData } from "vitepress";

const route = useRoute();
const { frontmatter, page } = useData();
const APP_ID = "TrwDB2SNu15HXbHJPE7wtdSS-gzGzoHsz";
const APP_KEY = "24rymEMKNF0Mapx6EuN1NvRT";
const VALINE_SRC = "https://cdn.jsdelivr.net/npm/valine@1.5.1/dist/Valine.min.js";

const errorMsg = ref("");
let renderToken = 0;

const showComment = computed(() => {
  const fm = frontmatter.value || {};
  if (fm.article === false && !fm.comment) return false;
  if (fm.comment === false) return false;
  const p = route.path || "";
  if (
    p === "/" ||
    p.endsWith("/categories") ||
    p.endsWith("/tags") ||
    p.endsWith("/archives")
  ) {
    return false;
  }
  return !page.value?.isNotFound;
});

const loadScript = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const existed = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
    if (existed) {
      if ((window as any).Valine) {
        resolve();
        return;
      }
      existed.addEventListener("load", () => resolve(), { once: true });
      existed.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
        once: true,
      });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });

const renderValine = async () => {
  if (!showComment.value) return;
  const token = ++renderToken;
  errorMsg.value = "";
  try {
    await loadScript(VALINE_SRC);
    if (token !== renderToken) return;
    await nextTick();
    const el = document.querySelector("#valine-teek-comment");
    if (!el || !(window as any).Valine) return;
    el.innerHTML = "";
    // eslint-disable-next-line no-new
    new (window as any).Valine({
      el: "#valine-teek-comment",
      appId: APP_ID,
      appKey: APP_KEY,
      path: window.location.pathname,
      visitor: true,
      placeholder: "欢迎留言讨论~",
      avatar: "monsterid",
      meta: ["nick", "mail"],
      pageSize: 10,
      lang: "zh-CN",
      highlight: true,
      recordIP: true,
      enableQQ: true,
    });
  } catch (e: any) {
    errorMsg.value = e?.message || "评论加载失败";
  }
};

onMounted(renderValine);
onBeforeUnmount(() => {
  renderToken += 1;
});
watch(
  () => route.path,
  () => {
    renderValine();
  }
);
</script>

<template>
  <div v-if="showComment" class="valine-teek-wrap">
    <p v-if="errorMsg" class="valine-teek-error">{{ errorMsg }}</p>
    <div id="valine-teek-comment" />
  </div>
</template>

<style scoped>
.valine-teek-wrap {
  margin-top: 2rem;
  padding: 1.25rem 1.1rem 0.5rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: color-mix(in srgb, var(--vp-c-bg) 88%, transparent);
  backdrop-filter: blur(8px);
}

.valine-teek-error {
  margin: 0 0 0.75rem;
  color: var(--vp-c-danger-1, #cb2e2e);
  font-size: 0.9rem;
}

:deep(.v[data-class="v"]) {
  color: var(--vp-c-text-1);
}

:deep(.v .vwrap),
:deep(.v .vinput),
:deep(.v .veditor) {
  background: color-mix(in srgb, var(--vp-c-bg-soft) 80%, transparent) !important;
  border-color: var(--vp-c-divider) !important;
  color: var(--vp-c-text-1) !important;
}

:deep(.v .vbtn) {
  border-color: var(--vp-c-brand-1) !important;
  background: var(--vp-c-brand-1) !important;
  color: #fff !important;
}

:deep(.v .vcard .vhead .vnick),
:deep(.v a) {
  color: var(--vp-c-brand-1) !important;
}

:deep(.v .vcontent) {
  color: var(--vp-c-text-1) !important;
}
</style>
