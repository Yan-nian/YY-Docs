export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: '二十五时的睡眠文档',
      description: '二十五时睡眠项目的官方文档站点，提供详细的使用指南和配置说明。',
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
      nav: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Docs',
          to: '/docs/getting-started/introduction'
        }
      ],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/Yan-nian/twenty-five-hour-sleep',
        target: '_blank',
      }],
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
      credits: 'Copyright © 2024 二十五时的睡眠',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/Yan-nian/twenty-five-hour-sleep',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/Yan-nian/twenty-five-hour-sleep',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/Yan-nian/twenty-five-hour-sleep/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});