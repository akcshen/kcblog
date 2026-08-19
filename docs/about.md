---
title: 关于
date: 2019-12-26 14:27:01
sidebar: false
article: false
pageClass: about-editorial
permalink: /pages/bdd7b7
categories:
  - 
---

<div class="about-page">

<section class="about-hero">
  <p class="about-kicker">About</p>
  <h2 class="about-name">KC <span class="about-name-alias">Casie</span></h2>
  <p class="about-role">前端工程师</p>
  <p class="about-lead">
    大家好，我是一名<s>热衷</s>于前端开发的工程师。写代码、骑摩托、打游戏，偶尔也折腾点有意思的东西。
  </p>
  <p class="about-motto">工作开心不加班，生活快乐无忧虑。</p>
</section>

<section class="about-section">
  <h3 class="about-section-title">爱好</h3>
  <ul class="about-hobby-list">
    <li><span class="about-hobby-cat">骑行</span><span class="about-hobby-detail">摩托车</span></li>
    <li><span class="about-hobby-cat">运动</span><span class="about-hobby-detail">篮球</span></li>
    <li><span class="about-hobby-cat">户外</span><span class="about-hobby-detail">露营、爬山</span></li>
    <li><span class="about-hobby-cat">折腾</span><span class="about-hobby-detail">无人机</span></li>
  </ul>
</section>

<section class="about-section">
  <h3 class="about-section-title">证书</h3>
  <p class="about-section-desc">游戏里认真打出来的牌子，也算一种勋章。</p>
  <ul class="about-cert-list">
    <li>
      <span class="about-cert-game">穿越火线</span>
      <strong class="about-cert-title">枪王之王</strong>
      <span class="about-cert-tag">殿堂级</span>
    </li>
    <li>
      <span class="about-cert-game">Counter-Strike</span>
      <strong class="about-cert-title">准 S 哥（B+）</strong>
      <span class="about-cert-tag">高分段</span>
    </li>
  </ul>
</section>

<section class="about-section" id="联系">
  <h3 class="about-section-title">联系我</h3>
  <ul class="about-contact-list">
    <li>
      <span class="about-contact-label">微信 / QQ</span>
      <a :href="qqUrl" class="qq about-contact-link">965506744</a>
    </li>
    <li>
      <span class="about-contact-label">邮箱</span>
      <a class="about-contact-link" href="mailto:qunfuns@gmail.com">qunfuns@gmail.com</a>
    </li>
    <li>
      <span class="about-contact-label">GitHub</span>
      <a class="about-contact-link" href="https://github.com/akcshen" target="_blank" rel="noopener noreferrer">github.com/akcshen</a>
    </li>
  </ul>
</section>

</div>

<script setup>
import { ref, onMounted } from "vue";

const qqUrl = ref("tencent://message/?uin=965506744&Site=&Menu=yes");

onMounted(() => {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  if (flag) {
    qqUrl.value =
      "mqqwpa://im/chat?chat_type=wpa&uin=965506744&version=1&src_type=web&web_src=oicqzone.com";
  }
});
</script>
