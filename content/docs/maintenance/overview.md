---
title: 项目概述
description: YY-Docs 项目的整体概述、技术架构和维护指南总览。
---

# 项目概述

## 项目简介

**YY-Docs** (二十五时的睡眠文档) 是一个基于现代化技术栈构建的文档站点，专为"二十五时的睡眠"项目提供完整的文档服务。

### 基本信息

- **项目名称**: twenty-five-hour-sleep-docs
- **项目类型**: 静态文档站点
- **主要用途**: 项目文档展示、使用指南、配置说明
- **目标用户**: 项目使用者、开发者、维护人员

## 技术架构

### 核心技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **Nuxt** | ^3.17.6 | Vue.js 全栈框架，提供 SSG/SSR 能力 |
| **Vue** | ^3.5.17 | 前端框架，组件化开发 |
| **shadcn-docs-nuxt** | ^1.1.1 | 文档主题模板，提供美观的 UI 组件 |
| **Tailwind CSS** | - | 原子化 CSS 框架，样式管理 |
| **Nuxt Content** | - | 内容管理系统，Markdown 支持 |

### 架构特点

- **静态生成**: 支持 SSG，提供优秀的性能和 SEO
- **响应式设计**: 适配各种设备尺寸
- **暗色模式**: 内置亮色/暗色主题切换
- **搜索功能**: 内置文档搜索能力
- **可定制性**: 灵活的主题和配置选项

## 项目结构

```
YY-Docs/
├── .vscode/                 # VS Code 配置
├── assets/                  # 静态资源
│   └── css/
│       └── tailwind.css     # Tailwind 样式入口
├── content/                 # 文档内容
│   ├── docs/               # 文档页面
│   │   ├── getting-started/ # 入门指南
│   │   ├── guide/          # 使用指南
│   │   └── maintenance/    # 维护文档 (本目录)
│   └── index.md            # 首页内容
├── issues/                 # 任务和问题跟踪
├── public/                 # 公共静态文件
│   ├── favicon.ico
│   ├── logo.svg            # 亮色主题 Logo
│   └── logo-dark.svg       # 暗色主题 Logo
├── app.config.ts           # 应用配置 (主要配置文件)
├── nuxt.config.ts          # Nuxt 框架配置
├── tailwind.config.js      # Tailwind CSS 配置
├── package.json            # 项目依赖和脚本
└── README.md              # 项目说明
```

### 关键目录说明

- **`content/docs/`**: 所有文档内容的存放位置，使用 Markdown 格式
- **`app.config.ts`**: 站点的主要配置文件，包含导航、主题、SEO 等设置
- **`public/`**: 静态资源文件，直接暴露给用户访问
- **`issues/`**: 项目任务和维护记录

## 核心功能

### 1. 文档管理
- 基于 Markdown 的内容创作
- 自动生成导航和目录
- 支持代码高亮和组件嵌入

### 2. 用户体验
- 响应式布局设计
- 快速搜索功能
- 面包屑导航
- 目录大纲显示

### 3. 开发体验
- 热重载开发服务器
- TypeScript 支持
- 组件化开发
- 灵活的配置系统

## 维护文档导航

本维护文档包含以下主要章节：

1. **[项目概述](/docs/maintenance/overview)** - 当前页面
2. **[开发环境](/docs/maintenance/development)** - 开发环境配置指南
3. **[部署管理](/docs/maintenance/deployment)** - 部署流程和版本管理
4. **[内容管理](/docs/maintenance/content-management)** - 文档内容维护
5. **[故障排除](/docs/maintenance/troubleshooting)** - 常见问题解决
6. **[性能优化](/docs/maintenance/performance)** - 性能提升建议
7. **[维护清单](/docs/maintenance/checklist)** - 定期维护任务

## 项目目标

### 短期目标
- 提供完整的项目文档
- 建立标准化的维护流程
- 确保文档的及时更新

### 长期目标
- 构建知识库体系
- 提升用户体验
- 支持多语言文档
- 集成更多交互功能

---

> 💡 **提示**: 这是维护文档的总览页面。建议按顺序阅读各个章节，以获得完整的维护知识。