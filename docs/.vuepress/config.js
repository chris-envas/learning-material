module.exports = {
  lang: 'zh-CN',
  title: '进击的学习笔记',
  description: '这是我的第一个 VuePress 站点',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  },
}