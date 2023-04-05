// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AGI-Watcher',
  tagline: '',
  url: 'https://agi-watcher-ieikajycy-wyx-tree.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/yx_logo.ico',
  organizationName: 'thinkingjimmy',
  projectName: 'Learning-prompt.github.io',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    tailwindPlugin,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title:'AGI Watcher',
        logo: {
          alt: 'AGI Watcher logo',
          src: 'img/yx_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '👋 Welcome',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/blog',
            label: 'Version',
            position: 'left'
          },

          {
            href: 'https://github.com/thinkingjimmy/Learning-Prompt',
            label: 'GitHub',
            position: 'right',
          },

          {
            href: 'https://github.com/thinkingjimmy/Learning-Prompt',
            label: '🔥 提反馈',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust']
      },
    }),
};

module.exports = config;
