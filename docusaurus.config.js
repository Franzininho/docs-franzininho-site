import {themes as prismThemes} from 'prism-react-renderer';
require('dotenv').config();

const algoliaConfig = process.env.ALGOLIA_APP_ID
  ? {
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: true,
        searchParameters: {},
      },
    }
  : {};

module.exports = {
  title: 'Franzininho',
  tagline: 'Um ecossistema aberto para aprender, criar e evoluir em sistemas embarcados, IoT e inteligência artificial embarcada na prática.',
  url: 'https://docs.franzininho.com.br/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Franzininho',
  projectName: 'docs-franzininho-site',
  themeConfig: {
    image: 'img/logo.svg',
    metadata: [
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ],
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.github,
    },
    ...algoliaConfig,
    navbar: {
      title: 'Franzininho',
      logo: {
        alt: 'Logo do site',
        src: 'img/logo.svg',
        href: '/',
      },
      items: [
        {
          to: '/docs',
          activeBasePath: '/docs',
          label: 'Documentação',
          position: 'left',
        },
        {
          label: 'Ferramentas',
          position: 'right',
          items: [
            {
              label: 'Franzininho WiFi - Web EspTools',
              href: 'https://franzininho.github.io/franzininho-webesptools/',
            },
          ],
        },
        {
          label: 'Contato',
          position: 'right',
          items: [
            {
              label: 'Site',
              href: 'https://franzininho.com.br/',
            },
            {
              label: 'Contato',
              href: 'mailto:franzininho.suporte@gmail.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/H5kENmWGaz',
            },
            {
              label: 'Grupo no Facebook',
              href: 'https://www.facebook.com/groups/299236843857849/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/franzininho/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/franzininho/',
            }
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Franzininho DIY',
              to: 'docs/franzininho-diy/sobre',
            },
            {
              label: 'Franzininho WiFi',
              to: 'docs/franzininho-wifi/franzininho-wifi',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/H5kENmWGaz',
            },
            {
              label: 'Grupo no Facebook',
              href: 'https://www.facebook.com/groups/299236843857849/',
            },
          ],
        },
        {
          title: 'Redes Sociais',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/franzininho/',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/franzininho/',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCxyabOm4teS0kx0EgJW78_g',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Site',
              href: 'https://franzininho.com.br/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/franzininho',
            },
            {
              label: 'Contato',
              href: 'mailto:contato@franzininho.com.br',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Franzininho, Desenvolvido com Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Franzininho/docs-franzininho-site/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    localeConfigs: {
      'pt-BR': {
        label: 'Português (Brasil)',
      },
      en: {
        label: 'English',
      },
    },
  },
};
