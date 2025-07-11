---
title: 性能优化
description: YY-Docs 项目的性能优化策略、监控和改进建议。
---

# 性能优化

## 性能指标

### 核心 Web 指标 (Core Web Vitals)

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTI (Time to Interactive)**: < 3.8s

### 自定义指标

- **构建时间**: < 60s
- **包大小**: < 500KB (gzipped)
- **页面加载时间**: < 3s
- **搜索响应时间**: < 200ms

## 构建优化

### 1. 依赖优化

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  // 减少包大小
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false
  },
  
  // 优化构建
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // 分离第三方库
            vendor: ['vue', 'vue-router'],
            ui: ['@headlessui/vue', '@heroicons/vue']
          }
        }
      }
    }
  }
})
```

### 2. 代码分割

```typescript
// 动态导入组件
const LazyComponent = defineAsyncComponent(() => import('~/components/Heavy.vue'))

// 路由级别的代码分割
const routes = [
  {
    path: '/docs',
    component: () => import('~/pages/docs.vue')
  }
]
```

### 3. Tree Shaking

```typescript
// 只导入需要的功能
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'  // 使用 ES 模块版本

// 避免导入整个库
// ❌ import _ from 'lodash'
// ✅ import { debounce } from 'lodash-es'
```

### 4. 构建缓存

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  vite: {
    build: {
      // 启用构建缓存
      cache: {
        dir: 'node_modules/.vite'
      }
    }
  },
  
  // Nitro 缓存
  nitro: {
    storage: {
      cache: {
        driver: 'fs',
        base: './.cache'
      }
    }
  }
})
```

## 运行时优化

### 1. 图片优化

```vue
<template>
  <!-- 使用 Nuxt Image 组件 -->
  <NuxtImg
    src="/images/hero.jpg"
    alt="Hero image"
    width="800"
    height="600"
    loading="lazy"
    format="webp"
    quality="80"
  />
  
  <!-- 响应式图片 -->
  <NuxtPicture
    src="/images/responsive.jpg"
    :img-attrs="{
      alt: 'Responsive image',
      loading: 'lazy'
    }"
    sizes="sm:100vw md:50vw lg:400px"
  />
</template>
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  image: {
    // 图片优化配置
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  }
})
```

### 2. 字体优化

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})
```

```css
/* 字体加载优化 */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap; /* 重要：避免字体加载阻塞 */
  src: url('/fonts/inter-regular.woff2') format('woff2');
}
```

### 3. 懒加载

```vue
<template>
  <!-- 图片懒加载 -->
  <img
    v-lazy="imageSrc"
    alt="Lazy loaded image"
    loading="lazy"
  >
  
  <!-- 组件懒加载 -->
  <LazyComponent v-if="shouldLoad" />
</template>

<script setup>
// 交叉观察器实现懒加载
const shouldLoad = ref(false)
const target = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      shouldLoad.value = true
      observer.disconnect()
    }
  })
  
  if (target.value) {
    observer.observe(target.value)
  }
})
</script>
```

### 4. 缓存策略

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      // 首页预渲染
      '/': { prerender: true },
      
      // 文档页面 ISR
      '/docs/**': { isr: 60 },
      
      // API 路由缓存
      '/api/**': { 
        headers: { 
          'Cache-Control': 's-maxage=60' 
        } 
      },
      
      // 静态资源长期缓存
      '/images/**': { 
        headers: { 
          'Cache-Control': 'max-age=31536000' 
        } 
      }
    }
  }
})
```

## 内容优化

### 1. Markdown 优化

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  content: {
    // 代码高亮优化
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'bash']
    },
    
    // Markdown 解析优化
    markdown: {
      // 启用 mdc 语法
      mdc: true,
      // 优化表格渲染
      remarkPlugins: ['remark-gfm']
    }
  }
})
```

### 2. 搜索优化

```typescript
// 自定义搜索索引
export default defineNuxtConfig({
  content: {
    experimental: {
      search: {
        indexed: true,
        options: {
          fields: ['title', 'description', 'body'],
          storeFields: ['title', 'description'],
          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: {
              title: 4,
              description: 2,
              body: 1
            }
          }
        }
      }
    }
  }
})
```

### 3. SEO 优化

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://your-domain.com' }
      ]
    }
  },
  
  // 站点地图
  sitemap: {
    hostname: 'https://your-domain.com',
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()
      return files.map(file => file.path)
    }
  }
})
```

