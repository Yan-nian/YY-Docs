---
title: 标签页
icon: lucide:table-2
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/tabs
    target: _blank
  - value: 源码
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Tabs.vue
    target: _blank
---

## 使用方法

::stack
  ::div{class="p-4"}
    ::tabs
      ::div{label="PostgreSQL" icon="lucide:database"}
      ### PostgreSQL 列类型

      ```ts
      import { integer, pgTable } from 'drizzle-orm/pg-core';

      export const table = pgTable('table', {
        int: integer('int')
      });
      ```
      ::
      ::div{label="MySQL"}
      ### MySQL 列类型

      ```ts
      import { int, mysqlTable } from 'drizzle-orm/mysql-core';

      const table = mysqlTable('table', {
        int: int('int')
      });
      ```
      ::
      ::div{label="SQLite"}
      ### SQLite 列类型

      ```ts
      import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

      const table = sqliteTable('table', {
        id: integer('id')
      });

      // 您可以自定义整数模式为 number、boolean、timestamp、timestamp_ms
      integer('id', { mode: 'number' });
      integer('id', { mode: 'boolean' });
      integer('id', { mode: 'timestamp_ms' });
      integer('id', { mode: 'timestamp' }); // Date
      ```
      ::
    ::
  ::
  ```mdc height=300
  ::tabs
    ::div{label="PostgreSQL" icon="lucide:database"}
    ### PostgreSQL 列类型

    ```ts
    import { integer, pgTable } from 'drizzle-orm/pg-core';

    export const table = pgTable('table', {
      int: integer('int')
    });
    ```
    ::
    ::div{label="MySQL"}
    ### MySQL 列类型

    ```ts
    import { int, mysqlTable } from 'drizzle-orm/mysql-core';

    const table = mysqlTable('table', {
      int: int('int')
    });
    ```
    ::
    ::div{label="SQLite"}
    ### SQLite 列类型

    ```ts
    import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

    const table = sqliteTable('table', {
      id: integer('id')
    });

    // 您可以自定义整数模式为 number、boolean、timestamp、timestamp_ms
    integer('id', { mode: 'number' });
    integer('id', { mode: 'boolean' });
    integer('id', { mode: 'timestamp_ms' });
    integer('id', { mode: 'timestamp' }); // Date
    ```
    ::
  ::
  ```
::

### 卡片样式

::stack
  ::div{class="p-4"}
    ::tabs{variant="card"}
      ::div{label="Card Tab"}
      ### 这是一个卡片样式的标签页
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      这是标签页 #2
      ::
      ```ts [代码标签页]
      console.log('Hello World!');
      ```
    ::
  ::
  ```mdc
  ::tabs{variant="card"}
    ::div{label="Card Tab"}
    ### 这是一个卡片样式的标签页
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    这是标签页 #2
    ::
    ```ts [代码标签页]
    console.log('Hello World!');
    ```
  ::
  ```
::

