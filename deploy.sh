#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist

# deploy to github pages（仓库请按需修改）
msg='deploy'
githubUrl=git@github.com:akcshen/kcblog.git

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages

cd -
