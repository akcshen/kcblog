<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

/**
 * 首页人格化卡片 —— 改下面这份数据即可，不必动模板。
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
  kicker: "此刻",
  status: "博客刚从 VuePress 迁到 VitePress，边用边打磨。",
  motto: "工作开心不加班，生活快乐无忧虑。",
  focuses: [
    { label: "VitePress / Teek", hint: "站点" },
    { label: "AI 编码工具", hint: "效率" },
    { label: "骑摩托出门", hint: "生活" },
  ],
  picks: [
    {
      title: "Claude Code 使用指南",
      desc: "把 AI 写进日常工作流",
      link: "/pages/b8c4e2/",
    },
    {
      title: "2 分钟规则",
      desc: "拖延症的小解药",
      link: "/pages/baaa02/",
    },
    {
      title: "AI 相关开源",
      desc: "提前下班的收藏夹",
      link: "/pages/9f3e2a/",
    },
  ],
  aboutLink: "/about",
};
</script>

<template>
  <section v-if="isHomeOnly" class="home-persona" aria-label="博主此刻">
    <header class="home-persona__hero">
      <p class="home-persona__kicker">{{ persona.kicker }}</p>
      <p class="home-persona__status">{{ persona.status }}</p>
      <p class="home-persona__motto">{{ persona.motto }}</p>
    </header>

    <div class="home-persona__body">
      <div class="home-persona__block">
        <h2 class="home-persona__label">最近在折腾</h2>
        <ul class="home-persona__focuses">
          <li
            v-for="item in persona.focuses"
            :key="item.label"
            class="home-persona__focus"
          >
            <span class="home-persona__focus-hint">{{ item.hint }}</span>
            <span class="home-persona__focus-label">{{ item.label }}</span>
          </li>
        </ul>
      </div>

      <div class="home-persona__block">
        <h2 class="home-persona__label">想看这些</h2>
        <ul class="home-persona__picks">
          <li v-for="pick in persona.picks" :key="pick.link">
            <a class="home-persona__pick" :href="pick.link">
              <span class="home-persona__pick-title">{{ pick.title }}</span>
              <span class="home-persona__pick-desc">{{ pick.desc }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <footer class="home-persona__foot">
      <a class="home-persona__about" :href="persona.aboutLink">认识一下我 →</a>
    </footer>
  </section>
</template>

<style scoped>
.home-persona {
  --persona-ink: #004050;
  --persona-muted: color-mix(in srgb, var(--persona-ink) 62%, transparent);
  margin: 0 0 1.75rem;
  padding: 1.5rem 1.55rem 1.25rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: persona-in 0.55s ease both;
}

@keyframes persona-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.home-persona__hero {
  margin-bottom: 1.25rem;
  padding-bottom: 1.15rem;
  border-bottom: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 22%, transparent);
}

.home-persona__kicker {
  margin: 0 0 0.45rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.home-persona__status {
  margin: 0;
  font-size: clamp(1.15rem, 2.6vw, 1.4rem);
  font-weight: 700;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: var(--persona-ink);
}

.home-persona__motto {
  margin: 0.65rem 0 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--persona-muted);
}

.home-persona__body {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 1.25rem 1.75rem;
}

@media (max-width: 720px) {
  .home-persona__body {
    grid-template-columns: 1fr;
    gap: 1.15rem;
  }
}

.home-persona__label {
  margin: 0 0 0.7rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--persona-muted);
}

.home-persona__focuses {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.home-persona__focus {
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
  padding: 0.55rem 0.75rem;
  border-radius: 8px;
  background: color-mix(in srgb, var(--vp-c-brand-1) 8%, transparent);
  transition: transform 0.22s ease, background 0.22s ease;
}

.home-persona__focus:hover {
  transform: translateX(4px);
  background: color-mix(in srgb, var(--vp-c-brand-1) 14%, transparent);
}

.home-persona__focus-hint {
  flex-shrink: 0;
  min-width: 2.4rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--vp-c-brand-1);
}

.home-persona__focus-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--persona-ink);
}

.home-persona__picks {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.home-persona__pick {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.55rem 0.65rem;
  margin: 0 -0.65rem;
  border-radius: 8px;
  text-decoration: none !important;
  transition: background 0.2s ease, transform 0.2s ease;
}

.home-persona__pick:hover {
  background: color-mix(in srgb, var(--vp-c-brand-1) 10%, transparent);
  transform: translateX(3px);
}

.home-persona__pick-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--persona-ink);
}

.home-persona__pick-desc {
  font-size: 0.82rem;
  color: var(--persona-muted);
}

.home-persona__foot {
  margin-top: 1.15rem;
  padding-top: 0.95rem;
  border-top: 1px solid color-mix(in srgb, var(--vp-c-divider) 80%, transparent);
}

.home-persona__about {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-1) !important;
  text-decoration: none !important;
  transition: letter-spacing 0.25s ease, opacity 0.2s ease;
}

.home-persona__about:hover {
  letter-spacing: 0.04em;
  opacity: 0.88;
}

:global(.dark) .home-persona {
  --persona-ink: #e8f4f8;
  --persona-muted: rgba(232, 244, 248, 0.62);
  background: rgba(45, 45, 45, 0.9);
  border-color: rgba(255, 255, 255, 0.06);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.55);
}

:global(.dark) .home-persona__focus,
:global(.dark) .home-persona__pick:hover {
  background: color-mix(in srgb, var(--vp-c-brand-1) 16%, transparent);
}
</style>