## 监控和分析

### 1. 性能监控

```typescript
// plugins/performance.client.ts
export default defineNuxtPlugin(() => {
  // Web Vitals 监控
  if (process.client) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)
    })
  }
})
```

### 2. 构建分析

```bash
# 分析构建产物
NUXT_ANALYZE=true pnpm build

# 使用 webpack-bundle-analyzer
npx nuxi analyze

# 检查包大小
npx bundlesize
```

```json
// package.json
{
  "bundlesize": [
    {
      "path": "./.output/public/_nuxt/*.js",
      "maxSize": "500kb"
    }
  ]
}
```

### 3. Lighthouse 集成

```bash
# 自动化性能测试
npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json

# CI/CD 集成
npx lhci autorun
```

```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

## 优化检查清单

### 构建优化

- [ ] 启用代码分割
- [ ] 配置 Tree Shaking
- [ ] 优化依赖导入
- [ ] 启用构建缓存
- [ ] 压缩静态资源

### 运行时优化

- [ ] 图片懒加载和优化
- [ ] 字体优化
- [ ] 组件懒加载
- [ ] 缓存策略配置
- [ ] CDN 配置

### 内容优化

- [ ] Markdown 渲染优化
- [ ] 搜索索引优化
- [ ] SEO 元数据
- [ ] 结构化数据
- [ ] 站点地图

### 监控设置

- [ ] 性能指标监控
- [ ] 错误监控
- [ ] 用户体验监控
- [ ] 构建性能监控
- [ ] 自动化测试

## 性能优化脚本

### 1. 自动优化脚本

```bash
#!/bin/bash
# optimize.sh

echo "开始性能优化..."

# 清理缓存
echo "清理缓存..."
npx nuxi cleanup

# 优化图片
echo "优化图片..."
npx imagemin public/images/* --out-dir=public/images/optimized

# 分析构建
echo "分析构建..."
NUXT_ANALYZE=true pnpm build

# 性能测试
echo "运行性能测试..."
npx lighthouse http://localhost:3000

echo "优化完成！"
```

### 2. 性能监控脚本

```bash
#!/bin/bash
# monitor.sh

# 检查构建大小
BUILD_SIZE=$(du -sh .output/public | cut -f1)
echo "构建大小: $BUILD_SIZE"

# 检查构建时间
start_time=$(date +%s)
pnpm build
end_time=$(date +%s)
build_time=$((end_time - start_time))
echo "构建时间: ${build_time}s"

# 检查依赖大小
npx bundlesize
```

### 3. 自动化优化 CI

```yaml
# .github/workflows/performance.yml
name: Performance Check

on:
  pull_request:
    branches: [ main ]

jobs:
  performance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        with:
          configPath: './lighthouserc.json'
          
      - name: Check bundle size
        run: npx bundlesize
```

## 长期优化策略

### 1. 定期审查

- **每月**: 依赖更新和安全检查
- **每季度**: 性能基准测试
- **每半年**: 架构优化评估
- **每年**: 技术栈升级评估

### 2. 持续改进

```typescript
// 性能预算配置
const performanceBudget = {
  // 构建大小限制
  maxBundleSize: '500KB',
  maxImageSize: '200KB',
  
  // 性能指标目标
  targetLCP: 2500,
  targetFID: 100,
  targetCLS: 0.1
}
```

### 3. 用户体验优化

- 优化关键渲染路径
- 减少布局偏移
- 提升交互响应速度
- 优化移动端体验
- 改善可访问性

---

> 💡 **提示**: 性能优化是一个持续的过程。建议建立性能监控体系，定期评估和改进，确保用户体验始终保持在最佳状态。