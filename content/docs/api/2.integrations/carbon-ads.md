---
title: Carbon 广告
icon: lucide:chart-line
description: 在目录部分底部运行广告。
---

**shadcn-docs-nuxt** 在底层使用 [Nuxt Scripts](https://scripts.nuxt.com/scripts/ads/carbon-ads) 来支持 [Carbon Ads](https://www.carbonads.net/)。将您的 Carbon Ads 凭据添加到 `app.config.ts`，广告将显示在目录部分的底部。

```ts [app.config.ts]
export default defineAppConfig({
  shadcnDocs: {
    toc: {
      enable: true,
      carbonAds: {
        enable: true,
        disableInDev: false,
        disableInMobile: false,
        fallback: false, // whether to show fallback message when blocked by ad blockers
        code: 'your-carbon-code', // aka the 'serve' code
        placement: 'your-carbon-placement',
        format: 'your-carbon-format', // defaults to 'cover'
      },
    }
  },
});
```

:read-more{title="Carbon Ads website" to="https://www.carbonads.net/"}

### 在特定页面上禁用

```md
---
title: Page Title
toc:
  carbonAds:
    enable: false
---

<!-- Page Content -->
```

## 参数

::field-group
  ::field{name="enable" type="boolean" default-value="false"}
  是否启用 Carbon Ads。
  ::
  ::field{name="disableInDev" type="boolean" default-value="false"}
  是否在开发环境中禁用 Carbon Ads。
  ::
  ::field{name="disableInMobile" type="boolean" default-value="false"}
  是否在移动设备上禁用 Carbon Ads。
  ::
  ::field{name="fallback" type="boolean" default-value="false"}
  当被广告拦截器阻止时是否显示后备消息
  ::
  ::field{name="fallbackMessage" type="string" default-value="'Please support us by disabling your ad blocker.'"}
  后备消息。
  ::
  ::field{name="code" type="string"}
  Carbon Ads 服务代码。
  ::
  ::field{name="placement" type="string"}
  Carbon Ads 位置。
  ::
  ::field{name="format" type="'cover' | 'responsive'" default-value="cover"}
  Carbon Ads 格式。
  ::
::
