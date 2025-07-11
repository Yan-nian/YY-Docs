---
title: 部署管理
description: YY-Docs 项目的部署流程、版本管理和生产环境维护指南。
---

# 部署管理

## 部署概述

YY-Docs 支持多种部署方式，推荐使用静态站点生成 (SSG) 模式部署到静态托管平台。

### 支持的部署平台

- **Vercel** (推荐) - 零配置部署
- **Netlify** - 静态站点托管
- **GitHub Pages** - 免费静态托管
- **NuxtHub** - Nuxt 官方平台
- **自定义服务器** - VPS/云服务器

## 构建流程

### 1. 生产构建

```bash
# 静态站点生成 (推荐)
pnpm generate

# 或者 SSR 构建
pnpm build

# 本地预览构建结果
pnpm preview
```

### 2. 构建产物

```
.output/
├── public/          # 静态文件 (SSG 模式)
├── server/          # 服务器文件 (SSR 模式)
└── nitro.json       # 构建配置
```

### 3. 构建优化

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'] // 预渲染额外路由
    },
    minify: true, // 压缩输出
  },
  experimental: {
    payloadExtraction: false // 优化构建大小
  }
})
```

## Vercel 部署 (推荐)

### 1. 自动部署设置

1. 将项目推送到 GitHub
2. 访问 [Vercel](https://vercel.com)
3. 导入 GitHub 仓库
4. Vercel 会自动检测 Nuxt 项目并配置

### 2. 部署配置

```json
// vercel.json (可选)
{
  "builds": [
    {
      "src": "nuxt.config.ts",
      "use": "@nuxtjs/vercel-builder"
    }
  ]
}
```

### 3. 环境变量

在 Vercel 控制台设置环境变量：

```bash
# 生产环境变量
NUXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NUXT_PUBLIC_GTM_ID=GTM-XXXXXXX  # Google Tag Manager (可选)
```

### 4. 自定义域名

1. 在 Vercel 项目设置中添加域名
2. 配置 DNS 记录指向 Vercel
3. 启用 HTTPS (自动)

## GitHub Pages 部署

### 1. GitHub Actions 配置

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: latest
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Generate static site
        run: pnpm generate
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./.output/public
```

### 2. 仓库设置

1. 启用 GitHub Pages
2. 选择 "GitHub Actions" 作为源
3. 配置自定义域名 (可选)

## 版本管理

### 1. 语义化版本

遵循 [Semantic Versioning](https://semver.org/) 规范：

- **MAJOR**: 不兼容的 API 修改
- **MINOR**: 向后兼容的功能性新增
- **PATCH**: 向后兼容的问题修正

### 2. 版本号管理

```bash
# 查看当前版本
npm version

# 更新版本号
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.1.0 -> 2.0.0

# 手动更新 package.json
# "version": "1.0.1"
```

### 3. Git 标签管理

```bash
# 创建版本标签
git tag -a v1.0.1 -m "Release version 1.0.1"

# 推送标签
git push origin v1.0.1

# 推送所有标签
git push origin --tags

# 查看所有标签
git tag -l

# 删除标签
git tag -d v1.0.1
git push origin :refs/tags/v1.0.1
```

### 4. 发布流程

```bash
# 1. 确保代码最新
git pull origin main

# 2. 运行测试
pnpm build
pnpm preview

# 3. 更新版本号
npm version patch

# 4. 更新 CHANGELOG
# 编辑 CHANGELOG.md

# 5. 提交更改
git add .
git commit -m "chore: release v1.0.1"

# 6. 创建标签
git tag -a v1.0.1 -m "Release v1.0.1"

# 7. 推送到远程
git push origin main --tags
```

## 环境配置

### 1. 环境变量管理

```bash
# .env (本地开发)
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_API_BASE=http://localhost:3001

# .env.production (生产环境)
NUXT_PUBLIC_SITE_URL=https://your-domain.com
NUXT_PUBLIC_API_BASE=https://api.your-domain.com
```

### 2. 配置文件

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    // 私有配置 (仅服务器端)
    apiSecret: process.env.API_SECRET,
    
    // 公共配置 (客户端可访问)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  }
})
```

## 性能监控

### 1. 构建分析

```bash
# 分析构建产物
NUXT_ANALYZE=true pnpm build

# 检查包大小
npx nuxi analyze
```

### 2. 性能指标

- **构建时间**: 监控构建耗时
- **包大小**: 控制 JavaScript 包大小
- **首屏加载**: 优化 LCP 指标
- **SEO 分数**: 使用 Lighthouse 检测

### 3. 监控工具

```typescript
// app.config.ts
export default defineAppConfig({
  // Google Analytics (可选)
  gtag: {
    id: 'GA_MEASUREMENT_ID'
  },
  
  // 性能监控
  performance: {
    enable: true
  }
})
```

## 备份策略

### 1. 代码备份

- **Git 仓库**: 主要代码版本控制
- **GitHub**: 远程仓库备份
- **本地备份**: 定期本地备份

### 2. 内容备份

```bash
# 备份 content 目录
cp -r content/ backup/content-$(date +%Y%m%d)/

# 备份配置文件
cp app.config.ts backup/
cp nuxt.config.ts backup/
```

### 3. 自动备份脚本

```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="backup/$DATE"

mkdir -p $BACKUP_DIR

# 备份重要文件
cp -r content/ $BACKUP_DIR/
cp app.config.ts $BACKUP_DIR/
cp nuxt.config.ts $BACKUP_DIR/
cp package.json $BACKUP_DIR/

echo "Backup completed: $BACKUP_DIR"
```

## 回滚策略

### 1. Git 回滚

```bash
# 回滚到上一个提交
git reset --hard HEAD~1

# 回滚到特定提交
git reset --hard <commit-hash>

# 回滚到特定标签
git reset --hard v1.0.0
```

### 2. Vercel 回滚

1. 访问 Vercel 控制台
2. 选择项目的 "Deployments" 页面
3. 找到稳定版本，点击 "Promote to Production"

### 3. 紧急回滚

```bash
# 快速回滚脚本
#!/bin/bash
# rollback.sh

echo "Rolling back to last stable version..."
git reset --hard HEAD~1
git push origin main --force
echo "Rollback completed"
```

## 安全考虑

### 1. 敏感信息

- 不要在代码中硬编码密钥
- 使用环境变量管理敏感配置
- 定期更新依赖包

### 2. 访问控制

```bash
# 检查依赖漏洞
npm audit

# 修复漏洞
npm audit fix

# 更新依赖
pnpm update
```

### 3. HTTPS 配置

- 确保生产环境使用 HTTPS
- 配置安全头部
- 启用 HSTS

---

> 💡 **提示**: 建议建立定期部署和备份的自动化流程，确保项目的稳定性和可恢复性。