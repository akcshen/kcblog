# kcblog

KC 的个人博客站点源码，基于 [VitePress](https://vitepress.dev/) 与 [vitepress-theme-teek](https://vp.teek.top/) 构建。

## 环境要求

- Node.js **24.19.0**（见仓库根目录 `.nvmrc`）
- 推荐使用 [fnm](https://github.com/Schniz/fnm) / nvm 切换版本：

```bash
fnm use
# 或
nvm use
```

## 本地开发

```bash
npm install --registry=https://registry.npmmirror.com
npm run dev
```

开发服务器默认在本地启动，具体端口以终端输出为准。

## 构建与部署

```bash
npm run build
```

静态站点输出在 `docs/.vitepress/dist`。推送 `master` 后由 GitHub Actions 自动构建并部署到 `gh-pages`。本地也可：

```bash
npm run deploy
```

### GitHub Actions 部署密钥

工作流使用 `JamesIves/github-pages-deploy-action@v4`，并读取 Secret **`ACTIONS_DEPLOY_KEY`**。

| Secret 实际内容 | workflow 应使用 |
|-----------------|-----------------|
| GitHub PAT（旧站 v3 `ACCESS_TOKEN` 用法） | `token: ${{ secrets.ACTIONS_DEPLOY_KEY }}`（当前默认） |
| SSH Deploy Key 私钥 | 改为 `ssh-key: ${{ secrets.ACTIONS_DEPLOY_KEY }}`，并去掉 `token` |
| 未配置 | 回退 `github.token`（需 `permissions.contents: write`） |

同一仓库部署到 `gh-pages` 时，也可只用默认 `GITHUB_TOKEN`。

## 其他脚本

| 命令 | 说明 |
|------|------|
| `npm run preview` | 预览构建产物 |
| `npm run editFm` | 批量编辑 frontmatter（`utils/editFrontmatter.js` + `utils/config.yml`） |
| `npm run baiduPush` | 本地生成 `urls.txt` 并调用百度链接提交（见下） |

### 评论

当前评论区为 Waline（服务端 `https://waline.kcshen.cn`，Teek 原生接入）。管理后台：`https://waline.kcshen.cn/ui`。旧 Valine/LeanCloud 数据需自行导出后用 [Waline 迁移工具](https://waline.js.org/migration/tool.html) 导入 Neon。

### 百度链接提交（CI 自动）

推送 `master` 并成功部署到 GitHub Pages 后，工作流会执行 `utils/baiduPush.js` 与 `baiduPush.sh`，向百度提交页面地址（优先 `permalink` → Teek rewrites 真实路由 → 去序号路径兜底）。

在 GitHub 仓库中配置：**Settings → Secrets and variables → Actions → New repository secret**，名称填写 **`BAIDU_PUSH_TOKEN`**，值为百度站长平台「链接提交」接口里的 **token**（不要写进仓库文件）。站点域名在 workflow 里默认为 `https://kcshen.cn`。

未配置该 Secret 时，该步骤会跳过在线推送（构建与部署仍会成功）。本地可复制 `.baidu-push.env.example` 为 `.baidu-push.env` 并自行填写 token（该文件已加入 `.gitignore`）。

## 文档目录

文章放在 `docs/` 下。侧栏按**文件路径**自动生成，一级目录就是站点栏目。写新文章时放到对应分类即可。

### 站点页与工程目录

| 路径 | 放什么 |
|------|--------|
| `docs/index.md` | 首页（文章列表） |
| `docs/about.md` | 关于页 |
| `docs/archives.md` | 归档 |
| `docs/categories.md` | 分类索引 |
| `docs/tags.md` | 标签索引 |
| `docs/.vitepress/` | 站点配置、主题、侧栏映射 |
| `docs/public/` | 静态资源（logo、favicon、配图） |

### 文章栏目

```
docs/
├── github/          开发工具与工作流
│   ├── Git/         Git 规范、手册、分支、squash、换行符
│   ├── 工具/        Markdown、npm、nrm、OpenVPN、Node 代理、YAML
│   ├── 调试/        浏览器调试、adb、跨域
│   └── 实操/        GitHub 工作流
├── Vue/
│   └── Vue3/        Vue3 专题
├── 多端/            端侧开发
│   ├── 快应用/
│   ├── 小程序/
│   │   ├── 微信小程序/
│   │   └── 支付宝小程序/
│   ├── 移动端/      flex、popstate 等
│   └── 测试/        Playwright E2E
├── 收藏/            可复用资料（导航「收藏」指向这里）
│   ├── 面试/
│   ├── 提前下班小妙招/   npm 库、AI 开源
│   └── node版本的切换/   fnm / nvm
├── _posts/
│   └── 随笔/        随笔、定时任务、CSS 等
├── 更多/            不好单独成栏的内容
│   ├── AI/          Claude Code、Cursor、OpenSpec 等
│   ├── 服务器实例/  GCP、Cloudflare、Clash、WOL
│   ├── 部署/        Docker + Nginx / SFTP
│   ├── 实用技巧/    效率方法、环境、脚本、设备
│   ├── 学习/        术语、内网穿透、搜索、地图可视化
│   ├── 心情杂货/    生活杂记
│   ├── 辅警/        辅警面试与押题
│   └── 产品/        推广
├── 财务/            记账、报税
└── game时间/
    └── csgo/        游戏相关
```

## 关于作者与站点

个人介绍与联系方式见站内 [关于页面](https://kcshen.cn/about)；编辑内容可打开仓库里的 [about.md](docs/about.md)。