### 线条样式
:badge[0.6.4]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="line"}
      ::div{label="预览" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-xs"}
        :badge[Badge]
      ::
      ::div{label="代码"}
        ```tsx
        import { Badge } from "@/components/ui/badge"

        export function BadgeDemo() {
          return <Badge>Badge</Badge>
        }
        ```
      ::
    ::
  ::
  ```mdc
  ::tabs{variant="line"}
    ::div{label="预览" class="border flex min-h-[200px] w-full justify-center p-10 items-center rounded-lg shadow-xs"}
      :badge[Badge]
    ::
    ::div{label="代码"}
      ```tsx
      import { Badge } from "@/components/ui/badge"

      export function BadgeDemo() {
        return <Badge>Badge</Badge>
      }
      ```
    ::
  ::
  ```
::

### 组合框样式
:badge[0.7.5]{variant="outline"}

::stack
  ::div{class="p-4"}
    ::tabs{variant="combobox" search-placeholder="搜索数据库..." search-empty="未找到数据库。"}
      ::div{label="PostgreSQL"}
      ### PostgreSQL 列类型

      ```ts
      import { integer, pgTable } from 'drizzle-orm/pg-core';

      export const table = pgTable('table', {
        int: integer('int')
      });
      ```
      ::
      ::div{label="MySQL"}
      ### MySQL 列类型

      ```ts
      import { int, mysqlTable } from 'drizzle-orm/mysql-core';

      const table = mysqlTable('table', {
        int: int('int')
      });
      ```
      ::
      ::div{label="SQLite"}
      ### SQLite 列类型

      ```ts
      import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

      const table = sqliteTable('table', {
        id: integer('id')
      });

      // 您可以自定义整数模式为 number、boolean、timestamp、timestamp_ms
      integer('id', { mode: 'number' });
      integer('id', { mode: 'boolean' });
      integer('id', { mode: 'timestamp_ms' });
      integer('id', { mode: 'timestamp' }); // Date
      ```
      ::
    ::
  ::
  ```mdc height=300
  ::tabs{variant="combobox" search-placeholder="搜索数据库..." search-empty="未找到数据库。"}
    ::div{label="PostgreSQL"}
    ### PostgreSQL 列类型

    ```ts
    import { integer, pgTable } from 'drizzle-orm/pg-core';

    export const table = pgTable('table', {
      int: integer('int')
    });
    ```
    ::
    ::div{label="MySQL"}
    ### MySQL 列类型

    ```ts
    import { int, mysqlTable } from 'drizzle-orm/mysql-core';

    const table = mysqlTable('table', {
      int: int('int')
    });
    ```
    ::
    ::div{label="SQLite"}
    ### SQLite 列类型

    ```ts
    import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

    const table = sqliteTable('table', {
      id: integer('id')
    });

    // 您可以自定义整数模式为 number、boolean、timestamp、timestamp_ms
    integer('id', { mode: 'number' });
    integer('id', { mode: 'boolean' });
    integer('id', { mode: 'timestamp_ms' });
    integer('id', { mode: 'timestamp' }); // Date
    ```
    ::
  ::
  ```
::

### 同步标签页
:badge[0.8.0]{variant="outline"}

:read-more{to="/components/docs/pm"}

::stack
  ::div{class="p-4 md:p-8"}
    #### Scope 1
    ::tabs{variant="card" sync="your-scope-name"}
      ::div{label="Card Tab"}
      ### 这是一个卡片样式的标签页
      ::
      ```ts [代码标签页]
      console.log('Hello World!');
      ```
    ::
    ::tabs{variant="card" sync="your-scope-name"}
      ::div{label="Card Tab"}
      ### 这是一个卡片样式的标签页
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      这是标签页 #2
      ::
      ```ts [代码标签页]
      console.log('Hello World!');
      ```
    ::

    #### Scope 2
    ::tabs{variant="line" sync="scope2"}
      ::div{label="Card Tab"}
      ### 这是一个卡片样式的标签页
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      这是标签页 #2
      ::
      ```ts [代码标签页]
      console.log('Hello World!');
      ```
    ::
    ::tabs{variant="separate" sync="scope2"}
      ::div{label="Card Tab"}
      ### 这是一个卡片样式的标签页
      ::
      ::div{label="Tab 2" icon="lucide:atom"}
      这是标签页 #2
      ::
      ```ts [代码标签页]
      console.log('Hello World!');
      ```
    ::
  ::
  ```mdc height=400
  #### Scope 1
  ::tabs{variant="card" sync="your-scope-name"}
    ::div{label="Card Tab"}
    ### 这是一个卡片样式的标签页
    ::
    ```ts [代码标签页]
    console.log('Hello World!');
    ```
  ::
  ::tabs{variant="card" sync="your-scope-name"}
    ::div{label="Card Tab"}
    ### 这是一个卡片样式的标签页
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    这是标签页 #2
    ::
    ```ts [代码标签页]
    console.log('Hello World!');
    ```
  ::

  #### Scope 2
  ::tabs{variant="line" sync="scope2"}
    ::div{label="Card Tab"}
    ### This is a card-style tab
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    这是标签页 #2
    ::
    ```ts [代码标签页]
    console.log('Hello World!');
    ```
  ::
  ::tabs{variant="separate" sync="scope2"}
    ::div{label="Card Tab"}
    ### This is a card-style tab
    ::
    ::div{label="Tab 2" icon="lucide:atom"}
    这是标签页 #2
    ::
    ```ts [代码标签页]
    console.log('Hello World!');
    ```
  ::
  ```
::

## 属性

::field-group
  :field{name="variant" type="'separate' | 'card' | 'line' | 'combobox'" default-value="'separate'"}
  :field{name="padded" type="boolean" default-value="true"}
  :field{name="disableSearch" type="boolean" default-value="false"}[用于组合框变体]
  :field{name="searchPlaceholder" type="string" default-value="'Search Tab...'"}[用于组合框变体]
  :field{name="searchEmpty" type="string" default-value="'No tab found.'"}[用于组合框变体]
  :field{name="sync" type="string"}[同步范围]
::
