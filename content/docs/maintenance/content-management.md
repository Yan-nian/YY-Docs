---
title: 内容管理
description: YY-Docs 项目的内容创建、编辑、组织和维护指南。
---

# 内容管理

## 内容架构

### 目录结构

```
content/
├── docs/                    # 主要文档内容
│   ├── getting-started/     # 入门指南
│   │   ├── introduction.md  # 项目介绍
│   │   ├── installation.md  # 安装指南
│   │   └── quick-start.md   # 快速开始
│   ├── guide/              # 使用指南
│   │   └── configuration.md # 配置指南
│   └── maintenance/        # 维护文档
│       ├── overview.md     # 项目概述
│       ├── development.md  # 开发环境
│       ├── deployment.md   # 部署管理
│       └── ...            # 其他维护文档
└── index.md               # 首页内容
```

### 内容分类

- **入门文档**: 新用户快速上手
- **使用指南**: 详细功能说明
- **维护文档**: 项目维护和管理
- **API 文档**: 接口说明 (如需要)
- **FAQ**: 常见问题解答

## Markdown 编写规范

### 1. 文件头部 (Front Matter)

```yaml
---
title: 页面标题
description: 页面描述，用于 SEO 和搜索
navigation: true  # 是否显示在导航中
head:
  meta:
    - name: keywords
      content: 关键词1, 关键词2
---
```

### 2. 标题层级

```markdown
# 一级标题 (页面主标题，每页只有一个)

## 二级标题 (主要章节)

### 三级标题 (子章节)

#### 四级标题 (详细说明)
```

### 3. 代码块

```markdown
# 单行代码
使用 `代码` 标记行内代码。

# 多行代码块
```bash
npm install
npm run dev
```

# 带语言高亮的代码块
```typescript
interface Config {
  name: string;
  version: string;
}
```

# 代码组 (多个选项)
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

::
```

### 4. 链接和引用

```markdown
# 内部链接
[配置指南](/docs/guide/configuration)

# 外部链接
[GitHub](https://github.com/Yan-nian/YY-Docs)

# 图片
![描述文字](/images/screenshot.png)

# 引用
> 这是一个重要的提示信息。
```

### 5. 列表和表格

```markdown
# 无序列表
- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2

# 有序列表
1. 第一步
2. 第二步
3. 第三步

# 表格
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 值1 | 值2 | 值3 |
| 值4 | 值5 | 值6 |
```

## 组件使用

### 1. 提示框组件

```markdown
::alert{type="info"}
这是一个信息提示。
::

::alert{type="warning"}
这是一个警告提示。
::

::alert{type="danger"}
这是一个危险提示。
::

::alert{type="success"}
这是一个成功提示。
::
```

### 2. 卡片组件

```markdown
::card
---
title: 卡片标题
icon: lucide:star
---
卡片内容描述。
::
```

### 3. 标签页组件

```markdown
::tabs

::div{label="标签1"}
标签1的内容
::

::div{label="标签2"}
标签2的内容
::

::
```

### 4. 折叠面板

```markdown
::details
---
summary: 点击展开详细信息
---
这里是折叠的详细内容。
::
```

## 内容创建流程

### 1. 新建文档

```bash
# 创建新的文档文件
touch content/docs/section/new-page.md

# 或创建目录和文件
mkdir -p content/docs/new-section
touch content/docs/new-section/index.md
```

### 2. 编写内容

```markdown
---
title: 新页面标题
description: 页面描述
---

# 新页面标题

页面内容...

## 主要章节

详细内容...
```

### 3. 更新导航

如果需要在导航中显示新页面，更新 `app.config.ts`：

```typescript
// app.config.ts
export default defineAppConfig({
  shadcnDocs: {
    header: {
      nav: [
        // 现有导航项...
        {
          title: '新章节',
          to: '/docs/new-section'
        }
      ]
    }
  }
})
```

## 内容维护

### 1. 定期检查

