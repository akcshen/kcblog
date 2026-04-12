# kcblog

KC 的个人博客站点源码，基于 [VuePress](https://vuepress.vuejs.org/) 与 [vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing) 主题构建。

## 本地开发

```bash
npm install
npm run dev
```

开发服务器默认在本地启动，具体端口以终端输出为准。

## 构建与部署

```bash
npm run build
```

静态站点输出在 `docs/.vuepress/dist`（以 VuePress 实际配置为准）。部署可使用：

```bash
npm run deploy
```

（依赖仓库中的 `deploy.sh` 脚本与环境配置。）

## 其他脚本

| 命令 | 说明 |
|------|------|
| `npm run editFm` | 批量编辑 frontmatter（`utils/editFrontmatter.js`） |
| `npm run baiduPush` | 百度推送相关（需配置） |

## 关于作者与站点

个人介绍与联系方式见站内「关于」页面：`docs/_posts/随笔/01.关于.md`。
