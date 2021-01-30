module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - portfolio',
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: [
  //   '@/plugins/vuetify'
  // ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  // modules: [
  //   // https://go.nuxtjs.dev/pwa
  //   '@nuxtjs/pwa',
  //   '@nuxtjs/style-resources'
  // ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#e26610',
          secondary: '#db9501',
          accent: '#6e6702',
          background: '#3e5258',
          popAccent: '#7b8dee'
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // vendor: ['vuetify']
    transpile: ['vuex-module-decorators'],
    devtools: true
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  target: 'server',

  dev: process.env.NODE_ENV !== 'production',

  pwa: {
    icon: {
      source: './static/icon.png'
    }
  },

  plugins: [
    '~/plugins/logger.ts',
    '~/plugins/helpers.ts',
    '~/plugins/plugins-accessor.ts'
  ],

  router: {
    middleware: 'browserDebug'
  },

  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  }
}
