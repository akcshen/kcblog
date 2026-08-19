import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
// 勿从主包 import：会连带加载 vitepress/theme，Node 解析 without-fonts 失败
import {
  email,
  github,
} from "vitepress-theme-teek/es/components/common/icon/src/social-icons.mjs";

/** 看剧站 / NAS 文件图标，风格贴近 Teek 自带 social SVG */
const tv = `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z" fill="#11a8cd"/><path d="M256 288h512a48 48 0 0 1 48 48v320a48 48 0 0 1-48 48H256a48 48 0 0 1-48-48V336a48 48 0 0 1 48-48z" fill="#FFFFFF"/><path d="M288 336h448v256H288z" fill="#0d7a96"/><path d="M384 752h256a24 24 0 0 1 0 48H384a24 24 0 0 1 0-48z" fill="#FFFFFF"/></svg>`;
const nas = `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z" fill="#f5a623"/><path d="M240 400h220l64 64h260a48 48 0 0 1 48 48v208a48 48 0 0 1-48 48H240a48 48 0 0 1-48-48V448a48 48 0 0 1 48-48z" fill="#FFFFFF"/><path d="M240 320h200l48 48H240a32 32 0 0 1 0-48z" fill="#FFFFFF" opacity=".85"/></svg>`;

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
    avatar:
      "https://cdn.jsdelivr.net/gh/akcshen/chartBed@master/assets/img/202303141847699.jpeg",
    shape: "circle",
  },
  // 首页走编辑式排版（介绍 + 连续列表），不再用 Banner / 全页壁纸
  banner: {
    enabled: false,
  },
  post: {
    postStyle: "list",
    showMore: false,
    showCapture: false,
    transition: false,
  },
  page: {
    pageSize: 200,
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
  // icon 需为 SVG 字符串 / Iconify（如 mdi:github）/ icon-xxx；纯 "github" 无法渲染
  social: [
    {
      name: "GitHub",
      icon: github,
      link: "https://github.com/akcshen",
    },
    {
      name: "Email",
      icon: email,
      link: "mailto:kcqingfeng@gmail.com",
    },
    {
      name: "看剧",
      icon: tv,
      link: "https://tv.kcshen.cn",
    },
    {
      name: "NAS 文件",
      icon: nas,
      link: "https://file.kcshen.cn/",
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
    provider: "waline",
    options: {
      serverURL: "https://waline.kcshen.cn",
      // Teek 通过动态 import(jsLink) 初始化；国内用 jsDelivr 更稳
      jsLink: "https://cdn.jsdelivr.net/npm/@waline/client@v3/dist/waline.js",
      cssLink: "https://cdn.jsdelivr.net/npm/@waline/client@v3/dist/waline.css",
      dark: "html.dark",
      lang: "zh-CN",
      pageSize: 10,
      meta: ["nick", "mail"],
      requiredMeta: ["nick", "mail"],
      login: "enable",
      locale: {
        placeholder: "欢迎留言讨论~",
      },
    },
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
    permalink: false,
    sidebar: true,
    sidebarOption: {
      // 按目录生成侧栏（关闭 permalink 重写后，直接以文件路径路由为准）
      resolveRule: "filePath",
      collapsed: false,
      titleFormMd: true,
      ignoreList: ["archives", "categories", "tags"],
    },
    docAnalysis: true,
    autoFrontmatter: true,
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
          { text: "好用的组件库", link: "/收藏/提前下班小妙招/01.好用的npm库" },
          { text: "AI 相关开源", link: "/收藏/提前下班小妙招/02.AI相关开源" },
          { text: "Node 版本管理", link: "/收藏/node版本的切换/01.Node版本管理-fnm与nvm" },
          { text: "面试收藏", link: "/收藏/面试/01.面试问答" },
        ],
      },
      { text: "关于", link: "/about" },
    ],
  },
});
