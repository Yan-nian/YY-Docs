---
icon: lucide:sigma
title: 数学公式
description: 在 shadcn-docs-nuxt 中编写 LaTeX。
---

::tabs{variant="line"}
  ::div{label="KaTeX"}
    ::steps
      ### 安装插件
      :pm-install{name="remark-math rehype-katex" save-dev}

      ### 将插件添加到 Nuxt 配置
      ```ts [nuxt.config.ts]
      export default defineNuxtConfig({
        devtools: { enabled: true },
        extends: ['shadcn-docs-nuxt'],
        css: [
          'katex/dist/katex.min.css',
        ],
        content: {
          markdown: {
            remarkPlugins: [
              'remark-math',
            ],
            rehypePlugins: {
              'rehype-katex': {
                output: 'html',
              },
            },
          },
        },
      });
      ```

      ### 编写 LaTeX
      ````mdc
      #### 行内公式
      $E = mc^2$

      #### 居中公式
      当 $a \ne 0$ 时，$(ax^2 + bx + c = 0)$ 有两个解，它们是
      $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

      #### 数学块
      ```math
      L = \frac{1}{2} \rho v^2 S C_L
      ```
      ````
    ::
  ::
  ::div{label="MathJax"}
    ::steps
      ### 安装插件
      :pm-install{name="remark-math rehype-mathjax" save-dev}

      ### 将插件添加到 Nuxt 配置
      ```ts [nuxt.config.ts]
      export default defineNuxtConfig({
        devtools: { enabled: true },
        extends: ['shadcn-docs-nuxt'],
        content: {
          markdown: {
            remarkPlugins: [
              'remark-math',
            ],
            rehypePlugins: [
              'rehype-mathjax',
            ],
          },
        },
      });
      ```

      ### 编写 LaTeX
      ````mdc
      $E = mc^2$

      $$
      E = mc^2
      $$

      ```math
      E = mc^2
      ```
      ````
    ::
  ::
::
