---
title: 快速开始
description: 学习如何快速创建和编辑文档页面。
---

# 快速开始

本指南将帮助你快速上手 shadcn-docs-nuxt，创建你的第一个文档页面。

## 创建文档页面

### 1. 创建 Markdown 文件

在 `content/docs/` 目录下创建一个新的 `.md` 文件：

```markdown
---
title: 我的第一个页面
description: 这是我创建的第一个文档页面。
---

# 我的第一个页面

欢迎来到我的文档页面！

## 章节标题

这里是一些内容...
```

### 2. 前置元数据

每个文档页面都应该包含前置元数据（frontmatter）：

- `title` - 页面标题
- `description` - 页面描述（用于 SEO）
- `navigation` - 导航设置（可选）

## 编写内容

### Markdown 语法

shadcn-docs-nuxt 支持标准的 Markdown 语法：

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体文本**
*斜体文本*

- 列表项 1
- 列表项 2
- 列表项 3

[链接文本](https://example.com)
```

### 代码块

使用代码块展示代码：

````markdown
```javascript
const message = 'Hello, World!';
console.log(message);
```
````

### 代码组

使用代码组展示多种语言或包管理器的示例：

```markdown
::code-group

```bash [npm]
npm install package-name
```

```bash [pnpm]
pnpm add package-name
```

```bash [yarn]
yarn add package-name
```

::
```

### 提示框

使用内置组件创建提示框：

```markdown
::alert{type="info"}
这是一个信息提示框。
::

::alert{type="warning"}
这是一个警告提示框。
::

::alert{type="danger"}
这是一个危险提示框。
::
```

## 配置导航

要在导航中显示你的页面，需要在 `app.config.ts` 中配置：

```typescript
export default defineAppConfig({
  shadcnDocs: {
    header: {
      nav: [
        {
          title: '文档',
          to: '/docs/getting-started/introduction'
        }
      ]
    }
  }
});
```

## 预览页面

保存文件后，你可以在浏览器中访问 `http://localhost:3000/docs/your-page` 查看页面效果。

## 下一步

- [配置指南](/docs/guide/configuration) - 学习如何自定义站点配置
- [组件使用](/docs/components) - 了解可用的内置组件