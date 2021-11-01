export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'letao-client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/vant",
    "~plugins/axios",
    "~plugins/axios/api"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
    prefix: "/api"
  },
  // 配置代理
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  server: {
    ip: "localhost", //ip/域名,
    port: "8080"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: "~/components/Loading.vue"
}
