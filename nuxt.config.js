export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bersihin Tech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'laundry,online,offline,onsite,subscription,delivery,bandung,standard,bersihin,tech,flutter,firebase,vue,nuxt,typescript,dart' },

      // Title
      { property: 'og:title', content: 'Bersihin Tech' },
      { name: 'twitter:title', content: 'Bersihin Tech' },
      { name: 'application-name', content: 'Bersihin Tech' },
      { name: 'apple-mobile-web-app-title', content: 'Bersihin Tech' },

      // Description
      { name: "description", content: "Introduce Bersihin technology team to the world by explain ourself, share what we done and what we learned, our event, also opportunity to work with us" },
      { property: 'og:description', content: 'Introduce Bersihin technology team to the world by explain ourself, share what we done and what we learned, our event, also opportunity to work with us' },
      { name: "twitter:description", content: "Introduce Bersihin technology team to the world by explain ourself, share what we done and what we learned, our event, also opportunity to work with us" },

      // Image
      { property: 'og:image', content: 'https://i.ibb.co/VWP7QbD/bersihintech-thumbnail.jpg' },
      { name: 'twitter:image', content: 'https://i.ibb.co/VWP7QbD/bersihintech-thumbnail.jpg' },

      // URL
      { rel: "canonical", href: "https://tech.bersihin.co" },
      { property: "og:url", content: "https://tech.bersihin.co" },
      { name: "twitter:url", content: "https://tech.bersihin.co" },

      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'bersihin' },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "@bersihin_tech" },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { async: true, src: 'https://splitbee.iwgx.workers.dev/sb.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-vite',
    'nuxt-windicss',
    'vue-notion/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dayjs'
  ],

  cloudinary: {
    cloudName: 'bersihin'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
