---
title: 手风琴
icon: lucide:layout-list
badges:
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Accordion.vue
    target: _blank
  - value: 0.5.0
---

## 使用方法

::stack
  ::div{class="p-4"}
    ::accordion{default-value="first-item" collapsible}
      ::accordion-item{value="first-item"}
      #title
      它是否可访问？

      #content
      是的。它遵循 WAI-ARIA 设计模式。
      ::
      ::accordion-item
      #title
      它是否无样式？

      #content
      是的。默认情况下它是无样式的，让您可以自由控制外观和感觉。
      ::
      :accordion-item{title="它可以动画吗？" content="可以！您可以使用 transition 属性来配置动画。"}
    ::
  ::
  ```mdc
  ::accordion{default-value="first-item" collapsible}
    ::accordion-item{value="first-item"}
    #title
    它是否可访问？

    #content
    是的。它遵循 WAI-ARIA 设计模式。
    ::

    ::accordion-item
    #title
    它是否无样式？

    #content
    是的。默认情况下它是无样式的，让您可以自由控制外观和感觉。
    ::
    :accordion-item{title="它可以动画吗？" content="可以！您可以使用 transition 属性来配置动画。"}
  ::
  ```
::

默认情况下，`::accordion-item`{lang="mdc"} 中的 `value` 属性是自动生成的。您可以将它们设置为其他_唯一_值，并将它们放在 `::accordion`{lang="mdc"} 的 `default-value` 属性中。

## 属性

#### `::accordion-item`{lang="mdc"}

::field-group
  :field{name="type" type="'single' | 'multiple'" default-value="'single'"}
  :field{name="collapsible" type="boolean" default-value="undefined"}[项目是否可以折叠]
  :field{name="defaultValue" type="string | string[]"}[默认打开的项目]
::

#### `::accordion`{lang="mdc"}

::field-group
  :field{name="value" type="string"}[项目值]
  :field{name="title" type="string"}[项目标题]
  :field{name="content" type="string"}[项目内容]
::
