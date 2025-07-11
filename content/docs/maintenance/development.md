---
title: 开发环境
description: YY-Docs 项目的开发环境配置、依赖管理和开发工作流指南。
---

# 开发环境配置

## 系统要求

### 必需环境

- **Node.js**: >= 18.0.0 (推荐使用 LTS 版本)
- **包管理器**: pnpm (推荐) / npm / yarn
- **Git**: 用于版本控制
- **编辑器**: VS Code (推荐，已配置扩展)

### 推荐工具

- **终端**: Windows Terminal / PowerShell
- **浏览器**: Chrome / Firefox (用于开发调试)
- **Git 客户端**: GitHub Desktop (可选)

## 环境安装

### 1. Node.js 安装

```bash
# 检查当前版本
node --version
npm --version

# 如果版本过低，请访问 https://nodejs.org 下载最新 LTS 版本
```

### 2. pnpm 安装 (推荐)

```bash
# 全局安装 pnpm
npm install -g pnpm

# 验证安装
pnpm --version
```

### 3. 项目克隆

```bash
# 克隆项目
git clone https://github.com/Yan-nian/YY-Docs.git
cd YY-Docs

# 或者如果已有项目目录
cd c:\Users\yy121\Desktop\github\YY-Docs
```

## 依赖管理

### 安装项目依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 依赖说明

#### 核心依赖
```json
{
  "nuxt": "^3.17.6",           // Nuxt 框架
  "shadcn-docs-nuxt": "^1.1.1", // 文档主题
  "vue": "^3.5.17",            // Vue 框架
  "vue-router": "^4.5.1"       // 路由管理
}
```

#### 开发依赖
- **TypeScript**: 类型支持
- **Tailwind CSS**: 样式框架
- **ESLint**: 代码规范检查
- **Prettier**: 代码格式化

### 依赖更新

```bash
# 检查过时的依赖
pnpm outdated

# 更新所有依赖到最新版本
pnpm update

# 更新特定依赖
pnpm update nuxt

# 安装新依赖
pnpm add <package-name>
pnpm add -D <dev-package-name>
```

## 开发服务器

### 启动开发服务器

```bash
# 启动开发服务器
pnpm dev

# 或使用 npm
npm run dev
```

服务器将在 `http://localhost:3000` 启动。

### 开发服务器特性

- **热重载**: 文件修改后自动刷新
- **TypeScript 支持**: 实时类型检查
- **错误提示**: 详细的错误信息显示
- **开发工具**: Nuxt DevTools 集成

### 常用开发命令

```bash
# 开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 生成静态站点
pnpm generate

# 类型检查
npx nuxi typecheck

# 清理缓存
npx nuxi cleanup
```

## VS Code 配置

### 推荐扩展

项目已配置 `.vscode/extensions.json`，包含推荐扩展：

- **Vue Language Features (Volar)**: Vue 3 支持
- **TypeScript Vue Plugin (Volar)**: TypeScript 集成
- **Tailwind CSS IntelliSense**: Tailwind 智能提示
- **ESLint**: 代码规范检查
- **Prettier**: 代码格式化
- **Auto Rename Tag**: HTML 标签自动重命名

### 工作区设置

```json
// .vscode/settings.json (可选创建)
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.vue": "vue"
  }
}
```

## 开发工作流

### 1. 日常开发流程

```bash
# 1. 拉取最新代码
git pull origin main

# 2. 安装/更新依赖
pnpm install

# 3. 启动开发服务器
pnpm dev

# 4. 进行开发工作
# ...

# 5. 提交代码
git add .
git commit -m "feat: 添加新功能"
git push origin main
```

### 2. 文档开发

```bash
# 创建新文档
touch content/docs/new-section/new-page.md

# 编辑文档内容
# 使用 Markdown 语法编写

# 实时预览
# 开发服务器会自动重载显示更改
```

### 3. 配置修改

```bash
# 修改站点配置
# 编辑 app.config.ts

# 修改 Nuxt 配置
# 编辑 nuxt.config.ts

# 修改样式配置
# 编辑 tailwind.config.js
```

## 调试技巧

### 1. 开发工具

- **Nuxt DevTools**: 自动启用，提供详细的调试信息
- **Vue DevTools**: 浏览器扩展，用于 Vue 组件调试
- **浏览器开发者工具**: 网络、性能、控制台调试

### 2. 常见调试场景

```bash
# 清理缓存和重新构建
npx nuxi cleanup
pnpm dev

# 检查类型错误
npx nuxi typecheck

# 分析构建产物
pnpm build --analyze

# 检查依赖问题
pnpm ls
```

### 3. 日志调试

```typescript
// 在代码中添加调试日志
console.log('Debug info:', data)

// 使用 Nuxt 的日志工具
const logger = useNuxtApp().$logger
logger.info('Info message')
```

## 性能监控

### 开发环境性能

```bash
# 启动性能分析
NUXT_ANALYZE=true pnpm build

# 检查构建时间
time pnpm build

# 内存使用监控
node --max-old-space-size=4096 node_modules/.bin/nuxt dev
```

### 热重载优化

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        port: 24678, // 自定义 HMR 端口
      }
    }
  }
})
```

## 故障排除

### 常见问题

1. **端口占用**
   ```bash
   # 查找占用端口的进程
   netstat -ano | findstr :3000
   
   # 杀死进程
   taskkill /PID <PID> /F
   ```

2. **依赖冲突**
   ```bash
   # 删除 node_modules 和锁文件
   rm -rf node_modules pnpm-lock.yaml
   
   # 重新安装
   pnpm install
   ```

3. **缓存问题**
   ```bash
   # 清理 Nuxt 缓存
   npx nuxi cleanup
   
   # 清理 pnpm 缓存
   pnpm store prune
   ```

---

> 💡 **提示**: 开发环境配置完成后，建议先运行一次完整的构建测试，确保所有功能正常工作。