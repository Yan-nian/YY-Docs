---
title: 故障排除
description: YY-Docs 项目常见问题的诊断和解决方案指南。
---

# 故障排除

## 常见问题分类

### 开发环境问题
- 依赖安装失败
- 开发服务器启动失败
- 热重载不工作
- TypeScript 类型错误

### 构建和部署问题
- 构建失败
- 静态生成错误
- 部署失败
- 性能问题

### 内容和配置问题
- Markdown 渲染错误
- 导航不显示
- 搜索功能异常
- 样式问题

## 开发环境故障

### 1. 依赖安装失败

**问题症状**:
```bash
ERROR: Failed to install dependencies
npm ERR! peer dep missing
```

**解决方案**:

```bash
# 方案 1: 清理缓存重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 方案 2: 使用 --force 强制安装
pnpm install --force

# 方案 3: 检查 Node.js 版本
node --version  # 确保 >= 18.0.0

# 方案 4: 切换包管理器
npm install  # 或 yarn install
```

### 2. 开发服务器启动失败

**问题症状**:
```bash
ERROR: Port 3000 is already in use
ERROR: Cannot start development server
```

**解决方案**:

```bash
# 方案 1: 检查端口占用
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# 方案 2: 使用不同端口
pnpm dev --port 3001

# 方案 3: 清理 Nuxt 缓存
npx nuxi cleanup
pnpm dev

# 方案 4: 检查防火墙设置
# 确保端口 3000 未被防火墙阻止
```

### 3. 热重载不工作

**问题症状**:
- 文件修改后页面不自动刷新
- 需要手动刷新浏览器

**解决方案**:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        port: 24678,
        host: 'localhost'
      }
    }
  }
})
```

```bash
# 重启开发服务器
pnpm dev

# 检查文件监听
# 确保文件系统支持文件监听
```

### 4. TypeScript 类型错误

**问题症状**:
```bash
ERROR: Type 'string' is not assignable to type 'never'
ERROR: Cannot find module '@/types'
```

**解决方案**:

```bash
# 方案 1: 重新生成类型
npx nuxi prepare
npx nuxi typecheck

# 方案 2: 清理 .nuxt 目录
rm -rf .nuxt
pnpm dev

# 方案 3: 检查 tsconfig.json
# 确保配置正确
```

```typescript
// tsconfig.json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

## 构建和部署故障

### 1. 构建失败

**问题症状**:
```bash
ERROR: Build failed with errors
ERROR: Cannot resolve module
```

**解决方案**:

```bash
# 方案 1: 清理重新构建
npx nuxi cleanup
pnpm build

# 方案 2: 检查依赖
pnpm ls
pnpm audit

# 方案 3: 增加内存限制
node --max-old-space-size=4096 node_modules/.bin/nuxt build

# 方案 4: 检查环境变量
echo $NODE_ENV
```

### 2. 静态生成错误

**问题症状**:
```bash
ERROR: Pre-rendering failed
ERROR: Cannot generate static files
```

**解决方案**:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      failOnError: false,  // 忽略预渲染错误
      crawlLinks: true     // 自动发现链接
    }
  }
})
```

```bash
# 检查具体错误
pnpm generate --verbose

# 逐步生成
pnpm build
pnpm preview
```

### 3. 部署失败

**问题症状**:
- Vercel 部署超时
- GitHub Pages 构建失败
- 静态文件 404 错误

**解决方案**:

```yaml
# .github/workflows/deploy.yml
# 增加超时时间
jobs:
  deploy:
    timeout-minutes: 30
    steps:
      - name: Build
        run: |
          npm ci
          npm run generate
        timeout-minutes: 20
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: '/YY-Docs/',  // GitHub Pages 子路径
    buildAssetsDir: 'assets/'  // 资源目录
  }
})
```

### 4. 性能问题

**问题症状**:
- 构建时间过长
- 包体积过大
- 页面加载缓慢

**解决方案**:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false  // 减少包大小
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router']
          }
        }
      }
    }
  }
})
```

```bash
# 分析构建产物
NUXT_ANALYZE=true pnpm build

# 检查包大小
npx nuxi analyze
```

## 内容和配置故障

### 1. Markdown 渲染错误

**问题症状**:
- 代码块不高亮
- 组件不渲染
- 链接失效

**解决方案**:

```markdown
# 检查 Front Matter 格式
---
title: 正确的标题
description: 正确的描述
---

# 检查代码块语法
```javascript
// 确保语言标识正确
const example = 'code';
```

# 检查组件语法
::alert{type="info"}
正确的组件语法
::
```

```bash
# 验证 Markdown 语法
npx markdownlint content/**/*.md

# 检查链接有效性
npx markdown-link-check content/**/*.md
```

