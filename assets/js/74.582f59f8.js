(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{412:function(t,a,e){"use strict";e.r(a);var i=e(4),n=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"好用的-github-工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#好用的-github-工作流"}},[t._v("#")]),t._v(" 好用的 github 工作流")]),t._v(" "),a("ol",[a("li",[t._v("拉取远端仓库")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone repo_address\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在 local git 处 新建一个 分支 feature branch")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git  checkout -b my-feature\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个时候 local git 上就存在两个分支，main branch 和 my-feature branch")]),t._v(" "),a("p",[t._v("修改 硬盘 代码， 修改完以后使用 git diff 看看硬盘上文件和 git 上保存的 branch 有什么区别\n使用 git add file-name 将改动存在暂存区里，然后使用 git commit 将代码提交到 local git 上\n使用 git push origin my-feature, 此时 github 项目上多了一个 my-feature 分支")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("同步")])]),t._v(" "),a("p",[t._v("如果此时发现 main 直线里 多了一个 commit 名为 update")]),t._v(" "),a("p",[t._v("想要把 update 的 commit 也同步到 branch 里面")]),t._v(" "),a("p",[t._v("执行 git checkout main， 将 disk 的代码还原为 init 的状态\n执行 git pull origin master , 把远端的 update 同步到 local git 的 main 分支下\n执行 git checkout my-feature，切换回 my-feature 分支\ngit rebase main,")]),t._v(" "),a("p",[t._v("rebase 的意思是先把 my-feature 对 init 的改动先扔到一边，然后 main 最新修改拿过来，最后把 my-feature 修改尝试弄回去，有可能会出现 commit conflict，出现冲突要手动选择")]),t._v(" "),a("p",[t._v("git push -f origin my-feature， 把最新改动 push 到 github 上")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Pull Request")])]),t._v(" "),a("p",[t._v("将 my-feature 的改动尝试合并在 main 分支里")]),t._v(" "),a("p",[t._v("pull request\n主分支如果接受合并，则执行 squash and merge,意思就是把其他分支的各种 commit 合并为一个改变，并把这个 commit 放到 main branch\n合并后一般把远端的 feature-branch 给删掉\nlocal git 上 还存在 feature-branch\ngit checkout main, 首先切换到 local git 的 main 分支下\ngit branch -D my-feature, 把 my-feature branch 从 local git 上也删掉\ngit pull origin master, 把最新的更新拉到 local 的 git 和 disk 上")])])}),[],!1,null,null,null);a.default=n.exports}}]);