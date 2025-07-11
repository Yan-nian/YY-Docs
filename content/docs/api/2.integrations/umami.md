---
title: Umami
icon: lucide:cloud
description: Umami 分析集成。
---

**shadcn-docs-nuxt** 在底层使用 [Nuxt Scripts](https://scripts.nuxt.com/scripts/analytics/umami-analytics) 来支持 [Umami Analytics](https://umami.is/)。将您的 Umami `data-website-id` 添加到 `app.config.ts`。

```ts [app.config.ts]
export default defineAppConfig({
  shadcnDocs: {
    site: {
      umami: {
        enable: true,
        src: 'https://cloud.umami.is/script.js',
        dataWebsiteId: 'your-data-website-id',
      },
    },
  },
});
```

## 参数

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  是否启用 umami 集成。
  ::
  ::field{name="src" type="string" default-value="https://cloud.umami.is/script.js"}
  跟踪代码中的链接源。
  ::
  ::field{name="dataWebsiteId" type="string"}
  来自 umami 仪表板的 _网站 ID_。
  ::
::
