module.exports = {
  title: 'Franzininho',
  tagline: 'Hardware, software e documentação abertos',
  url: 'https://franzininho.github.io.',
  baseUrl: '/docs-franzininho-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Franzininho', // Usually your GitHub org/user name.
  projectName: 'docs-franzininho-site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Franzininho',
      logo: {
        alt: 'Logo do site',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Placas',
          position: 'left',
        },
        /*{
          to: 'programacao/',
          activeBasePath: 'programacao',
          label: 'Programação',
          position: 'left',
        },*/
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Franzininho/docs-franzininho-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Placas',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Wikifactory',
              href: 'https://wikifactory.com/+franzininho',
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
              label: 'Fórum',
              href: 'https://wikifactory.com/+franzininho/forum',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
