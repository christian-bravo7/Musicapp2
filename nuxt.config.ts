import { Configuration } from '@nuxt/types';
import Locales from './lang';

require('dotenv').config();

const config: Configuration = {
  mode: 'spa',
  env: {
    authURL: process.env.AUTH_URL || 'https://example.com',
    apiURL: process.env.API_URL || 'https://example.com',
    clientID: process.env.CLIENT_ID || '0',
    clientSecret: process.env.CLIENT_SECRET || '0',
    redirectURL: process.env.REDIRECT_URL || 'http://localhost:3000',
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.APP_NAME || 'Musicapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  styleResources: {
    scss: [
      '~/assets/scss/global-resources.scss',
    ],
  },
  plugins: [
    { src: '@/plugins/axios' },
    { src: '@/plugins/initAPI' },
    { src: '@/plugins/markdown' },
    { src: '@/plugins/vueTyper' },
    { src: '@/plugins/persistStore', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    'nuxt-i18n',
  ],
  axios: {
    baseURL: `${process.env.apiURL}`,
  },
  i18n: {
    locales: Locales,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
    },
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    langDir: 'lang/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'en',
      preserveState: false,
    },
    vuex: {
      // Module namespace
      moduleName: 'i18nStore',
      // If enabled, current app's locale is synced with nuxt-i18n store module
      syncLocale: false,
      // If enabled, current translation messages are synced with nuxt-i18n store module
      syncMessages: false,
      // Mutation to commit to set route parameters translations
      syncRouteParams: true,
    },
  },
  typescript: {
    ignoreNotFoundWarnings: true,
    typeCheck: {
      eslint: true,
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  },
};

export default config;
