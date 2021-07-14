module.exports = {
  title: 'Franzininho',
  tagline: 'Aqui você encontra toda documentação do projeto',
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
    /*  {
          to: 'tutoriais/',
          activeBasePath: 'tutoriais',
          label: 'Tutoriais',
          position: 'left',
        },
        {
         label: "Tutoriais",
         position: "left",
         items: [
           { label: "Montagem Franzininho DIY", to: "docs/documenting/standards" },
           { label: "Programação Franzininho DIY Arduino", to: "docs/documenting/yaml-style-guide"},
           { label: "Create a new page", to: "docs/documenting/create-page",
           },
         ],
       },*/
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
