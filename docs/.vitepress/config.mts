import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { fixPermalinkSidebar, getPermalinkRewrites } from "./sidebar.mts";

const permalinkRewrites = getPermalinkRewrites();

const teekConfig = defineTeekConfig({
  teekHome: true,
  vpHome: false,
  sidebarTrigger: true,
  author: {
    name: "kc_shen",
    link: "https://github.com/akcshen",
  },
  blogger: {
    name: "kcqingfeng",
    slogan: "前端小学生",
    avatar:
      "https://cdn.jsdelivr.net/gh/akcshen/chartBed@master/assets/img/202303141847699.jpeg",
    shape: "circle-rotate",
  },
  // 贴近旧站 vdoing：全页 body 背景图 + 中等高 Banner（非 100vh）+ 深色标题字
  banner: {
    name: "Kc's blog",
    description: "工作开心不加班，生活快乐无忧虑",
    bgStyle: "pure",
    pureBgColor: "transparent",
    textColor: "#004050",
    titleFontSize: "2.6rem",
    descFontSize: "1.15rem",
    descStyle: "types",
    imgWaves: false,
  },
  bodyBgImg: {
    imgSrc: [
      "https://img.kcshen.cn/assets/img/2026/0411-203736-20200507175828.jpeg",
      "https://img.kcshen.cn/assets/img/2026/0411-203752-20200507175845.jpeg",
      "https://img.kcshen.cn/assets/img/2026/0411-203624-20200507175846.jpeg",
    ],
    imgInterval: 15000,
    mask: false,
    bannerStyle: "part",
  },
  // 对应旧站 postList: simple —— 列表风、不截摘要；首页只展示最近 10 条、不要分页
  post: {
    postStyle: "list",
    showMore: false,
    showCapture: false,
  },
  page: {
    pageSize: 10,
  },
  topArticle: {
    enabled: true,
    limit: 5,
  },
  category: {
    path: "/categories",
  },
  tag: {
    path: "/tags",
  },
  friendLink: {
    enabled: false,
  },
  docAnalysis: {
    createTime: "2021-10-19",
  },
  social: [
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/akcshen",
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:kcqingfeng@gmail.com",
    },
  ],
  footerInfo: {
    copyright: {
      createYear: 2019,
      suffix: "kc shen | MIT License",
    },
    icpRecord: {
      name: "豫ICP备2024074563号-3",
      link: "https://beian.miit.gov.cn/",
    },
  },
  comment: {
    // 当前用自定义 Valine（theme/components/ValineComment.vue）。
    // 换成 Teek 原生时改为 waline / giscus / twikoo，并配置 options，同时去掉主题插槽。
    provider: "render",
  },
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "38887d8123fcb847f9f51006e70b9898",
      },
    },
  ],
  vitePlugins: {
    permalink: true,
    sidebar: true,
    sidebarOption: {
      // 按目录生成侧栏，再映射到各篇文章的 permalink，避免 /pages/* 互相覆盖成「随笔」
      resolveRule: "filePath",
      collapsed: false,
      titleFormMd: true,
      ignoreList: ["archives", "categories", "tags"],
      sidebarResolved: fixPermalinkSidebar,
    },
    docAnalysis: true,
    autoFrontmatter: false,
  },
});

export default defineConfig({
  extends: teekConfig,
  title: "Kc's blog",
  description:
    "web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。",
  lang: "zh-CN",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  rewrites: (page) => permalinkRewrites[page],
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown",
      },
    ],
    ["meta", { name: "theme-color", content: "#11a8cd" }],
    ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
    [
      "meta",
      {
        name: "baidu_union_verify",
        content: "fdaccfd0f9b7374669d530cb5b192678",
      },
    ],
    [
      "meta",
      { name: "baidu-site-verification", content: "codeva-dkprGpc5z9" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css",
      },
    ],
    [
      "script",
      {
        async: "",
        crossorigin: "anonymous",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7321685207191636",
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  vite: {
    build: {
      // Teek/VitePress 主包偏大；提高阈值避免噪声告警（不再强制 manualChunks，以免循环依赖）
      chunkSizeWarningLimit: 1200,
    },
  },
  themeConfig: {
    logo: "/logo.jpeg",
    socialLinks: [{ icon: "github", link: "https://github.com/akcshen/kcblog" }],
    search: {
      provider: "local",
    },
    editLink: {
      pattern: "https://github.com/akcshen/kcblog/edit/master/docs/:path",
      text: "编辑",
    },
    lastUpdated: {
      text: "上次更新",
    },
    outline: {
      label: "本页目录",
      level: [2, 3],
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "索引",
        items: [
          { text: "分类", link: "/categories" },
          { text: "标签", link: "/tags" },
          { text: "归档", link: "/archives" },
        ],
      },
      {
        text: "收藏",
        items: [
          { text: "好用的组件库", link: "/Favorites/" },
          { text: "AI 相关开源", link: "/pages/9f3e2a/" },
          { text: "Node 版本管理", link: "/pages/22ed96/" },
          { text: "面试收藏", link: "/pages/d497b2/" },
        ],
      },
      { text: "关于", link: "/about" },
    ],
  },
});
