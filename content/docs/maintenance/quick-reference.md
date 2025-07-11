---
title: 快速参考
description: YY-Docs 项目维护的快速参考指南和常用命令。
---

# 快速参考

## 常用命令

### 开发环境
```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建项目
pnpm build

# 生成静态站点
pnpm generate

# 预览构建结果
pnpm preview

# 清理缓存
npx nuxi cleanup
```

### 依赖管理
```bash
# 检查过时依赖
pnpm outdated

# 更新所有依赖
pnpm update

# 更新特定依赖
pnpm update package-name

# 安全审计
npm audit

# 修复安全漏洞
npm audit fix
```

### Git 操作
```bash
# 检查状态
git status

# 提交更改
git add .
git commit -m "feat: 更新文档内容"

# 推送到远程
git push origin main

# 创建标签
git tag v1.0.0
git push origin v1.0.0

# 查看提交历史
git log --oneline -10
```

### 部署相关
```bash
# Vercel 部署
vercel --prod

# GitHub Pages 部署
npm run deploy

# 检查构建状态
curl -I https://your-domain.com
```

## 文件结构速览

```
YY-Docs/
├── content/
│   ├── docs/
│   │   ├── getting-started/     # 入门指南
│   │   ├── guide/              # 使用指南
│   │   └── maintenance/        # 维护文档
│   └── index.md               # 首页内容
├── assets/
│   └── css/                   # 样式文件
├── public/                    # 静态资源
├── app.config.ts             # 应用配置
├── nuxt.config.ts            # Nuxt 配置
├── package.json              # 项目依赖
└── tailwind.config.js        # Tailwind 配置
```

## 配置文件说明

### app.config.ts
- 站点基本信息配置
- 主题和样式配置
- 导航菜单配置
- 页脚和搜索配置

### nuxt.config.ts
- Nuxt 框架配置
- 模块和插件配置
- 构建和开发配置

### package.json
- 项目依赖管理
- 脚本命令定义
- 项目元信息

## 常见任务快速指南

### 添加新文档页面
1. 在 `content/docs/` 下创建 `.md` 文件
2. 添加 frontmatter 元数据
3. 编写 Markdown 内容
4. 更新导航配置（如需要）

### 修改站点配置
1. 编辑 `app.config.ts` 文件
2. 重启开发服务器
3. 验证更改效果

### 更新依赖
1. 运行 `pnpm outdated` 检查
2. 运行 `pnpm update` 更新
3. 测试功能正常
4. 提交更改

### 部署更新
1. 确保所有更改已提交
2. 推送到 GitHub
3. 等待自动部署完成
4. 验证线上效果

## 故障排除速查

### 开发服务器无法启动
```bash
# 清理缓存和重新安装
rm -rf node_modules .nuxt
pnpm install
pnpm dev
```

### 构建失败
```bash
# 检查依赖
npm audit
pnpm outdated

# 清理并重新构建
npx nuxi cleanup
pnpm build
```

### 样式问题
```bash
# 重新生成 Tailwind CSS
npx tailwindcss -i ./assets/css/tailwind.css -o ./dist/output.css --watch
```

### 搜索功能异常
```bash
# 重新生成搜索索引
npx nuxi generate
```

## 性能检查命令

### Lighthouse 测试
```bash
# 安装 Lighthouse
npm install -g lighthouse

# 运行测试
lighthouse http://localhost:3000 --output=html
```

### 构建分析
```bash
# 分析构建产物
NUXT_ANALYZE=true pnpm build
```

### 依赖分析
```bash
# 分析包大小
npx bundlephobia-cli

# 检查重复依赖
npx depcheck
```

## 安全检查命令

### 漏洞扫描
```bash
# NPM 审计
npm audit

# 安全扫描
npx audit-ci --config audit-ci.json
```

### 许可证检查
```bash
# 检查依赖许可证
npx license-checker

# 生成许可证报告
npx license-checker --summary
```

## 备份和恢复

### 创建备份
```bash
# 备份内容文件
tar -czf content-backup-$(date +%Y%m%d).tar.gz content/

# 备份配置文件
tar -czf config-backup-$(date +%Y%m%d).tar.gz *.config.* package.json
```

### 恢复备份
```bash
# 恢复内容
tar -xzf content-backup-YYYYMMDD.tar.gz

# 恢复配置
tar -xzf config-backup-YYYYMMDD.tar.gz
```

## 监控和日志

### 访问日志
```bash
# Vercel 日志
vercel logs

# 本地开发日志
tail -f .nuxt/dev.log
```

### 性能监控
```bash
# 检查网站状态
curl -I https://your-domain.com

# 检查响应时间
curl -w "@curl-format.txt" -o /dev/null -s https://your-domain.com
```

## 有用的资源链接

### 官方文档
- [Nuxt 3 文档](https://nuxt.com/docs)
- [Nuxt Content 文档](https://content.nuxtjs.org/)
- [shadcn-vue 文档](https://www.shadcn-vue.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

### 工具和服务
- [Vercel 控制台](https://vercel.com/dashboard)
- [GitHub Actions](https://github.com/features/actions)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### 社区资源
- [Nuxt 社区](https://nuxt.com/community)
- [Vue.js 社区](https://vuejs.org/community/)
- [GitHub Discussions](https://github.com/Yan-nian/YY-Docs/discussions)

---

> 💡 **提示**: 将此页面加入书签，以便快速查找常用命令和解决方案。建议定期更新此参考指南，保持信息的时效性。