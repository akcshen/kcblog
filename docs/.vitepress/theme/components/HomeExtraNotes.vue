<template>
  <div class="home-extra-notes card-box">
    <h2>Git 提交规范参考</h2>
    <ul>
      <li><code>feat</code> add new functions;增加新的业务功能</li>
      <li><code>fix</code> Fix issues/bugs;修复业务问题/BUG</li>
      <li><code>perf</code> Optimize performance;优化性能</li>
      <li><code>style</code> Change the code style without affecting the running result;更改代码风格, 不影响运行结果</li>
      <li><code>refactor</code> Re-factor code;重构代码</li>
      <li><code>revert</code> Undo changes;撤销更改</li>
      <li><code>test</code> Test related, does not involve changes to business code;测试相关, 不涉及业务代码的更改</li>
      <li><code>docs</code> Documentation and Annotation;文档和注释相关</li>
      <li><code>chore</code> Updating dependencies/modifying scaffolding configuration, etc;更新依赖/修改脚手架配置等琐事</li>
      <li><code>workflow</code> Work flow Improvements;工作流改进</li>
      <li><code>ci</code> CICD;持续集成相关</li>
      <li><code>types</code> Type definition;类型定义文件更改</li>
      <li><code>wip</code> In development;开发中</li>
    </ul>

    <h2>头脑风暴</h2>
    <p>做什么副业合适呢；</p>
    <p>银发经济</p>
    <p>开发一个感觉有市场的小程序；</p>
  </div>
</template>

<style scoped>
.home-extra-notes {
  margin: 1.5rem 0 2.5rem;
  padding: 1.35rem 1.5rem 1.2rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.home-extra-notes:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
}

.home-extra-notes h2 {
  margin: 0.4rem 0 0.85rem;
  padding-left: 0.85rem;
  border-left: 4px solid var(--vp-c-brand-1);
  font-size: 1.25rem;
  font-weight: 700;
  color: #004050;
  line-height: 1.35;
}

.home-extra-notes h2 + h2,
.home-extra-notes ul + h2 {
  margin-top: 1.6rem;
}

.home-extra-notes ul {
  margin: 0;
  padding-left: 1.2rem;
}

.home-extra-notes li {
  margin: 0.35rem 0;
  line-height: 1.65;
  color: var(--vp-c-text-1);
}

.home-extra-notes p {
  margin: 0.35rem 0;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}

.home-extra-notes code {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

:global(.dark) .home-extra-notes {
  background: rgba(45, 45, 45, 0.9);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.55);
}

:global(.dark) .home-extra-notes h2 {
  color: #e8e8e8;
}
</style>
