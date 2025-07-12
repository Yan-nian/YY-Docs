---
title: 安装
description: 学习如何安装和设置 shadcn-docs-nuxt 项目。
---

# 安装

本指南将帮助你快速安装和设置 shadcn-docs-nuxt 项目。

## 系统要求

在开始之前，请确保你的系统满足以下要求：

- Node.js 18.0.0 或更高版本
- npm、pnpm、yarn 或 bun 包管理器

## 快速开始

### 1. 克隆模板

```bash
# 使用 GitHub 模板创建新项目
npx nuxi@latest init my-docs --template ZTL-UwU/shadcn-docs-nuxt-starter
```

### 2. 安装依赖

进入项目目录并安装依赖：

::code-group

```bash [npm]
npm install
```

```bash [pnpm]
pnpm install
```

```bash [yarn]
yarn install
```

```bash [bun]
bun install
```

::

### 3. 启动开发服务器

::code-group

```bash [npm]
npm run dev
```

```bash [pnpm]
pnpm dev
```

```bash [yarn]
yarn dev
```

```bash [bun]
bun run dev
```

::

开发服务器将在 `http://localhost:3000` 启动。

## 项目结构

安装完成后，你的项目结构应该如下所示：

```
my-docs/
├── content/           # 文档内容
│   ├── docs/         # 文档页面
│   └── index.md      # 首页
├── public/           # 静态资源
├── app.config.ts     # 应用配置
├── nuxt.config.ts    # Nuxt 配置
└── package.json      # 项目依赖
```

## 下一步

现在你已经成功安装了 shadcn-docs-nuxt，可以开始：

- [快速开始](/docs/getting-started/quick-start) - 学习如何创建你的第一个文档页面
- [配置指南](/docs/guide/configuration) - 了解如何自定义你的文档站点