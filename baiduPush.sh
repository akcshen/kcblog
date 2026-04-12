#!/usr/bin/env bash
# 在 utils/baiduPush.js 生成 urls.txt 之后，向百度站长「链接提交」接口推送。
# 需在百度站长平台获取 site 与 token（接口调用地址中的参数）。
# 用法：
#   export BAIDU_PUSH_SITE="https://kcshen.cn"   # 与站长平台登记的站点一致，一般带协议
#   export BAIDU_PUSH_TOKEN="你的token"
#   npm run baiduPush
set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
URLS="$SCRIPT_DIR/urls.txt"

if [[ ! -f "$URLS" ]]; then
  echo "未找到 urls.txt，请先执行: node utils/baiduPush.js <你的站点根地址>" >&2
  exit 1
fi

if [[ -z "${BAIDU_PUSH_SITE:-}" || -z "${BAIDU_PUSH_TOKEN:-}" ]]; then
  echo "已生成 urls.txt，路径: $URLS"
  echo "未设置 BAIDU_PUSH_SITE / BAIDU_PUSH_TOKEN，跳过在线推送。"
  echo "若需自动推送，请设置环境变量后重新运行 npm run baiduPush，例如："
  echo "  export BAIDU_PUSH_SITE=\"https://kcshen.cn\""
  echo "  export BAIDU_PUSH_TOKEN=\"<百度站长平台提供的 token>\""
  exit 0
fi

curl -sS -H "Content-Type:text/plain" --data-binary @"$URLS" \
  "http://data.zz.baidu.com/urls?site=${BAIDU_PUSH_SITE}&token=${BAIDU_PUSH_TOKEN}"
echo
