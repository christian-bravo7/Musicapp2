import { Configuration } from '@nuxt/types';
require('dotenv').config();

const config: Configuration = {
  mode: 'universal',
  env: {
    apiURL: process.env.API_URL || 'https://example.com',
    clientID: process.env.CLIENT_ID || '0',
    clientSecret: process.env.CLIENT_SECRET || '0',
    redirectURL: process.env.REDIRECT_URL || 'http://localhost:3000',
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
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
        href: 'https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,400&display=swap',
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
    '@nuxtjs/proxy',
  ],
  serverMiddleware: [
    { path: 'login', handler: '@/server/middlewares/login' },
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: `${process.env.apiURL}`,
  },
  proxy: {
    '/authorize': {
      target: `${process.env.apiURL}`,
      changeOrigin: false,
      pathRewrite: { '^/authorize': '' },
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
};

export default config;
