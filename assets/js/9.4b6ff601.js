(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{335:function(e,a,s){"use strict";s.r(a);var t=s(4),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("flex 布局的确是很好用，而且最近在开发快应用，快应用里面只能使用 flex 布局，所以再次学一下快应用的知识")]),e._v(" "),a("p",[e._v('Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。')]),e._v(" "),a("p",[e._v("任何一个容器都可以指定为 Flex 布局。")])]),e._v(" "),a("h2",{attrs:{id:"一-主轴与交叉轴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-主轴与交叉轴"}},[e._v("#")]),e._v(" 一：主轴与交叉轴：")]),e._v(" "),a("p",[e._v("学习 flex 布局需要明白”主轴“与”交叉轴“的概念，采用 flex 布局的元素，称为”容器“ （ flex container），它的所有子元素都是容器的”项目“（flex item），容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start ，结束位置叫做 main end ；交叉轴的开始位置叫做 cross start ，结束位置叫做 cross end 。")]),e._v(" "),a("p",[e._v("注意，设为 Flex 布局以后，子元素的"),a("code",[e._v("float")]),e._v("、"),a("code",[e._v("clear")]),e._v("和"),a("code",[e._v("vertical-align")]),e._v("属性将失效。")]),e._v(" "),a("h2",{attrs:{id:"二-flex-容器属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-flex-容器属性"}},[e._v("#")]),e._v(" 二：flex 容器属性")]),e._v(" "),a("h5",{attrs:{id:"_1-flex-direction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-flex-direction"}},[e._v("#")]),e._v(" 1.flex-direction")]),e._v(" "),a("h5",{attrs:{id:"主轴的方向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主轴的方向"}},[e._v("#")]),e._v(" 主轴的方向")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("flex-direction: row | row-reverse | column | column-reverse;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("row")]),e._v("（默认值）：主轴为水平方向，起点在左端。")]),e._v(" "),a("li",[a("code",[e._v("row-reverse")]),e._v("：主轴为水平方向，起点在右端。")]),e._v(" "),a("li",[a("code",[e._v("column")]),e._v("：主轴为垂直方向，起点在上沿。")]),e._v(" "),a("li",[a("code",[e._v("column-reverse")]),e._v("：主轴为垂直方向，起点在下沿。")])]),e._v(" "),a("h5",{attrs:{id:"_2-flex-wrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-flex-wrap"}},[e._v("#")]),e._v(" 2.flex-wrap")]),e._v(" "),a("h5",{attrs:{id:"是否换行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否换行"}},[e._v("#")]),e._v(" 是否换行")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" flex-wrap: nowrap | wrap | wrap-reverse;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("nowrap")]),e._v("（默认值）：不换行。")]),e._v(" "),a("li",[a("code",[e._v("wrap")]),e._v("：换行，第一行在上方。")]),e._v(" "),a("li",[a("code",[e._v("wrap-reverse")]),e._v("：换行，第一行在下方。")])]),e._v(" "),a("h5",{attrs:{id:"_3-justify-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-justify-content"}},[e._v("#")]),e._v(" 3.justify-content")]),e._v(" "),a("h5",{attrs:{id:"主轴的对齐方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主轴的对齐方式"}},[e._v("#")]),e._v(" 主轴的对齐方式")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  justify-content: flex-start | flex-end | center | space-around | space-between | space-between;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("flex-start")]),e._v("（默认值）：左对齐")]),e._v(" "),a("li",[a("code",[e._v("flex-end")]),e._v("：右对齐")]),e._v(" "),a("li",[a("code",[e._v("center")]),e._v("： 居中")]),e._v(" "),a("li",[a("code",[e._v("space-around")]),e._v("：每个项目两侧的间隔相等。")]),e._v(" "),a("li",[a("code",[e._v("space-between")]),e._v("：两端对齐，项目之间的间隔都相等。")]),e._v(" "),a("li",[a("code",[e._v("space-evenly")]),e._v("：每个项目的间隔与项目和容器之间的间隔是相等的。")])]),e._v(" "),a("h5",{attrs:{id:"_4-align-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-align-items"}},[e._v("#")]),e._v(" 4.align-items")]),e._v(" "),a("h5",{attrs:{id:"侧轴-交叉轴-的对齐方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#侧轴-交叉轴-的对齐方式"}},[e._v("#")]),e._v(" 侧轴（交叉轴）的对齐方式")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("align-items: flex-start | flex-end | center | baseline | stretch;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("flex-start")]),e._v("：交叉轴的起点对齐。")]),e._v(" "),a("li",[a("code",[e._v("flex-end")]),e._v("：交叉轴的终点对齐。")]),e._v(" "),a("li",[a("code",[e._v("center")]),e._v("：交叉轴的中点对齐。")]),e._v(" "),a("li",[a("code",[e._v("baseline")]),e._v(": 项目的第一行文字的基线对齐。")]),e._v(" "),a("li",[a("code",[e._v("stretch")]),e._v("（默认值）: 如果项目未设置高度或设为 auto，将占满整个容器的高度。\n"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("img"),a("OutboundLink")],1)])]),e._v(" "),a("h5",{attrs:{id:"_5-align-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-align-content"}},[e._v("#")]),e._v(" 5.align-content")]),e._v(" "),a("p",[a("code",[e._v("align-content")]),e._v(" 属性定义了多根轴线的对齐方式，前提是需要设置 flex-wrap: wrap，否则不会有效")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("align-content: flex-start | flex-end | center | space-between | space-around | stretch;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("flex-start")]),e._v("：与交叉轴的起点对齐。")]),e._v(" "),a("li",[a("code",[e._v("flex-end")]),e._v("：与交叉轴的终点对齐。")]),e._v(" "),a("li",[a("code",[e._v("center")]),e._v("：与交叉轴的中点对齐。")]),e._v(" "),a("li",[a("code",[e._v("space-between")]),e._v("：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),e._v(" "),a("li",[a("code",[e._v("space-around")]),e._v("：每根轴线两侧的间隔都相等。")]),e._v(" "),a("li",[a("code",[e._v("stretch")]),e._v("（默认值）：轴线占满整个交叉轴。\n"),a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png",alt:"img"}})])]),e._v(" "),a("h5",{attrs:{id:"_6-flex-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-flex-flow"}},[e._v("#")]),e._v(" 6.flex-flow")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("`flex-flow` 属性是 `flex-direction` 属性和 `flex-wrap` 属性的简写形式，默认值为 `row nowrap`\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`\nflex-flow: <flex-direction> || <flex-wrap>;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"三-子元素属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-子元素属性"}},[e._v("#")]),e._v(" 三：子元素属性")]),e._v(" "),a("h5",{attrs:{id:"_1-order-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-order-属性"}},[e._v("#")]),e._v(" 1.order 属性")]),e._v(" "),a("p",[a("code",[e._v("order")]),e._v("属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。可以是负数。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png",alt:""}})]),e._v(" "),a("h5",{attrs:{id:"_2-flex-grow-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-flex-grow-属性"}},[e._v("#")]),e._v(" 2.flex-grow 属性")]),e._v(" "),a("p",[a("code",[e._v("flex-grow")]),e._v("属性定义项目的放大比例，默认为"),a("code",[e._v("0")]),e._v("，即如果存在剩余空间，也不放大。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png",alt:"img"}})]),e._v(" "),a("p",[e._v("flex 容器中剩余空间的多少应该分配给项目，也称为扩展规则。最终的项目的宽度为：自身宽度 + 容器剩余空间分配宽度，flex-grow 最大值是 1，超过 1 按照 1 来扩展")]),e._v(" "),a("h5",{attrs:{id:"_3-flex-shrink-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-flex-shrink-属性"}},[e._v("#")]),e._v(" 3.flex-shrink 属性")]),e._v(" "),a("p",[a("code",[e._v("flex-shrink")]),e._v("属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。")]),e._v(" "),a("p",[e._v("flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值，默认值是 1")]),e._v(" "),a("h5",{attrs:{id:"_4-flex-basis-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-flex-basis-属性"}},[e._v("#")]),e._v(" 4.flex-basis 属性")]),e._v(" "),a("p",[a("code",[e._v("flex-basis")]),e._v("指定了子项在容器主轴方向上的初始大小，优先级高于自身的宽度 width")]),e._v(" "),a("p",[e._v("它可以设为跟"),a("code",[e._v("width")]),e._v("或"),a("code",[e._v("height")]),e._v("属性一样的值（比如 350px），则项目将占据固定空间。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("flex-basis: 0 | 100% | auto | <length>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h5",{attrs:{id:"_5-flex-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-flex-属性"}},[e._v("#")]),e._v(" 5.flex 属性")]),e._v(" "),a("p",[a("code",[e._v("flex")]),e._v("属性是"),a("code",[e._v("flex-grow")]),e._v(", "),a("code",[e._v("flex-shrink")]),e._v(" 和 "),a("code",[e._v("flex-basis")]),e._v("的简写，默认值为"),a("code",[e._v("0 1 auto")]),e._v("。后两个属性可选。")]),e._v(" "),a("p",[e._v("该属性有两个快捷值："),a("code",[e._v("auto")]),e._v(" ("),a("code",[e._v("1 1 auto")]),e._v(") 和 none ("),a("code",[e._v("0 0 auto")]),e._v(")。")]),e._v(" "),a("p",[e._v("建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("flex: none | [ <'flex-grow'><'flex-shrink'>? || <'flex-basis'>]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h5",{attrs:{id:"_6-align-self-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-align-self-属性"}},[e._v("#")]),e._v(" 6.align-self 属性")]),e._v(" "),a("p",[a("code",[e._v("align-self")]),e._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),a("code",[e._v("align-items")]),e._v("属性。默认值为"),a("code",[e._v("auto")]),e._v("，表示继承父元素的"),a("code",[e._v("align-items")]),e._v("属性，如果没有父元素，则等同于"),a("code",[e._v("stretch")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("align-self: auto | flex-start | flex-end | center | baseline | stretch;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);