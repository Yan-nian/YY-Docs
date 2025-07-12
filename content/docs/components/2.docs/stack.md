---
title: 堆叠
icon: lucide:rows-3
badges:
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Stack.vue
    target: _blank
  - value: 0.6.2
---

## 使用方法

::stack
  ::div{class="p-4 md:p-8"}
    ::stack
      ::div{class="p-6 text-3xl font-bold"}
      ✨ shadcn-docs-nuxt
      ::

      ```mdc
      ---
      title: 安装
      description: 如何在您的应用中安装 shadcn-docs-nuxt。
      icon: lucide:play
      ---

      ## 使用启动模板
      ```

      :pm-x{command="nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter"}

      :read-more{title="安装" to="/getting-started/installation"}

      ::card
      ---
      title: 组件
      icon: lucide:box
      ---
      查看 **shadcn-docs-nuxt** 提供的 MDC 组件。
      ::
    ::
  ::

  ```mdc
  ::stack
    ::div{class="p-6 text-3xl font-bold"}
    ✨ shadcn-docs-nuxt
    ::

    ```mdc
    ---
    title: 安装
    description: 如何在您的应用中安装 shadcn-docs-nuxt。
    icon: lucide:play
    ---

    ## 使用启动模板
    ```

    :pm-x{command="nuxi@latest init <project-name> -t github:ZTL-UwU/shadcn-docs-nuxt-starter"}

    :read-more{title="安装" to="/getting-started/installation"}

    ::card
    ---
    title: 组件
    icon: lucide:box
    ---
    查看 **shadcn-docs-nuxt** 提供的 MDC 组件。
    ::
  ::
  ```
::

可堆叠组件：

- `div`
- Code Blocks
- `alert`
- `callout`
- `read-more`
- `code-group`
- `code-tree`
- `card`
- `tabs`
- `pm-install`
- `pm-run`
- `pm-x`
