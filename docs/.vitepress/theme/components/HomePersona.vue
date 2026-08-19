<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

/**
 * 首页介绍区 —— 改下面这份数据即可，不必动模板。
 * 分类 / 标签页也是 layout: home，需自行排除。
 */
const { frontmatter } = useData();

const isHomeOnly = computed(() => {
  const fm = frontmatter.value;
  return (
    fm.layout === "home" &&
    !fm.categoriesPage &&
    !fm.tagsPage &&
    !fm.archivesPage
  );
});

const persona = {
  title: "Kc's blog",
  tagline: "工作开心不加班，生活快乐无忧虑。",
  paragraphs: [
    "我是 KC，前端工程师。写代码、骑摩托、打游戏，偶尔把折腾过程记在这里。",
    "最近在看 AI 编码工具，以及把日常开发里真正能提前下班的东西留下来。",
  ],
  links: [
    { label: "关于我", href: "/about" },
    { label: "GitHub", href: "https://github.com/akcshen" },
    { label: "看剧", href: "https://tv.kcshen.cn" },
  ],
  picks: [
    { title: "Claude Code 使用指南", href: "/pages/b8c4e2/" },
    { title: "2 分钟规则", href: "/pages/baaa02/" },
    { title: "AI 相关开源", href: "/pages/9f3e2a/" },
  ],
};
</script>

<template>
  <section v-if="isHomeOnly" class="home-persona" aria-label="博客介绍">
    <h1 class="home-persona__title">{{ persona.title }}</h1>
    <p class="home-persona__tagline">{{ persona.tagline }}</p>

    <div class="home-persona__bio">
      <p v-for="(text, index) in persona.paragraphs" :key="index">
        {{ text }}
      </p>
    </div>

    <p class="home-persona__links">
      <a
        v-for="link in persona.links"
        :key="link.href"
        class="home-persona__link"
        :href="link.href"
        :target="link.href.startsWith('http') ? '_blank' : undefined"
        :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
      >
        {{ link.label }}
      </a>
    </p>

    <p class="home-persona__picks">
      最近想看：
      <template v-for="(pick, index) in persona.picks" :key="pick.href">
        <a class="home-persona__pick" :href="pick.href">{{ pick.title }}</a>
        <span v-if="index < persona.picks.length - 1" class="home-persona__dot">·</span>
      </template>
    </p>

    <h2 class="home-persona__posts-title">文章</h2>
  </section>
</template>

<style scoped>
.home-persona {
  --persona-ink: var(--vp-c-text-1);
  --persona-muted: var(--vp-c-text-2);
  margin: 0 auto 0.25rem;
  padding: 1.25rem 0 0;
  max-width: 52rem;
}

.home-persona__title {
  margin: 0;
  font-size: clamp(1.85rem, 4vw, 2.35rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--persona-ink);
}

.home-persona__tagline {
  margin: 0.55rem 0 0;
  font-size: 1.02rem;
  line-height: 1.7;
  color: var(--persona-muted);
}

.home-persona__bio {
  margin-top: 1.35rem;
}

.home-persona__bio p {
  margin: 0 0 0.9rem;
  font-size: 0.98rem;
  line-height: 1.85;
  color: var(--persona-ink);
}

.home-persona__bio p:last-child {
  margin-bottom: 0;
}

.home-persona__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem 1.15rem;
  margin: 1.15rem 0 0;
}

.home-persona__link {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--vp-c-brand-1) !important;
  text-decoration: none !important;
}

.home-persona__link:hover {
  text-decoration: underline !important;
  text-underline-offset: 0.18em;
}

.home-persona__picks {
  margin: 0.85rem 0 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--persona-muted);
}

.home-persona__pick {
  color: var(--persona-ink) !important;
  text-decoration: none !important;
  border-bottom: 1px solid color-mix(in srgb, var(--vp-c-text-1) 18%, transparent);
}

.home-persona__pick:hover {
  color: var(--vp-c-brand-1) !important;
  border-bottom-color: var(--vp-c-brand-1);
}

.home-persona__dot {
  margin: 0 0.35rem;
  color: var(--persona-muted);
}

.home-persona__posts-title {
  margin: 2.4rem 0 0.35rem;
  padding: 0;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--persona-ink);
  border: none;
}
</style>
