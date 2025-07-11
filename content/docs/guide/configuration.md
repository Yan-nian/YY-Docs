---
title: 配置指南
description: 学习如何配置和自定义你的 shadcn-docs-nuxt 文档站点。
---

# 配置指南

shadcn-docs-nuxt 通过 `app.config.ts` 文件进行配置。本指南将介绍主要的配置选项。

## 基础配置

### 站点信息

```typescript
export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: '我的文档站点',
      description: '这是我的文档站点描述。',
    }
  }
});
```

### 主题配置

```typescript
export default defineAppConfig({
  shadcnDocs: {
    theme: {
      customizable: true,    // 是否允许用户自定义主题
      color: 'zinc',         // 主题颜色
      radius: 0.5,          // 圆角大小
    }
  }
});
```

## 头部配置

### 基本设置

```typescript
export default defineAppConfig({
  shadcnDocs: {
    header: {
      title: '我的文档',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
    }
  }
});
```

### 导航菜单

```typescript
export default defineAppConfig({
  shadcnDocs: {
    header: {
      nav: [
        {
          title: '首页',
          to: '/'
        },
        {
          title: '文档',
          to: '/docs/getting-started/introduction'
        },
        {
          title: '指南',
          to: '/docs/guide/configuration'
        }
      ],
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/Yan-nian/YY-Docs',
          target: '_blank',
        }
      ]
    }
  }
});
```

## 侧边栏配置

```typescript
export default defineAppConfig({
  shadcnDocs: {
    aside: {
      useLevel: true,        // 使用层级样式
      collapse: false,       // 是否默认折叠
    }
  }
});
```

## 主内容区配置

```typescript
export default defineAppConfig({
  shadcnDocs: {
    main: {
      breadCrumb: true,      // 显示面包屑导航
      showTitle: true,       // 显示页面标题
    }
  }
});
```

## 目录配置

```typescript
export default defineAppConfig({
  shadcnDocs: {
    toc: {
      enable: true,          // 启用目录
      links: [
        {
          title: 'GitHub',
          icon: 'lucide:github',
          to: 'https://github.com/Yan-nian/YY-Docs',
          target: '_blank',
        }
      ]
    }
  }
});
```

## 搜索配置

```typescript
export default defineAppConfig({
  shadcnDocs: {
    search: {
      enable: true,          // 启用搜索
      inAside: false,        // 是否在侧边栏显示搜索
    }
  }
});
```

## 页脚配置

```typescript
export default defineAppConfig({
  shadcnDocs: {
    footer: {
      credits: 'Copyright © 2024 我的公司',
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/Yan-nian/YY-Docs',
          target: '_blank',
        }
      ]
    }
  }
});
```

## 完整配置示例

```typescript
export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: '我的文档站点',
      description: '一个基于 shadcn-docs-nuxt 构建的文档站点。',
    },
    theme: {
      customizable: true,
      color: 'blue',
      radius: 0.5,
    },
    header: {
      title: '我的文档',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [
        { title: '首页', to: '/' },
        { title: '文档', to: '/docs/getting-started/introduction' },
        { title: '指南', to: '/docs/guide/configuration' }
      ],
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/Yan-nian/YY-Docs',
          target: '_blank',
        }
      ]
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/Yan-nian/YY-Docs',
          target: '_blank',
        }
      ]
    },
    toc: {
      enable: true,
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});
```

## 高级配置

更多高级配置选项，请参考 [shadcn-docs-nuxt 官方文档](https://shadcn-docs-nuxt.vercel.app/api/configuration/shadcn-docs)。