```bash
# 检查所有 Markdown 文件
find content/ -name "*.md" -type f

# 检查链接有效性 (需要安装 markdown-link-check)
npx markdown-link-check content/**/*.md

# 检查拼写 (需要安装 cspell)
npx cspell "content/**/*.md"
```

### 2. 内容更新

```bash
# 更新流程
1. 编辑 Markdown 文件
2. 本地预览检查
3. 提交更改
4. 部署更新
```

### 3. 版本控制

```bash
# 内容更新提交规范
git add content/
git commit -m "docs: 更新配置指南"
git push origin main
```

## SEO 优化

### 1. 元数据配置

```yaml
---
title: 具体而描述性的标题
description: 简洁明了的页面描述 (150-160字符)
head:
  meta:
    - name: keywords
      content: 关键词1, 关键词2, 关键词3
    - property: og:title
      content: 社交媒体标题
    - property: og:description
      content: 社交媒体描述
    - property: og:image
      content: /images/og-image.png
---
```

### 2. 内容优化

- **标题层级**: 使用清晰的标题层级结构
- **关键词**: 自然地使用相关关键词
- **内部链接**: 适当添加内部页面链接
- **图片优化**: 使用描述性的 alt 文本

### 3. 站点地图

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
```

## 多媒体管理

### 1. 图片管理

```
public/
├── images/
│   ├── screenshots/     # 截图
│   ├── diagrams/       # 图表
│   ├── icons/          # 图标
│   └── og-images/      # 社交媒体图片
└── videos/             # 视频文件
```

### 2. 图片优化

```markdown
# 响应式图片
![描述文字](/images/screenshot.png){width="800" height="600"}

# 带链接的图片
[![描述文字](/images/thumbnail.png)](/images/full-size.png)

# 图片说明
![API 配置界面](/images/api-config.png)
*图：API 配置界面截图*
```

### 3. 视频嵌入

```markdown
# 本地视频
<video controls width="100%">
  <source src="/videos/demo.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>

# YouTube 视频
::youtube{id="VIDEO_ID"}
```

## 内容审核

### 1. 质量检查清单

- [ ] 标题和描述是否准确
- [ ] 内容是否完整和最新
- [ ] 代码示例是否可运行
- [ ] 链接是否有效
- [ ] 图片是否显示正常
- [ ] 语法和拼写是否正确

### 2. 用户体验检查

- [ ] 内容结构是否清晰
- [ ] 导航是否便于使用
- [ ] 搜索功能是否正常
- [ ] 移动端显示是否正常
- [ ] 加载速度是否合理

### 3. 技术检查

```bash
# 构建检查
pnpm build

# 链接检查
npx markdown-link-check content/**/*.md

# 性能检查
npx lighthouse http://localhost:3000
```

## 内容迁移

### 1. 从其他平台迁移

```bash
# 从 GitBook 迁移
# 1. 导出 Markdown 文件
# 2. 调整文件结构
# 3. 更新链接路径
# 4. 转换组件语法

# 从 Notion 迁移
# 1. 导出为 Markdown
# 2. 清理格式
# 3. 优化图片路径
# 4. 添加 Front Matter
```

### 2. 批量处理

```bash
# 批量添加 Front Matter
for file in content/docs/**/*.md; do
  if ! grep -q "^---" "$file"; then
    echo "---\ntitle: $(basename "$file" .md)\n---\n$(cat "$file")" > "$file"
  fi
done

# 批量更新链接
sed -i 's/old-link/new-link/g' content/docs/**/*.md
```

## 协作管理

### 1. 编辑权限

- **主维护者**: 完全编辑权限
- **贡献者**: 通过 PR 提交更改
- **审核者**: 内容审核和批准

### 2. 工作流程

```bash
# 贡献者工作流
1. Fork 仓库
2. 创建功能分支
3. 编辑内容
4. 提交 Pull Request
5. 代码审核
6. 合并到主分支
```

### 3. 内容规范

- 遵循统一的写作风格
- 使用一致的术语
- 保持内容的时效性
- 定期更新过时信息

---

> 💡 **提示**: 建立定期的内容审核机制，确保文档始终保持准确和最新状态。