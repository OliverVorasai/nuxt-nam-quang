import colors from 'vuetify/es5/util/colors'
import i18n from './config/i18n'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/globalMixins'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
  ],

  i18n: {
    defaultLocale: 'en',
    vueI18n: i18n,
    seo: false,
    baseUrl: 'https://namquangtemple.org',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'vi',
        iso: 'vi-VN',
        name: 'Tiếng Việt',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: false,
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.orange.darken4,
          accent: colors.blueGrey.lighten4,
          secondary: colors.indigo.base,
          info: colors.orange.accent4,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          primaryOpposite: colors.orange.lighten4,
        },
        dark: {
          primary: colors.orange.lighten4,
          accent: colors.blueGrey.darken4,
          secondary: colors.indigo.base,
          info: colors.orange.darken4,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          primaryOpposite: colors.orange.darken4,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
  },
}
