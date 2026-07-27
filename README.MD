# kcblog

KC 的个人博客站点源码，基于 [VitePress](https://vitepress.dev/) 与 [vitepress-theme-teek](https://vp.teek.top/) 构建。

## 环境要求

- Node.js **22.12.0**（见仓库根目录 `.nvmrc`）
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

## 关于作者与站点

个人介绍与联系方式见站内 [关于页面](https://kcshen.cn/about)；编辑内容可打开仓库里的 [01.关于.md](docs/_posts/随笔/01.关于.md)。
