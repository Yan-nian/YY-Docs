---
icon: lucide:triangle-alert
badges:
  - value: Docus
    to: https://docus.dev/api/components#alert
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Alert.vue
    target: _blank
---

## 使用方法

::stack
  ::div{class="p-4"}
  ::alert{icon="lucide:info"}
    这是一个**默认**提示，包含 `代码` 和 [链接](/)。
  ::

  ::alert{type="secondary" icon="lucide:info"}
    这是一个**次要**提示，包含 `代码` 和 [链接](/)。
  ::
  ::
  ```mdc
  ::alert{icon="lucide:info"}
    A **default** alert with `code` and a [link](/).
  ::

  ::alert{type="secondary" icon="lucide:info"}
    A **secondary** alert with `code` and a [link](/).
  ::
  ```
::

### 链接提示

::stack
  ::div{class="p-4"}
  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    这是一个**链接**提示。
  ::
  ::
  ```mdc
  ::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
    A **link** alert.
  ::
  ```
::

### 变体类型

::tabs{variant="line"}
  ::stack{label="info" icon="lucide:info"}
    ::div{class="p-3"}
    ::alert{type="info" icon="lucide:info"}
      这是一个**信息**提示，包含 `代码` 和 [链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="info" icon="lucide:info"}
      An **info** alert with `code` and a [link](/).
    ::
    ```
  ::

  ::stack{label="note" icon="lucide:pencil"}
    ::div{class="p-3"}
    ::alert{type="note" icon="lucide:pencil"}
      这是一个**注意**提示，包含 `代码` 和 [链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="note" icon="lucide:pencil"}
      A **note** alert with `code` and a [link](/).
    ::
    ```
  ::

  ::stack{label="success" icon="lucide:lightbulb"}
    ::div{class="p-3"}
    ::alert{type="success" icon="lucide:lightbulb"}
      这是一个**成功**提示，包含 `代码` 和 [链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="success" icon="lucide:lightbulb"}
      A **success** alert with `code` and a [link](/).
    ::
    ```
  ::

  ::stack{label="example" icon="lucide:test-tube"}
    ::div{class="p-3"}
    ::alert{type="example" icon="lucide:test-tube"}
      这是一个**示例**提示，包含 `代码` 和 [链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="example" icon="lucide:test-tube"}
      An **example** alert with `code` and a [link](/).
    ::
    ```
  ::

  ::stack{label="warning" icon="lucide:triangle-alert"}
    ::div{class="p-3"}
    ::alert{type="warning" icon="lucide:triangle-alert"}
      这是一个**警告**提示，包含 `代码` 和 [链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="warning" icon="lucide:triangle-alert"}
      A **warning** alert with `code` and a [link](/).
    ::
    ```
  ::

  ::stack{label="danger" icon="lucide:circle-x"}
    ::div{class="p-3"}
    ::alert{type="danger" icon="lucide:circle-x"}
      这是一个**危险**提示，包含 `代码` 和 [链接](/)。
    ::
    ::
    ```mdc
    ::alert{type="danger" icon="lucide:circle-x"}
      A **danger** alert with `code` and a [link](/).
    ::
    ```
  ::
::

### 标题

::stack
  ::div{class="p-4"}
  ::alert{title="标题" icon="lucide:layout-list"}
    这是一个带标题的提示。
  ::
  ::
  ```mdc
  ::alert{title="标题" icon="lucide:layout-list"}
    这是一个带标题的提示。
  ::
  ```
::

## 属性

::field-group
  :field{name="title" type="string"}[提示标题]
  :field{name="icon" type="string"}[提示图标]
  :field{name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'secondary'" default-value="'default'"}[提示类型]
  :field{name="to" type="string"}[链接地址]
  :field{name="target" type="Target"}[链接的 `target` 属性值]
  :field{name="external" type="boolean"}[`target='_blank'` 的别名]
  :field{name="showLinkIcon" type="boolean" default-value="true"}[是否显示链接指示器 :icon{name="lucide:arrow-up-right"}]
::
