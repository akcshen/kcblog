<template>
  <div class="custom-comment">
    <iframe v-if="iframeSrc" :src="iframeSrc" frameborder="0" width="100%" height="300" ref="commentFrame"></iframe>
    <div v-else class="loading-comments">加载评论中...</div>
    
    <div v-if="isAdmin" class="admin-tools">
      <button @click="refreshIframe">刷新评论</button>
      <span>当前路径: {{ currentPath }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomComment',
  data() {
    return {
      isAdmin: false,
      currentPath: '',
      iframeSrc: ''
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.path !== from.path) {
        this.updateIframeSrc()
      }
    }
  },
  mounted() {
    if (typeof window === 'undefined') return
    
    this.isAdmin = localStorage.getItem('isAdmin') === 'true' || 
                  new URLSearchParams(window.location.search).has('admin')
    
    this.currentPath = this.getCleanPath()
    this.updateIframeSrc()
    
    // 路由监听
    if (window.$vuepress) {
      window.$vuepress.$on('routeChanged', this.handleRouteChange)
    }
    
    window.addEventListener('vuepress-route-change', this.handleCustomRouteChange)
  },
  methods: {
    updateIframeSrc() {
      const path = this.getCleanPath()
      // 创建一个包含评论系统的HTML页面URL
      this.iframeSrc = this.createCommentPageUrl(path)
    },
    createCommentPageUrl(path) {
      // 生成唯一的URL参数以防止缓存
      const timestamp = Date.now()
      // 这里需要创建一个静态HTML页面用于iframe
      // 如果您的网站有固定URL格式，可以直接返回您的评论页URL
      return `/comment-page.html?path=${encodeURIComponent(path)}&t=${timestamp}`
    },
    getCleanPath() {
      // 确保在客户端环境下执行
      if (typeof window === 'undefined') return ''

      // 首先使用frontmatter中的commentid（如果存在）
      if (this.$frontmatter && this.$frontmatter.commentid) {
        return this.$frontmatter.commentid
      }
      
      // 使用完整路径作为唯一标识，而不仅仅是最后一部分
      let path = window.location.pathname
      
      // 移除最后的斜杠（如果有）
      if (path.endsWith('/')) {
        path = path.slice(0, -1)
      }
      
      // 移除基路径（如果有）
      const base = this.$site && this.$site.base ? this.$site.base : '/'
      if (base !== '/' && path.startsWith(base)) {
        path = path.slice(base.length - 1) // 保留开头的斜杠
      }
      
      // 返回完整路径作为标识符
      return path
    },
    refreshIframe() {
      this.updateIframeSrc()
    },
    handleRouteChange(to, from) {
      if (to.path !== from.path) {
        this.currentPath = this.getCleanPath()
        this.updateIframeSrc()
      }
    },
    handleCustomRouteChange(event) {
      const { to, from } = event.detail
      if (to.path !== from.path) {
        this.currentPath = this.getCleanPath()
        this.updateIframeSrc()
      }
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      if (window.$vuepress) {
        window.$vuepress.$off('routeChanged', this.handleRouteChange)
      }
      window.removeEventListener('vuepress-route-change', this.handleCustomRouteChange)
    }
  }
}
</script>

<style>
.custom-comment {
  margin-top: 2rem;
}

.comment-error {
  color: #ff4d4f;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
  border: 1px solid #ffccc7;
  background-color: #fff2f0;
  border-radius: 4px;
}

.admin-tools {
  margin-top: 1rem;
  padding: 8px;
  border: 1px dashed #ccc;
  background: #f9f9f9;
  font-size: 12px;
}

.admin-tools button {
  margin-right: 10px;
  padding: 2px 5px;
}

.debug-info {
  margin-top: 10px;
  padding: 10px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
}

.loading-comments {
  padding: 20px;
  text-align: center;
  color: #999;
}
</style> 