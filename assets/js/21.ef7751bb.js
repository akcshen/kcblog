(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{347:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"一行代码-黑-掉任意网站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一行代码-黑-掉任意网站"}},[t._v("#")]),t._v(" 一行代码“黑”掉任意网站")]),t._v(" "),s("p",[t._v("实用技巧：只需一行代码，轻轻一点就可以把任意网站变成暗黑模式。")]),t._v(" "),s("p",{attrs:{align:"center"}},[s("img",{staticStyle:{cursor:"zoom-in"},attrs:{src:"https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/QQ20211125-163111.2tmjlvz28n80.png",width:"500"}})]),t._v(" "),s("p",[t._v("首先我们先做一个实验，在任意网站中，打开浏览器开发者工具(F12)，在"),s("code",[t._v("Console")]),t._v("控制台输入如下代码并回车：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invert(85%) hue-rotate(180deg)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("神奇的事情发生了，当前打开的网站变成了暗黑模式。")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("原理解释")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("document.documentElement")]),t._v(" 获取文档对象的根元素，即"),s("code",[t._v("<html>")]),t._v("元素")]),t._v(" "),s("li",[t._v("给"),s("code",[t._v("html")]),t._v("元素的"),s("code",[t._v(".style")]),t._v("样式添加"),s("code",[t._v("filter")]),t._v("滤镜样式为"),s("code",[t._v("invert(85%) hue-rotate(180deg)")])]),t._v(" "),s("li",[s("code",[t._v("invert()")]),t._v(" 反转图像。")]),t._v(" "),s("li",[s("code",[t._v("hue-rotate()")]),t._v("色相旋转。")])]),t._v(" "),s("p",[t._v("更多滤镜知识："),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("filter")]),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("p",[t._v("为了更方便实用，达到轻轻一点就可以对网页施加魔法 🎉，")]),t._v(" "),s("p",[t._v("我们对代码做了一点点 🤏🏻 改动。（修正了滤镜对图片等元素的影响）")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("javascript")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" docStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modeIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modeIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" styleList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invert(85%) hue-rotate(180deg)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invert(100%) hue-rotate(180deg)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  modeIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" modeIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" styleList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" modeIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  docStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" styleList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("modeIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img, picture, video"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" modeIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invert(1) hue-rotate(180deg)"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[t._v("然后打开浏览器书签管理器，添加新书签，在网址栏粘贴这段代码并保存：")]),t._v(" "),s("p",{attrs:{align:"center"}},[s("img",{staticStyle:{cursor:"zoom-in"},attrs:{src:"https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/QQ20211125-154655.1byvlo5a60xs.png",width:"600"}})]),t._v(" "),s("p",[t._v("以后在任意网站，只需要轻轻一点"),s("code",[t._v("切换模式")]),t._v("书签就可以让它变成 85%的暗黑，再点一次就是 100%的暗黑，再点一次变回正常模式。")]),t._v(" "),s("p",{attrs:{align:"center"}},[s("img",{staticStyle:{cursor:"zoom-in"},attrs:{src:"https://cdn.staticaly.com/gh/xugaoyi/image_store@master/blog/QQ20211125-163111.2tmjlvz28n80.png",width:"600"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);