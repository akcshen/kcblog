import { h } from "vue";
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css";
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";
import "vitepress-theme-teek/theme-chalk/tk-nav.css";
import "vitepress-theme-teek/theme-chalk/tk-aside.css";
import "vitepress-theme-teek/theme-chalk/tk-comment-waline.css";
import "./style.css";
import HomePersona from "./components/HomePersona.vue";

export default {
  extends: Teek,
  Layout: () =>
    h(Teek.Layout, null, {
      // 文章列表上方：人格化「此刻」卡片
      "teek-home-post-before": () => h(HomePersona),
    }),
};
