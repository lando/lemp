const customTheme = require('@lando/vuepress-theme-default-plus');

module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando LEMP Plugin Documentation',
  base: '/lemp/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/lemp/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/lemp/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: customTheme({
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/lemp',
    sidebarHeader: {
      enabled: true,
      title: 'LEMP Plugin',
      icon: '/images/lampicon.png',
    },
    sidebar: [
      {
        text: 'Overview',
        link: '/index.html',
      },
      '/getting-started.html',
      '/config.html',
      '/tooling.html',
      '/support.html',
      {text: 'Examples', link: 'https://github.com/lando/lemp/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/lemp/releases'},
      '/development.html',
    ],
  }),
};
