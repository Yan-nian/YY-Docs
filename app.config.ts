export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: '二十五时的睡眠文档',
      description: '二十五时睡眠项目的官方文档站点，提供详细的使用指南和配置说明。',
      // ogImage: '/logo.svg', // 注释掉静态 OG 图片，让 ogImageComponent 为所有页面生成动态图片
      ogImageComponent: 'ShadcnDocs',
      ogImageColor: 'light', // or 'dark'
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: '二十五时的睡眠',
      showTitle: true,
      darkModeToggle: true,
      languageSwitcher: {
        enable: false,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [{
        title: 'Docs',
        links: [{
          title: 'Getting Started',
          to: '/getting-started',
          description: '开始使用二十五时睡眠项目文档',
          icon: 'lucide:rocket',
        }, {
          title: 'Guide',
          to: '/guide',
          description: '详细的使用指南和最佳实践',
          icon: 'lucide:book-open',
        }, {
          title: 'API',
          to: '/docs/api',
          description: '探索配置选项和 API 接口',
          target: '_self',
          icon: 'lucide:code',
        }],
      }, {
        title: 'Resources',
        links: [{
          title: 'GitHub',
          to: 'https://github.com/Yan-nian/YY-Docs',
          description: '查看源代码和贡献项目',
          target: '_blank',
          icon: 'lucide:github',
        }, {
          title: 'Issues',
          to: 'https://github.com/Yan-nian/YY-Docs/issues',
          description: '报告问题或提出建议',
          target: '_blank',
          icon: 'lucide:bug',
        }],
      }],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/Yan-nian/YY-Docs',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
      folderStyle: true,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024 二十五时的睡眠',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/Yan-nian/YY-Docs',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/Yan-nian/YY-Docs',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/Yan-nian/YY-Docs/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});