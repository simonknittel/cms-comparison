export default {
  target: 'static',

  head: {
    // title: 'Unopinionated comparison of ...',
    titleTemplate: '%s | Unopinionated comparison of ...',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  components: true,

  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      })
    }
  },

  router: {
    base: process.env.NODE_ENV === 'production' ? '/cms-comparison/' : '',
  },

  plugins: [
    { src: '@/plugins/v-hotkey.js', mode: 'client' },
    { src: '@/plugins/sessionStorage.js', mode: 'client' },
  ],

  buildModules: [
    '@nuxtjs/svg',
  ],
}