### 2. 导航不显示

**问题症状**:
- 新页面不在导航中
- 侧边栏空白
- 面包屑错误

**解决方案**:

```typescript
// app.config.ts
export default defineAppConfig({
  shadcnDocs: {
    header: {
      nav: [
        {
          title: '文档',
          to: '/docs/getting-started/introduction'  // 确保路径正确
        }
      ]
    }
  }
})
```

```markdown
# 确保文件 Front Matter 正确
---
title: 页面标题
navigation: true  # 启用导航
---
```

### 3. 搜索功能异常

**问题症状**:
- 搜索无结果
- 搜索框不显示
- 搜索结果不准确

**解决方案**:

```typescript
// app.config.ts
export default defineAppConfig({
  shadcnDocs: {
    search: {
      enable: true,
      inAside: false
    }
  }
})
```

```bash
# 重新构建搜索索引
npx nuxi cleanup
pnpm dev
```

### 4. 样式问题

**问题症状**:
- 样式不生效
- 暗色模式异常
- 响应式布局错误

**解决方案**:

```javascript
// tailwind.config.js
export default {
  content: [
    './content/**/*',  // 确保包含内容目录
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ]
}
```

```bash
# 重新生成样式
rm -rf .nuxt
pnpm dev
```

## 调试工具和技巧

### 1. 日志调试

```typescript
// 启用详细日志
export default defineNuxtConfig({
  devtools: { enabled: true },
  debug: true,
  logLevel: 'verbose'
})
```

```bash
# 启动时显示详细信息
DEBUG=nuxt:* pnpm dev

# 构建时显示详细信息
pnpm build --verbose
```

### 2. 浏览器调试

```javascript
// 在代码中添加断点
debugger;

// 使用 console 调试
console.log('Debug info:', data);
console.table(arrayData);
console.time('Performance');
// ... 代码 ...
console.timeEnd('Performance');
```

### 3. 网络调试

```bash
# 检查网络连接
ping github.com
nslookup github.com

# 检查代理设置
echo $HTTP_PROXY
echo $HTTPS_PROXY

# 清理 DNS 缓存
ipconfig /flushdns
```

### 4. 性能分析

```bash
# 分析构建性能
time pnpm build

# 分析运行时性能
npx lighthouse http://localhost:3000

# 内存使用分析
node --inspect node_modules/.bin/nuxt dev
```

## 错误代码参考

### HTTP 错误码

| 错误码 | 含义 | 常见原因 | 解决方案 |
|--------|------|----------|----------|
| 404 | 页面未找到 | 路由配置错误 | 检查文件路径和路由 |
| 500 | 服务器错误 | 代码错误 | 检查服务器日志 |
| 502 | 网关错误 | 部署配置问题 | 检查部署设置 |
| 503 | 服务不可用 | 服务器过载 | 检查资源使用 |

### 构建错误码

| 错误类型 | 描述 | 解决方案 |
|----------|------|----------|
| ENOENT | 文件不存在 | 检查文件路径 |
| EACCES | 权限不足 | 检查文件权限 |
| EMFILE | 文件句柄不足 | 增加系统限制 |
| ENOMEM | 内存不足 | 增加内存限制 |

## 预防措施

### 1. 定期维护

```bash
# 每周执行的维护任务
#!/bin/bash

# 更新依赖
pnpm update

# 安全检查
npm audit

# 构建测试
pnpm build

# 清理缓存
npx nuxi cleanup
```

### 2. 监控设置

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      // 错误监控
      sentryDsn: process.env.SENTRY_DSN,
      // 性能监控
      analyticsId: process.env.ANALYTICS_ID
    }
  }
})
```

### 3. 备份策略

```bash
# 自动备份脚本
#!/bin/bash
DATE=$(date +%Y%m%d)
tar -czf backup-$DATE.tar.gz content/ app.config.ts nuxt.config.ts
```

### 4. 测试流程

```bash
# 部署前检查清单
1. 本地构建测试
2. 链接有效性检查
3. 性能测试
4. 跨浏览器测试
5. 移动端测试
```

## 紧急处理

### 1. 快速回滚

```bash
# Git 回滚
git reset --hard HEAD~1
git push origin main --force

# Vercel 回滚
# 在 Vercel 控制台选择上一个稳定版本
```

### 2. 临时修复

```bash
# 临时禁用有问题的功能
# 修改配置文件
# 快速部署
```

### 3. 联系支持

- **GitHub Issues**: 报告 bug
- **社区论坛**: 寻求帮助
- **官方文档**: 查阅最新信息

---

> 💡 **提示**: 遇到问题时，首先检查错误日志，然后按照本指南逐步排查。记录解决过程，便于后续参考。