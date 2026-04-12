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
| `npm run baiduPush` | 本地生成 `urls.txt` 并调用百度链接提交（见下） |

### 百度链接提交（CI 自动）

推送 `master` 并成功部署到 GitHub Pages 后，工作流会执行 `utils/baiduPush.js` 与 `baiduPush.sh`，向百度提交当前仓库内所有带 `permalink` 的页面地址。

在 GitHub 仓库中配置：**Settings → Secrets and variables → Actions → New repository secret**，名称填写 **`BAIDU_PUSH_TOKEN`**，值为百度站长平台「链接提交」接口里的 **token**（不要写进仓库文件）。站点域名在 workflow 里默认为 `https://kcshen.cn`，与 `BAIDU_PUSH_SITE` 一致。

未配置该 Secret 时，该步骤会跳过在线推送（构建与部署仍会成功）。本地可复制 `.baidu-push.env.example` 为 `.baidu-push.env` 并自行填写 token（该文件已加入 `.gitignore`）。

## 关于作者与站点

个人介绍与联系方式见站内 [关于页面](https://kcshen.cn/about)；编辑内容可打开仓库里的 [01.关于.md](docs/_posts/随笔/01.关于.md)。
