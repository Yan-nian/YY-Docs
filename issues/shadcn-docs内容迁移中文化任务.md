# shadcn-docs 内容迁移中文化任务

## 任务概述
将 shadcn-docs-nuxt 项目的完整内容迁移到本地项目并进行中文化处理。

## 实施方案：方案一 - 完整内容迁移 + 逐步中文化

### 执行计划

#### 第一阶段：内容结构迁移
1. **复制主要内容目录**
   - 复制 `temp-shadcn-docs/www/content/1.getting-started/` → `content/docs/getting-started/`
   - 复制 `temp-shadcn-docs/www/content/2.components/` → `content/docs/components/`
   - 复制 `temp-shadcn-docs/www/content/3.api/` → `content/docs/api/`
   - 复制 `temp-shadcn-docs/www/content/4.blog/` → `content/docs/blog/`

2. **更新主页内容**
   - 更新 `content/index.md` 使用新的首页模板

#### 第二阶段：核心内容中文化
1. **Getting Started 部分**
   - 翻译 introduction.md（介绍页面）
   - 翻译 installation.md（安装指南）
   - 翻译 writing 目录下的文档编写指南
   - 翻译 deployment.md（部署指南）

2. **Components 部分**
   - 翻译组件分类和描述
   - 保留组件示例代码，添加中文说明
   - 翻译组件属性和用法说明

3. **API 部分**
   - 翻译配置文档
   - 翻译集成指南
   - 翻译高级用法

#### 第三阶段：目录结构优化
1. **更新 _dir.yml 文件**
   - 将所有目录标题翻译为中文
   - 调整导航顺序

2. **内容链接修复**
   - 更新内部链接引用
   - 修复图片和资源路径

### 预期结果
- 完整的中文化文档站点
- 丰富的组件展示和说明
- 保持原有功能完整性
- 适配现有项目结构

### 执行时间估计
- 第一阶段：30分钟
- 第二阶段：60分钟
- 第三阶段：30分钟
- 总计：约2小时

## 开始执行
执行开始时间：待用户确认