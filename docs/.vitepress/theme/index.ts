import { h } from "vue";
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css";
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";
import "vitepress-theme-teek/theme-chalk/tk-nav.css";
import "vitepress-theme-teek/theme-chalk/tk-aside.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css";
import "./style.css";
import ValineComment from "./components/ValineComment.vue";
import HomeExtraNotes from "./components/HomeExtraNotes.vue";

export default {
  extends: Teek,
  Layout: () =>
    h(Teek.Layout, null, {
      "teek-comment": () => h(ValineComment),
      "teek-home-post-after": () => h(HomeExtraNotes),
    }),
};
