module.exports = {
  title: 'Franzininho',
  tagline: 'O projeto Franzininho tem o objetivo de incentivar as pessoas na tecnologia através da cultura maker e do faça você mesmo.',
  url: 'https://franzininho.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Franzininho',
  projectName: 'docs-franzininho-site',
  themeConfig: {
    image: 'img/logo.svg',
    metadatas: [
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ],
    navbar: {
      title: 'Franzininho',
      logo: {
        alt: 'Logo do site',
        src: 'img/logo.svg',
        href: 'https://franzininho.com.br/',
      },
      items: [
        {
          to: '/docs',
          activeBasePath: '/docs',
          label: 'Documentação',
          position: 'left',
        },
                {
          href: 'https://franzininho.com.br/',
          label: 'Site',
          position: 'right',
        },
        {
          href: 'https://franzininho.com.br/blog/',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://franzininho.com.br/#contato',
          label: 'Contato',
          position: 'right',
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
