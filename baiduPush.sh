#!/usr/bin/env bash
# 在 utils/baiduPush.js 生成 urls.txt 之后，向百度站长「链接提交」接口推送。
# 接口：http://data.zz.baidu.com/urls?site=<站点>&token=<token>
#
# 配置方式（任选其一）：
# 1) 项目根目录复制 .baidu-push.env.example 为 .baidu-push.env 并填写 token（推荐，已 gitignore）
# 2) export BAIDU_PUSH_SITE / BAIDU_PUSH_TOKEN 后执行 npm run baiduPush
set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
URLS="$SCRIPT_DIR/urls.txt"

# 默认与百度站长平台登记的站点一致
BAIDU_PUSH_SITE="${BAIDU_PUSH_SITE:-https://kcshen.cn}"

if [[ -f "$SCRIPT_DIR/.baidu-push.env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "$SCRIPT_DIR/.baidu-push.env"
  set +a
fi

if [[ ! -f "$URLS" ]]; then
  echo "未找到 urls.txt，请先执行: node utils/baiduPush.js <你的站点根地址>" >&2
  exit 1
fi

if [[ -z "${BAIDU_PUSH_TOKEN:-}" ]]; then
  echo "已生成 urls.txt，路径: $URLS"
  echo "未配置 BAIDU_PUSH_TOKEN，跳过在线推送。"
  echo "可在项目根目录创建 .baidu-push.env（参考 .baidu-push.env.example），或执行："
  echo "  export BAIDU_PUSH_TOKEN=\"<百度站长平台接口中的 token>\""
  exit 0
fi

curl -sS -H "Content-Type:text/plain" --data-binary @"$URLS" \
  "http://data.zz.baidu.com/urls?site=${BAIDU_PUSH_SITE}&token=${BAIDU_PUSH_TOKEN}"
echo
