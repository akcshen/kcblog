const nav = require("./config/nav.js");
const {
  readFileList,
  readTotalFileWords,
  readEachFileWords,
} = require("./webSiteInfo/readFile");

module.exports = {
  title: "Kc's blog",
  description:
    "web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。", // 描述,以 <meta> 标签渲染到页面html中
  // base: '/kcblog/', // '/<github仓库名>/'， 默认'/'
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://cdn.jsdelivr.net/gh/akcshen/chartBed@master/assets/img/202303141850522.ico",
      },
    ], //favicons，资源放在public文件夹
    [
      "meta",
      {
        name: "keywords",
        content:
          "前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown",
      },
    ],
    ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色
    ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }], // 解决chrome 统计不准确问题
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css",
      },
    ], // 阿里在线矢量库
    [
      "script",
      {
        crossorigin: "anonymous",
        href: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7321685207191636",
        async: true,
      },
    ],
  ],
  markdown: {
    lineNumbers: true, // 代码行号
  },
  theme: "vdoing", // 使用依赖包主题
  themeConfig: {
    // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: "https://cdn.jsdelivr.net/gh/akcshen/chartBed@master/assets/img/202303141847699.jpeg", // 导航栏logo
    repo: "akcshen/kcblog", // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsDir: "docs", // 编辑的文件夹
    editLinks: true, // 编辑链接
    editLinkText: "编辑",
    // 以下配置是Vdoing主题改动的和新增的配置
    // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    bodyBgImg: [
      "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg",
      "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg",
      "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg",
    ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    sidebar: "structuring", // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
    updateBar: {
      // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      moreArticle: "/archives", // “更多文章”跳转的页面，默认'/archives'
    },

    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: "kc_shen", // 必需
      href: "https://github.com/akcshen", // 可选的
    },
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar:
        "https://cdn.jsdelivr.net/gh/akcshen/chartBed@master/assets/img/202303141847699.jpeg",
      name: "kcqingfeng",
      slogan: "前端界的小学生",
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: "icon-youjian",
          title: "发邮件",
          link: "mailto:kcqingfeng@gmail.com",
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/akcshen",
        },
        {
          iconClass: "icon-QQ",
          title: "听音乐",
          link: "https://music.163.com/#/playlist?id=755597173",
        },
      ],
    },
    footer: {
      // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo:
        'kc shen | MIT License <b/>\n <a href="https://beian.miit.gov.cn/">豫ICP备19035663号-2</a>', // 博客版权信息，支持a标签
    },
    // 站点配置（首页 & 文章页）
    blogInfo: {
      blogCreate: "2021-10-19", // 博客创建时间
      indexView: true, // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true, // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([""], 300, 160), // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: "archives", // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: "archives", // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: ".tags-wrapper", // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500, // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500, // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },
  },
  plugins: [
    // 插件
    {
      name: "custom-plugins",
      globalUIComponents: ["PageInfo"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    },
    [
      require("./plugins/love-me"),
      {
        // 鼠标点击爱心特效
        color: "#11a8cd", // 爱心颜色，默认随机色
        excludeClassName: "theme-vdoing-content", // 要排除元素的class, 默认空''
      },
    ],

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],

    // 'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      "one-click-copy",
      {
        // 代码块复制按钮
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      "demo-block",
      {
        // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      "vuepress-plugin-zooming", // 放大图片
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],
    [
      "vuepress-plugin-baidu-tongji", // 百度统计
      {
        hm: "38887d8123fcb847f9f51006e70b9898",
      },
    ],
    [
      "vuepress-plugin-comment", // 评论
      {
        // choosen: 'gitalk',
        choosen: "valine",
        options: {
          el: "#valine-vuepress-comment",
          appId: "TrwDB2SNu15HXbHJPE7wtdSS-gzGzoHsz",
          appKey: "24rymEMKNF0Mapx6EuN1NvRT",
        },
      },
    ],
    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment"); // https://momentjs.com/
          return moment(timestamp).format("YYYY/MM/DD, H:MM:SS");
        },
      },
    ],
  ],
};
