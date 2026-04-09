import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Shepherd Guide',
  tagline: 'Documentation for Shepherd ChMS',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://guide.get-shepherd.net',
  baseUrl: '/',

  organizationName: 'bemybot26-coder',
  projectName: 'shepherd-guide',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Shepherd Help Center',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'shepherdSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://get-shepherd.net',
          label: 'Go to App →',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/intro'},
            {label: 'Setup', to: '/docs/setup/getting-started'},
            {label: 'Members', to: '/docs/members/overview'},
          ],
        },
        {
          title: 'Features',
          items: [
            {label: 'Groups & Cells', to: '/docs/groups/overview'},
            {label: 'Attendance', to: '/docs/attendance/tracking'},
            {label: 'Giving', to: '/docs/giving/overview'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Shepherd App', href: 'https://get-shepherd.net'},
            {label: 'Contact Support', href: 'mailto:support@get-shepherd.net'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shepherd ChMS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
