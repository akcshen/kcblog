---
title: 关于
date: 2019-12-25 14:27:01
permalink: /about
sidebar: false
article: false
---

### 🐼Me

大家好，我是`KC(Casie)`,一名~~热衷~~于前端开发的工程师，我的追求：`工作开心不加班，生活快乐无忧虑`

## :email: 联系

- **WeChat or QQ**: <a :href="qqUrl" class='qq'>965506744</a>
- **Email**: <a href="mailto:894072666@qq.com">kcqingfeng@gmail.com</a>
- **GitHub**: <https://github.com/akcshen>

<script>
  export default {
    data(){
      return {
        qqUrl: 'tencent://message/?uin=965506744&Site=&Menu=yes' 
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        this.qqUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=965506744&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
  }
</script>
